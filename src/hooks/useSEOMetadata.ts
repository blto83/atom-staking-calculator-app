import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const SITE_URL = 'https://www.atomstakingcalculator.com';

export function useSEOMetadata(seoData: SEOData | null) {
  useEffect(() => {
    if (!seoData) return;

    // Update document title
    document.title = seoData.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update canonical URL
    if (seoData.canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = seoData.canonicalUrl;
    }

    // Update Open Graph tags
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let meta = document.head.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Open Graph
    updateMetaTag('og:title', seoData.title);
    updateMetaTag('og:description', seoData.description);
    if (seoData.canonicalUrl) {
      updateMetaTag('og:url', seoData.canonicalUrl);
    }

    // Twitter
    updateMetaTag('twitter:title', seoData.title, false);
    updateMetaTag('twitter:description', seoData.description, false);

    return () => {
      // Cleanup is handled by the next effect run - no need to reset here
      // This allows smooth transitions between articles
    };
  }, [seoData]);
}

export function getArticleSEOData(article: {
  seoTitle: string;
  seoDescription: string;
  slug: string;
}): SEOData {
  return {
    title: `${article.seoTitle} | ATOM Staking Calculator`,
    description: article.seoDescription,
    canonicalUrl: `${SITE_URL}/learn/${article.slug}`,
  };
}

export function getDefaultLearnHubSEO(): SEOData {
  return {
    title: 'Cosmos ATOM Staking Guide | Learn ATOM Rewards',
    description: 'Learn how Cosmos ATOM staking works, how to choose validators, understand risks, and compare compounding outcomes.',
    canonicalUrl: `${SITE_URL}/learn`,
  };
}
