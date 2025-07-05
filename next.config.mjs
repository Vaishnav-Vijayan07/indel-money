// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Performance optimizations
//   compress: true,
//   poweredByHeader: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // Image optimization
//   images: {
//     formats: ["image/webp", "image/avif"],
//     minimumCacheTTL: 31536000, // 1 year
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//     remotePatterns: [
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
//         hostname: "backend.indelmoney.com",
//         pathname: "/uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "indelmoney.com",
//       },
//       {
//         protocol: "https",
//         hostname: "www.youtube.com",
//       },
//     ],
//   },

//   // Webpack optimizations
//   webpack: (config, { dev, isServer }) => {
//     // Existing alias
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": path.resolve(__dirname, "src"),
//     };

//     // Performance optimizations
//     if (!dev && !isServer) {
//       // Split chunks optimization
//       config.optimization.splitChunks = {
//         ...config.optimization.splitChunks,
//         chunks: "all",
//         cacheGroups: {
//           ...config.optimization.splitChunks.cacheGroups,
//           vendor: {
//             test: /[\\/]node_modules[\\/]/,
//             name: "vendors",
//             priority: 10,
//             reuseExistingChunk: true,
//           },
//         },
//       };
//     }

//     return config;
//   },

//   // Experimental features for better performance
//   experimental: {
//     optimizePackageImports: [
//       "lodash",
//       "date-fns",
//       "lucide-react",
//       // Add your heavy packages here
//     ],
//   },

//   // Headers for better caching and security
//   async headers() {
//     return [
//       {
//         source: "/:path*",
//         headers: [
//           {
//             key: "X-DNS-Prefetch-Control",
//             value: "on",
//           },
//           {
//             key: "X-Frame-Options",
//             value: "DENY",
//           },
//           {
//             key: "X-Content-Type-Options",
//             value: "nosniff",
//           },
//           {
//             key: "Referrer-Policy",
//             value: "origin-when-cross-origin",
//           },
//         ],
//       },
//       {
//         source: "/images/:path*",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },
//       {
//         source: "/_next/static/:path*",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },
//     ];
//   },

//   // Environment variables
//   env: {
//     ANALYZE: process.env.ANALYZE,
//   },
// };

// // Conditionally apply bundle analyzer
// let finalConfig = nextConfig;

// if (process.env.ANALYZE === "true") {
//   try {
//     const { default: withBundleAnalyzer } = await import("@next/bundle-analyzer");
//     const bundleAnalyzer = withBundleAnalyzer({
//       enabled: true,
//     });
//     finalConfig = bundleAnalyzer(nextConfig);
//   } catch (error) {
//     console.warn("Bundle analyzer not available:", error.message);
//   }
// }

// export default finalConfig;

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.indelmoney.com",
        pathname: "/uploads/**",
      },
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
        hostname: "www.youtube.com",
      },
    ],
  },
};

export default nextConfig;
