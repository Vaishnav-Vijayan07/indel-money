import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: "/apply-for-job",
        destination: "/career",
        permanent: true,
      },
      {
        source: "/author/indel",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/life-at-indel-money",
        destination: "/about-indel-money",
        permanent: true,
      },
      {
        source: "/category/gold-loan",
        destination: "/gold-loan",
        permanent: true,
      },
      {
        source: "/gold-loans-near-me",
        destination: "/gold-loan",
        permanent: true,
      },
      {
        source: "/category/uncategorized",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/details-of-key-managerial-personnel",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/downloads",
        destination: "/investors/csr",
        permanent: false,
      },
      {
        source: "/hp-test",
        destination: "/",
        permanent: true,
      },
      {
        source: "/indel-remit",
        destination: "/",
        permanent: true,
      },
      {
        source: "/emptestimonial/:slug",
        destination: "/emptestimonial",
        permanent: true,
      },
      {
        source: "/great-place-to-work",
        destination: "/emptestimonial",
        permanent: true,
      },
      {
        source: "/ncd-issue",
        destination: "/past-ncd-issues",
        permanent: true,
      },
      {
        source: "/video-gallery",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/secured-bonds",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/secured-bonds/:slug",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/public-issue-of-ncd",
        destination: "/past-ncd-issues",
        permanent: true,
      },
      {
        source: "/public-issue-of-ncd/:slug",
        destination: "/past-ncd-issues",
        permanent: true,
      },
      {
        source: "/loan-against-property-3",
        destination: "/loan-against-property",
        permanent: true,
      },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "7700",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "crm.intersmarthosting.in",
      },
      {
        protocol: "https",
        hostname: "backend.indelmoney.com",
      },
      {
        protocol: "https",
        hostname: "indelmoney.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
    ],
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Existing alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };

    // Performance optimizations
    if (!dev && !isServer) {
      // Split chunks optimization
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: "all",
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      "lodash",
      "date-fns",
      "lucide-react",
      "swiper",
      "react-leaflet",
      "react-intersection-observer",
      "leaflet",
      "leaflet.markercluster",
      "lightgallery",

      // Add your heavy packages here
    ],
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Environment variables
  env: {
    ANALYZE: process.env.ANALYZE,
  },
};

// Conditionally apply bundle analyzer
let finalConfig = nextConfig;

if (process.env.ANALYZE === "true") {
  try {
    const { default: withBundleAnalyzer } = await import("@next/bundle-analyzer");
    const bundleAnalyzer = withBundleAnalyzer({
      enabled: true,
    });
    finalConfig = bundleAnalyzer(nextConfig);
  } catch (error) {
    console.warn("Bundle analyzer not available:", error.message);
  }
}

export default finalConfig;

// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": path.resolve(__dirname, "src"),
//     };
//     return config;
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "backend.indelmoney.com",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "7700",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "crm.intersmarthosting.in",
//       },
//       {
//         protocol: "https",
//         hostname: "www.youtube.com",
//       },
//     ],
//   },
// };

// export default nextConfig;
