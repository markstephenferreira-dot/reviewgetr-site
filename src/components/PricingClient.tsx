"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedStars from "@/components/motion/AnimatedStars";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import FAQAccordion from "@/components/motion/FAQAccordion";
import PricingCard from "@/components/PricingCard";

const faqItems = [
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
];

export default function PricingClient() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedStars count={5} size="text-3xl md:text-4xl" />
          <motion.h1
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gold mt-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            MORE REVIEWS = MORE SALES
          </motion.h1>
          <motion.p
            className="text-text-light/70 text-xl md:text-2xl font-heading font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            BE THE FIRST CALL CUSTOMERS MAKE.
          </motion.p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <PricingCard />
          </FadeInOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-12 text-text-dark">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </FadeInOnScroll>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 md:py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent to-[#C62828]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              START GETTING MORE REVIEWS TODAY
            </h2>
            <p className="text-white/80 text-lg mb-8">
              14 days free. $97/mo after. No contracts. No risk.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-accent font-heading font-bold text-lg px-10 py-5 rounded-lg hover:bg-gray-100 transition-colors shadow-lg uppercase tracking-wide"
              >
                START YOUR FREE TRIAL
              </Link>
            </motion.div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
