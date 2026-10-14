'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/app/_data/portfolio';

const storageKey = 'swaraj-explored-projects';
export function NextProject({ currentSlug }) {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  const ordered = [...projects.slice(currentIndex + 1), ...projects.slice(0, currentIndex)];
  const [selection, setSelection] = useState({ project: ordered[0], unseen: true });
  useEffect(() => {
    let visited = [];
    try {
      const saved = JSON.parse(sessionStorage.getItem(storageKey) || '[]');
      if (Array.isArray(saved)) visited = saved;
    } catch { /* Navigation also works when browser storage is unavailable. */ }
    const explored = new Set([...visited, currentSlug]);
    const unseen = ordered.find(project => !explored.has(project.slug));
    setSelection({ project: unseen || ordered[0], unseen: Boolean(unseen) });
    try { sessionStorage.setItem(storageKey, JSON.stringify([...explored])); } catch { /* Storage is optional. */ }
    // The order is derived entirely from the current route.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlug]);
  const next = selection.project;
  return <section className='next-case' aria-label='Continue exploring'>
    <Link className='next-case-link' href={`/work/${next.slug}`}>
      <p className='next-case-label'>{selection.unseen ? 'Next case · not explored this visit' : 'Revisit a project'}</p>
      <h2>{next.title}</h2>
      <div className='next-case-pocket' aria-hidden='true'><div className='next-case-card'><Image src={next.image} alt='' width={900} height={600} unoptimized /></div></div>
      <span className='next-case-button'>Next case ↗</span>
    </Link>
    <Link className='all-work-link' href='/work'>All work <sup>{projects.length}</sup></Link>
  </section>;
}
