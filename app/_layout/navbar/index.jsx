'use client';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';
import { InkThemeToggle } from './ink-theme-toggle';

export function Navbar() {
  return (
    <nav className='absolute inset-x-0 top-0 z-10'>
      <div className='flex items-center justify-between portfolio-nav px-8 py-4'>
        <NavbarBrand />
        <div className='nav-actions'>
          <InkThemeToggle />
          <NavbarList />
        </div>
      </div>
    </nav>
  );
}
