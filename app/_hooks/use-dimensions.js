'use client';

import { useEffect, useState } from 'react';

/** Keep geometry reactive so fixed-label route transitions render on mount. */
export function useDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const measure = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return dimensions;
}
