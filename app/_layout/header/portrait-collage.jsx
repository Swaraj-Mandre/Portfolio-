'use client';

import { useEffect, useRef } from 'react';
import styles from './portrait-collage.module.css';

const words = 'AI ENGINEER   ✦   RESEARCH & DESIGN   ✦   SWARAJ MANDRE   ✦   ';

// Project one stationary, concave cylinder. Only its printed surface moves.
// This keeps the centre recessed and enlarges letters toward both edges.
function ConcaveLettering({ running }) {
  const canvasRef = useRef(null);
  const phaseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const texture = document.createElement('canvas');
    const ink = texture.getContext('2d');
    const font = '900 132px "Arial Black", Arial, sans-serif';
    ink.font = font;
    const metrics = ink.measureText(words);
    const period = Math.ceil(metrics.width);
    texture.width = period * 2;
    texture.height = 180;
    ink.font = font;
    ink.fillStyle = '#eeede7';
    ink.textBaseline = 'alphabetic';
    ink.fillText(words, 0, 146);
    ink.fillText(words, period, 146);

    let width = 0;
    let height = 0;
    let columns = [];
    let frame;
    let previous = 0;
    const angle = 1.22;
    const distance = 1.8;
    const projection = theta => Math.sin(theta) / (distance - 1 + Math.cos(theta));
    const edge = projection(angle);

    function draw() {
      context.clearRect(0, 0, width, height);
      for (const column of columns) {
        const source = (phaseRef.current + column.source) % period;
        context.drawImage(texture, source, 0, column.span, 180,
          column.x, column.top, column.width, column.height);
      }
    }

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.imageSmoothingEnabled = true;
      const scale = height * .12 / metrics.actualBoundingBoxAscent;
      const pixelsPerRadian = width / (2 * edge * distance * scale * 1.25);
      const thetaAt = x => {
        const target = (x / width * 2 - 1) * edge;
        let low = -angle;
        let high = angle;
        for (let i = 0; i < 18; i++) {
          const middle = (low + high) / 2;
          if (projection(middle) < target) low = middle;
          else high = middle;
        }
        return (low + high) / 2;
      };
      columns = [];
      for (let x = 0; x < width; x += 2) {
        const next = Math.min(x + 2, width);
        const theta = thetaAt(x);
        const nextTheta = thetaAt(next);
        const magnification = distance / (distance - 1 + Math.cos((theta + nextTheta) / 2));
        const size = scale * magnification;
        const baseline = height * (.81 - .21 * magnification);
        columns.push({
          x, width: next - x + .15,
          source: (theta + angle) * pixelsPerRadian,
          span: (nextTheta - theta) * pixelsPerRadian,
          top: baseline - 146 * size,
          height: 180 * size,
        });
      }
      draw();
    }

    function animate(time) {
      if (time - previous >= 1000 / 30) {
        if (previous) phaseRef.current = (phaseRef.current + Math.min(time - previous, 80) * .28) % period;
        previous = time;
        draw();
      }
      frame = requestAnimationFrame(animate);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    if (running) frame = requestAnimationFrame(animate);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [running]);

  return <canvas ref={canvasRef} className={styles.lettering} aria-hidden='true' />;
}

export function PortraitCollage({ running }) {
  return (
    <div className={styles.slot}>
      <figure className={styles.collage} aria-label='Swaraj Mandre, portrait on a torn-paper collage'>
        <img className={styles.paper} src='/images/hero-paper/torn-black-paper-v2.webp' alt='' />
        <ConcaveLettering running={running} />
        <svg className={styles.portrait} viewBox='0 0 1000 810' role='img' aria-label='Swaraj Mandre in a grey suit and red tie'>
          <path fill='#ee0033' d='M-20 1020 -15 800 0 745 45 680 192 632 294 593 343 558 320 510 295 457 277 414 274 374 269 337 250 307 252 265 250 228 272 183 274 143 300 111 354 89 395 62 454 50 487 34 524 48 554 65 598 94 638 123 668 161 692 207 696 260 695 309 684 351 684 395 677 449 659 492 628 541 632 566 677 602 783 636 935 685 993 744 1015 800 1018 1020Z' />
          <image href='/images/hero-paper/swaraj-photo-cutout.webp' width='1000' height='1000' />
        </svg>
        <img className={styles.lowerFibres} src='/images/hero-paper/torn-black-paper-v2.webp' alt='' />
      </figure>
    </div>
  );
}
