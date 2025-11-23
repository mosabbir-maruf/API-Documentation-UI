import type { Metadata } from 'next';
import EnvironmentVariablesPage from '@/components/pages/environment-variables-page';
import { buildPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Environment Variables - HiAnime API',
  description: 'Configure your HiAnime API backend and documentation frontend with environment variables for optimal performance and security.',
  path: '/environment-variables',
  image: '/meta-environment-variables.jpeg', // Falls back to meta.jpeg if this file doesn't exist
});

export default function Page() {
  return <EnvironmentVariablesPage />;
}

