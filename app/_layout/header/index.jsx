'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import styles from './paper-hero.module.css';

// Single-line letters make the name write itself rather than fade in as a block.
const signature = [
  ['S', 0, 'M18 8 C9 -1 -1 8 5 16 C9 20 23 20 20 30 C17 41 1 38 0 31'],
  ['w', 24, 'M1 20 Q-2 43 7 35 L13 22 Q8 44 19 35 L26 19'],
  ['a', 53, 'M17 23 C5 14 -3 34 4 37 Q11 40 17 22 L15 36 Q16 40 21 34'],
  ['r', 77, 'M1 38 L5 19 L4 29 Q13 12 18 22'],
  ['a', 96, 'M17 22 C4 15 -3 34 4 37 Q12 40 17 22 L15 36 Q17 40 22 34'],
  ['j', 121, 'M11 20 L5 47 Q1 59 -4 49 Q-7 43 7 39 M13 10 L13.5 9'],
  ['M', 149, 'M0 38 L7 5 Q9 3 10 11 L13 32 L26 5 Q28 2 27 11 L23 38'],
  ['a', 180, 'M17 22 C5 15 -3 34 4 37 Q12 39 17 22 L15 36 Q17 40 22 34'],
  ['n', 205, 'M0 38 L4 19 L2 31 Q18 10 17 24 L14 35 Q14 39 20 34'],
  ['d', 229, 'M18 23 C4 14 -3 34 4 37 Q12 40 18 24 L25 0 Q29 -4 26 7 L18 36 Q20 40 25 34'],
  ['r', 257, 'M1 38 L5 19 L4 29 Q13 12 18 22'],
  ['e', 278, 'M2 29 Q24 27 16 20 Q8 15 2 29 Q-1 43 19 34'],
];

// Every letter shares a clock so the full name clears together between loops.
const writingKeyframes = signature.map((_, index) => `
  @keyframes paper-hero-write-${index} {
    0%, ${1 + index * 2.2}% { stroke-dashoffset: 1; opacity: 1; }
    ${5 + index * 2.2}%, 78% { stroke-dashoffset: 0; opacity: 1; }
    80%, 100% { stroke-dashoffset: 0; opacity: 0; }
  }
`).join('');

export function Header() {
  const hero = useRef(null);
  const visible = useInView(hero);
  const reducedMotion = useReducedMotion();

  return (
    <header
      ref={hero}
      className={styles.hero}
      data-motion={visible && !reducedMotion ? 'running' : 'paused'}
      aria-labelledby='paper-hero-title'
    >
      <motion.div
        className={styles.composition}
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 id='paper-hero-title' className={styles.accessibleTitle}>
          Swaraj Mandre | AI, research and design portfolio
        </h1>
        <svg className={styles.titleArtwork} viewBox='0 0 1240 255' aria-hidden='true'>
          <text x='1' y='63' className={styles.descriptor}>AI ENGINEER / RESEARCH &amp; DESIGN</text>
          <text x='1170' y='63' textAnchor='middle' className={styles.year}>2026</text>
          <g className={styles.lettering}>
            <text x='0' y='195' textLength='706' lengthAdjust='spacingAndGlyphs'>PORTF</text>
            <text x='923' y='195' textLength='317' lengthAdjust='spacingAndGlyphs'>LIO</text>
          </g>
          <svg x='699' y='-10' width='248' height='248' viewBox='0 0 887 887' overflow='hidden' className={styles.face}>
            <defs>
              <clipPath id='paper-hero-eye-openings'>
                <path d='M310 482 Q366 427 431 479 Q375 515 310 482Z M541 474 Q594 421 656 470 Q601 509 541 474Z' />
              </clipPath>
            </defs>
            <g className={styles.openEyes}>
              <image href='/images/hero-paper/swaraj-ink-eyes.webp' width='1774' height='887' />
              <g clipPath='url(#paper-hero-eye-openings)'>
                <g className={styles.pupils} fill='#101111' fillRule='evenodd'>
                  <path d='M401 479 a27 30 0 1 1 -54 0 a27 30 0 1 1 54 0Z M365 465 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0Z' />
                  <path d='M626 474 a27 30 0 1 1 -54 0 a27 30 0 1 1 54 0Z M590 460 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0Z' />
                </g>
              </g>
            </g>
            <image className={styles.closedEyes} href='/images/hero-paper/swaraj-ink-eyes.webp' x='-849' width='1774' height='887' />
          </svg>
        </svg>
        <svg className={styles.signature} viewBox='0 0 380 150' role='img' aria-label='Swaraj Mandre, handwritten'>
          <style>{writingKeyframes}</style>
          <path className={styles.arrow} d='M56 91 C20 98 20 48 26 8 M16 23 L27 7 L32 25' />
          <g className={styles.handwriting} transform='translate(70 69) rotate(-5)'>
            {signature.map(([letter, x, d], index) => (
              <path key={`${letter}-${index}`} d={d} pathLength='1' transform={`translate(${x} 0)`} style={{ animationName: `paper-hero-write-${index}` }} />
            ))}
          </g>
        </svg>
        <svg className={styles.ornaments} viewBox='0 0 192 62' aria-hidden='true'>
          <path d='M31 1 Q33 18 42 13 L53 8 Q44 23 54 26 L62 31 Q45 33 49 43 L54 54 Q39 44 35 54 L31 62 Q28 45 19 49 L8 54 Q18 39 8 35 L0 31 Q17 28 13 19 L8 8 Q23 18 27 8Z' />
          <path d='M94 0 Q99 25 125 31 Q99 37 94 62 Q88 37 63 31 Q88 25 94 0Z' />
          <path d='M159 30 C127 5 163 -12 165 11 C168 -13 191 4 187 17 Q185 27 167 32 C202 28 199 61 179 56 Q169 54 164 35 C172 65 141 70 140 49 Q139 37 159 30Z' />
        </svg>
      </motion.div>
    </header>
  );
}
