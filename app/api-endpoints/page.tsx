import type { Metadata } from 'next';
import APIEndpointsPage from '@/components/pages/api-endpoints-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'API Endpoints Reference - HiAnime API',
  description: 'Complete reference for all 34 HiAnime API endpoints including home, search, filter, anime info, episodes, streaming, and more.',
  path: '/api-endpoints',
  image: '/meta-api-endpoints.jpeg', // Falls back to meta.jpeg if this file doesn't exist
});

export default function Page() {
  return <APIEndpointsPage />;
}

