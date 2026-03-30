import type { Metadata } from "next";
import PricingClient from "@/components/PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Review Getr pricing: $97/mo with a 14-day free trial. No contracts, cancel anytime. Get more 5-star Google Reviews for your local business.",
  openGraph: {
    title: "Pricing | Review Getr",
    description: "Review Getr pricing: $97/mo with a 14-day free trial. No contracts, cancel anytime.",
    url: "https://reviewgetr.com/pricing",
  },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Review Getr",
    description: "Automated Google Reviews management for local businesses.",
    offers: {
      "@type": "Offer",
      price: "97",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PricingClient />
    </>
  );
}
