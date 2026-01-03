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
      },
      {
        source: "/ayurvedic-pcd-company-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-west-bengal",
        permanent: true
      },
      {
        source: "/rules-for-making-ayurvedic-medicine-in-hindi",
        destination: "/blog/rules-for-making-ayurvedic-medicine-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturer-in-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-assam",
        destination: "/blog/ayurvedic-pcd-company-in-assam",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/top-100-ayurvedic-companies-in-india-2022",
        destination: "/blog/top-100-ayurvedic-companies-in-india-2022",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/ayurvedic-contract-manufacturing-company-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/license-to-sell-ayurvedic-medicine-in-hindi",
        destination: "/blog/license-to-sell-ayurvedic-medicine-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-business-opportunity-in-india-in-hindi",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-india",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-jind",
        destination: "/blog/ayurvedic-pcd-company-in-jind",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/top-ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/how-to-start-ayurvedic-marketing-company",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/tulsi-drops-manufacturers-in-india",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-puducherry",
        destination: "/blog/ayurvedic-pcd-company-in-puducherry",
        permanent: true
      },
    ]
  }
};

export default nextConfig;
