// /app/products/page.js
import { Suspense } from "react";
import PageContent from "./PageContent";

// ⭐ Basic SEO Setup
export const metadata = {
    title: "Best Ayurvedic Products in India | Top Selling Herbal Range",
    description:
        "Explore the best ayurvedic products in India from Zocveda, trusted herbal formulations, top-selling ayurvedic range & quality ayurvedic company offerings.",
    keywords: [
        "ayurvedic product",
        "best ayurvedic product",
        "best ayurvedic product in india",
        "best ayurvedic product company in india",
        "top ayurvedic product in india",
        "ayurvedic & herbal product manufacturers & suppliers",
        "ayurvedic product suppliers"
    ]
};

export default function Page() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <PageContent />
        </Suspense>
    );
}
