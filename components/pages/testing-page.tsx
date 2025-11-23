'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Home,
  Film,
  Search,
  Filter,
  User,
  PlayCircle,
  Server,
  ExternalLink,
  Copy,
  Check,
  Zap,
  Shield,
  ChevronDown,
  ChevronRight,
  X,
  Code2,
  Clock,
} from 'lucide-react';
import { Pattern } from '@/components/ui/pattern';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/video-player';
import { OnThisPageNav } from '@/components/privacy/on-this-page-nav';
import { siteConfig } from '@/config/site';
import Script from 'next/script';
import { MobileDrawer } from '@/components/ui/mobile-drawer';
import { MobileHeader } from '@/components/ui/mobile-header';
import { SupportButton } from '@/components/ui/support-button';

interface EndpointConfig {
  method: 'GET';
  path: string;
  description: string;
  category: string;
  icon: React.ElementType;
  params?: {
    name: string;
    type: 'path' | 'query';
    required: boolean;
    placeholder?: string;
    defaultValue?: string;
  }[];
}

export const endpoints: EndpointConfig[] = [
  {
    method: 'GET',
    path: '/ping',
    description: 'Health check - returns "pong"',
    category: 'Monitoring',
    icon: Zap,
  },
  {
    method: 'GET',
    path: '/health',
    description: 'Detailed health status with uptime and cache stats',
    category: 'Monitoring',
    icon: Shield,
  },
  {
    method: 'GET',
    path: '/api/v1/home',
    description: 'Fetch homepage content',
    category: 'Core',
    icon: Home,
  },
  {
    method: 'GET',
    path: '/api/v1/animes/az-list/{letter}',
    description: 'A-Z anime list',
    category: 'Anime Lists',
    icon: Film,
    params: [
      { name: 'letter', type: 'path', required: true, placeholder: 'a', defaultValue: 'a' },
      { name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/top-airing',
    description: 'Top airing anime',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/most-popular',
    description: 'Most popular anime',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/most-favorite',
    description: 'Most favorite anime',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/completed',
    description: 'Completed anime series',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/recently-added',
    description: 'Recently added anime',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/recently-updated',
    description: 'Recently updated anime',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/top-upcoming',
    description: 'Top upcoming anime',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/genre/{genre}',
    description: 'Anime by genre',
    category: 'Anime Lists',
    icon: Film,
    params: [
      { name: 'genre', type: 'path', required: true, placeholder: 'action', defaultValue: 'action' },
      { name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/subbed-anime',
    description: 'Subbed anime list',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/dubbed-anime',
    description: 'Dubbed anime list',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/movie',
    description: 'Anime movies',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/tv',
    description: 'Anime TV series',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/ova',
    description: 'Anime OVAs',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/ona',
    description: 'Anime ONAs',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/animes/special',
    description: 'Anime Specials',
    category: 'Anime Lists',
    icon: Film,
    params: [{ name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' }],
  },
  {
    method: 'GET',
    path: '/api/v1/anime/{id}',
    description: 'Anime detail by ID',
    category: 'Details',
    icon: Film,
    params: [
      { name: 'id', type: 'path', required: true, placeholder: 'attack-on-titan-112', defaultValue: 'attack-on-titan-112' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/search',
    description: 'Search anime',
    category: 'Search',
    icon: Search,
    params: [
      { name: 'keyword', type: 'query', required: true, placeholder: 'naruto', defaultValue: 'naruto' },
      { name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/filter',
    description: 'Filter anime',
    category: 'Search',
    icon: Filter,
    params: [
      { name: 'type', type: 'query', required: false, placeholder: 'movie', defaultValue: 'movie' },
      { name: 'status', type: 'query', required: false, placeholder: 'completed', defaultValue: 'completed' },
      { name: 'rated', type: 'query', required: false, placeholder: 'r', defaultValue: 'r' },
      { name: 'score', type: 'query', required: false, placeholder: 'good', defaultValue: 'good' },
      { name: 'season', type: 'query', required: false, placeholder: 'spring', defaultValue: 'spring' },
      { name: 'language', type: 'query', required: false, placeholder: 'sub', defaultValue: 'sub' },
      { name: 'start_date', type: 'query', required: false, placeholder: '2020', defaultValue: '2020' },
      { name: 'end_date', type: 'query', required: false, placeholder: '2024', defaultValue: '2024' },
      { name: 'sort', type: 'query', required: false, placeholder: 'most_popular', defaultValue: 'most_popular' },
      { name: 'genres', type: 'query', required: false, placeholder: 'action,adventure', defaultValue: 'action,adventure' },
      { name: 'page', type: 'query', required: false, placeholder: '1', defaultValue: '1' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/suggestion',
    description: 'Search suggestions',
    category: 'Search',
    icon: Search,
    params: [
      { name: 'keyword', type: 'query', required: true, placeholder: 'one piece', defaultValue: 'one piece' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/filter/options',
    description: 'Get available filter options',
    category: 'Search',
    icon: Filter,
  },
  {
    method: 'GET',
    path: '/api/v1/genres',
    description: 'Get all available genres',
    category: 'Core',
    icon: Film,
  },
  {
    method: 'GET',
    path: '/api/v1/schadule',
    description: 'Get anime schedule',
    category: 'Core',
    icon: Clock,
  },
  {
    method: 'GET',
    path: '/api/v1/schadule/next/{id}',
    description: 'Get next episode schedule for anime',
    category: 'Core',
    icon: Clock,
    params: [
      { name: 'id', type: 'path', required: true, placeholder: 'kingdom-season-6-19914', defaultValue: 'kingdom-season-6-19914' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/characters/{id}',
    description: 'Anime characters by ID',
    category: 'Characters',
    icon: User,
    params: [
      { name: 'id', type: 'path', required: true, placeholder: 'attack-on-titan-112', defaultValue: 'attack-on-titan-112' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/character/{id}',
    description: 'Character or actor detail (use format: character:name-id or people:name-id)',
    category: 'Characters',
    icon: User,
    params: [{ name: 'id', type: 'path', required: true, placeholder: 'character:roronoa-zoro-7 or people:kana-hanazawa-1', defaultValue: 'character:roronoa-zoro-7' }],
  },
  {
    method: 'GET',
    path: '/api/v1/episodes/{id}',
    description: 'Episodes by anime ID',
    category: 'Playback',
    icon: PlayCircle,
    params: [
      { name: 'id', type: 'path', required: true, placeholder: 'steins-gate-3', defaultValue: 'steins-gate-3' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/servers',
    description: 'Episode servers',
    category: 'Playback',
    icon: Server,
    params: [
      { name: 'id', type: 'query', required: true, placeholder: 'steinsgate-3::ep=213', defaultValue: 'steinsgate-3::ep=213' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/stream',
    description: 'Stream episode',
    category: 'Playback',
    icon: PlayCircle,
    params: [
      { name: 'id', type: 'query', required: true, placeholder: 'steinsgate-3::ep=213', defaultValue: 'steinsgate-3::ep=213' },
      { name: 'server', type: 'query', required: false, placeholder: 'HD-2', defaultValue: 'HD-2' },
      { name: 'type', type: 'query', required: false, placeholder: 'sub', defaultValue: 'sub' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/streamlinkextractor',
    description: 'Extract and test all stream links for an episode',
    category: 'Playback',
    icon: PlayCircle,
    params: [
      { name: 'id', type: 'query', required: true, placeholder: 'steinsgate-3::ep=213', defaultValue: 'steinsgate-3::ep=213' },
    ],
  },
  {
    method: 'GET',
    path: '/proxy/stream',
    description: '🎬 Test stream with inline video player (bypasses CORS)',
    category: 'Playback',
    icon: Server,
    params: [{ name: 'url', type: 'query', required: true, placeholder: 'https://example.com/stream.m3u8', defaultValue: 'https://example.com/stream.m3u8' }],
  },
];

const categories = Array.from(new Set(endpoints.map((e) => e.category)));

// Navigation links
const leftNavGroups = [
  {
    heading: null,
    links: [
      { label: 'Documentation', href: '/' },
      { label: 'Environment Variables', href: '/environment-variables' },
      { label: 'API Endpoints', href: '/api-endpoints' },
      { label: 'API Testing', href: '/testing', current: true },
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

const navLinks = [
  { id: 'configuration', label: 'Configuration' },
  ...categories.map((cat) => ({ id: cat.toLowerCase().replace(/\s+/g, '-'), label: cat })),
];

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export default function TestingPage() {
  const [baseUrl, setBaseUrl] = useState(DEFAULT_BASE_URL);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Monitoring']);
  const [responses, setResponses] = useState<{ [key: string]: any }>({});
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [playerUrl, setPlayerUrl] = useState<string | null>(null);
  const [hlsLoaded, setHlsLoaded] = useState(false);

  useEffect(() => {
    // Check if HLS.js is already loaded
    if (typeof window !== 'undefined' && 'Hls' in window) {
      setHlsLoaded(true);
    }
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const buildUrl = (endpoint: EndpointConfig, paramValues: { [key: string]: string }) => {
    // Ensure baseUrl is set
    if (!baseUrl || baseUrl.trim() === '') {
      throw new Error('Base URL is not configured. Please set it in the Configuration section above.');
    }

    // Normalize baseUrl: remove trailing slash if present
    const normalizedBaseUrl = baseUrl.trim().replace(/\/+$/, '');
    
    // Ensure endpoint path starts with /
    const normalizedPath = endpoint.path.startsWith('/') ? endpoint.path : `/${endpoint.path}`;
    
    let url = normalizedBaseUrl + normalizedPath;

    // Replace path parameters
    endpoint.params
      ?.filter((p) => p.type === 'path')
      .forEach((param) => {
        url = url.replace(`{${param.name}}`, paramValues[param.name] || param.defaultValue || '');
      });

    // Add query parameters
    const queryParams = endpoint.params
      ?.filter((p) => p.type === 'query' && paramValues[p.name])
      .map((param) => `${param.name}=${encodeURIComponent(paramValues[param.name])}`)
      .join('&');

    if (queryParams) {
      url += `?${queryParams}`;
    }

    return url;
  };

  const executeRequest = async (endpoint: EndpointConfig, paramValues: { [key: string]: string }) => {
    const key = endpoint.path;
    
    // Validate baseUrl before proceeding
    if (!baseUrl || baseUrl.trim() === '') {
      setResponses((prev) => ({
        ...prev,
        [key]: {
          status: 'Error',
          statusText: 'Base URL is required',
          time: 0,
          data: 'Please configure the Base URL in the Configuration section above before making requests.',
          url: '',
        },
      }));
      return;
    }
    
    // Special handling for proxy stream - show inline video player
    if (endpoint.path === '/proxy/stream') {
      try {
        const url = buildUrl(endpoint, paramValues);
        setPlayerUrl(url);
        
        setResponses((prev) => ({
          ...prev,
          [key]: {
            status: 'Player',
            statusText: 'Video player loaded',
            time: 0,
            data: 'Video player',
            url,
          },
        }));
      } catch (error: any) {
        setResponses((prev) => ({
          ...prev,
          [key]: {
            status: 'Error',
            statusText: error.message,
            time: 0,
            data: null,
            url: '',
          },
        }));
      }
      return;
    }
    
    setLoading((prev) => ({ ...prev, [key]: true }));
    setResponses((prev) => ({ ...prev, [key]: null }));

    try {
      const url = buildUrl(endpoint, paramValues);
      const headers: HeadersInit = {};

      const startTime = performance.now();
      const response = await fetch(url, { headers });
      const endTime = performance.now();

      const contentType = response.headers.get('content-type');
      let data;

      if (contentType?.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      setResponses((prev) => ({
        ...prev,
        [key]: {
          status: response.status,
          statusText: response.statusText,
          time: Math.round(endTime - startTime),
          data,
          url,
        },
      }));
    } catch (error: any) {
      setResponses((prev) => ({
        ...prev,
        [key]: {
          status: 'Error',
          statusText: error.message || 'Failed to fetch',
          time: 0,
          data: error.message || 'Network error: Could not connect to the API. Please check your Base URL and ensure the API server is accessible.',
          url: baseUrl + endpoint.path,
        },
      }));
    } finally {
      setLoading((prev) => ({ ...prev, [key]: false }));
    }
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedUrl(id);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <>
      {/* Load HLS.js */}
      <Script
        src="https://cdn.jsdelivr.net/npm/hls.js@latest"
        onLoad={() => setHlsLoaded(true)}
        strategy="afterInteractive"
      />
      
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
                <p className="text-muted-foreground text-xs">API Testing</p>
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
                        className={`rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                          'current' in link && link.current ? 'text-primary font-semibold bg-accent text-accent-foreground' : ''
                        }`}
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

      <div className="relative isolate bg-background">
        <Pattern variant="dots" />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-70">
          <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-80 w-80 translate-x-1/3 rounded-full bg-[#8b5cf6]/20 blur-[150px]" />
          <div className="absolute bottom-[-15%] left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-emerald-400/15 blur-[120px]" />
        </div>

        <section className="mx-auto flex w-full max-w-[1600px] items-start gap-4 px-4 py-8 sm:py-12 md:py-16 lg:px-0">
          {/* Left Sidebar */}
          <aside className="sticky top-24 hidden w-64 shrink-0 self-start lg:block">
            <div className="max-h-[calc(100vh-96px)] space-y-6 overflow-y-auto rounded-2xl border bg-background/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-card">
                  <Code2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{siteConfig.name}</p>
                  <p className="text-muted-foreground text-xs">API Testing</p>
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
                          className={`rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                            'current' in link && link.current ? 'text-primary font-semibold bg-accent text-accent-foreground' : ''
                          }`}
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
          <article className="flex-1 space-y-8 sm:space-y-10 md:space-y-12">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12">

          <header className="space-y-4 sm:space-y-6 rounded-2xl sm:rounded-3xl border bg-background/70 p-4 sm:p-6 md:p-8 shadow-lg shadow-black/5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Interactive API Testing
            </p>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">API Testing Interface</h1>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                A sleek, theme-aligned console for exercising every HiAnime API endpoint in real time. 
                Send requests, inspect beautifully formatted responses, and debug inline video 
                playback—all without leaving your browser.
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
                <p className="font-semibold text-foreground text-xs sm:text-sm">{endpoints.length}</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide">Development Maintained</p>
                <p className="font-semibold text-foreground text-xs sm:text-sm">Yes</p>
              </div>
            </div>
          </header>
        </div>


        {/* API Configuration */}
        <section id="configuration" className="mb-6 sm:mb-8 space-y-4 sm:space-y-6 rounded-xl sm:rounded-2xl border bg-background/70 p-4 sm:p-6 shadow-lg shadow-black/5 backdrop-blur scroll-mt-24 sm:scroll-mt-36">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Configuration</h2>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
              Set up your API credentials and server endpoint before testing
            </p>
          </div>
          
          <div className="grid gap-3 sm:gap-4 md:grid-cols-1">
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                <Server className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                Base URL
                <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700 font-semibold">Required</span>
              </label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                placeholder={DEFAULT_BASE_URL || "https://your-api-domain.com"}
                className="w-full rounded-lg border bg-background px-3 sm:px-4 py-2.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                {!baseUrl ? (
                  <>
                    Set via <code className="rounded bg-muted px-1 py-0.5">NEXT_PUBLIC_API_URL</code> env variable or enter manually
                  </>
                ) : null}
              </p>
              <p className="text-[10px] sm:text-xs text-amber-400">
                Note: Don&apos;t use trailing slash (/) at the end
              </p>
            </div>
          </div>

          <div className="rounded-lg sm:rounded-xl border border-amber-200 bg-amber-50 p-3 sm:p-4">
            <h3 className="font-semibold text-xs sm:text-sm mb-2 flex items-center gap-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-amber-600" />
              Quick Start
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[10px] sm:text-xs text-muted-foreground">
              <li>Enter your base URL above</li>
              <li>Expand any category below to see available endpoints</li>
              <li>Fill in the required parameters and click &quot;Try it out&quot;</li>
              <li>View the response in the formatted output below each endpoint</li>
            </ul>
          </div>
        </section>

        {/* Endpoints by Category */}
        <div className="space-y-4">
          {categories.map((category) => {
            const categoryEndpoints = endpoints.filter((e) => e.category === category);
            const isExpanded = expandedCategories.includes(category);
            const categoryId = category.toLowerCase().replace(/\s+/g, '-');

            return (
              <section key={category} id={categoryId} className="rounded-xl sm:rounded-2xl border bg-background/70 shadow-lg backdrop-blur scroll-mt-24 sm:scroll-mt-36">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-muted/50 transition-colors rounded-xl sm:rounded-2xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    ) : (
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    )}
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold">{category}</h2>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      ({categoryEndpoints.length} endpoint{categoryEndpoints.length !== 1 ? 's' : ''})
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4">
                    {categoryEndpoints.map((endpoint) => (
                      <EndpointCard
                        key={endpoint.path}
                        endpoint={endpoint}
                        onExecute={executeRequest}
                        loading={loading[endpoint.path]}
                        response={responses[endpoint.path]}
                        onCopyUrl={copyToClipboard}
                        copiedUrl={copiedUrl}
                        playerUrl={playerUrl}
                        hlsLoaded={hlsLoaded}
                        onClosePlayer={(path) => {
                          setPlayerUrl(null);
                          setResponses((prev) => ({ ...prev, [path]: null }));
                        }}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border bg-background/80 p-4 sm:p-6 shadow-sm">
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
        <aside className="sticky top-24 hidden w-64 shrink-0 self-start xl:block">
          <div className="max-h-[calc(100vh-96px)] space-y-4 overflow-y-auto rounded-2xl border bg-background/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">On this page</p>
            <OnThisPageNav links={navLinks} />
          </div>
        </aside>
      </section>
    </div>
    </div>
    </>
  );
}

interface EndpointCardProps {
  endpoint: EndpointConfig;
  onExecute: (endpoint: EndpointConfig, params: { [key: string]: string }) => void;
  loading?: boolean;
  response?: any;
  onCopyUrl: (url: string, id: string) => void;
  copiedUrl: string | null;
  playerUrl: string | null;
  hlsLoaded: boolean;
  onClosePlayer: (endpointPath: string) => void;
}

function EndpointCard({ endpoint, onExecute, loading, response, onCopyUrl, copiedUrl, playerUrl, hlsLoaded, onClosePlayer }: EndpointCardProps) {
  const [paramValues, setParamValues] = useState<{ [key: string]: string }>(
    endpoint.params?.reduce(
      (acc, param) => ({
        ...acc,
        [param.name]: param.defaultValue || '',
      }),
      {}
    ) || {}
  );

  const Icon = endpoint.icon;
  const hasParams = endpoint.params && endpoint.params.length > 0;

  const handleExecute = () => {
    onExecute(endpoint, paramValues);
  };

  return (
    <div className="rounded-lg sm:rounded-xl border bg-background/80 overflow-hidden">
      {/* Endpoint Header */}
      <div className="p-3 sm:p-4 border-b bg-muted/30">
        <div className="flex items-start justify-between gap-2 sm:gap-4">
          <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 flex-wrap">
                <span className="text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded shrink-0">
                  {endpoint.method}
                </span>
                <code className="text-xs sm:text-sm font-mono break-all">{endpoint.path}</code>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">{endpoint.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parameters */}
      {hasParams && (
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 border-b">
          <h4 className="text-xs sm:text-sm font-semibold">Parameters</h4>
          <div className="grid gap-2 sm:gap-3">
            {endpoint.params?.map((param) => (
              <div key={param.name} className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
                <div className="md:col-span-1">
                  <label className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                    {param.name}
                    {param.required && <span className="text-red-500 text-[10px] sm:text-xs">*</span>}
                  </label>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    {param.type === 'path' ? 'path' : 'query'}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <input
                    type="text"
                    value={paramValues[param.name] || ''}
                    onChange={(e) =>
                      setParamValues((prev) => ({ ...prev, [param.name]: e.target.value }))
                    }
                    placeholder={param.placeholder}
                    className="w-full rounded-lg border bg-background px-3 py-2.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="p-3 sm:p-4 bg-muted/20">
        <Button onClick={handleExecute} disabled={loading} className="w-full text-xs sm:text-sm md:w-auto">
          {loading ? (
            <>
              <div className="h-3 w-3 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></div>
              <span className="text-xs sm:text-sm">Loading...</span>
            </>
          ) : (
            <>
              <PlayCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
              <span className="text-xs sm:text-sm">Try it out</span>
            </>
          )}
        </Button>
      </div>

      {/* Response */}
      {response && (
        <div className="p-3 sm:p-4 border-t">
          <div className="space-y-2 sm:space-y-3">
            {/* Response Info */}
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xs sm:text-sm font-semibold">Response</h4>
              <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs">
                <span
                  className={`px-2 py-1 rounded font-semibold ${
                    response.status === 'Player' || (response.status >= 200 && response.status < 300)
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {response.status} {response.statusText}
                </span>
                {response.time > 0 && (
                  <span className="text-muted-foreground">{response.time}ms</span>
                )}
              </div>
            </div>

            {/* Request URL */}
            {response.url && (
              <div className="flex items-center gap-2 rounded-lg border bg-muted/30 p-2 sm:p-3">
                <code className="text-[10px] sm:text-xs flex-1 break-all">{response.url}</code>
                <button
                  onClick={() => onCopyUrl(response.url, endpoint.path)}
                  className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  {copiedUrl === endpoint.path ? (
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                </button>
              </div>
            )}

            {/* Video Player Response */}
            {response.status === 'Player' ? (
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-2 sm:p-3">
                  <div className="flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs font-semibold text-emerald-900">
                        Video Player Ready
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-emerald-700">
                        Stream loaded successfully. Use controls below to play.
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => onClosePlayer(endpoint.path)}
                    variant="ghost"
                    size="sm"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                {playerUrl && hlsLoaded && <VideoPlayer url={playerUrl} />}
                {playerUrl && !hlsLoaded && (
                  <div className="rounded-lg border bg-muted/30 p-3 sm:p-4 text-center">
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Loading video player...</p>
                  </div>
                )}
              </div>
            ) : (
              /* Response Body */
              <div className="rounded-lg border bg-muted/30 p-3 sm:p-4 max-h-64 sm:max-h-96 overflow-auto">
                <pre className="text-[10px] sm:text-xs font-mono whitespace-pre-wrap break-words break-all w-full">
                  {typeof response.data === 'object'
                    ? JSON.stringify(response.data, null, 2)
                    : response.data}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

