import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
import Stars from "@/components/Stars";
import Link from "next/link";

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

      <section className="section-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Stars count={5} size="text-3xl md:text-4xl" />
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gold mt-6 mb-4">
            MORE REVIEWS = MORE SALES
          </h1>
          <p className="text-text-light/70 text-xl md:text-2xl font-heading font-semibold">
            BE THE FIRST CALL CUSTOMERS MAKE.
          </p>
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCard />
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-12 text-text-dark">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is there really a free trial?",
                a: "Yes! You get a full 14-day free trial with complete access to every feature. No credit card required to start. If it\u2019s not for you, simply cancel before the trial ends.",
              },
              {
                q: "Are there any contracts or commitments?",
                a: "None. Review Getr is month-to-month. Cancel anytime with no penalties, no questions asked.",
              },
              {
                q: "How quickly will I start getting reviews?",
                a: "Most businesses see their first new reviews within the first week. Our automated SMS and email campaigns start working immediately after setup.",
              },
              {
                q: "What if I get a negative review?",
                a: "Our system intercepts negative feedback before it becomes a public review, giving you a chance to resolve issues privately. For existing negative reviews, we help with professional response strategies.",
              },
              {
                q: "Do I need to be tech-savvy to use this?",
                a: "Not at all. We handle the entire setup for you in a 30-minute onboarding call. After that, everything runs automatically.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-heading font-bold text-lg text-text-dark mb-2">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            START GETTING MORE REVIEWS TODAY
          </h2>
          <p className="text-white/80 text-lg mb-8">
            14 days free. $97/mo after. No contracts. No risk.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent font-heading font-bold text-lg px-10 py-5 rounded-lg hover:bg-gray-100 transition-colors shadow-lg uppercase tracking-wide"
          >
            START YOUR FREE TRIAL
          </Link>
        </div>
      </section>
    </>
  );
}
