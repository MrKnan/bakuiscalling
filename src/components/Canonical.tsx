import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://bakuiscalling.com';

const DEFAULT_TITLE = 'Baku Is Calling | Custom Azerbaijan Tours & Travel';
const DEFAULT_DESCRIPTION =
  'Plan your all-inclusive, customized trip to Azerbaijan with Baku Is Calling. Tours, travel tips, and local expertise for an unforgettable Baku experience.';

type RouteMeta = {
  title: string;
  description: string;
};

const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'Baku Is Calling | Custom Azerbaijan Tours & Travel',
    description:
      'Discover Azerbaijan with Baku Is Calling — all-inclusive, customized tours, local guides, and travel planning made easy.',
  },
  '/tours': {
    title: 'Tours in Azerbaijan | Baku Is Calling',
    description:
      'Browse our curated Azerbaijan tour packages, from Baku city breaks to countryside adventures, all fully customizable.',
  },
  '/about': {
    title: 'About Us | Baku Is Calling',
    description:
      'Learn about Baku Is Calling, our story, our local team, and why travelers trust us to plan their Azerbaijan trip.',
  },
  '/blog': {
    title: 'Travel Blog | Baku Is Calling',
    description:
      'Tips, guides, and stories about traveling in Azerbaijan and Baku from the Baku Is Calling team.',
  },
  '/contact': {
    title: 'Contact Us | Baku Is Calling',
    description:
      'Get in touch with Baku Is Calling to start planning your customized Azerbaijan trip today.',
  },
  '/privacy': {
    title: 'Privacy Policy | Baku Is Calling',
    description:
      'Read the Baku Is Calling privacy policy to understand how we collect, use, and protect your data.',
  },
};

function Canonical(): null {
  const { pathname } = useLocation();

  const normalizedPath: string =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  const meta: RouteMeta = ROUTE_META[normalizedPath] || {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  };

  const title = meta.title || DEFAULT_TITLE;
  const description = meta.description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;

  useEffect(() => {
    document.title = title;

    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', description);

    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
  }, [normalizedPath, title, description, canonicalUrl]);

  return null;
}

export default Canonical;