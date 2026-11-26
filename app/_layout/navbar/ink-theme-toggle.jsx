'use client';

import { useEffect, useRef, useState } from 'react';

const maskPath = '/images/ink-bleed.webp';

export function InkThemeToggle() {
  const busy = useRef(false);
  const mask = useRef(null);
  const [green, setGreen] = useState(false);

  useEffect(() => {
    setGreen(document.documentElement.dataset.inkTheme === 'green');
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      mask.current = new Image();
      mask.current.src = maskPath;
    }
  }, []);

  async function switchTheme(event) {
    if (busy.current) return;
    const button = event.currentTarget;
    const root = document.documentElement;
    const next = root.dataset.inkTheme === 'green' ? 'cream' : 'green';
    function apply() {
      root.dataset.inkTheme = next;
      setGreen(next === 'green');
      try { localStorage.setItem('swaraj-ink-theme', next); } catch {}
    }
    if (!document.startViewTransition || !mask.current || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      apply();
      return;
    }

    busy.current = true;
    try {
      await mask.current.decode();
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const dx = window.innerWidth - x;
      const dy = window.innerHeight - y;
      // Each tile has its ink drop at (400, 60) within a 640 by 480 frame.
      const scale = Math.max(Math.hypot(Math.max(x, dx), Math.max(y, dy)) / 400, dx / 240, y / 60) * 1.01;
      const geometry = {
        '--ink-left': x - 400 * scale, '--ink-top': y - 60 * scale,
        '--ink-width': 640 * scale, '--ink-height': 480 * scale,
      };
      for (const [name, value] of Object.entries(geometry)) root.style.setProperty(name, value + 'px');
      root.dataset.inkBleeding = '';
      await document.startViewTransition(apply).finished;
    } catch {
      apply();
    } finally {
      delete root.dataset.inkBleeding;
      for (const name of ['left', 'top', 'width', 'height']) root.style.removeProperty('--ink-' + name);
      busy.current = false;
    }
  }

  return (
    <button type='button' className='ink-theme-toggle' aria-label='Deep green theme'
      aria-pressed={green} title={green ? 'Switch to cream' : 'Switch to deep green'} onClick={switchTheme}>
      <svg viewBox='0 0 24 24' width='21' height='21' aria-hidden='true'>
        <path d='M12 2.8C10.4 5.5 5.1 10.6 5.1 14.5a6.9 6.9 0 0 0 13.8 0C18.9 10.6 13.6 5.5 12 2.8Z'
          fill='none' stroke='currentColor' strokeWidth='1.5' strokeLinejoin='round' />
        <path d='M12 5v15a5.6 5.6 0 0 0 5.5-5.5C17.5 11.6 14.1 7.9 12 5Z' fill='currentColor' />
      </svg>
    </button>
  );
}
