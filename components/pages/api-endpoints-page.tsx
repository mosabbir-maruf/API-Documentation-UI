'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Code2,
  Home,
  Search,
  Film,
  PlayCircle,
  Server,
  Database,
  Clock,
  ArrowRight,
  User,
  Filter,
  Book,
} from 'lucide-react';

import { Pattern } from '@/components/ui/pattern';
import { OnThisPageNav } from '@/components/privacy/on-this-page-nav';
import { CodeBlock } from '@/components/ui/code-block';
import { siteConfig } from '@/config/site';
import { MobileDrawer } from '@/components/ui/mobile-drawer';
import { MobileHeader } from '@/components/ui/mobile-header';
import { SupportButton } from '@/components/ui/support-button';

const navSections = [
  {
    heading: 'Overview',
    links: [
      { id: 'overview', label: 'Overview' },
    ],
  },
  {
    heading: 'Monitoring',
    links: [
      { id: 'ping', label: 'Ping' },
      { id: 'health', label: 'Health Check' },
    ],
  },
  {
    heading: 'Discovery',
    links: [
      { id: 'home', label: 'Home Page' },
    ],
  },
  {
    heading: 'Search & Discovery',
    links: [
      { id: 'search', label: 'Search' },
      { id: 'suggestion', label: 'Suggestions' },
      { id: 'filter', label: 'Filter' },
      { id: 'filter-options', label: 'Filter Options' },
    ],
  },
  {
    heading: 'Metadata & Schedules',
    links: [
      { id: 'genres', label: 'All Genres' },
      { id: 'schedule', label: 'Schedule' },
      { id: 'next-episode-schedule', label: 'Next Episode Schedule' },
    ],
  },
  {
    heading: 'Anime Information',
    links: [
      { id: 'list', label: 'Anime List' },
      { id: 'details', label: 'Anime Details' },
    ],
  },
  {
    heading: 'Character Information',
    links: [
      { id: 'characters', label: 'Character List' },
      { id: 'character-detail', label: 'Character Detail' },
    ],
  },
  {
    heading: 'Playback',
    links: [
      { id: 'episodes', label: 'Episodes' },
      { id: 'servers', label: 'Servers' },
      { id: 'streaming', label: 'Streaming Links' },
      { id: 'streamlinkextractor', label: 'Stream Link Extractor' },
    ],
  },
  {
    heading: 'Utilities',
    links: [
      { id: 'proxy', label: 'Proxy & Streaming' },
    ],
  },
];

const navLinks = navSections.flatMap((section) => section.links);

const leftNavGroups = [
  {
    heading: null,
    links: [
      { label: 'Documentation', href: '/' },
      { label: 'Environment Variables', href: '/environment-variables' },
      { label: 'API Endpoints', href: '/api-endpoints', current: true },
      { label: 'API Testing', href: '/testing' },
      { label: 'Deployment', href: '/deployment' },
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { label: 'Installation', href: '/#installation' },
      { label: 'Performance & Caching', href: '/#performance-caching' },
      { label: 'Maintainer', href: '/maintainer' },
      { label: 'GitHub Repository', href: siteConfig.github, external: true },
    ],
  },
];

export default function APIEndpointsPage() {
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
              <p className="text-muted-foreground text-xs">API Endpoints</p>
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
                      className={`rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${'current' in link && link.current ? 'bg-accent text-accent-foreground' : ''}`}
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
                <p className="text-muted-foreground text-xs">API Endpoints</p>
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
                        className={`rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${'current' in link && link.current ? 'bg-accent text-accent-foreground' : ''}`}
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
              API Reference
            </p>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">API Endpoints</h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg break-words">
                Complete reference for all HiAnime API endpoints. Explore home, search, filter, character, and streaming endpoints with detailed examples and response formats.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:flex sm:flex-wrap sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Version</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">v1.0</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Base URL</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">/api/v1</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Format</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">JSON</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">API Endpoints</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">34</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Development Maintained</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">Yes</p>
              </div>
            </div>
          </header>

          {/* Overview */}
          <section id="overview" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Book className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">API Overview</h2>
            </div>
            <p className="text-muted-foreground">
              HiAnime API provides comprehensive access to anime data including home page content, search, filtering, character information, and streaming links. All endpoints return JSON responses with a consistent structure.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-blue-50 p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Base URL</h3>
              <CodeBlock code="https://your-api-domain.com" />
              <p className="text-muted-foreground text-xs sm:text-sm mt-3">
                Replace with your deployed API URL or use <code className="rounded bg-muted px-1 py-0.5">http://localhost:3030</code> for local development.
              </p>
            </div>
          </section>

          {/* Ping Endpoint */}
          <section id="ping" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">GET /ping</h2>
            </div>
            <p className="text-muted-foreground">
              Simple health check that returns <code className="rounded bg-muted px-1 py-0.5">pong</code>.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Request Example</h4>
                    <CodeBlock
                      code={`const response = await fetch('/ping');
const text = await response.text();`}
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Use Cases</h4>
                    <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                      <li>Quick health check</li>
                      <li>Load balancer health checks</li>
                      <li>Uptime monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Health Check & Monitoring */}
          <section id="health" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">GET /health</h2>
            </div>
            <p className="text-muted-foreground">
              Returns service health status with cache statistics and uptime. Monitor your API service health and keep free tier services awake.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Request Example</h4>
                    <CodeBlock
                      code={`const response = await fetch('/health');
const data = await response.json();`}
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Response Example</h4>
                    <CodeBlock
                      maxHeight="max-h-96"
                      code={`{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "memory": {
    "cache": {
      "keys": 10,
      "hits": 100,
      "misses": 20
    }
  },
  "uptime": 3600
}`}
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Use Cases</h4>
                    <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                      <li>Monitor service health</li>
                      <li>Check cache performance</li>
                      <li>Keep Render free tier awake (ping every 10-14 minutes)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Home Endpoint */}
          <section id="home" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Home className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/home</h2>
            </div>
            <p className="text-muted-foreground">
              Get the homepage data including spotlight, trending, top airing, most popular anime, and top 10 rankings.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/home');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "spotlight": [
      {
        "title": "Wind Breaker Season 2",
        "id": "wind-breaker-season-2-19542",
        "poster": "https://cdn.noitatnemucod.net/...",
        "rank": 1,
        "type": "TV",
        "episodes": {
          "sub": 9,
          "dub": 7,
          "eps": 9
        }
      }
    ],
    "trending": [
      {
        "id": "anime-id",
        "title": "Anime Title",
        "poster": "https://...",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      }
    ],
    "topAiring": [
      {
        "id": "anime-id",
        "title": "Anime Title",
        "poster": "https://...",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      }
    ],
    "mostPopular": [
      {
        "id": "anime-id",
        "title": "Anime Title",
        "poster": "https://...",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      }
    ],
    "top10": {
      "today": [
        {
          "id": "anime-id",
          "title": "Anime Title",
          "poster": "https://...",
          "episodes": {
            "sub": 12,
            "dub": 12,
            "eps": 12
          }
        }
      ],
      "week": [],
      "month": []
    }
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Search Endpoint */}
          <section id="search" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/search</h2>
            </div>
            <p className="text-muted-foreground">
              Search for anime by keyword with pagination support.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Query Parameters</h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">keyword</code>
                    <span className="text-muted-foreground">Search query (required)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">page</code>
                    <span className="text-muted-foreground">Page number (default: 1)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/search?keyword=naruto&page=1');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "animes": [
      {
        "id": "naruto-677",
        "title": "Naruto",
        "poster": "https://cdn.noitatnemucod.net/...",
        "episodes": {
          "sub": 220,
          "dub": 220,
          "eps": 220
        },
        "type": "TV",
        "duration": "23m"
      }
    ],
    "currentPage": 1,
    "totalPages": 3,
    "hasNextPage": true
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Suggestion Endpoint */}
          <section id="suggestion" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/suggestion</h2>
            </div>
            <p className="text-muted-foreground">
              Get search suggestions for autocomplete functionality as users type their query.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Query Parameters</h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">keyword</code>
                    <span className="text-muted-foreground">Search keyword (required)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/suggestion?keyword=one');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-64"
                  code={`{
  "success": true,
  "data": {
    "suggestions": [
      {
        "id": "one-piece-100",
        "name": "One Piece",
        "poster": "https://...",
        "jname": "One Piece",
        "moreInfo": ["TV", "1999", "Sub: 1122, Dub: 1096"]
      }
    ]
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Filter Endpoint */}
          <section id="filter" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/filter</h2>
            </div>
            <p className="text-muted-foreground">
              Advanced filtering of anime with multiple parameters including type, status, genre, rating, and more.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Query Parameters</h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">type</code>
                    <span className="text-muted-foreground">Type: movie, tv, ova, ona, special</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">status</code>
                    <span className="text-muted-foreground">Status: completed, ongoing, upcoming</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">rated</code>
                    <span className="text-muted-foreground">Rating: g, pg, pg-13, r, r+, rx</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">score</code>
                    <span className="text-muted-foreground">Score range: good, verygood, excellent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">season</code>
                    <span className="text-muted-foreground">Season: spring, summer, fall, winter</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">language</code>
                    <span className="text-muted-foreground">Language: sub, dub, sub-dub</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">genres</code>
                    <span className="text-muted-foreground">Comma-separated genre list</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">start_date</code>
                    <span className="text-muted-foreground">Start year (e.g., 2020)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">end_date</code>
                    <span className="text-muted-foreground">End year (e.g., 2024)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">sort</code>
                    <span className="text-muted-foreground">Sort: most_popular, recently_added, top_rated</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">page</code>
                    <span className="text-muted-foreground">Page number (default: 1)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/filter?type=movie&status=completed&score=good&genres=action,adventure&page=1');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "animes": [
      {
        "id": "your-name-10",
        "title": "Your Name",
        "poster": "https://cdn.noitatnemucod.net/...",
        "episodes": {
          "sub": 1,
          "dub": 1,
          "eps": 1
        },
        "type": "Movie",
        "duration": "1h 46m"
      }
    ],
    "currentPage": 1,
    "totalPages": 12,
    "hasNextPage": true
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Filter Options Endpoint */}
          <section id="filter-options" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/filter/options</h2>
            </div>
            <p className="text-muted-foreground">
              Get available filter options including genres, types, status, ratings, and more.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/filter/options');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "type": ["all", "movie", "tv", "ova", "special", "music"],
    "status": ["all", "finished_airing", "currently_airing", "not_yet_aired"],
    "rated": ["all", "g", "pg", "pg-13", "r", "r+", "rx"],
    "score": [
      "all",
      "appalling",
      "horrible",
      "very_bad",
      "bad",
      "average",
      "fine",
      "good",
      "very_good",
      "great",
      "masterpiece"
    ],
    "season": ["all", "spring", "summer", "fall", "winter"],
    "language": ["all", "sub", "dub", "sub_dub"],
    "sort": [
      "default",
      "recently_added",
      "recently_updated",
      "score",
      "name_az",
      "release_date",
      "most_watched"
    ],
    "genres": [
      "action",
      "adventure",
      "cars",
      "comedy",
      "dementia",
      "demons",
      "mystery",
      "drama",
      "ecchi",
      "fantasy",
      "game",
      "historical",
      "horror",
      "kids",
      "magic",
      "martial_arts",
      "mecha",
      "music",
      "parody",
      "samurai",
      "romance",
      "school",
      "sci-fi",
      "shoujo",
      "shoujo_ai",
      "shounen",
      "shounen_ai",
      "space",
      "sports",
      "super_power",
      "vampire",
      "harem",
      "slice_of_life",
      "supernatural",
      "military",
      "police",
      "psychological",
      "thriller",
      "seinen",
      "josei",
      "isekai"
    ]
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Genres Endpoint */}
          <section id="genres" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Film className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/genres</h2>
            </div>
            <p className="text-muted-foreground">
              Get a list of all available anime genres.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/genres');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": [
    "action",
    "adventure",
    "comedy",
    "drama",
    "fantasy",
    "horror",
    "romance",
    "sci-fi",
    "slice of life",
    "sports"
    // ... all available genres
  ]
}`}
                />
              </div>
            </div>
          </section>
          {/* Schedule Endpoint */}
          <section id="schedule" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/schadule</h2>
            </div>
            <p className="text-muted-foreground">
              Get the current anime schedule showing upcoming episodes.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/schadule');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": [
    {
      "id": "anime-id",
      "title": "Anime Title",
      "episode": "Episode 1",
      "time": "12:00 PM",
      "poster": "https://cdn.noitatnemucod.net/...",
      "type": "TV"
    }
    // ... more scheduled episodes
  ]
}`}
                />
              </div>
            </div>
          </section>

          {/* Next Episode Schedule Endpoint */}
          <section id="next-episode-schedule" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-sm sm:text-lg md:text-2xl font-semibold break-all">GET /api/v1/schadule/next/:id</h2>
            </div>
            <p className="text-muted-foreground">
              Get the next episode schedule information for a specific anime.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/schadule/next/kingdom-season-6-19914');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "time": "2025-11-29 19:00:00"
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* List Endpoint */}
          <section id="list" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Film className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-sm sm:text-lg md:text-2xl font-semibold break-all">GET /api/v1/animes/:query/:category</h2>
            </div>
            <p className="text-muted-foreground">
              Get paginated lists of anime based on different queries and categories.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Valid Queries</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  <code className="rounded bg-muted px-2 py-1">top-airing</code>
                  <code className="rounded bg-muted px-2 py-1">most-popular</code>
                  <code className="rounded bg-muted px-2 py-1">most-favorite</code>
                  <code className="rounded bg-muted px-2 py-1">completed</code>
                  <code className="rounded bg-muted px-2 py-1">recently-added</code>
                  <code className="rounded bg-muted px-2 py-1">recently-updated</code>
                  <code className="rounded bg-muted px-2 py-1">top-upcoming</code>
                  <code className="rounded bg-muted px-2 py-1">genre/:genre</code>
                  <code className="rounded bg-muted px-2 py-1">az-list/:letter</code>
                  <code className="rounded bg-muted px-2 py-1">subbed-anime</code>
                  <code className="rounded bg-muted px-2 py-1">dubbed-anime</code>
                  <code className="rounded bg-muted px-2 py-1">movie</code>
                  <code className="rounded bg-muted px-2 py-1">tv</code>
                  <code className="rounded bg-muted px-2 py-1">ova</code>
                  <code className="rounded bg-muted px-2 py-1">ona</code>
                  <code className="rounded bg-muted px-2 py-1">special</code>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/animes/top-airing?page=1');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "animes": [
      {
        "id": "wind-breaker-season-2-19542",
        "title": "Wind Breaker Season 2",
        "poster": "https://cdn.noitatnemucod.net/...",
        "episodes": {
          "sub": 9,
          "dub": 7,
          "eps": 9
        },
        "type": "TV"
      }
    ],
    "currentPage": 1,
    "totalPages": 45,
    "hasNextPage": true
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Details Endpoint */}
          <section id="details" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-sm sm:text-lg md:text-2xl font-semibold break-all">GET /api/v1/anime/:animeId</h2>
            </div>
            <p className="text-muted-foreground">
              Get detailed information about a specific anime including synopsis, genres, studios, and
              related anime.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/anime/attack-on-titan-112');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "title": "Attack on Titan",
    "alternativeTitle": "Shingeki no Kyojin",
    "japanese": "進撃の巨人",
    "id": "attack-on-titan-112",
    "poster": "https://cdn.noitatnemucod.net/...",
    "rating": "R",
    "type": "TV",
    "is18Plus": true,
    "episodes": {
      "sub": 25,
      "dub": 25,
      "eps": 25
    },
    "synopsis": "Centuries ago, mankind was slaughtered to near extinction...",
    "synonyms": "AoT",
    "aired": {
      "from": "Apr 7, 2013",
      "to": "Sep 29, 2013"
    },
    "premiered": "Spring 2013",
    "duration": "24m",
    "status": "Finished Airing",
    "MAL_score": "8.52",
    "genres": [
      "Action",
      "Mystery",
      "Drama",
      "Fantasy",
      "Shounen",
      "Super Power",
      "Military"
    ],
    "studios": "Wit Studio",
    "producers": [
      "production-ig",
      "dentsu",
      "mainichi-broadcasting-system",
      "pony-canyon",
      "kodansha"
    ],
    "moreSeasons": [
      {
        "title": "Attack on Titan",
        "alternativeTitle": "Season 1",
        "id": "attack-on-titan-112",
        "poster": "https://cdn.noitatnemucod.net/...",
        "isActive": true
      }
    ],
    "related": [
      {
        "title": "Attack on Titan Season 2",
        "alternativeTitle": "Shingeki no Kyojin Season 2",
        "id": "attack-on-titan-season-2-150",
        "poster": "https://cdn.noitatnemucod.net/...",
        "type": "TV",
        "episodes": {
          "sub": 12,
          "dub": 12,
          "eps": 12
        }
      }
    ],
    "mostPopular": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/...",
        "type": "TV",
        "episodes": {
          "sub": 1150,
          "dub": 1133,
          "eps": 1150
        }
      }
    ],
    "recommended": [
      {
        "title": "Texhnolyze",
        "alternativeTitle": "Texhnolyze",
        "id": "texhnolyze-908",
        "poster": "https://cdn.noitatnemucod.net/...",
        "type": "TV",
        "duration": "23m",
        "episodes": {
          "sub": 22,
          "dub": 22,
          "eps": 22
        },
        "is18Plus": true
      }
    ]
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Characters Endpoint */}
          <section id="characters" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-sm sm:text-lg md:text-2xl font-semibold break-all">GET /api/v1/characters/:animeId</h2>
            </div>
            <p className="text-muted-foreground">
              Get the list of characters and voice actors for a specific anime.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/characters/attack-on-titan-112');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Fields</h3>
                <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                  <li>Character name, role (main/supporting)</li>
                  <li>Character image and profile link</li>
                  <li>Voice actor name and image</li>
                  <li>Voice actor profile link</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": [
    {
      "id": "character:eren-yeager-1",
      "name": "Eren Yeager",
      "role": "Main",
      "image": "https://cdn.noitatnemucod.net/...",
      "voiceActors": [
        {
          "id": "people:yuki-kaji-305",
          "name": "Yuuki Kaji",
          "image": "https://cdn.noitatnemucod.net/..."
        }
      ]
    },
    {
      "id": "character:mikasa-ackerman-2",
      "name": "Mikasa Ackerman",
      "role": "Main",
      "image": "https://cdn.noitatnemucod.net/...",
      "voiceActors": [
        {
          "id": "people:yui-ishikawa-4895",
          "name": "Yui Ishikawa",
          "image": "https://cdn.noitatnemucod.net/..."
        }
      ]
    }
  ]
}`}
                />
              </div>
            </div>
          </section>

          {/* Character Detail Endpoint */}
          <section id="character-detail" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-sm sm:text-lg md:text-2xl font-semibold break-all">GET /api/v1/character/:characterId</h2>
            </div>
            <p className="text-muted-foreground">
              Get detailed information about a specific character or voice actor/person.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">ID Format</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                  Use format <code className="rounded bg-muted px-1 py-0.5">character:name-id</code> for characters
                  or <code className="rounded bg-muted px-1 py-0.5">people:name-id</code> for actors.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Examples</h3>
                <CodeBlock
                  code={`// Get character details
const response = await fetch('/api/v1/character/character:roronoa-zoro-7');
const data = await response.json();

// Get voice actor/person details
const response2 = await fetch('/api/v1/character/people:kana-hanazawa-1');
const data2 = await response2.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Fields</h3>
                <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                  <li>Name and alternative names</li>
                  <li>Profile image and description</li>
                  <li>Related anime appearances</li>
                  <li>Birthday, gender, and other biographical info</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "name": "Zoro Roronoa",
    "type": "character",
    "japanese": "ロロノア・ゾロ",
    "imageUrl": "https://cdn.noitatnemucod.net/...",
    "bio": "Name: Roronoa Zoro<br>Age: 19; 21<br>Birthdate: November 11, Scorpio<br>Height: 178 cm (5'10\"), 181 (5'11\") (after timeskip)<br>Affiliation: Straw Hat Pirates<br>Position: Swordsman<br>Devil Fruit: None<br>Bounty: 320,000,000...",
    "animeAppearances": [
      {
        "title": "One Piece",
        "alternativeTitle": "One Piece",
        "id": "one-piece-100",
        "poster": "https://cdn.noitatnemucod.net/...",
        "role": "Main",
        "type": "TV"
      },
      {
        "title": "One Piece: The Movie 10 - Strong World",
        "alternativeTitle": "One Piece Film: Strong World",
        "id": "one-piece-the-movie-10-strong-world-298",
        "poster": "https://cdn.noitatnemucod.net/...",
        "role": "Main",
        "type": "Movie"
      }
    ],
    "voiceActors": [
      {
        "name": "Nakai, Kazuya",
        "imageUrl": "https://cdn.noitatnemucod.net/...",
        "id": "people:kazuya-nakai-37",
        "language": "Japanese"
      },
      {
        "name": "Sabat, Christopher",
        "imageUrl": "https://cdn.noitatnemucod.net/...",
        "id": "people:christopher-sabat-113",
        "language": "English"
      }
    ]
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Episodes */}
          <section id="episodes" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-sm sm:text-lg md:text-2xl font-semibold break-all">GET /api/v1/episodes/:animeId</h2>
            </div>
            <p className="text-muted-foreground">
              Get the list of all episodes for a specific anime.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/episodes/steins-gate-3');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response</h3>
                <CodeBlock
                  code={`{
  "success": true,
  "data": [
    {
      "title": "Turning Point",
      "alternativeTitle": "Hajimari to Owari no Prologue",
      "id": "/watch/steinsgate-3?ep=213",
      "isFiller": false
    }
  ]
}`}
                />
              </div>
            </div>
          </section>

          {/* Servers */}
          <section id="servers" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/servers</h2>
            </div>
            <p className="text-muted-foreground">
              Get available streaming servers for a specific episode.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Query Parameters</h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">id</code>
                    <span className="text-muted-foreground">Episode ID (e.g., steinsgate-3::ep=213)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/servers?id=steinsgate-3::ep=213');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  code={`{
  "success": true,
  "data": {
    "episode": 1,
    "sub": [
      {
        "index": 6,
        "type": "sub",
        "id": "1287321",
        "name": "HD-3"
      }
    ],
    "dub": [
      {
        "index": 6,
        "type": "dub",
        "id": "1287289",
        "name": "HD-3"
      }
    ]
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Streaming */}
          <section id="streaming" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-base sm:text-xl md:text-2xl font-semibold break-all">GET /api/v1/stream</h2>
            </div>
            <p className="text-muted-foreground">
              Get streaming links for a specific episode and server.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Query Parameters</h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">id</code>
                    <span className="text-muted-foreground">Episode ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">server</code>
                    <span className="text-muted-foreground">Server name (HD-1, HD-2, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">type</code>
                    <span className="text-muted-foreground">dub or sub</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/stream?id=steinsgate-3::ep=214&server=HD-2&type=dub');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Example</h3>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "id": "steinsgate-3::ep=214",
    "type": "dub",
    "link": {
      "file": "https://fxpy7.watching.onl/anime/.../master.m3u8",
      "type": "hls"
    },
    "tracks": [],
    "intro": {
      "start": 75,
      "end": 165
    },
    "outro": {
      "start": 1330,
      "end": 1419
    },
    "server": "HD-2",
    "proxy": "/proxy/stream?url=https%3A%2F%2Ffxpy7.watching.onl%2F...",
    "player": "/player?url=https%3A%2F%2Ffxpy7.watching.onl%2F...",
    "quality": {
      "selectedServer": "HD-2",
      "selectedQuality": "720p",
      "selectedBitrateKbps": 3000,
      "available": [
        {
          "quality": "1080p",
          "server": "HD-1",
          "bitrateKbps": 5000
        },
        {
          "quality": "720p",
          "server": "HD-2",
          "bitrateKbps": 3000
        },
        {
          "quality": "480p",
          "server": "HD-3",
          "bitrateKbps": 1500
        }
      ],
      "adaptive": true,
      "format": "HLS",
      "bandwidthKbps": null,
      "selectionMode": "server"
    }
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Stream Link Extractor */}
          <section id="streamlinkextractor" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xs sm:text-base md:text-2xl font-semibold break-all">GET /api/v1/streamlinkextractor</h2>
            </div>
            <p className="text-muted-foreground">
              Extract and test all available stream links from all servers for an episode. Useful for debugging and finding the best available streams.
            </p>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Query Parameters</h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <code className="rounded bg-muted px-2 py-1 min-w-fit">id</code>
                    <span className="text-muted-foreground">Episode ID (required)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Request Example</h3>
                <CodeBlock
                  code={`const response = await fetch('/api/v1/streamlinkextractor?id=steinsgate-3::ep=213');
const data = await response.json();`}
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">Response Format</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                  Returns stream links organized by type (sub/dub) and server, including quality options and subtitle tracks for each server.
                </p>
                <CodeBlock
                  maxHeight="max-h-96"
                  code={`{
  "success": true,
  "data": {
    "sub": [
      {
        "server": "HD-1",
        "link": {
          "file": "https://...",
          "proxy": "/proxy/stream?url=..."
        },
        "tracks": [
          {
            "file": "https://...",
            "label": "English",
            "kind": "captions"
          }
        ],
        "quality": [
          {
            "quality": "1080p",
            "url": "https://..."
          },
          {
            "quality": "720p",
            "url": "https://..."
          }
        ]
      }
    ],
    "dub": [
      {
        "server": "HD-1",
        "link": {
          "file": "https://...",
          "proxy": "/proxy/stream?url=..."
        },
        "tracks": [],
        "quality": []
      }
    ]
  }
}`}
                />
              </div>
            </div>
          </section>

          {/* Proxy & Player */}
          <section id="proxy" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Built-in Proxy & Streaming</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 break-all">GET /player</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  A lightweight HLS.js test page. Paste any <code className="rounded bg-muted px-1 py-0.5">.m3u8</code> link, keep &ldquo;Use proxy&rdquo; checked, and it will fetch via <code className="rounded bg-muted px-1 py-0.5">/proxy/stream</code>.
                </p>
                <CodeBlock code="GET /player?url=<encoded-m3u8-url>" />
              </div>

              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 break-all">GET /proxy/stream</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  Server-side proxy that adds required headers and rewrites playlists for CORS-free playback.
                </p>
                <CodeBlock code="GET /proxy/stream?url=<encoded-m3u8-url>" />
                <div className="mt-3 sm:mt-4 space-y-2">
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    The proxy:
                  </p>
                  <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                    <li>Adds the necessary headers {'(Referer/User-Agent)'} and retries against multiple referers automatically</li>
                    <li>Ignores invalid upstream TLS certificates</li>
                    <li>Rewrites playlists so all segments also route through the proxy</li>
                  </ul>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-2">
                    Use the <code className="rounded bg-muted px-1 py-0.5">proxy</code> URL from the
                    stream response for reliable playback. Deploying to Render? Simply point your frontend to{' '}
                    <code className="rounded bg-muted px-1 py-0.5">https://your-app.onrender.com/proxy/stream?url=...</code>
                  </p>
                </div>
                <div className="mt-3 sm:mt-4">
                  <h4 className="text-xs sm:text-sm font-semibold mb-2">Usage Example</h4>
                  <CodeBlock
                    code={`// Get stream data with proxy URL
const response = await fetch('/api/v1/stream?id=steinsgate-3::ep=213&server=HD-2&type=sub');
const data = await response.json();
const { proxy } = data.data.link;

// Use proxy URL with HLS.js or any video player
videoPlayer.src = proxy;`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Try the API Testing Playground */}
          <section className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="rounded-xl sm:rounded-2xl border bg-emerald-50 p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
                <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                Try the API Testing Playground
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                Test all these endpoints interactively with our browser-based testing interface—no setup or external tools required.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/testing"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700"
                >
                  Open Testing UI
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-semibold hover:bg-muted/80"
                >
                  View Documentation
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
