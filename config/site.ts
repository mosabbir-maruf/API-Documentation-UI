const defaultSiteUrl = 'https://docs-hianimeapi.vercel.app';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;

export const siteConfig = {
  name: 'HiAnime API',
  description: 'A powerful RESTful API for anime streaming content from hianime.to',
  url: siteUrl,
  github: 'https://github.com/mosabbir-maruf/HiAnimeAPI',
};

