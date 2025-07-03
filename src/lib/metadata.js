// lib/metadata.js
// Simple in-memory cache
const metadataCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Default metadata for each page
const DEFAULT_METADATA = {
  home: {
    title: "Home | My Website",
    description: "Welcome to our website and explore our services and offerings.",
    keywords: "home, welcome, services, indel money",
  },
  about: {
    title: "About Us | My Website",
    description: "Learn more about our vision, mission, and values.",
    keywords: "about us, company, vision, mission, values",
  },
  goldloan: {
    title: "Gold Loan | My Website",
    description: "Get instant gold loans at attractive interest rates.",
    keywords: "gold loan, instant loan, gold, finance",
  },
  msme: {
    title: "MSME Loan | My Website",
    description: "Empowering small businesses with MSME loans tailored to your needs.",
    keywords: "msme loan, small business, finance, funding",
  },
  cdloan: {
    title: "Consumer Durable Loan | My Website",
    description: "Buy electronics and appliances with flexible CD loan options.",
    keywords: "consumer durable loan, electronics, appliances, EMI",
  },
  lap: {
    title: "Loan Against Property | My Website",
    description: "Unlock the value of your property with our LAP solutions.",
    keywords: "loan against property, LAP, mortgage loan",
  },
  gallery: {
    title: "Gallery | My Website",
    description: "Browse our event and corporate galleries.",
    keywords: "gallery, events, images, corporate",
  },
  testimonials: {
    title: "Testimonials | My Website",
    description: "Hear what our customers have to say about us.",
    keywords: "testimonials, customer reviews, feedback",
  },
  management: {
    title: "Management Team | My Website",
    description: "Meet our experienced and dynamic leadership team.",
    keywords: "management team, leadership, executives",
  },
  directors: {
    title: "Board of Directors | My Website",
    description: "Know more about our board members and their vision.",
    keywords: "board of directors, company leadership, governance",
  },
  partners: {
    title: "Debt Partners | My Website",
    description: "Our trusted debt partners supporting our growth journey.",
    keywords: "debt partners, financial partners, funding",
  },
  history: {
    title: "Our History | My Website",
    description: "Discover the legacy and milestones of our journey.",
    keywords: "company history, milestones, journey",
  },
  shades: {
    title: "Shades of Indel | My Website",
    description: "Explore various facets of Indel’s initiatives and culture.",
    keywords: "shades of indel, culture, initiatives, journey",
  },
  indelValues: {
    title: "Our Values | My Website",
    description: "Explore the core values that drive our organization.",
    keywords: "indel values, ethics, company values, principles",
  },
  services: {
    title: "Services | My Website",
    description: "Discover our wide range of financial services.",
    keywords: "services, financial services, offerings",
  },
  award: {
    title: "Awards & Recognition | My Website",
    description: "Recognitions and accolades we've received over the years.",
    keywords: "awards, recognition, achievements",
  },
  contact: {
    title: "Contact Us | My Website",
    description: "We are here to help. Get in touch with us.",
    keywords: "contact us, support, help, reach out",
  },
  blog: {
    title: "Blog | My Website",
    description: "Read our latest blogs, insights, and updates.",
    keywords: "blog, articles, news, updates",
  },
  news: {
    title: "News | My Website",
    description: "Latest news and updates from our company.",
    keywords: "news, updates, media",
  },
  branchlocator: {
    title: "Branch Locator | My Website",
    description: "Find the nearest branch of Indel Money.",
    keywords: "branch locator, nearby branch, location finder",
  },
};

async function getMetaData(page) {
  // Check cache first
  const cacheKey = `meta_${page}`;
  const cached = metadataCache.get(cacheKey);

//   if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
//     return cached.data;
//   }

  const defaultMeta = DEFAULT_METADATA[page] || DEFAULT_METADATA.home;

  try {
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=${page}`, {
      signal: controller.signal,
      headers: {
        "Cache-Control": "max-age=300",
        Accept: "application/json",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const meta = result.data;

    let metadataResult;

    if (result.status === "success" && meta) {
      metadataResult = {
        title: meta?.meta_title || defaultMeta.title,
        description: meta?.meta_description || defaultMeta.description,
        keywords: meta?.meta_keywords || defaultMeta.keywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title || defaultMeta.title,
          description: meta?.og_description || meta?.meta_description || defaultMeta.description,
          images: meta?.og_image ? [{ url: meta.og_image, width: 1200, height: 630 }] : [],
          type: "website",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${page}`,
        },
        twitter: {
          card: "summary_large_image",
          title: meta?.twitter_title || meta?.meta_title || defaultMeta.title,
          description: meta?.twitter_description || meta?.meta_description || defaultMeta.description,
          images: meta?.twitter_image ? [meta.twitter_image] : [],
        },
        alternates: {
          canonical: meta?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}/${page}`,
        },
        robots: {
          index: meta?.robots_index !== false,
          follow: meta?.robots_follow !== false,
        },
        error: null,
      };
    } else {
      metadataResult = {
        title: defaultMeta.title,
        description: defaultMeta.description,
        keywords: defaultMeta.keywords,
        openGraph: {
          title: defaultMeta.title,
          description: defaultMeta.description,
          type: "website",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${page}`,
        },
        twitter: {
          card: "summary_large_image",
          title: defaultMeta.title,
          description: defaultMeta.description,
        },
        alternates: {
          canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${page}`,
        },
        robots: {
          index: true,
          follow: true,
        },
        error: result.message || "No metadata found",
      };
    }

    // Cache the successful result
    metadataCache.set(cacheKey, {
      data: metadataResult,
      timestamp: Date.now(),
    });

    return metadataResult;
  } catch (error) {
    console.error(`Failed to fetch metadata for ${page}:`, error.message);

    // Return default metadata on error
    const fallbackResult = {
      title: defaultMeta.title,
      description: defaultMeta.description,
      keywords: defaultMeta.keywords,
      openGraph: {
        title: defaultMeta.title,
        description: defaultMeta.description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${page}`,
      },
      twitter: {
        card: "summary_large_image",
        title: defaultMeta.title,
        description: defaultMeta.description,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${page}`,
      },
      robots: {
        index: true,
        follow: true,
      },
      error: error.message || "Failed to fetch metadata",
    };

    // Cache fallback for shorter duration
    metadataCache.set(cacheKey, {
      data: fallbackResult,
      timestamp: Date.now(),
    });

    return fallbackResult;
  }
}

export async function generateMetadata(page) {
  const metadata = await getMetaData(page);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: metadata.openGraph,
    twitter: metadata.twitter,
    alternates: metadata.alternates,
    robots: metadata.robots,
    // Add structured data for better SEO
    other: {
      "application-name": "My Website",
      "theme-color": "#000000",
    },
  };
}

// Utility function to clear cache (useful for content updates)
export function clearMetadataCache(page) {
  if (page) {
    metadataCache.delete(`meta_${page}`);
  } else {
    metadataCache.clear();
  }
}

// Preload metadata for critical pages
export async function preloadCriticalMetadata() {
  const criticalPages = ["home", "career", "about", "services"];
  await Promise.allSettled(criticalPages.map((page) => getMetaData(page)));
}
