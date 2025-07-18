//export const dynamic = "force-dynamic";
import HomeClient from "../pages/HomeClient";
import { defaultMeta } from "@/constants/constants";

async function fetchHomeData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/home`, {
      cache: "force-cache",
      next: { revalidate: 600 },
      credentials: "include", // Ensures session cookie is sent
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result.status === "success") {
      return { data: result.data, error: null };
    }
    return { data: null, error: result.message };
  } catch (error) {
    return { data: null, error: "Failed to fetch home data" };
  }
}

async function fetchGoldRate() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/gold-rate`, {
      cache: "force-cache",
      next: { revalidate: 600 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result?.success && result?.goldRate) {
      return { data: result.goldRate, error: null };
    }

    return { data: null, error: result?.message || "Invalid response from gold rate API" };
  } catch (error) {
    return { data: null, error: "Failed to fetch gold rate" };
  }
}

async function getMetaData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/web/meta?page=home`, {
      cache: "force-cache",
      next: { revalidate: 600 },
    });
    const result = await response.json();
    const meta = result.data;

    if (result.status === "success") {
      return {
        title: meta?.meta_title || defaultMeta.title,
        description: meta?.meta_description || defaultMeta.description,
        keywords: meta?.meta_keywords || defaultMeta.keywords,
        // Enhanced SEO fields
        openGraph: {
          title: meta?.og_title || meta?.meta_title || defaultMeta.title,
          description: meta?.og_description || meta?.meta_description || defaultMeta.description,
          images: meta?.og_image ? [{ url: meta.og_image, width: 1200, height: 630 }] : [],
          type: "website",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
        },
        twitter: {
          card: "summary_large_image",
          title: meta?.twitter_title || meta?.meta_title || defaultMeta.title,
          description: meta?.twitter_description || meta?.meta_description || defaultMeta.description,
          images: meta?.twitter_image ? [meta.twitter_image] : [],
        },
        alternates: {
          canonical: meta?.canonical_url || `${process.env.NEXT_PUBLIC_SITE_URL}`,
        },
        error: null,
      };
    }
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      keywords: defaultMeta.keywords,
      openGraph: {
        title: defaultMeta.title,
        description: defaultMeta.description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
      },
      twitter: {
        card: "summary_large_image",
        title: defaultMeta.title,
        description: defaultMeta.description,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
      },
      error: result.message || "No metadata found",
    };
  } catch (error) {
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      keywords: defaultMeta.keywords,
      openGraph: {
        title: defaultMeta.title,
        description: defaultMeta.description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
      },
      twitter: {
        card: "summary_large_image",
        title: defaultMeta.title,
        description: defaultMeta.description,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/home`,
      },

      error: result.message || "No metadata found",
    };
  }
}

export async function generateMetadata() {
  const { title, description, keywords, twitter, openGraph, alternates } = await getMetaData();
  return {
    title,
    description,
    keywords,
    twitter,
    openGraph,
    alternates,
  };
}

export default async function HomePage() {
  const { data, error } = await fetchHomeData();
  const { data: goldRateData, error: goldRateError } = await fetchGoldRate();

  return (
    <HomeClient
      initialData={data}
      serviceBanner={data?.service}
      banner={data?.banner}
      branchLocatorData={data?.branchLocatorData}
      initialError={error}
      goldRate={goldRateData}
    />
  );
}
