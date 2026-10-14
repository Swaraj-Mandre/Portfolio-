import Link from 'next/link';
import { Contact, Navbar, Transition } from '@/layout';

export function PageShell({ title, eyebrow, children, afterContent, className = '' }) {
  return <Transition label={title}><div className='inner-nav'><Navbar /></div><main className={`case-page container ${className}`}><Link href='/' className='back-link'>← Home</Link><p className='case-eyebrow'>{eyebrow}</p><h1>{title}</h1>{children}</main>{afterContent}<Contact /></Transition>;
}
