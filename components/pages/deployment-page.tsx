'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Code2,
  Server,
  ExternalLink,
  Globe,
  Zap,
  PlayCircle,
  ArrowRight,
  ChevronRight,
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
    heading: 'Deployment Options',
    links: [
      { id: 'overview', label: 'Overview' },
      { id: 'render-deployment', label: 'Render Deployment' },
      { id: 'cloudflare-deployment', label: 'Cloudflare Workers' },
    ],
  },
  {
    heading: 'Frontend Deployment',
    links: [
      { id: 'docs-deployment', label: 'Frontend Site' },
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
      { label: 'API Endpoints', href: '/api-endpoints' },
      { label: 'API Testing', href: '/testing' },
      { label: 'Deployment', href: '/deployment', current: true },
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

export default function DeploymentPage() {
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
              <p className="text-muted-foreground text-xs">Deployment Guide</p>
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
                <p className="text-muted-foreground text-xs">Deployment Guide</p>
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
              Deployment Guide
            </p>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">Deploy HiAnime API</h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg break-words">
                Complete guide to deploying the HiAnime API backend and documentation frontend. Choose between Render (Node.js) or Cloudflare Workers (Edge Computing) for the API, and Vercel/Cloudflare Pages for the documentation site.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Deployment Options</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">3 Platforms</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Backend</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">Render, Cloudflare</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Frontend</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">Vercel</p>
              </div>
            </div>
          </header>

          {/* Overview */}
          <section id="overview" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Deployment Overview</h2>
            </div>
            <p className="text-muted-foreground">
              HiAnime API offers flexible deployment options to suit your needs. Deploy the backend API on Render or Cloudflare Workers, and the documentation frontend on Vercel.
            </p>
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute inset-x-4 top-4 h-16 rounded-2xl bg-gradient-to-r from-primary/15 via-transparent to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
                <Server className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">Backend API</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Deploy on Render (Node.js) or Cloudflare Workers (Edge) with Redis caching support.</p>
              </div>
              <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute inset-x-4 top-4 h-16 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
                <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold">Frontend Site</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Deploy the Next.js frontend site on Vercel.</p>
              </div>
            </div>
          </section>

          {/* Render Deployment */}
          <section id="render-deployment" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Deploy Backend to Render</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Quick Deploy</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  Deploy your own instance of HiAnime API on Render with one click.
                </p>
                <div className="space-y-3 sm:space-y-4 mb-4">
                  <div className="space-y-3">
                    <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                      <div className="flex items-start gap-2 sm:gap-3 mb-2">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Click the &ldquo;Deploy to Render&rdquo; button below or go to Render Dashboard</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                      <div className="flex items-start gap-2 sm:gap-3 mb-2">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2">Configure:</p>
                          <CodeBlock
                            code={`Name: hianime-api (or your choice)
Environment: Node
Build Command: npm install
Start Command: npm start
Port: 3030`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                      <div className="flex items-start gap-2 sm:gap-3 mb-2">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2">Set optional environment variables:</p>
                          <CodeBlock
                            code={`PORT=3030
ORIGIN=https://yourdomain.com
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_LIMIT=100
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-redis-token`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                      <div className="flex items-start gap-2 sm:gap-3 mb-2">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">4</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Click &ldquo;Create Web Service&rdquo; and Render will automatically deploy</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-blue-50 p-3 sm:p-4">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <strong>Free Tier Note:</strong> Render free tier sleeps after 15 minutes of inactivity. Set up a monitoring service (like{' '}
                      <a href="https://uptimerobot.com/" target="_blank" rel="noreferrer" className="text-primary underline">
                        UptimeRobot
                      </a>
                      ) to ping <code className="rounded bg-muted px-1 py-0.5">/health</code> endpoint every 10-14 minutes.
                    </p>
                  </div>
                </div>
                <Link
                  href="https://render.com/deploy?repo=https://github.com/mosabbir-maruf/HiAnimeAPI"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
                >
                  Deploy to Render
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Manual Setup on Render</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-3">Step 1: Create New Web Service</h4>
                    <div className="space-y-2">
                      <div className="rounded-lg border bg-muted/30 p-3">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
                          <p className="text-xs sm:text-sm text-muted-foreground">Go to Render Dashboard and click &ldquo;New&rdquo; → &ldquo;Web Service&rdquo;</p>
                        </div>
                      </div>
                      <div className="rounded-lg border bg-muted/30 p-3">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
                          <p className="text-xs sm:text-sm text-muted-foreground">Connect your GitHub repository (fork HiAnimeAPI first if you haven&apos;t)</p>
                        </div>
                      </div>
                      <div className="rounded-lg border bg-muted/30 p-3">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
                          <p className="text-xs sm:text-sm text-muted-foreground">Select the repository from the list</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Step 2: Configure Service</h4>
                    <div className="space-y-2">
                      <CodeBlock
                        code={`Name: hianime-api (or your preferred name)
Environment: Node
Region: Choose closest to your users
Branch: main
Build Command: npm install
Start Command: npm start`}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Step 3: Set Environment Variables</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                      Add these environment variables in the &ldquo;Environment&rdquo; section:
                    </p>
                    <CodeBlock
                      code={`PORT=3030
ORIGIN=https://yourdomain.com
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_LIMIT=100
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-redis-token`}
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Step 4: Deploy</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Click &ldquo;Create Web Service&rdquo; and wait for the deployment to complete. Your API will be available at <code className="rounded bg-muted px-1 py-0.5">https://your-app.onrender.com</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cloudflare Workers Deployment */}
          <section id="cloudflare-deployment" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Deploy Backend to Cloudflare Workers</h2>
            </div>
            <p className="text-muted-foreground">
              Deploy HiAnimeAPI to Cloudflare Workers for edge computing with global distribution.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Method 1: Deploy from Cloudflare Dashboard (Recommended)</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Go to Cloudflare Dashboard → Workers & Pages</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Click &ldquo;Create application&rdquo; → &ldquo;Workers&rdquo; tab → &ldquo;Connect to Git&rdquo;</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Authorize Cloudflare to access GitHub and select your repository</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">4</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Configure: Project name, Framework preset (None/Custom), Worker file: <code className="rounded bg-muted px-1 py-0.5">worker.js</code></p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">5</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Click &ldquo;Save and Deploy&rdquo;</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">6</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Set environment variables (Secrets) in Settings → Variables</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Environment Variables (Secrets)</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                      After first deployment, go to your Worker → Settings → Variables and add these secrets (all optional):
                    </p>
                    <CodeBlock
                      code={`UPSTASH_REDIS_REST_URL - Redis URL for caching
UPSTASH_REDIS_REST_TOKEN - Redis token for caching
ORIGIN - Allowed CORS origins
RATE_LIMIT_WINDOW_MS - Rate limit window
RATE_LIMIT_LIMIT - Rate limit max requests`}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Your API will be available at <code className="rounded bg-muted px-1 py-0.5">https://your-app.your-subdomain.workers.dev</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Method 2: Manual Deployment via CLI</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Install Wrangler CLI</h4>
                    <CodeBlock
                      code={`# Install Wrangler CLI globally
npm install -g wrangler

# Or use npx (no installation needed)
npx wrangler --version`}
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Authenticate</h4>
                    <CodeBlock code="npx wrangler login" />
                    <p className="text-muted-foreground text-xs sm:text-sm mt-2">
                      This will open a browser window to authenticate with your Cloudflare account.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Set Environment Variables</h4>
                    <CodeBlock
                      code={`# Set each secret individually
npx wrangler secret put UPSTASH_REDIS_REST_URL
npx wrangler secret put UPSTASH_REDIS_REST_TOKEN
npx wrangler secret put ORIGIN`}
                    />
                    <p className="text-muted-foreground text-xs sm:text-sm mt-2">
                      You&apos;ll be prompted to enter each value. These are stored securely in Cloudflare.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Deploy</h4>
                    <CodeBlock
                      code={`# Using npm script
npm run deploy:worker

# Or directly with wrangler
npx wrangler deploy worker.js`}
                    />
                    <p className="text-muted-foreground text-xs sm:text-sm mt-2">
                      Your API will be available at <code className="rounded bg-muted px-1 py-0.5">https://your-app.your-subdomain.workers.dev</code>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Local Development</h4>
                    <CodeBlock
                      code={`# Run locally with hot reload
npm run dev:worker

# Or directly with wrangler
npx wrangler dev worker.js`}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-emerald-50 p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Cloudflare Workers Features</h3>
                <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                  <li>Global edge deployment (low latency worldwide)</li>
                  <li>Serverless scaling (automatic)</li>
                  <li>Free tier available (100,000 requests/day)</li>
                  <li>Built-in DDoS protection</li>
                  <li>All 34 API endpoints fully supported</li>
                  <li>Edge caching with Cloudflare Cache API (FREE)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Documentation Site Deployment */}
          <section id="docs-deployment" className="space-y-3 sm:space-y-4 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Deploy Frontend Site</h2>
            </div>
            <p className="text-muted-foreground">
              The documentation site is built with Next.js and can be deployed on Vercel.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Deploy to Vercel</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-primary underline">Vercel</a> and sign in with GitHub</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Click &ldquo;New Project&rdquo; and import your repository</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Vercel will auto-detect Next.js settings</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">4</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Add environment variables in the project settings</p>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">5</span>
                        <p className="text-xs sm:text-sm text-muted-foreground">Click &ldquo;Deploy&rdquo; and wait for deployment to complete. Your site will be available at <code className="rounded bg-muted px-1 py-0.5">https://your-app.vercel.app</code></p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Environment Variables</h4>
                    <CodeBlock
                      code={`# Backend API Configuration
NEXT_PUBLIC_API_URL=https://your-api-domain.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://docs.yourdomain.com

# Telegram Support (If you need telegram bot message for any form)
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789

# Timezone
TIMEZONE=Asia/Dhaka`}
                    />
                  </div>
                  <div className="rounded-lg border bg-emerald-50 p-3 sm:p-4">
                    <h4 className="text-xs sm:text-sm font-semibold mb-2">Vercel Features</h4>
                    <ul className="list-disc space-y-1 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                      <li>Automatic deployments on git push</li>
                      <li>Preview deployments for pull requests</li>
                      <li>Global CDN and edge network</li>
                      <li>Built-in analytics and monitoring</li>
                      <li>Zero configuration for Next.js</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testing Playground */}
          <section className="space-y-3 sm:space-y-4">
            <div className="rounded-xl sm:rounded-2xl border bg-emerald-50 p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 flex items-center gap-2">
                <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                Try the API Testing Playground
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                Run requests from your browser with our custom testing interface—no setup or external tools required.
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
                  <ChevronRight className="h-4 w-4" />
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

