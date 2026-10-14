import { PageShell } from '@/app/_components/page-shell';
import { profile } from '@/app/_data/portfolio';
export const metadata={title:'Contact',description:'Get in touch with Swaraj Mandre.'};
export default function ContactPage(){return <PageShell title="Let's build something useful." eyebrow='Get in touch'><p className='case-lead'>For AI engineering opportunities, research conversations, or project collaboration.</p><div className='contact-links'><a href={'mailto:'+profile.email}>{profile.email} ↗</a><a href={profile.linkedin} target='_blank' rel='noreferrer'>LinkedIn ↗</a><a href={profile.github} target='_blank' rel='noreferrer'>GitHub ↗</a><p>Pune, India</p></div></PageShell>;}
