// Apply the saved palette before the first paint, including on direct project links.
export const themeBootstrap = `try {
  var saved = localStorage.getItem('swaraj-ink-theme');
  var hour = localStorage.getItem('swaraj-light-hour');
  var night = hour !== null && +hour >= 0 && +hour <= 23 && (+hour <= 5 || +hour >= 20);
  document.documentElement.dataset.inkTheme = (saved === 'green' || (saved === null && night)) ? 'green' : 'cream';
} catch {}`;

// The mask contains 48 frames baked from Codemure's ink field in eight columns.
export const inkKeyframes = '@keyframes ink-spread {' + Array.from({ length: 48 }, (_, i) =>
  `${i * 100 / 47}% {mask-position:calc(var(--ink-left) - var(--ink-width) * ${i % 8}) calc(var(--ink-top) - var(--ink-height) * ${Math.floor(i / 8)});}`
).join('') + '}';
