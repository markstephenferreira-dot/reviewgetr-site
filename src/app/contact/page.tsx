"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedStars from "@/components/motion/AnimatedStars";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import Stars from "@/components/Stars";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
            unoptimized
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedStars count={5} size="text-3xl" />
          <motion.h1
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gold mt-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p
            className="text-text-light/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Ready to start getting more 5-star reviews? Fill out the form below
            or book a free set-up call.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInOnScroll direction="left">
              <div>
                <h2 className="font-heading font-bold text-2xl text-text-dark mb-6">
                  SEND US A MESSAGE
                </h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.svg
                        className="w-12 h-12 text-success mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                      <h3 className="font-heading font-bold text-xl text-text-dark mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        We&apos;ll get back to you within 24 hours. In the meantime,
                        feel free to book a call below.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {[
                        { id: "name", label: "Your Name", type: "text", placeholder: "John Smith", required: true },
                        { id: "email", label: "Email Address", type: "email", placeholder: "john@mybusiness.com", required: true },
                        { id: "business", label: "Business Name", type: "text", placeholder: "Smith's Plumbing", required: true },
                      ].map((field) => (
                        <motion.div
                          key={field.id}
                          animate={focusedField === field.id ? { scale: 1.02 } : { scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label
                            htmlFor={field.id}
                            className={`block text-sm font-semibold mb-1.5 transition-colors duration-200 ${
                              focusedField === field.id ? "text-primary" : "text-text-dark"
                            }`}
                          >
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            id={field.id}
                            required={field.required}
                            value={formData[field.id as keyof typeof formData]}
                            onChange={(e) =>
                              setFormData({ ...formData, [field.id]: e.target.value })
                            }
                            onFocus={() => setFocusedField(field.id)}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 focus:shadow-lg focus:shadow-primary/10"
                            placeholder={field.placeholder}
                          />
                        </motion.div>
                      ))}
                      <motion.div
                        animate={focusedField === "message" ? { scale: 1.02 } : { scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label
                          htmlFor="message"
                          className={`block text-sm font-semibold mb-1.5 transition-colors duration-200 ${
                            focusedField === "message" ? "text-primary" : "text-text-dark"
                          }`}
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
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 resize-none focus:shadow-lg focus:shadow-primary/10"
                          placeholder="Tell us about your business and what you're looking for..."
                        />
                      </motion.div>
                      <motion.button
                        type="submit"
                        className="btn-primary w-full text-center"
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -10px rgba(234,67,53,0.4)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        SEND MESSAGE
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeInOnScroll>

            {/* Sidebar */}
            <FadeInOnScroll direction="right">
              <div className="space-y-8">
                {/* Book a Call */}
                <div className="bg-navy rounded-2xl p-8 text-center overflow-hidden relative">
                  <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                      alt=""
                      fill
                      className="object-cover"
                      unoptimized
                      loading="lazy"
                    />
                  </div>
                  <div className="relative z-10">
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
                </div>

                {/* Contact Info */}
                <motion.div
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                  whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.3 }}
                >
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
                        <p className="text-text-dark font-medium">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Pricing */}
                <motion.div
                  className="bg-gold/10 rounded-2xl p-8 border border-gold/20 text-center"
                  whileHover={{ y: -4, borderColor: "#FBBC05" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-heading font-bold text-text-dark text-lg mb-1">
                    14 days FREE then just $97/mth
                  </p>
                  <p className="text-gray-500 text-sm">
                    No contracts. Cancel anytime.
                  </p>
                  <Link href="/pricing" className="text-primary font-semibold text-sm hover:underline mt-3 inline-block">
                    See full pricing details &rarr;
                  </Link>
                </motion.div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
