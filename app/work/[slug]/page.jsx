import { ProjectShowcase } from '@/app/_components/vidhya-product-film';
import { NextProject } from '@/app/_components/next-project';
import showcases from '@/app/_data/project-showcases.json';
import { notFound } from 'next/navigation';
import { PageShell } from '@/app/_components/page-shell';
import { projects } from '@/app/_data/portfolio';

export function generateStaticParams() { return projects.map(({slug})=>({slug})); }
export function generateMetadata({params}) { const p=projects.find(p=>p.slug===params.slug);return {title:p?.title || 'Project',description:p?.summary}; }
export default function ProjectPage({params}) {
  const p=projects.find(p=>p.slug===params.slug); if(!p)notFound();
  return <PageShell title={p.title} eyebrow={p.status} className='vidhya-page' afterContent={<NextProject key={p.slug} currentSlug={p.slug} />}><ProjectShowcase key={p.slug} project={p} story={showcases[p.slug]}/></PageShell>;
}
