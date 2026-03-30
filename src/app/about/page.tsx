import type { Metadata } from "next";
import Stars from "@/components/Stars";
import Link from "next/link";

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

      <section className="section-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Stars count={5} size="text-3xl" />
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gold mt-6 mb-6">
            ABOUT REVIEW GETR
          </h1>
          <p className="text-text-light/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We help local businesses get the 5-star reputation they deserve —
            automatically, effortlessly, and affordably.
          </p>
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark mb-6">
                WHY WE BUILT <span className="text-primary">REVIEW GETR</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                As a digital marketing agency working with local businesses every day, we saw the same problem over and over: great businesses with amazing service but barely any Google Reviews.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Meanwhile, their mediocre competitors with more reviews were getting all the calls. It wasn&apos;t fair — and it wasn&apos;t right.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                So we built Review Getr to level the playing field. A simple, automated system that gets 5-star reviews rolling in without you lifting a finger.
              </p>
            </div>
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark mb-6">
                BUILT BY <span className="text-primary">THE PAID ADS AGENCY</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Review Getr is built and operated by The Paid Ads Agency — a performance marketing agency specializing in Google Ads and Meta Ads for local businesses.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine our deep knowledge of local search, Google&apos;s algorithm, and digital marketing to deliver a reviews platform that actually moves the needle on your bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-blue py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white text-center mb-12">
            WHY GOOGLE REVIEWS MATTER
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { stat: "93%", label: "of consumers read online reviews before visiting a local business" },
              { stat: "72%", label: "of consumers won\u2019t take action until they\u2019ve read reviews" },
              { stat: "3.3x", label: "more likely to be clicked when you appear in Google\u2019s top 3 local results" },
              { stat: "#1", label: "Google Reviews are the #1 factor in local search ranking according to SEO experts" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-gold mb-2">{item.stat}</div>
                <p className="text-text-light/70 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark text-center mb-12">
            HOW THE SERVICE WORKS
          </h2>
          <div className="space-y-8">
            {[
              { title: "1. We Set Everything Up For You", desc: "In a 30-minute onboarding call, we connect Review Getr to your Google Business Profile and configure your automated review campaigns. You don\u2019t need any technical knowledge." },
              { title: "2. Automated Requests Go Out", desc: "After each customer interaction, our system automatically sends personalized review requests via SMS and email. The messaging is friendly, professional, and proven to convert." },
              { title: "3. Reviews Roll In", desc: "Happy customers click the link and leave a 5-star review directly on your Google Business Profile. Unhappy customers are redirected to a private feedback form, protecting your public rating." },
              { title: "4. Every Review Gets a Response", desc: "Our AI responds to every review professionally and promptly. Google rewards businesses that engage with reviewers, further boosting your ranking." },
              { title: "5. Amplify on Social Media", desc: "Your best reviews are automatically reposted to your social media channels \u2014 Facebook, Instagram, LinkedIn \u2014 turning every 5-star review into powerful social proof." },
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-heading font-bold text-xl text-text-dark mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            READY TO GET STARTED?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            14-day free trial. $97/mo. No contracts. Set up in 30 minutes.
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
