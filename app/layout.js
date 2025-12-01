// app/layout.js
import "./globals.css";
import "./fonts.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Zocveda Wellness | Leading Pharma & Nutraceutical Manufacturer in India",
  description:
    "Zocveda Wellness is a trusted PCD pharma company and third-party manufacturer offering premium pharmaceutical and nutraceutical products with WHO-GMP certified facilities, custom formulations, private labeling, and nationwide PCD franchise opportunities.",
  keywords:
    "Biozoc Inc, pharma manufacturer India, nutraceutical manufacturer India, third party pharma manufacturing, contract manufacturing pharma, PCD pharma company, PCD franchise India, private label nutraceuticals, pharma OEM services, custom formulation pharma, WHO GMP certified manufacturer",
  // Add Google Site Verification meta
  verification: {
    google: "XQjp9mCqpTlpym58nSH8t69Ojq941EU7Mmnyao0yGY8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="XQjp9mCqpTlpym58nSH8t69Ojq941EU7Mmnyao0yGY8"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* ✅ Tawk.to Script */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/690c45e3376b78195d9d1b92/1j9bv20h6';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* ✅ Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q7YBJZQ12S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q7YBJZQ12S');
          `}
        </Script>
      </body>
    </html>
  );
}
