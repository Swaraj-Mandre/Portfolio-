'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { useLenis, useTimeOut } from '@/hooks';

import { Preloader } from './preloader';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children, label }) {
  const pathname = usePathname();
  return <RouteTransition key={pathname} label={label}>{children}</RouteTransition>;
}

function RouteTransition({ children, label }) {
  const [isLoading, setLoading] = useState(true);

  useLenis();
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: label ? 1400 : 2000,
    deps: [],
  });

  return (
    <div className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader label={label} /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
