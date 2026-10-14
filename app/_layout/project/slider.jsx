'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Center } from '@/components';
export function ProjectSlider({source,title,href}) {
  return <Center className='relative w-1/4 rounded bg-secondary' style={{minWidth:'150px',height:'20vw'}}><Link href={href} className='relative block h-full w-full'><Image src={source} alt={title} fill unoptimized sizes='30vw' className='object-contain p-4'/><span className='strip-label'>{title}</span></Link></Center>;
}
