import Link from "next/link";
import Stars from "@/components/Stars";
import PricingCard from "@/components/PricingCard";

const benefits = [
  "Get Google Reviews Effortlessly",
  "Outrank Your Competitors Locally",
  "Save Money On Ads",
  "Get More Inbound Calls & Leads",
  "Be The Business People Call First",
];

const steps = [
  {
    step: "01",
    title: "Request Reviews",
    description:
      "Our system sends review requests by SMS and email to your happy customers automatically. No awkward asking — just effortless 5-star reviews rolling in.",
    icon: (
      <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Respond to Reviews",
    description:
      "Every review gets a professional response automatically — boosting your reputation and showing Google you're an active, engaged business.",
    icon: (
      <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Repost Reviews",
    description:
      "Automatically repost all your 5-star reviews to Facebook, Instagram, LinkedIn, or any platform — turning reviews into social proof that attracts new customers.",
    icon: (
      <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
];

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

      {/* HERO */}
      <section className="section-dark py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Stars count={5} size="text-3xl md:text-4xl" />
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gold leading-tight mb-6">
                EFFORTLESSLY GET MORE 5-STAR GOOGLE REVIEWS
              </h1>
              <p className="text-text-light/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                Boost your Google Business Profile ranking, outrank your
                competitors, and become the business customers call first.
                Fully automated. Zero effort.
              </p>
              <Link href="/contact" className="btn-primary text-xl px-10 py-5">
                14-DAY FREE TRIAL
              </Link>
              <p className="text-text-light/50 text-sm mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 w-full max-w-md aspect-square flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-4">&#9733;</div>
                <div className="text-gold font-heading font-bold text-7xl mb-2">
                  4.9
                </div>
                <Stars count={5} size="text-3xl" />
                <p className="text-text-light/50 mt-4 text-sm">
                  Based on 127 reviews
                </p>
                <div className="mt-6 w-full space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-2 text-sm">
                      <span className="text-text-light/60 w-4">{star}</span>
                      <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gold h-full rounded-full"
                          style={{
                            width:
                              star === 5
                                ? "92%"
                                : star === 4
                                ? "6%"
                                : star === 3
                                ? "2%"
                                : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-text-dark">
            WHY LOCAL BUSINESSES CHOOSE{" "}
            <span className="text-primary">REVIEW GETR</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <span className="text-gold text-2xl flex-shrink-0">&#9733;</span>
                <span className="font-heading font-semibold text-lg text-text-dark">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-white">
            HOW IT WORKS
          </h2>
          <p className="text-text-light/60 text-center text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
            Three simple steps to dominate your local market with 5-star
            reviews.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <div className="text-gold font-heading font-bold text-sm tracking-widest mb-2">
                  STEP {item.step}
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-text-light/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTRANK COMPETITORS */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-text-dark mb-6">
                OUTRANK YOUR{" "}
                <span className="text-accent">COMPETITORS</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                When someone searches for your service on Google, businesses
                with more reviews and higher ratings show up first. It&apos;s that
                simple.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                While your competitors have 3-8 reviews, you&apos;ll have 50,
                100, even 200+ verified 5-star reviews — making you the obvious
                choice for every customer searching locally.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "More reviews = higher Google Maps ranking",
                  "Higher ranking = more clicks and calls",
                  "More calls = more revenue without extra ad spend",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                START YOUR FREE TRIAL
              </Link>
            </div>

            {/* Comparison Visual */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="font-heading font-bold text-lg mb-6 text-center text-gray-500">
                Google Maps Results
              </h3>
              <div className="space-y-4">
                {/* Your business */}
                <div className="bg-white rounded-xl p-4 border-2 border-gold shadow-md">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-text-dark">
                      Your Business
                    </span>
                    <span className="bg-gold/10 text-gold font-heading font-bold text-xs px-2 py-1 rounded">
                      #1 RANKED
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-text-dark">4.9</span>
                    <Stars count={5} size="text-sm" />
                    <span className="text-gray-500 text-sm">(138 reviews)</span>
                  </div>
                </div>
                {/* Competitors */}
                {[
                  { name: "Competitor A", rating: "4.2", reviews: "8" },
                  { name: "Competitor B", rating: "3.8", reviews: "3" },
                  { name: "Competitor C", rating: "4.0", reviews: "1" },
                ].map((comp, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-gray-200 opacity-60"
                  >
                    <span className="font-heading font-semibold text-text-dark text-sm">
                      {comp.name}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-600">{comp.rating}</span>
                      <Stars count={Math.round(parseFloat(comp.rating))} size="text-xs" />
                      <span className="text-gray-400 text-xs">
                        ({comp.reviews} reviews)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK A CALL */}
      <section className="section-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Stars count={5} size="text-3xl" />
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gold mt-6 mb-4">
            BOOK YOUR FREE SET-UP CALL
          </h2>
          <p className="text-text-light/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Choose a time to get set up in 30 minutes. We&apos;ll walk you through
            everything and start you ranking at the top of Google.
          </p>

          {/* Calendar Embed Placeholder */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto mb-8">
            <div className="text-text-light/40 text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-text-light/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="font-heading font-semibold text-lg mb-2">
                Booking Calendar
              </p>
              <p className="text-sm">
                Calendly or scheduling widget will be embedded here
              </p>
            </div>
          </div>

          <Link href="/contact" className="btn-primary text-xl">
            GET STARTED NOW
          </Link>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-text-dark">
            SIMPLE, TRANSPARENT PRICING
          </h2>
          <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
            One plan. Everything included. No hidden fees. No contracts.
          </p>
          <PricingCard compact />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-accent py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            READY TO GET MORE 5-STAR REVIEWS?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join hundreds of local businesses already dominating their market
            with Review Getr.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent font-heading font-bold text-lg px-10 py-5 rounded-lg hover:bg-gray-100 transition-colors shadow-lg uppercase tracking-wide"
          >
            START YOUR 14-DAY FREE TRIAL
          </Link>
        </div>
      </section>
    </>
  );
}
