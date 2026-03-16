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
      {
        source: "/franchise/ayurvedic-business-prospects",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-franchise-pcd-companies-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-allahabad",
        destination: "/blog/ayurvedic-pcd-company-in-allahabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-arunachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-manipur",
        destination: "/blog/ayurvedic-pcd-company-in-manipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-nagaland",
        destination: "/blog/ayurvedic-pcd-company-in-nagaland",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-franchise-in-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-goa",
        destination: "/blog/ayurvedic-pcd-company-in-goa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-contract-manufacturers-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-distributor-pcd-franchise-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-dehradun",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-gurgaon",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-jaipur",
        destination: "/blog/ayurvedic-pcd-company-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-manipur",
        destination: "/blog/ayurvedic-pcd-company-in-manipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-patiala",
        destination: "/blog/ayurvedic-pcd-company-in-patiala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-daman-diu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-india",
        destination: "/blog/category/ayurvedic-pcd-franchise/827",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-jaipur",
        destination: "/blog/ayurvedic-pcd-company-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-puducherry",
        destination: "/blog/ayurvedic-pcd-company-in-puducherry",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-dehradun",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-gurgaon",
        destination: "/blog/ayurvedic-pcd-company-in-gurgaon",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-jaipur",
        destination: "/blog/ayurvedic-pcd-company-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-patiala",
        destination: "/blog/ayurvedic-pcd-company-in-patiala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-on-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-manipur",
        destination: "/blog/ayurvedic-pcd-company-in-manipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-meghaaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-nagaland",
        destination: "/blog/ayurvedic-pcd-company-in-nagaland",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-arunachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-nagaland",
        destination: "/blog/ayurvedic-pcd-company-in-nagaland",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-hand-sanitizer-companies-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-franchise-pcd-in-orissa",
        destination: "/blog/ayurvedic-pcd-company-in-orissa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-medicine-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-medicine-manufacturers-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-franchise-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-franchise-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-franchise-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-franchise-for-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-in-ranchi",
        destination: "/blog/ayurvedic-pcd-company-in-ranchi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-products-manufacturer-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-products-manufacturing-company-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-manufacturing-company-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-marketing-companies-in-india",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medical-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-business-opportunity-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-marketing-companies-in-india",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medical-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-business-opportunity-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-business-opportunity-in-india",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-distributors-franchise",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-distributors-in-delhi-ncr",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturer-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-paonta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturing-company-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-wholesalers-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-wholesalers-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicines-products-distributors-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicines-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicines-manufacturers-suppliers-exporters",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicines-third-party-manufacturers-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-business-in-patiala",
        destination: "/blog/ayurvedic-pcd-company-in-patiala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-allahabad",
        destination: "/blog/ayurvedic-pcd-company-in-allahabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-assam",
        destination: "/blog/ayurvedic-pcd-company-in-assam",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-chandigarh",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-frachise-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-frachise-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-assam",
        destination: "/blog/ayurvedic-pcd-company-in-assam",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-odisha",
        destination: "/blog/ayurvedic-pcd-company-in-orissa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-ranchi",
        destination: "/blog/ayurvedic-pcd-company-in-ranchi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-agra",
        destination: "/blog/ayurvedic-pcd-company-in-agra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-allahabad",
        destination: "/blog/ayurvedic-pcd-company-in-allahabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-arunachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-cuttack",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-dehradun",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-goa",
        destination: "/blog/ayurvedic-pcd-company-in-goa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-gurgaon",
        destination: "/blog/ayurvedic-pcd-company-in-gurgaon",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-jaipur",
        destination: "/blog/ayurvedic-pcd-company-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-manipur",
        destination: "/blog/ayurvedic-pcd-company-in-manipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-nagaland",
        destination: "/blog/ayurvedic-pcd-company-in-nagaland",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-patiala",
        destination: "/blog/ayurvedic-pcd-company-in-patiala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-pune",
        destination: "/blog/ayurvedic-pcd-company-in-pune",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-ranchi",
        destination: "/blog/ayurvedic-pcd-company-in-ranchi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-manufacturers-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-opportunities-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-agra",
        destination: "/blog/ayurvedic-pcd-company-in-agra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-pune",
        destination: "/blog/ayurvedic-pcd-company-in-pune",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-agra",
        destination: "/blog/ayurvedic-pcd-company-in-agra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-assam",
        destination: "/blog/ayurvedic-pcd-company-in-assam",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-karnataka",
        destination: "/franchise/ayurvedic-pcd-pharma-franchise-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-odisha",
        destination: "/blog/ayurvedic-pcd-company-in-orissa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-franchise-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-franchise-in-bhubaneswar-orissa",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-franchise-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-franchise-pcd-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-manufacturing-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-pcd-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-product-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-and-preparations-manufacturers-in-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-franchise-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-franchise-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturer-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturer-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturer-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturing-company-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-pcd-franchise-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturer-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturer-in-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturer-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturing-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-franchise-in-udaipur",
        destination: "/blog/ayurvedic-pcd-company-in-udaipur",
        permanent: true
      },
      {
        source: "/franchise/best-100-ayurvedic-companies-in-india-2022",
        destination: "/blog/top-100-ayurvedic-companies-in-india-2022",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-companies-in-world",
        destination: "/blog/top-ayurvedic-companies-in-world",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-company-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-company-in-puducherry",
        destination: "/blog/ayurvedic-pcd-company-in-puducherry",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-franchise-company",
        destination: "/blog/category/ayurvedic-pcd-franchise/827",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-distributors-in-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-distributors-in-india",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-distributors-in-patna-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-and-suppliers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-wholesale-business-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-bhopal",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-companies-in-cuttack",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-companies-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-company-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-company-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-company-in-ranchi",
        destination: "/blog/ayurvedic-pcd-company-in-ranchi",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pharma-company-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pharma-franchise-in-nashik",
        destination: "/blog/ayurvedic-pcd-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-products-manufacturing-company-in-bhopal",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-vitamin-c-franchise-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-franchise-in-india",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-franchise-company-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-pcd-franchise-company-in-agra",
        destination: "/blog/ayurvedic-pcd-company-in-agra",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-pcd-franchise-company-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/best-pcd-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/franchise/best-pcd-franchise-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/best-pharma-franchise-company-in-nashik",
        destination: "/blog/franchise/best-pharma-franchise-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/best-top-10-ayurvedic-pcd-franchise-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/best-v",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/chandigarh-based-ayurvedic-pcd-company",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/chyawanprash-manufacturers",
        destination: "/blog/chawyanprash-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/chyawanprash-manufacturing-companies",
        destination: "/blog/chawyanprash-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/contract-manufacturers-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/contract-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/cough-syrup-brands-in-india",
        destination: "/blog/cough-syrup-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/cough-syrup-manufacturing-companies-in-india",
        destination: "/blog/cough-syrup-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/cough-syrup-producers-in-india",
        destination: "/blog/cough-syrup-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/derma-product-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/distributor-of-ayurvedic-medicines-in-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/hand-sanitizer-manufacturers-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/hand-sanitizer-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-medicine-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-pune",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-medicine-manufacturer-from-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-pcd-franchise-in-arunachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-pcd-franchise-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/herbal-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-franchise-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/herbal-hand-sanitizer-brands-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-business-opportunity",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-manufacturers-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-company-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-company-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-company-in-orissa",
        destination: "/blog/ayurvedic-pcd-company-in-orissa",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-company-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-company-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-in-daman-diu",
        destination: "/blog/ayurvedic-pcd-company-in-daman-diu",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-opportunities-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-pharma-franchise-in-cuttack",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-pharma-franchise-in-jind",
        destination: "/blog/ayurvedic-pcd-company-in-jind",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-pharma-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/herbal-pharma-franchise-pcd-in-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/franchise/herbal-product-business-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/herbal-products-exporters-manufacturers-suppliers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/herbal-third-party-manufacturing",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/how-to-start-ayurvedic-marketing-company",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/how-to-start-ayurvedic-pharmacy",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/how-to-start-ayurvedic-herbal-unani-company",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/immunity-booster-products-manufacturers-in-india",
        destination: "/blog/immunity-booster-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/immunity-boosters-manufacturing-companies-in-india",
        destination: "/blog/immunity-booster-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/immunity-boosters-manufacturing-in-india",
        destination: "/blog/immunity-booster-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/in-pan-india",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/leading-100-ayurvedic-companies-in-india-2022",
        destination: "/blog/top-100-ayurvedic-companies-in-india-2022",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-distributor-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-distributors-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-companies-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-companies-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-product-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-franchise-in-india",
        permanent: true
      },
      {
        source: "/franchise/leading-herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/leading-herbal-companies",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-companies-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-companies-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-companies-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-companies-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-medicine-manufacturers-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-medicine-suppliers-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-medicine-suppliers-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-pcd-companies-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/list-of-top-ayurvedic-medicine-manufacturers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/medicine-distributors-in-pune",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-daman-diu",
        destination: "/blog/ayurvedic-pcd-company-in-daman-diu",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-franchise-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/pcd-companies-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-companies-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-company-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-services-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-services-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-services-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/franchise/pcd-herbal-franchise-in-gurugram",
        destination: "/blog/ayurvedic-pcd-company-in-gurgaon",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-ayurvedic-and-herbal-products-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-in-paonta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-in-pune",
        destination: "/blog/ayurvedic-pcd-company-in-pune",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/franchise/perfect-ayurvedic-business-opportunity",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/franchise/pharma-companies-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/pharma-companies-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/pharma-franchise-company-in-daman-diu",
        destination: "/blog/ayurvedic-pcd-company-in-daman-diu",
        permanent: true
      },
      {
        source: "/franchise/pharma-franchise-company-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/pharma-franchise-pcd-in-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/franchise/private-label-herbal-ayurvedic-pcd-franchise-in-jind",
        destination: "/blog/ayurvedic-pcd-company-in-jind",
        permanent: true
      },
      {
        source: "/franchise/pune-herbal-ayurvedic-medicine-suppliers-and-manufacturers",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/franchise/single-herb-manufacturers-in-india",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/franchise/single-herb-manufacturing-companies-in-india",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/franchise/single-herb-medicine-brands-in-india",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/franchise/single-herb-medicine-manufacturers-in-india",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-franchise-company-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-medicine-manufacturers-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-medicine-manufacturers-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-medicine-manufacturers-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-pcd-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-pcd-company-in-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-pcd-company-in-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-pcd-company-in-udaipur",
        destination: "/blog/ayurvedic-pcd-company-in-udaipur",
        permanent: true
      },
      {
        source: "/franchise/the-best-herbal-pcd-franchise-in-bhubaneswar",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/franchise/the-leading-ayurvedic-pcd-company-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/franchise/the-leading-ayurvedic-pcd-company-in-udaipur",
        destination: "/blog/ayurvedic-pcd-company-in-udaipur",
        permanent: true
      },
      {
        source: "/franchise/the-leading-the-best-ayurvedic-franchise-company-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/franchise/third-party-ayurvedic-manufacturer-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/third-party-manufacturers-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/third-party-manufacturing-companies-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies-in-world",
        destination: "/blog/top-ayurvedic-companies-in-world",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-medicine-manufacturers-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-medicine-manufacturers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-pcd-franchise-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-pcd-franchise-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/franchise/top-10-pcd-companies-in-orissa",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/franchise/top-10-pcd-pharma-companies-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-companies-in-india-2022",
        destination: "/blog/top-100-ayurvedic-companies-in-india-2022",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-pune",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-manufacturers-in-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-manufacturers-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-wholesalers-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-wholesalers-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicines-wholesalers-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/top-20-baidyanath-ayurvedic-medicine-distributors-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/top-5-ayurvedic-pcd-franchise-in-udaipur",
        destination: "/blog/ayurvedic-pcd-company-in-udaipur",
        permanent: true
      },
      {
        source: "/franchise/top-50-ayurvedic-medicine-distributors-in-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/top-50-ayurvedic-medicine-manufacturers-in-paonta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/franchise/top-50-ayurvedic-medicine-wholesalers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-world",
        destination: "/blog/top-ayurvedic-companies-in-world",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-distributors-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturer-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-companies-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-companies-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-bhopal",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-bhubaneswar",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-chandigarh",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-franchise-company",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-franchise-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-franchise-in-jind",
        destination: "/blog/ayurvedic-pcd-company-in-jind",
        permanent: true
      },
      {
        source: "/franchise/top-herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/top-pcd-company-in-puducherry",
        destination: "/blog/ayurvedic-pcd-company-in-puducherry",
        permanent: true
      },
      {
        source: "/franchise/top-pharma-franchise-company-in-paonta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/franchise/top-vitamin-c-serum-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-franchise-in-india",
        permanent: true
      },
      {
        source: "/franchise/topmost-ayurvedic-pcd-companies-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/topmost-ayurvedic-pcd-company-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/trustworthy-ayurvedic-pcd-company-in-chandigarh",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/tulsi-drops-manufacturers-suppliers",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/tulsi-drops-manufacturers-from-india",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/tulsi-drops-manufacturing-company-in-india",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/tulsi-drops-producers-in-india",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/vitamin-c-serum-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/yurvedic-herbal-pcd-company-in-koch",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/product-category/acidity",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/acne",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/allergy",
        destination: "/product/category/respiratory-care",
        permanent: true
      },
      {
        source: "/product-category/anal-fistula",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/anemia",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/anti-aging",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/anxiety",
        destination: "/product/category/mental-and-sleep-care",
        permanent: true
      },
      {
        source: "/product-category/arthiritis",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/asthma",
        destination: "/product/category/respiratory-care",
        permanent: true
      },
      {
        source: "/product-category/baby-health-issues",
        destination: "/product/category/kids-health",
        permanent: true
      },
      {
        source: "/product-category/back-pain",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/blood-pressure",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/cervical-spondylosis",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/constipation",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/cough-cold-flu",
        destination: "/product/category/respiratory-care",
        permanent: true
      },
      {
        source: "/product-category/cracked-heals",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/dandruff",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/dengue",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/dental-problems",
        destination: "/product/category/dental-and-oral-care",
        permanent: true
      },
      {
        source: "/product-category/depression",
        destination: "/product/category/mental-and-sleep-care",
        permanent: true
      },
      {
        source: "/product-category/dermatosis",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/detoxification",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/diabetes",
        destination: "/product/category/diabetes-and-metabolic-wellness",
        permanent: true
      },
      {
        source: "/product-category/digestion",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/dry-skin",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/fatty-liver",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/female-health",
        destination: "/product/category/womens-health",
        permanent: true
      },
      {
        source: "/product-category/fever",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/gout",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/grey-hair",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/hair-loss",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/halitosisbad-breath",
        destination: "/product/category/respiratory-care",
        permanent: true
      },
      {
        source: "/product-category/heart-problems",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/hypertension",
        destination: "/product/category/mental-and-sleep-care",
        permanent: true
      },
      {
        source: "/product-category/inflammation",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/constipation",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/insomnia",
        destination: "/product/category/mental-and-sleep-care",
        permanent: true
      },
      {
        source: "/product-category/irritable-bowel-syndrome-ibs",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/joint-pains",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/kidney-disorders",
        destination: "/product/category/kidney-and-urinary-care",
        permanent: true
      },
      {
        source: "/product-category/lactation-issues",
        destination: "/product/category/womens-health",
        permanent: true
      },
      {
        source: "/product-category/leucorrhea",
        destination: "/product/category/womens-health",
        permanent: true
      },
      {
        source: "/product-category/liver-diseases",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/low-bone-density",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/low-immunity",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/low-memory",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/menopause",
        destination: "/product/category/womens-health",
        permanent: true
      },
      {
        source: "/product-category/migraine",
        destination: "/product/category/mental-and-sleep-care",
        permanent: true
      },
      {
        source: "/product-category/nutritional-deficiency",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/obesity",
        destination: "/product/category/diabetes-and-metabolic-wellness",
        permanent: true
      },
      {
        source: "/product-category/oral-hygeine",
        destination: "/product/category/dental-and-oral-care",
        permanent: true
      },
      {
        source: "/product-category/osteoarthiritis",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/personal-hygeine",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/piles",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/platelet-dysfunction",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/prostate-disorders",
        destination: "/product/category/mens-health",
        permanent: true
      },
      {
        source: "/product-category/renal-problems",
        destination: "/product/category/kidney-and-urinary-care",
        permanent: true
      },
      {
        source: "/product-category/respiratory-disorders",
        destination: "/product/category/respiratory-care",
        permanent: true
      },
      {
        source: "/product-category/rheumatoid-arthiritis",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/skin-problems",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/stomach-disorders",
        destination: "/product/category/digestive-care",
        permanent: true
      },
      {
        source: "/product-category/stress",
        destination: "/product/category/mental-and-sleep-care",
        permanent: true
      },
      {
        source: "/product-category/tanning",
        destination: "/product/category/hair-and-skin-care",
        permanent: true
      },
      {
        source: "/product-category/thyroid-disorders",
        destination: "/product/category/diabetes-and-metabolic-wellness",
        permanent: true
      },
      {
        source: "/product-category/uric_acid",
        destination: "/product/category/pain-and-bone-care",
        permanent: true
      },
      {
        source: "/product-category/urinary_tract_infections",
        destination: "/product/category/kidney-and-urinary-care",
        permanent: true
      },
      {
        source: "/product-category/urticaria",
        destination: "/product/category/kidney-and-urinary-care",
        permanent: true
      },
      {
        source: "/product-category/weakness",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/product-category/weight_loss",
        destination: "/product/category/diabetes-and-metabolic-wellness",
        permanent: true
      },
      {
        source: "/product-category/cervical-spondylosis",
        destination: "/product/category/cervical-spondylosis/83",
        permanent: true
      },
      {
        source: "/product-category/osteoarthiritis",
        destination: "/product/category/osteoarthiritis/139",
        permanent: true
      },
      {
        source: "/product-category/acidity/",
        destination: "/product/category/acidity/70",
        permanent: true
      },
      {
        source: "/product-category/personal-hygeine",
        destination: "/product/category/personal-hygeine/136",
        permanent: true
      },
      {
        source: "/product-category/joint-pains",
        destination: "/product/category/joint-pains/112",
        permanent: true
      },
      {
        source: "/product-category/inflammation",
        destination: "/product/category/inflammation/108",
        permanent: true
      },
      {
        source: "/product-category/low-immunity",
        destination: "/product/category/low-immunity/124",
        permanent: true
      },
      {
        source: "/product-category/heart-problems/",
        destination: "/product/category/heart-problems/102",
        permanent: true
      },
      {
        source: "/product-category/premature-ejaculation",
        destination: "/product/category/premature-ejaculation/133",
        permanent: true
      },
      {
        source: "/product-category/liver-diseases",
        destination: "/product/category/liver-diseases/122",
        permanent: true
      },
      {
        source: "/product-category/arthiritis",
        destination: "/product/category/arthiritis/71",
        permanent: true
      },
      {
        source: "/product-category/menopause",
        destination: "/product/category/menopause/129",
        permanent: true
      },
      {
        source: "/product-category/dry-skin/",
        destination: "/product/category/dry-skin/92",
        permanent: true
      },
      {
        source: "/product-category/platelet-dysfunction",
        destination: "/product/category/platelet-dysfunction/134",
        permanent: true
      },
      {
        source: "/product-category/anti-aging",
        destination: "/product/category/anti-aging/75",
        permanent: true
      },
      {
        source: "/product-category/baby-health-issues/",
        destination: "/product/category/baby-health-issues/78",
        permanent: true
      },
      {
        source: "/product-category/anxiety",
        destination: "/product/category/anxiety/74",
        permanent: true
      },
      {
        source: "/product-category/oral-hygeine",
        destination: "/product/category/oral-hygeine/138",
        permanent: true
      },
      {
        source: "/product-category/weakness/",
        destination: "/product/category/weakness/104",
        permanent: true
      },
      {
        source: "/product/alkaved-urinary-calculi-cystitis-attack-of-renalcolic",
        destination: "/product/alkaved-syrup-systemic-alkalizer",
        permanent: true
      },
      {
        source: "/product/alkaved-urinary-calculi-cystitis-attack-of-renalcolic-2",
        destination: "/product/alkaved-capsules-systemic-alkalizer",
        permanent: true
      },
      {
        source: "/product/alkaved-tableturinary-calculi-cystitis-attack-of-renalcolic",
        destination: "/product/alkaved-tablet-for-kidney-stones",
        permanent: true
      },
      {
        source: "/product/diastop-for-diabetes-mellitus-general-weaknessdue-to-diabetes",
        destination: "/product/diastop-syrup-for-diabetes",
        permanent: true
      },
      {
        source: "/product/diastop-for-diabetes-mellitus-general-weaknessdue-to-diabetes-2",
        destination: "/product/diastop-capsules-for-diabetes",
        permanent: true
      },
      {
        source: "/product/digscid-a-herbal-antacid",
        destination: "/product/digscid-syrup-herbal-antacid",
        permanent: true
      },
      {
        source: "/product/digscid-a-herbal-antacid-2",
        destination: "/product/digscid-capsules-herbal-antacid",
        permanent: true
      },
      {
        source: "/product/iroboost-iron-deficiency-anaemianutritionaldeficiency",
        destination: "/product/iroboost-iron-tonic-for-iron-deficiency",
        permanent: true
      },
      {
        source: "/product/iroboost-iron-deficiency-anaemianutritionaldeficiency-2",
        destination: "/product/iroboost-capsules-for-iron-deficiency",
        permanent: true
      },
      {
        source: "/product/leucofyn-for-specific-non-specificleucorrhoea",
        destination: "/product/leucofyn-syrup-for-leucorrhoea",
        permanent: true
      },
      {
        source: "/product/leucofyn-for-specific-non-specificleucorrhoea-2",
        destination: "/product/leucofyn-capsules-for-leucorrhoea",
        permanent: true
      },
      {
        source: "/product/livtru-homeostatic-health-tonic-treatshepatitis-jaundice-cirrhosis-due-todrugs-alcohol-infantile-liverdisordersanorexia",
        destination: "/product/livtru-capsule-for-healthy-liver",
        permanent: true
      },
      {
        source: "/product/livtru-homeostatic-health-tonic-treatshepatitis-jaundice-cirrhosis-due-todrugs-alcohol-infantile-liverdisordersanorexia-2",
        destination: "/product/livtru-tablets-for-healthy-liver",
        permanent: true
      },
      {
        source: "/product/tranqfyn-hysteria-hypertension-anxietydepression-insomnia",
        destination: "/product/tranqfyn-ayurvedic-syrup-stress-reliever",
        permanent: true
      },
      {
        source: "/product/tranqfyn-hysteria-hypertension-anxietydepression-insomnia-2",
        destination: "/tranqfyn-ayurvedic-capsules-stress-reliever",
        permanent: true
      },
      {
        source: "/product/vedcumin-anti-inflammtoryanti-oxidantimmunity-booster",
        destination: "/product/vedcumin-syrup-immunity-booster",
        permanent: true
      },
      {
        source: "/product/vedcumin-anti-inflammtoryanti-oxidantimmunity-booster-2",
        destination: "/product/vedcumin-tablets-immunity-booster",
        permanent: true
      },
      {
        source: "/shop/page/10",
        destination: "/",
        permanent: true
      },
      {
        source: "/shop/page/7",
        destination: "/",
        permanent: true
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/shop",
        destination: "/",
        permanent: true
      },
      {
        source: "/about-us/1000",
        destination: "/about",
        permanent: true
      },
      {
        source: "/shop/page/4/",
        destination: "/",
        permanent: true
      },
      {
        source: "/packing/50-ml",
        destination: "/",
        permanent: true
      },
      {
        source: "/packing/300-ml",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic/ayurvedic-pcd-franchise",
        destination: "/blog/category/ayurvedic-pcd-franchise/827",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/essential-licenses-needed-to-start-a-pharma-business-in-india",
        destination: "/blog/essential-licenses-needed-to-start-a-pharma-business-in-india",
        permanent: true
      },
      {
        source: "/pcd-franchise",
        destination: "/blog/category/ayurvedic-pcd-franchise/82",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/product/tranqfyn-hysteria-hypertension-anxietydepression-insomnia-2",
        destination: "/product/tranqfyn-ayurvedic-capsules-stress-reliever",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-gwalior/feed",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/ayurvedic-vitamin-c-serum-manufacturers-in-india-in-hindi",
        destination: "/blog/ayurvedic-vitamin-c-serum-manufacturers-in-india-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/ayurvedic-vitamin-c-serum-franchise-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-franchise-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-pune",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-ponta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/shop/page/11",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/shop/page/6",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/chawyanprash-manufacturers-in-india",
        destination: "/blog/chawyanprash-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/how-to-start-ayurvedic-marketing-company-in-hindi",
        destination: "/blog/how-to-start-ayurvedic-marketing-company-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/ayurvedic-companies-in-india-in-hindi",
        destination: "/blog/ayurvedic-companies-in-india-in-hindi",
        permanent: true
      },
      {
        source: "/product-category/uncategorized/page/1",
        destination: "/products",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/product-category/uncategorized/",
        destination: "/products",
        permanent: true
      },
      {
        source: "/product-category/impotence",
        destination: "/product/category/impotence/140",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-business-opportunity-in-india",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturer-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true
      },
      {
        source: "/ayurvedic/ayurvedic-companies",
        destination: "/blog/category/ayurvedic-companies/148",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/shop/page/8",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/ayurvedic-herbal-medicine-manufacturers-in-india-in-hindi",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india-in-hindi",
        permanent: true
      },
      {
        source: "/shop/page/9",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-chandigarh",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/ayurvedic-vitamin-c-serum-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/shop/page/3",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/product-category/low-sperm-count",
        destination: "/product/category/low-sperm-count/126",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/product-category/uncategorized",
        destination: "/products",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/our-divisions",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/top-ayurvedic-companies-in-world",
        destination: "/blog/top-ayurvedic-companies-in-world",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/aloe-vera-gel-manufacturers-in-india",
        destination: "/blog/aloe-vera-gel-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/ayurvedic-herbal-medicine-manufacturers-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-pharma-franchise-in-hindi",
        destination: "/ayurvedic-pcd-pharma-franchise",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/shop/page/7",
        destination: "/",
        permanent: true
      },
      {
        source: "/shop",
        destination: "/",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-pharma-franchise-in-cuttack/feed",
        destination: "blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/product-category/low-immunity/feed",
        destination: "/product/category/detox-and-cleaning-wellness",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-indore/feed",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-moradabad/feed",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/shop/page/10",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true
      },
      {
        source: "/product-category/low-sperm-count/",
        destination: "/product/category/low-sperm-count/126",
        permanent: true
      },
      {
        source: "/shop/page/9/",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/single-herb-manufacturers",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-gurgaon",
        destination: "/blog/ayurvedic-pcd-company-in-gurgaon",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-pcd-franchise-in-arunachal-pradesh/feed",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/ayurvedic-contract-manufacturing-company-in-india-in-hindi",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india-in-hindi",
        permanent: true
      },
      {
        source: "/chyawanprash-manufacturers-in-india-in-hindi",
        destination: "/blog/chyawanprash-manufacturers-in-india-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-dehradun",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/vision-mision",
        destination: "/about",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/ayurvedic",
        destination: "/ayurveda",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/ayurvedic/uncategorized",
        destination: "/ayurveda",
        permanent: true
      },
      {
        source: "/shop/page/4",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-pune",
        destination: "/blog/ayurvedic-pcd-company-in-pune",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/ayurvedic/",
        destination: "/ayurveda",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/packing/60-cap",
        destination: "/",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-bhopal",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-bhubaneswar",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-allahabad",
        destination: "/blog/ayurvedic-pcd-company-in-allahabad",
        permanent: true
      },
      {
        source: "/product-category/erectile-dysfunction",
        destination: "/product/category/erectile-dysfunction/94",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/shop/page/4/",
        destination: "/",
        permanent: true
      },
      {
        source: "/wp-content/uploads",
        destination: "/",
        permanent: true
      },
      {
        source: "/wp-content/themes/betheme-child",
        destination: "/",
        permanent: true
      },
      {
        source: "/wp-admin",
        destination: "/",
        permanent: true
      },
      {
        source: "/product/shakti-up-a-powerful-vital-health-tonic",
        destination: "/product/shakti-up-juice-vital-health-tonic",
        permanent: true
      },
      {
        source: "/product/digstone-mpaired-digestion-constipationhyperacidityhypoaciditylassitudedyspep-sia-gastricdiscomfortflatulence",
        destination: "/product/digstone-digestive-support-syrup",
        permanent: true
      },
      {
        source: "/product/gas-har-gastritis-dyspepsia",
        destination: "/product/gas-har-herbal-digestive-support",
        permanent: true
      },
      {
        source: "/product/pylofyn-syp",
        destination: "/product/pylofyn-syrup-for-piles-hemorrhoids",
        permanent: true
      },
      {
        source: "/product/pylofyn-capsules",
        destination: "/product/pylofyn-capsules-for-piles-hemorrhoids",
        permanent: true
      },
      {
        source: "/product/pilofyn-cream-herbal-treatment-for-piles-fissures",
        destination: "/product/pylofyn-cream-for-piles-fissures",
        permanent: true
      },
      {
        source: "/product/pilofyn-for-internal-and-external-hemorrhoidsanal-fissures-pregnancy-inducedhaemorrhoids-it-also-prevents-secondarymicrobial-infections-in-the-body",
        destination: "/product/pylofyn-capsules-for-internal-and-external-hemorrhoids",
        permanent: true
      },
      {
        source: "/product/pilofyn-syrup-herbal-remedy-for-piles",
        destination: "/product/pylofyn-syrup-herbal-remedy-for-piles",
        permanent: true
      },
      {
        source: "/product/livtru-da-liver-tonic-with-benefits-of-enzyme",
        destination: "/product/livtru-da-liver-tonic",
        permanent: true
      },
      {
        source: "/product/livtru-d-s-homeostatic-health-tonic-treatshepatitis-jaundice-cirrhosis-due-todrugs-alcohol-infantile-liverdisordersanorexia",
        destination: "/product/livtru-ds-liver-tonic",
        permanent: true
      },
      {
        source: "/product/livtru-t-s-liver-tonic-for-adults",
        destination: "/product/livtru-ts-liver-tonic-for-adults",
        permanent: true
      },
      {
        source: "/product/livtru-sl-support-healthy-liver-functions-with-added-benefits-of-silimarine",
        destination: "/product/livtru-sl-liver-tonic",
        permanent: true
      },
      {
        source: "/product/orthofyn-rhematoid-arthrhitis-osteoarthrhitiscervical-lumbar-spondylosis-traumaticinflamatory-conditions",
        destination: "/product/orthofyn-syrup-for-joint-pain",
        permanent: true
      },
      {
        source: "/product/calryz-a-perfect-combination-of-calcium",
        destination: "/product/calryz-syrup-combination-of-calcium",
        permanent: true
      },
      {
        source: "/product/itchcalm-skin-lotion-removes-acne-pimple-spots-blemisheswrinkles-also-effective-in-ring-wormitching-eczema-leucoderma-urticariaskin-allergy-and-sun-burns",
        destination: "/product/itchcalm-skin-lotion",
        permanent: true
      },
      {
        source: "/product/breth-ezy-allergic-rhinitis-chronic-bronchitisbronchial-asthma-chronic-coughrespiratory-allergy",
        destination: "/product/breth-ezy-capsules-for-allergies-cough-asthma",
        permanent: true
      },
      {
        source: "/product/sagitus-honey-based-cough-syrupcoughcoldbronchitis-respiratorydisorders",
        destination: "/product/sagitus-cough-syrup",
        permanent: true
      },
      {
        source: "/product/breth-ezy-for-severe-coughchronic-bronchitis-asthma",
        destination: "/product/breth-ezy-syrup-for-cough-chronic-bronchitis-asthma",
        permanent: true
      },
      {
        source: "/product/cofset-coughcoldbronchitis-respiratorydisorders",
        destination: "/product/cofset-cough-syrup",
        permanent: true
      },
      {
        source: "/product/boncis-q-for-joint-health-bone-tissue-growth-2",
        destination: "/product/boncis-q-capsules-for-joint-health-bone-tissue-growth",
        permanent: true
      },
      {
        source: "/product/boncis-q-for-joint-health-bone-tissue-growth",
        destination: "/product/boncis-q-syrup-for-joint-health-bone-tissue-growth",
        permanent: true
      },
      {
        source: "/product/orthofyn-balm-muscular-debilityjoint-pain",
        destination: "/product/orthofyn-balm-for-muscular-debility-joint-pain",
        permanent: true
      },
      {
        source: "/product/noni-with-garcinia-cambogia",
        destination: "/product/noni-with-garcinia-cambogia-juice",
        permanent: true
      },
      {
        source: "/product/prostfyn",
        destination: "/product/prostfyn-capsules-for-prostate-health-urinary-flow",
        permanent: true
      },
      {
        source: "/product/lactofem-lactogenic-glactokinetic-lactopoiticaction-serves-as-natural-ironreinforcement-during-pregnancy-keepmother-ready-for-lactation-stageexcellent-restorative",
        destination: "/product/lactofem-syrup-Lactogenic-restorative-support-for-mothers",
        permanent: true
      },
      {
        source: "/product/femfyn-leucorrhoea-oilgomenorrhoeairregular-primary-secondaryamenorrhea",
        destination: "/product/femfyn-syrup-for-menstrual-disorder",
        permanent: true
      },
      {
        source: "/product/femfyn-menstrual-imbalance-amenorrheadysmenorrhea",
        destination: "/product/femfyn-capsules-for-menstrual-imbalance",
        permanent: true
      },
      {
        source: "/product/lactofem-lactogenic-glactokinetic-lactopoitic-action-serves-as-naturaliron-reinforcement-duringpregnancy-keep-mother-ready-forlactation-stage-excellentrestorative",
        destination: "/product/lactofem-capsules-nutritional-support-for-mothers",
        permanent: true
      },
      {
        source: "/product/keshfyn-hair-oil-helps-strengthen-soften-andrestore-shine",
        destination: "/product/keshfyn-onion-hair-oil",
        permanent: true
      },
      {
        source: "/product/keshfyn-hair-fall-pre-mature-greying-of-hair",
        destination: "/product/keshfyn-hair-capsules-for-hair-fall-premature-greying",
        permanent: true
      },
      {
        source: "/product/keshsafe-oil",
        destination: "/product/keshsafe-hair-oil-for-dandruff-hair-strength",
        permanent: true
      },
      {
        source: "/product/hydrofyn-cold-cream",
        destination: "/product/hydrofyn-aloevera-cold-cream",
        permanent: true
      },
      {
        source: "/product/skinfyn-face-pack-treats-hyperpigmentation-improvescomplexion",
        destination: "/product/skinfyn-face-pack",
        permanent: true
      },
      {
        source: "/product/itchcalm-cream-relief-of-minor-skin-irritationitching-and-rashes",
        destination: "/product/itchcalm-cream",
        permanent: true
      },
      {
        source: "/product/skinfyn-cream-protect-acne-fights-against-skin-infections",
        destination: "/product/skinfyn-cream-for-acne-skin-infections",
        permanent: true
      },
      {
        source: "/product/amla-with-wheat-grass",
        destination: "/product/amla-with-wheat-grass-juice",
        permanent: true
      },
      {
        source: "/product/aloevera-with-wheat-grass",
        destination: "/product/aloevera-with-wheat-grass-juice",
        permanent: true
      },
      {
        source: "/product/skinfyn-tereats-urticariadermatosischronic-skin-infections-purifies-bllod",
        destination: "/product/skinfyn-capsules-for-skin",
        permanent: true
      },
      {
        source: "/product/skinfyn-protect-acne-fights-against-skin-infections",
        destination: "/product/skinfyn-blood-purifier",
        permanent: true
      },
      {
        source: "/product/fairglo-fairness-cream-treats-pigmentation-blemishesrestores-youthful-radiant-skinhydrating-nourishing",
        destination: "/product/fairglo-herbal-fairness-cream",
        permanent: true
      },
      {
        source: "/product/uv-shield",
        destination: "/product/uv-shield-herbal-sunscreen-lotion",
        permanent: true
      },
      {
        source: "/product/walnut-scrub",
        destination: "/product/walnut-face-body-scrub",
        permanent: true
      },
      {
        source: "/product/nutivit-drops-enriched-with-natural-ironcalcium-vitamins-for-infants",
        destination: "/product/nutivit-drops-for-kids",
        permanent: true
      },
      {
        source: "/product/tulsi-active-panch-tulsi",
        destination: "/product/tul-c-active-syrup-for-immunity-support",
        permanent: true
      },
      {
        source: "/product/hemoplat-x-increases-platelet-count",
        destination: "/product/hemoplat-x-tablets-for-platelet-count",
        permanent: true
      },
      {
        source: "/product/moringa-for-anti-aging-promotes-healthy-skinimproves-bones-density-build-immunityaids-digestion",
        destination: "/product/moringa-capsules-for-anti-aging-immunity",
        permanent: true
      },
      {
        source: "/product/cardset-dyslipidaemia-high-cholesterol-andtriglycerides-mild-to-moderatehypertension-cardiovascular-andcerebrovascular-conditions",
        destination: "/product/cardset-capsules-for-heart-health",
        permanent: true
      },
      {
        source: "/product/cardset-for-healthy-heart",
        destination: "/product/cardset-syrup-for-heart-health",
        permanent: true
      },
      {
        source: "/product/more-iq-for-a-sharper-faster-brain",
        destination: "/product/more-iq-capsules-for-active-brain",
        permanent: true
      },
      {
        source: "/product/orthoflex-cap",
        destination: "/product/orthoflex-capsules-for-joint-bone-health",
        permanent: true
      },
      {
        source: "/product/calryz-aperfect-combination-of-calcium",
        destination: "/product/calryz-tablets-for-bone-health",
        permanent: true
      },
      {
        source: "/product/uricset-anti-inflammatory-controls-uric-acidcures-gout-joint-pain",
        destination: "/product/uricset-capsules-for-gout-joint-pain-uric-acid",
        permanent: true
      },
      {
        source: "/product/nutivit-a-daily-revitaliser",
        destination: "/product/nutivit-capsules-for-energy-immunity-vitality",
        permanent: true
      },
      {
        source: "/product/nutivit-nutritional-deficiency-generalweaknessloss-of-weight-appetitedebility-after-prolonged-illness",
        destination: "/product/nutivit-capsules-for-nutritional-deficiency",
        permanent: true
      },
      {
        source: "/product/all-in-one-syrup-a-complete-family-health-tonic",
        destination: "/product/all-in-one-syrup-health-tonic",
        permanent: true
      },
      {
        source: "/product/sea-buckthorn-juice-good-health-energy-immunebooster-hair-regrowth-controlmetabolism",
        destination: "/product/sea-buckthorn-juice-for-energy-immunity",
        permanent: true
      },
      {
        source: "/product/giloy-tab-boost-immunity-treats-chronic-feverimproves-digestion-treats-diabetes-treatsarthritis-improve-vision",
        destination: "/product/giloy-tablets-for-immunity",
        permanent: true
      },
      {
        source: "/product/septfynfor-immunity",
        destination: "/product/septfyn-tablets-for-immunity-support",
        permanent: true
      },
      {
        source: "/product/septfyn-a-herbal-antibiotic",
        destination: "/product/septfyn-capsules-herbal-antibiotic",
        permanent: true
      },
      {
        source: "/product/sanjivani-ras-detoxifier-immunity-boosterrejuvenating-anti-ageing",
        destination: "/product/sanjivani-ras-detoxifier-immunity-booster",
        permanent: true
      },
      {
        source: "/product/septfyn-syrup-a-herbal-antibiotic",
        destination: "/product/septfyn-syrup-herbal-antibiotic",
        permanent: true
      },
      {
        source: "/product/neem-karela-jamun-giloy",
        destination: "/product/neem-karela-jamun-giloy-juice",
        permanent: true
      },
      {
        source: "/product/thyrocalm-for-hypothyroidism-impaired-thyroxinlevels-boosts-metabolism-and-alsoeffective-in-obesity-goiter-muscleweakness",
        destination: "/product/thyrocalm-capsules-for-thyroid-balance",
        permanent: true
      },
      {
        source: "/product/stonkil-an-effective-treatment-for-kidneystones-a-combo-pack-of-18-cap-inside",
        destination: "/product/stonkil-capsules-for-kidney-stones",
        permanent: true
      },
      {
        source: "/product/more-iq-capsules-for-active-brain",
        destination: "/product/more-iq-syrup-for-active-brain",
        permanent: true
      },
      {
        source: "/product/nutivit-capsules-for-nutritional-deficiency",
        destination: "/product/nutivit-malt-tonic-for-nutritional-deficiency",
        permanent: true
      }
    ]
  }
};

export default nextConfig;