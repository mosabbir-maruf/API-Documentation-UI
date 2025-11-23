'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Book,
  Home,
  Search,
  Film,
  PlayCircle,
  Server,
  Code2,
  Zap,
  Shield,
  Database,
  Clock,
  ArrowRight,
  ExternalLink,
  User,
  Filter,
  ChevronRight,
  ChevronDown,
  Globe,
  TestTube,
  FileCode,
  Rocket,
  Settings,
} from 'lucide-react';

import { Pattern } from '@/components/ui/pattern';
import { OnThisPageNav } from '@/components/privacy/on-this-page-nav';
import { CodeBlock } from '@/components/ui/code-block';
import { siteConfig } from '@/config/site';
import { MobileDrawer } from '@/components/ui/mobile-drawer';
import { MobileHeader } from '@/components/ui/mobile-header';
import { SupportButton } from '@/components/ui/support-button';
import { endpoints } from '@/components/pages/testing-page';

const navSections = [
  {
    heading: 'Getting Started',
    links: [
      { id: 'overview', label: 'Overview' },
      { id: 'features', label: 'Key Features' },
      { id: 'installation', label: 'Installation' },
      { id: 'documentation-pages', label: 'Additional Guides' },
    ],
  },
  {
    heading: 'Advanced',
    links: [
      { id: 'performance-caching', label: 'Performance & Caching' },
    ],
  },
];

const navLinks = navSections.flatMap((section) => section.links);

const leftNavGroups = [
  {
    heading: null,
    links: [
      { label: 'Documentation', href: '/', current: true },
      { label: 'Environment Variables', href: '/environment-variables' },
      { label: 'API Endpoints', href: '/api-endpoints' },
      { label: 'API Testing', href: '/testing' },
      { label: 'Deployment', href: '/deployment' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'Installation', href: '#installation' },
      { label: 'Performance & Caching', href: '#performance-caching' },
      { label: 'Maintainer', href: '/maintainer' },
      { label: 'GitHub Repository', href: siteConfig.github, external: true },
    ],
  },
];

const features = [
  {
    title: 'No Account Required',
    description: 'Access anime data without registration. Just deploy and use.',
    icon: Shield,
  },
  {
    title: 'Built-in Proxy',
    description: 'Server-side proxy with automatic header handling and playlist rewriting.',
    icon: Server,
  },
  {
    title: 'Multiple Servers',
    description: 'Access content from various streaming servers with automatic fallback support.',
    icon: Database,
  },
  {
    title: 'Fast & Reliable',
    description: 'Optimized scraping with rate limiting and caching for consistent performance.',
    icon: Zap,
  },
  {
    title: 'Comprehensive Data',
    description: 'Get detailed anime info, episodes, genres, schedules, and streaming quality options.',
    icon: Book,
  },
  {
    title: 'Multi-Platform Deployment',
    description: 'Deploy on Render (Node.js) or Cloudflare Workers (edge computing) with global distribution.',
    icon: Globe,
  },
];

const documentationPages = [
  {
    title: 'Environment Variables',
    description: 'Configuration guide for backend and frontend environment variables.',
    icon: Settings,
    href: '/environment-variables',
  },
  {
    title: 'API Endpoints',
    description: 'Comprehensive reference of all API endpoints with detailed request/response examples.',
    icon: FileCode,
    href: '/api-endpoints',
  },
  {
    title: 'API Testing',
    description: 'Interactive API testing interface to explore and test all available endpoints in real-time.',
    icon: TestTube,
    href: '/testing',
  },
  {
    title: 'Deployment Guide',
    description: 'Step-by-step guides for deploying on Render (Node.js) and Cloudflare Workers.',
    icon: Rocket,
    href: '/deployment',
  },
];

export default function DocumentationPage() {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  return (
    <div className="relative isolate bg-background">
      {/* Mobile Header */}
      <MobileHeader
        onLeftMenuClick={() => setLeftDrawerOpen(true)}
        onRightMenuClick={() => setRightDrawerOpen(true)}
      />

      {/* Left Drawer - Navigation */}
      <MobileDrawer
        isOpen={leftDrawerOpen}
        onClose={() => setLeftDrawerOpen(false)}
        position="left"
      >
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setLeftDrawerOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-card">
              <Code2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold">{siteConfig.name}</p>
              <p className="text-muted-foreground text-xs">API Documentation</p>
            </div>
          </Link>
          <nav className="space-y-5 text-sm">
            {leftNavGroups.map((group, index) => (
              <div
                key={group.heading ?? `group-${index}`}
                className={`space-y-2 ${index !== 0 ? 'border-t border-border pt-5' : ''}`}
              >
                {group.heading && (
                  <p className="font-semibold text-xs uppercase tracking-wide">{group.heading}</p>
                )}
                <div className="flex flex-col gap-0.5 text-muted-foreground">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noreferrer' : undefined}
                      onClick={() => setLeftDrawerOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <SupportButton onClick={() => setLeftDrawerOpen(false)} />
        </div>
      </MobileDrawer>

      {/* Right Drawer - On This Page */}
      <MobileDrawer
        isOpen={rightDrawerOpen}
        onClose={() => setRightDrawerOpen(false)}
        position="right"
      >
        <OnThisPageNav links={navLinks} />
      </MobileDrawer>

      <Pattern variant="dots" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-70">
        <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 translate-x-1/3 rounded-full bg-[#8b5cf6]/20 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-emerald-400/15 blur-[120px]" />
      </div>

      <section className="mx-auto flex w-full max-w-[1600px] items-start gap-4 px-4 py-8 sm:py-12 md:py-16 lg:px-0">
        {/* Left Sidebar */}
        <aside className="sticky top-24 z-10 hidden w-64 shrink-0 self-start lg:block">
          <div className="max-h-[calc(100vh-96px)] space-y-6 overflow-y-auto rounded-2xl border bg-background/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-card">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold">{siteConfig.name}</p>
                <p className="text-muted-foreground text-xs">API Documentation</p>
              </div>
            </Link>
            <nav className="space-y-5 text-sm">
              {leftNavGroups.map((group, index) => (
                <div
                  key={group.heading ?? `group-${index}`}
                  className={`space-y-2 ${index !== 0 ? 'border-t border-border pt-5' : ''}`}
                >
                  {group.heading && (
                    <p className="font-semibold text-xs uppercase tracking-wide">{group.heading}</p>
                  )}
                  <div className="flex flex-col gap-0.5 text-muted-foreground">
                    {group.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        target={'external' in link && link.external ? '_blank' : undefined}
                        rel={'external' in link && link.external ? 'noreferrer' : undefined}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
            <SupportButton />
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1 space-y-8 sm:space-y-10 md:space-y-12 min-w-0 w-full max-w-full overflow-hidden">
          {/* Header */}
          <header className="space-y-4 sm:space-y-6 rounded-2xl sm:rounded-3xl border bg-background/70 p-4 sm:p-6 md:p-8 shadow-lg shadow-black/5 backdrop-blur w-full max-w-full overflow-hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              REST API Documentation
            </p>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">HiAnime API</h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg break-words">
                A powerful RESTful API for fetching anime content from hianime.to. Get anime details,
                episodes, and streaming links. Designed for developers building anime streaming platforms.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-6 text-xs sm:text-sm text-muted-foreground w-full max-w-full">
              <div className="min-w-0 flex flex-col flex-shrink-0 overflow-hidden">
                <p className="text-[10px] sm:text-xs uppercase tracking-wide truncate">Version</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm truncate">v1.0</p>
              </div>
              <div className="min-w-0 flex flex-col flex-shrink-0 overflow-hidden">
                <p className="text-[10px] sm:text-xs uppercase tracking-wide truncate">Base URL</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm break-all">/api/v1</p>
              </div>
              <div className="min-w-0 flex flex-col flex-shrink-0 overflow-hidden">
                <p className="text-[10px] sm:text-xs uppercase tracking-wide truncate">Format</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm truncate">JSON</p>
              </div>
              <div className="min-w-0 flex flex-col flex-shrink-0 overflow-hidden">
                <p className="text-[10px] sm:text-xs uppercase tracking-wide truncate">API Endpoints</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm truncate">{endpoints.length}</p>
              </div>
              <div className="min-w-0 flex flex-col flex-shrink-0 overflow-hidden">
                <p className="text-[10px] sm:text-xs uppercase tracking-wide truncate">Development Maintained</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm truncate">Yes</p>
              </div>
            </div>
          </header>


          {/* Overview */}
          <section id="overview" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Book className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground">
              HiAnime API is a RESTful API that utilizes web scraping to fetch anime content from
              hianime.to. It provides endpoints to retrieve anime details, episodes, and streaming links.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-amber-50 p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold">⚠️ Important Notes</h3>
              <ul className="mt-3 sm:mt-4 list-disc space-y-2 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                <li>
                  There was previously a hosted version of this API for showcasing purposes only, and it was misused; since then, there have been no other hosted versions. It is recommended to deploy your own instance for personal use by customizing the API as you need it to be.
                </li>
                <li>
                  This is an <strong>unofficial API</strong> for <a href="https://hianimez.to" target="_blank" rel="noreferrer" className="text-primary underline">hianimez.to</a> and is in no other way officially related to the same.
                </li>
                <li>
                  The content that this API provides is not mine, nor is it hosted by me. These belong to their respective owners. This API just demonstrates how to build an API that scrapes websites and uses their content.
                </li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Key Features</h2>
            </div>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute inset-x-4 top-4 h-16 rounded-2xl bg-gradient-to-r from-primary/15 via-transparent to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Installation */}
          <section id="installation" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Installation</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold">Prerequisites</h3>
                <p className="text-muted-foreground mt-2 text-xs sm:text-sm">
                  Make sure you have the latest LTS release of Node.js (which includes npm).
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Local Setup</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold mb-2">1. Clone the repository</p>
                    <CodeBlock code={`git clone https://github.com/mosabbir-maruf/HiAnimeAPI.git\ncd HiAnimeAPI`} />
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm font-semibold mb-2">2. Install dependencies</p>
                    <CodeBlock code="npm install" />
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm font-semibold mb-2">3. Start the server</p>
                    <CodeBlock code="npm run dev" />
                    <p className="text-muted-foreground text-xs sm:text-sm mt-2">
                      Server will run on{' '}
                      <code className="rounded bg-muted px-1 py-0.5">http://localhost:3030</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Guides */}
          <section id="documentation-pages" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Book className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Additional Guides</h2>
            </div>
            <p className="text-muted-foreground">
              Explore comprehensive documentation to get started with the API quickly.
            </p>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              {documentationPages.map((page) => (
                <Link
                  key={page.title}
                  href={page.href}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute inset-x-4 top-4 h-16 rounded-2xl bg-gradient-to-r from-primary/15 via-transparent to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <page.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">{page.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{page.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Performance & Caching */}
          <section id="performance-caching" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Performance & Caching</h2>
            </div>
            <p className="text-muted-foreground">
              The API uses multi-tier caching for optimal performance and includes several performance optimizations.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Caching Strategy</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2">Render (Node.js)</h4>
                    <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                      <li>Memory Cache (node-cache) - Fast in-memory caching</li>
                      <li>Redis Cache (optional) - Persistent caching across restarts</li>
                      <li>Two-tier: Memory → Redis → API</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2">Cloudflare Workers</h4>
                    <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                      <li>Cloudflare Cache API - Edge-level caching (FREE)</li>
                      <li>Redis Cache (optional) - Persistent caching</li>
                      <li>Two-tier: Cloudflare Cache → Redis → API</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Cache TTLs</h3>
                <div className="grid gap-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">Homepage</code>
                    <span className="text-muted-foreground">1 hour</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">Detail Pages</code>
                    <span className="text-muted-foreground">30 minutes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">Episodes</code>
                    <span className="text-muted-foreground">15 minutes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">Search/Filter</code>
                    <span className="text-muted-foreground">5 minutes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">Genres</code>
                    <span className="text-muted-foreground">24 hours</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Performance Optimizations</h3>
                <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                  <li>Request deduplication (prevents duplicate API calls)</li>
                  <li>Automatic retry logic (2 retries with exponential backoff)</li>
                  <li>Timeout protection (30 seconds)</li>
                  <li>Response compression (automatic)</li>
                  <li>Cache-Control headers for browser/CDN caching</li>
                  <li>ETag support for conditional requests</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold">Need Help?</p>
                <p className="text-muted-foreground text-sm">
                  Contact us for support and more information.
                </p>
              </div>
              <Link
                href="/maintainer#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-semibold hover:bg-muted/80"
              >
                Contact Support
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </footer>
        </article>

        {/* Right Sidebar - On This Page */}
        <aside className="sticky top-24 z-10 hidden w-64 shrink-0 self-start xl:block">
          <div className="max-h-[calc(100vh-96px)] space-y-4 overflow-y-auto rounded-2xl border bg-background/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">On this page</p>
            <OnThisPageNav links={navLinks} />
          </div>
        </aside>
      </section>
    </div>
  );
}

