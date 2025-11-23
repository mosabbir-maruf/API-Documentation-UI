import type { Metadata } from 'next';
import DeploymentPage from '@/components/pages/deployment-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Deployment Guide - HiAnime API',
  description: 'Deploy HiAnime API on Render, Cloudflare Workers, or Vercel. Complete step-by-step deployment guide with configuration examples.',
  path: '/deployment',
  image: '/meta-deployment.jpeg', // Falls back to meta.jpeg if this file doesn't exist
});

export default function Page() {
  return <DeploymentPage />;
}

