import type { Metadata } from 'next';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { defaultOgImage } from '@/lib/metadata';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'HiAnime API Documentation',
    template: '%s | HiAnime API',
  },
  description:
    'Complete API documentation for HiAnime - A powerful RESTful API for anime streaming with episodes and streaming links',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'HiAnime API Documentation',
    description: 'A powerful RESTful API for anime streaming',
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'HiAnime API Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HiAnime API Documentation',
    description: 'A powerful RESTful API for anime streaming',
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>{children}</body>
    </html>
  );
}

