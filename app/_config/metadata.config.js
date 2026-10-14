const title = 'Swaraj Mandre | AI, Research & Design';
const description = 'Local language models, document retrieval, offline learning, and interface design. Explore the work of Swaraj Mandre.';

export const rootMetadata = {
  metadataBase: new URL('https://swaraj-mandre-portfolio.pages.dev'),
  title: { template: '%s | Swaraj Mandre', default: title },
  description,
  authors: [{ name: 'Swaraj Mandre' }],
  creator: 'Swaraj Mandre',
  robots: { index: true, follow: true },
  openGraph: { title, description, type: 'website', siteName: 'Swaraj Mandre', images: [{ url: '/images/portrait.png', alt: 'Swaraj Mandre' }] },
  twitter: { card: 'summary', title, description, images: ['/images/portrait.png'] },
};
