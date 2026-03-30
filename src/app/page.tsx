import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Review Getr",
    description:
      "Automated Google Reviews management for local businesses. Get more 5-star reviews, outrank competitors, and grow your business.",
    brand: {
      "@type": "Brand",
      name: "Review Getr",
    },
    offers: {
      "@type": "Offer",
      price: "97",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: "https://reviewgetr.com/pricing",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Review Getr help me get more Google Reviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Review Getr automatically sends review requests via SMS and email to your customers after service. This hands-free approach dramatically increases your review volume without awkward in-person asking.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Review Getr cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Review Getr is $97 per month with a 14-day free trial. No contracts, cancel anytime.",
        },
      },
      {
        "@type": "Question",
        name: "Do more Google Reviews actually help my business rank higher?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Google uses review quantity, quality, and recency as key ranking factors for local search and Google Maps. Businesses with more high-quality reviews consistently outrank competitors in local results.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
