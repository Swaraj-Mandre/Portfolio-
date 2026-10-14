'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/app/_data/portfolio';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='portfolio-hero relative h-screen overflow-hidden'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src={profile.portrait}
        priority
        unoptimized
        className='object-cover md:scale-125 md:object-contain'
        fill={true}
        sizes='100vw'
        alt='Swaraj Mandre portrait'
      />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 aria-label='Swaraj Mandre' className='text-[max(9em,15vw)]'>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Swaraj Mandre
                <span className='spacer'> / </span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>AI &amp; Machine Learning</span>
              <span className='block'>Research &amp; Development</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
