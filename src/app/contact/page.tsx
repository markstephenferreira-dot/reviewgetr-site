"use client";

import { useState } from "react";
import Stars from "@/components/Stars";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be wired up to an API endpoint
    setSubmitted(true);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Review Getr",
    description: "Automated Google Reviews management for local businesses.",
    url: "https://reviewgetr.com",
    email: "support@reviewgetr.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@reviewgetr.com",
      contactType: "customer support",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Stars count={5} size="text-3xl" />
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gold mt-6 mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-text-light/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to start getting more 5-star reviews? Fill out the form below
            or book a free set-up call.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-text-dark mb-6">
                SEND US A MESSAGE
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <svg
                    className="w-12 h-12 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="font-heading font-bold text-xl text-text-dark mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll get back to you within 24 hours. In the meantime,
                    feel free to book a call below.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text-dark mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text-dark mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="john@mybusiness.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-semibold text-text-dark mb-1.5"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      required
                      value={formData.business}
                      onChange={(e) =>
                        setFormData({ ...formData, business: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Smith's Plumbing"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-text-dark mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-center">
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Book a Call */}
              <div className="bg-navy rounded-2xl p-8 text-center">
                <Stars count={5} size="text-2xl" />
                <h3 className="font-heading font-bold text-xl text-gold mt-4 mb-3">
                  BOOK A FREE SET-UP CALL
                </h3>
                <p className="text-text-light/60 text-sm mb-6">
                  Get set up in 30 minutes. We&apos;ll walk you through everything
                  and have you collecting reviews the same day.
                </p>
                {/* Calendar Placeholder */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <svg
                    className="w-12 h-12 mx-auto mb-3 text-text-light/20"
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
                  <p className="text-text-light/40 text-sm">
                    Scheduling widget will be embedded here
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-heading font-bold text-lg text-text-dark mb-4">
                  CONTACT INFO
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href="mailto:support@reviewgetr.com"
                        className="text-primary font-medium hover:underline"
                      >
                        support@reviewgetr.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Response Time</p>
                      <p className="text-text-dark font-medium">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Pricing */}
              <div className="bg-gold/10 rounded-2xl p-8 border border-gold/20 text-center">
                <p className="font-heading font-bold text-text-dark text-lg mb-1">
                  14 days FREE then just $97/mth
                </p>
                <p className="text-gray-500 text-sm">
                  No contracts. Cancel anytime.
                </p>
                <Link href="/pricing" className="text-primary font-semibold text-sm hover:underline mt-3 inline-block">
                  See full pricing details &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
