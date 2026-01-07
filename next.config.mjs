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
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-and-suppliers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-distributors-in-india/feed",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-medicine-manufacturer-from-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/pharma-franchise-company-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/immunity-boosters-manufacturing-in-india",
        destination: "/blog/immunity-booster-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-franchise-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-manufacturers-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-manufacturing-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-on-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/franchise/best-pharma-franchise-company-in-nashik",
        destination: "/blog/ayurvedic-pcd-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/hand-sanitizer-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/third-party-manufacturers-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-companies-in-cuttack",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-franchise-company-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-goa",
        destination: "/blog/ayurvedic-pcd-company-in-goa",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/in-pan-india",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-contract-manufacturers-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-third-party-manufacturing",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-franchise-pcd-companies-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/aloe-vera-gel-brands-in-india",
        destination: "/blog/aloe-vera-gel-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/aloe-vera-gel-producers-in-india",
        destination: "/blog/aloe-vera-gel-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvecic-pcd-company-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-franchise-in-nasik",
        destination: "/blog/ayurvedic-pcd-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-products-manufacturers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-products-manufacturers-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
    ]
  }
};

export default nextConfig;
