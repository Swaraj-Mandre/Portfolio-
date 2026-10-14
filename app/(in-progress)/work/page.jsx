import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/app/_components/page-shell';
import { projects } from '@/app/_data/portfolio';
export const metadata={title:'Work',description:'AI systems, research, and interface design by Swaraj Mandre.'};
export default function Work(){return <PageShell title='Selected work' eyebrow='AI / Research / Design'><p className='case-lead'>Seven projects. Different problems, connected by a habit of building and checking.</p><div className='work-grid'>{projects.map(p=><Link href={'/work/'+p.slug} key={p.slug} className='work-card'><div className='work-image'><Image src={p.image} alt={p.imageAlt} fill unoptimized sizes='(max-width:768px) 100vw, 50vw' className='object-contain'/></div><div className='work-card-title'><h2>{p.title}</h2><span aria-hidden='true'>↗</span></div><p>{p.category}</p></Link>)}</div></PageShell>;}
