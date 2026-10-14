'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data';

export function NavbarList() {
  const pathname = usePathname();
  const items = navItems.slice(1).map(({ href, title }) => {
    const active = pathname === href || pathname.startsWith(`${href}/`);
    return (
      <li key={href}>
        <Link href={href} aria-current={active ? 'page' : undefined}>
          <span>{title}</span>
        </Link>
      </li>
    );
  });

  return <ul className='ruler-navigation max-lg:hidden' aria-label='Page navigation'>{items}</ul>;
}
