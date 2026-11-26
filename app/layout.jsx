import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { Offcanvas } from '@/layout';
import { Providers } from '@/providers';
import { themeBootstrap, inkKeyframes } from './_layout/navbar/ink-theme';
import './globals.css';

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <style>{inkKeyframes}</style>
      </head>
      <body className={neue_montreal.className}>
        <Providers>
          <Offcanvas />
          {children}
        </Providers>
      </body>
    </html>
  );
}
