"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedStars from "@/components/motion/AnimatedStars";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import PulseButton from "@/components/motion/PulseButton";
import ProcessDiagram from "@/components/svg/ProcessDiagram";
import StatsInfographic from "@/components/svg/StatsInfographic";
import ReviewComparisonChart from "@/components/svg/ReviewComparisonChart";
import MapPin from "@/components/svg/MapPin";
import PricingCard from "@/components/PricingCard";
import Stars from "@/components/Stars";

const benefits = [
  "Get Google Reviews Effortlessly",
  "Outrank Your Competitors Locally",
  "Save Money On Ads",
  "Get More Inbound Calls & Leads",
  "Be The Business People Call First",
];

export default function HomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="section-dark py-16 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <Image
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-navy-deep/90" />
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedStars count={5} size="text-3xl md:text-4xl" />
              </motion.div>
              <motion.h1
                className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                EFFORTLESSLY GET MORE 5-STAR GOOGLE REVIEWS
              </motion.h1>
              <motion.p
                className="text-text-light/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Boost your Google Business Profile ranking, outrank your
                competitors, and become the business customers call first.
                Fully automated. Zero effort.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <PulseButton href="/contact" className="text-xl px-10 py-5">
                  14-DAY FREE TRIAL
                </PulseButton>
              </motion.div>
              <motion.p
                className="text-text-light/50 text-sm mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                No credit card required. Cancel anytime.
              </motion.p>
            </div>

            {/* Hero visual — rating card + business photo */}
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Business photo */}
                <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                    alt="Happy business owner smiling"
                    width={800}
                    height={600}
                    className="object-cover w-full h-80"
                    priority
                    unoptimized
                  />
                </div>
                {/* Floating rating card */}
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-white rounded-xl p-5 shadow-2xl border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <div className="text-gold font-heading font-bold text-4xl mb-1">4.9</div>
                  <Stars count={5} size="text-lg" />
                  <p className="text-gray-400 text-xs mt-1">Based on 127 reviews</p>
                </motion.div>
                {/* Floating notification */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-success text-white rounded-lg px-4 py-2 shadow-lg text-sm font-heading font-bold"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 3 }}
                  transition={{ duration: 0.5, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  +12 reviews this week
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="section-blue py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-12 text-white">
              WHY GOOGLE REVIEWS MATTER
            </h2>
          </FadeInOnScroll>
          <StatsInfographic />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-text-dark">
              WHY LOCAL BUSINESSES CHOOSE{" "}
              <span className="text-primary">REVIEW GETR</span>
            </h2>
          </FadeInOnScroll>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100 cursor-default"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
                    borderColor: "#FBBC05",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gold text-2xl flex-shrink-0">&#9733;</span>
                  <span className="font-heading font-semibold text-lg text-text-dark">
                    {benefit}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-white">
              HOW IT WORKS
            </h2>
            <p className="text-text-light/60 text-center text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
              Three simple steps to dominate your local market with 5-star reviews.
            </p>
          </FadeInOnScroll>
          <ProcessDiagram />

          {/* Detail cards below diagram */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" staggerDelay={0.2}>
            {[
              {
                step: "01",
                title: "Request Reviews",
                description:
                  "Our system sends review requests by SMS and email to your happy customers automatically. No awkward asking — just effortless 5-star reviews rolling in.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
                alt: "Person receiving notification on phone",
              },
              {
                step: "02",
                title: "Respond to Reviews",
                description:
                  "Every review gets a professional response automatically — boosting your reputation and showing Google you're an active, engaged business.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
                alt: "Professional team responding to customer feedback",
              },
              {
                step: "03",
                title: "Repost Reviews",
                description:
                  "Automatically repost all your 5-star reviews to Facebook, Instagram, LinkedIn, or any platform — turning reviews into social proof that attracts new customers.",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
                alt: "Social media sharing on multiple platforms",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <motion.div
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-gold font-heading font-bold text-sm tracking-widest">
                        STEP {item.step}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-light/70 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* OUTRANK COMPETITORS */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll direction="left">
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
                    <motion.li
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    >
                      <svg
                        className="w-5 h-5 text-success flex-shrink-0"
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
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" className="btn-primary">
                    START YOUR FREE TRIAL
                  </Link>
                </motion.div>
              </div>
            </FadeInOnScroll>

            {/* Map-style comparison */}
            <FadeInOnScroll direction="right">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 relative">
                <h3 className="font-heading font-bold text-lg mb-6 text-center text-gray-500">
                  Google Maps Results
                </h3>

                {/* Map background with pins */}
                <div className="relative bg-gray-100 rounded-xl p-4 mb-6 h-40 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                    alt="Map view"
                    fill
                    className="object-cover opacity-30 rounded-xl"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="relative z-10 flex items-end justify-around h-full pb-2">
                    <MapPin name="Your Biz" rating="4.9" reviews="138" highlighted />
                    <MapPin name="Comp A" rating="4.2" reviews="8" highlighted={false} />
                    <MapPin name="Comp B" rating="3.8" reviews="3" highlighted={false} />
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Your business */}
                  <motion.div
                    className="bg-white rounded-xl p-4 border-2 border-gold shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
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
                  </motion.div>
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

                {/* Review comparison chart */}
                <div className="mt-8">
                  <ReviewComparisonChart />
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS */}
      <section className="bg-gray-50 py-16 md:py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-text-dark">
              TRUSTED BY LOCAL BUSINESSES
            </h2>
            <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
              Business owners using Review Getr to grow their reputation
            </p>
          </FadeInOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                business: "Mitchell's Home Services",
                quote: "We went from 4 reviews to 89 in three months. Our phone hasn't stopped ringing since.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
              },
              {
                name: "David Chen",
                business: "Chen Family Dental",
                quote: "The automated responses alone save us hours every week. And our Google ranking went from page 2 to the top 3.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
              },
              {
                name: "Lisa Rodriguez",
                business: "Rodriguez Law Group",
                quote: "Best ROI of any marketing tool we use. $97/mo and we've gained 40+ new clients directly from Google reviews.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
              },
            ].map((testimonial, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 60px -15px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Stars count={5} size="text-lg" />
                  <p className="text-gray-600 leading-relaxed my-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                        unoptimized
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-text-dark text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-xs">{testimonial.business}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* BOOK A CALL */}
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInOnScroll>
            <AnimatedStars count={5} size="text-3xl" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gold mt-6 mb-4">
              BOOK YOUR FREE SET-UP CALL
            </h2>
            <p className="text-text-light/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Choose a time to get set up in 30 minutes. We&apos;ll walk you through
              everything and start you ranking at the top of Google.
            </p>
          </FadeInOnScroll>

          {/* Calendar Embed Placeholder */}
          <FadeInOnScroll delay={0.2}>
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
          </FadeInOnScroll>

          <PulseButton href="/contact" className="text-xl">
            GET STARTED NOW
          </PulseButton>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 text-text-dark">
              SIMPLE, TRANSPARENT PRICING
            </h2>
            <p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto">
              One plan. Everything included. No hidden fees. No contracts.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <PricingCard compact />
          </FadeInOnScroll>
        </div>
      </section>

      {/* FINAL CTA */}
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
              READY TO GET MORE 5-STAR REVIEWS?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join hundreds of local businesses already dominating their market
              with Review Getr.
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
                START YOUR 14-DAY FREE TRIAL
              </Link>
            </motion.div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
