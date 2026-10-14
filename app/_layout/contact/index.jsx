'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo, UserDetails } from './components';
import { LightDial } from '@/app/_components/light-dial';

export function Contact() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX, transformY } = useContactSlider(containerRef);

  return (
    <motion.footer
      ref={containerRef}
      className='portfolio-footer relative bg-foreground text-background'
      style={{ y: transformY }}
    >
      <div style={{ paddingBlock: 'clamp(5em, 21vh, 12em)' }}>
        <UserDetails transformX={transformX} />
        <SocialInfo />
        <LightDial />
      </div>
    </motion.footer>
  );
}
