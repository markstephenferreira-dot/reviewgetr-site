import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Review Getr helps local businesses get more 5-star Google Reviews, outrank competitors, and grow revenue on autopilot.",
  openGraph: {
    title: "About | Review Getr",
    description: "Learn how Review Getr helps local businesses get more 5-star Google Reviews.",
    url: "https://reviewgetr.com/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Review Getr",
    description: "Automated Google Reviews management platform for local businesses.",
    url: "https://reviewgetr.com",
    parentOrganization: {
      "@type": "Organization",
      name: "The Paid Ads Agency",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
