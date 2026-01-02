/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zocveda.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.zocveda.com", // allows cms., cdn., media., files., etc.
        pathname: "/wp-content/uploads/**",
      }
    ],
  },

  async redirects() {
    return [
      {
        source: "/third-party-manufacturing-of-ayurvedic-products",
        destination: "/third-party-manufacturing",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-goa",
        destination: "/blog/ayurvedic-pcd-company-in-goa",
        permanent: true
      }

    ]
  }
};

export default nextConfig;
