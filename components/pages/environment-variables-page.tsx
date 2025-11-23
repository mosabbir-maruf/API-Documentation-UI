'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Code2,
  Database,
  ArrowRight,
  Shield,
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
    heading: 'Environment Variables',
    links: [
      { id: 'overview', label: 'Overview' },
      { id: 'backend-env', label: 'Backend Variables' },
      { id: 'cloudflare-env', label: 'Cloudflare Workers Variables' },
      { id: 'frontend-env', label: 'Frontend Variables' },
      { id: 'security', label: 'Security Notes' },
    ],
  },
];

const navLinks = navSections.flatMap((section) => section.links);

const leftNavGroups = [
  {
    heading: null,
    links: [
      { label: 'Documentation', href: '/' },
      { label: 'Environment Variables', href: '/environment-variables', current: true },
      { label: 'API Endpoints', href: '/api-endpoints' },
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

export default function EnvironmentVariablesPage() {
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
              <p className="text-muted-foreground text-xs">Environment Variables</p>
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
                <p className="text-muted-foreground text-xs">Environment Variables</p>
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
              Configuration Guide
            </p>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">Environment Variables</h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg break-words">
                Configure your backend API and frontend documentation site with the following environment variables. Proper configuration ensures optimal performance and security.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:flex sm:flex-wrap sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Backend</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">4</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Frontend</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">3</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Optional</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">4</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Security Level</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">High</p>
              </div>
            </div>
          </header>

          {/* Overview */}
          <section id="overview" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground">
              Environment variables allow you to configure your application without hardcoding sensitive information. This guide covers all available environment variables for both the backend API and frontend documentation site.
            </p>
          </section>

          {/* Backend Environment Variables */}
          <section id="backend-env" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Backend Environment Variables</h2>
            </div>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
              <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                Create a <code className="rounded bg-muted px-1 py-0.5">.env</code> file in the root directory of your backend project.
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">PORT</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Port number for the server to listen on. Defaults to <code className="rounded bg-muted px-1 py-0.5">3030</code> if not specified.
                  </p>
                  <CodeBlock code="PORT=3030" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">ORIGIN</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Comma-separated list of allowed CORS origins. Defaults to <code className="rounded bg-muted px-1 py-0.5">*</code> (all origins) if not specified.
                  </p>
                  <CodeBlock code="ORIGIN=https://example.com,https://app.example.com" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">RATE_LIMIT_WINDOW_MS</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Time window for rate limiting in milliseconds. Defaults to <code className="rounded bg-muted px-1 py-0.5">60000</code> (1 minute).
                  </p>
                  <CodeBlock code="RATE_LIMIT_WINDOW_MS=60000" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">RATE_LIMIT_LIMIT</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Maximum number of requests allowed per rate limit window. Defaults to <code className="rounded bg-muted px-1 py-0.5">100</code>.
                  </p>
                  <CodeBlock code="RATE_LIMIT_LIMIT=100" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">UPSTASH_REDIS_REST_URL</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Upstash Redis REST API URL for caching homepage data. If both Redis variables are set, the API will cache responses for 24 hours.
                  </p>
                  <CodeBlock code="UPSTASH_REDIS_REST_URL=https://your-redis-instance.upstash.io" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">UPSTASH_REDIS_REST_TOKEN</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Upstash Redis REST API token. Required if using Redis caching.
                  </p>
                  <CodeBlock code="UPSTASH_REDIS_REST_TOKEN=your-redis-token" />
                </div>

              </div>

              <div className="mt-4 sm:mt-6 rounded-lg border bg-blue-50 p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-semibold mb-2">Example Backend .env File</h4>
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
          </section>

          {/* Cloudflare Workers Environment Variables */}
          <section id="cloudflare-env" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Cloudflare Workers Environment Variables</h2>
            </div>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
              <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                When deploying to Cloudflare Workers, environment variables are set as <strong>Secrets</strong> in the Cloudflare Dashboard or via Wrangler CLI. These are the same variables as the backend, but configured differently for Cloudflare Workers.
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">ORIGIN</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Comma-separated list of allowed CORS origins. Defaults to <code className="rounded bg-muted px-1 py-0.5">*</code> (all origins) if not specified.
                  </p>
                  <CodeBlock code="ORIGIN=https://example.com,https://app.example.com" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">RATE_LIMIT_WINDOW_MS</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Time window for rate limiting in milliseconds. Defaults to <code className="rounded bg-muted px-1 py-0.5">60000</code> (1 minute).
                  </p>
                  <CodeBlock code="RATE_LIMIT_WINDOW_MS=60000" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">RATE_LIMIT_LIMIT</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Maximum number of requests allowed per rate limit window. Defaults to <code className="rounded bg-muted px-1 py-0.5">100</code>.
                  </p>
                  <CodeBlock code="RATE_LIMIT_LIMIT=100" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">UPSTASH_REDIS_REST_URL</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Upstash Redis REST API URL for caching homepage data. If both Redis variables are set, the API will cache responses for 24 hours.
                  </p>
                  <CodeBlock code="UPSTASH_REDIS_REST_URL=https://your-redis-instance.upstash.io" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">UPSTASH_REDIS_REST_TOKEN</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Upstash Redis REST API token. Required if using Redis caching.
                  </p>
                  <CodeBlock code="UPSTASH_REDIS_REST_TOKEN=your-redis-token" />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 rounded-lg border bg-blue-50 p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-semibold mb-2">Setting Secrets in Cloudflare Dashboard</h4>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                  After first deployment, go to your Worker → <strong>Settings</strong> → <strong>Variables</strong> and add these secrets (all optional):
                </p>
                <CodeBlock
                  code={`UPSTASH_REDIS_REST_URL - Redis URL for caching
UPSTASH_REDIS_REST_TOKEN - Redis token for caching
ORIGIN - Allowed CORS origins
RATE_LIMIT_WINDOW_MS - Rate limit window
RATE_LIMIT_LIMIT - Rate limit max requests`}
                />
              </div>

              <div className="mt-4 sm:mt-6 rounded-lg border bg-blue-50 p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-semibold mb-2">Setting Secrets via Wrangler CLI</h4>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3">
                  You can also set secrets using the Wrangler CLI:
                </p>
                <CodeBlock
                  code={`# Set each secret individually
npx wrangler secret put UPSTASH_REDIS_REST_URL
npx wrangler secret put UPSTASH_REDIS_REST_TOKEN
npx wrangler secret put ORIGIN
npx wrangler secret put RATE_LIMIT_WINDOW_MS
npx wrangler secret put RATE_LIMIT_LIMIT`}
                />
                <p className="text-muted-foreground text-xs sm:text-sm mt-3">
                  You&apos;ll be prompted to enter each value. These are stored securely in Cloudflare.
                </p>
              </div>
            </div>
          </section>

          {/* Frontend Environment Variables */}
          <section id="frontend-env" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Frontend Environment Variables</h2>
            </div>
            <div className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
              <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                Create a <code className="rounded bg-muted px-1 py-0.5">.env</code> file in the root directory of your frontend project.
              </p>
              
              <div className="space-y-4">
                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">PORT</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Port number for the Next.js development server to listen on. Defaults to <code className="rounded bg-muted px-1 py-0.5">3031</code> if not specified.
                  </p>
                  <CodeBlock code="PORT=3031" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">NEXT_PUBLIC_API_URL</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Backend API URL used for API testing helpers in the documentation site.
                  </p>
                  <CodeBlock code="NEXT_PUBLIC_API_URL=https://your-api-domain.com" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">NEXT_PUBLIC_SITE_URL</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Public URL of your documentation site. Used for metadata and OG images. Defaults to <code className="rounded bg-muted px-1 py-0.5">http://localhost:3000</code> in development.
                  </p>
                  <CodeBlock code="NEXT_PUBLIC_SITE_URL=https://docs.yourdomain.com" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">TELEGRAM_BOT_TOKEN</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Telegram bot token from <a href="https://t.me/BotFather" target="_blank" rel="noreferrer" className="text-primary underline">@BotFather</a>. If you need telegram bot message for any form.
                  </p>
                  <CodeBlock code="TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">TELEGRAM_CHAT_ID</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Telegram chat or channel ID where form messages should be delivered. If you need telegram bot message for any form.
                  </p>
                  <CodeBlock code="TELEGRAM_CHAT_ID=123456789" />
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <code className="text-xs sm:text-sm font-mono font-semibold text-primary">TIMEZONE</code>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2">
                    Timezone for timestamps in Telegram support messages. Defaults to <code className="rounded bg-muted px-1 py-0.5">Asia/Dhaka</code>.
                  </p>
                  <CodeBlock code="TIMEZONE=Asia/Dhaka" />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 rounded-lg border bg-blue-50 p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-semibold mb-2">Example Frontend .env File</h4>
                <CodeBlock
                  code={`# Port Configuration
PORT=3031

# Backend API Configuration
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
            </div>
          </section>

          {/* Security Notes */}
          <section id="security" className="space-y-4 sm:space-y-6 scroll-mt-24 sm:scroll-mt-36">
            <div className="flex items-center gap-2 sm:gap-3">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-semibold">Security Notes</h2>
            </div>
            <div className="rounded-xl sm:rounded-2xl border bg-amber-50 p-4 sm:p-6 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold mb-2">⚠️ Important Security Guidelines</h3>
              <ul className="list-disc space-y-2 pl-4 sm:pl-5 text-xs sm:text-sm text-muted-foreground">
                <li>
                  Never commit <code className="rounded bg-muted px-1 py-0.5">.env</code> or <code className="rounded bg-muted px-1 py-0.5">.env.local</code> files to version control.
                </li>
                <li>
                  In production, set environment variables through your hosting provider&apos;s dashboard (Render, Cloudflare, Vercel for frontend).
                </li>
                <li>
                  Variables prefixed with <code className="rounded bg-muted px-1 py-0.5">NEXT_PUBLIC_</code> are exposed to the browser and should not contain sensitive data.
                </li>
                <li>
                  Keep your API tokens, Redis credentials, and Telegram bot tokens secure and rotate them regularly.
                </li>
                <li>
                  Use different environment variables for development, staging, and production environments.
                </li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <footer className="rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold">Ready to Deploy?</p>
                <p className="text-muted-foreground text-sm">
                  Check out our deployment guide for step-by-step instructions.
                </p>
              </div>
              <Link
                href="/deployment"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                View Deployment Guide
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

