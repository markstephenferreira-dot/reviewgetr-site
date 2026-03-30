"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedStars from "@/components/motion/AnimatedStars";
import FadeInOnScroll from "@/components/motion/FadeInOnScroll";
import StatsInfographic from "@/components/svg/StatsInfographic";

export default function AboutClient() {
  const steps = [
    {
      title: "1. We Set Everything Up For You",
      desc: "In a 30-minute onboarding call, we connect Review Getr to your Google Business Profile and configure your automated review campaigns. You don\u2019t need any technical knowledge.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
      alt: "Team setting up software",
    },
    {
      title: "2. Automated Requests Go Out",
      desc: "After each customer interaction, our system automatically sends personalized review requests via SMS and email. The messaging is friendly, professional, and proven to convert.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
      alt: "Phone showing notifications",
    },
    {
      title: "3. Reviews Roll In",
      desc: "Happy customers click the link and leave a 5-star review directly on your Google Business Profile. Unhappy customers are redirected to a private feedback form, protecting your public rating.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      alt: "Customer leaving a review",
    },
    {
      title: "4. Every Review Gets a Response",
      desc: "Our AI responds to every review professionally and promptly. Google rewards businesses that engage with reviewers, further boosting your ranking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      alt: "Professional review response",
    },
    {
      title: "5. Amplify on Social Media",
      desc: "Your best reviews are automatically reposted to your social media channels \u2014 Facebook, Instagram, LinkedIn \u2014 turning every 5-star review into powerful social proof.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
      alt: "Social media platforms",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-dark py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
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
            ABOUT REVIEW GETR
          </motion.h1>
          <motion.p
            className="text-text-light/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We help local businesses get the 5-star reputation they deserve —
            automatically, effortlessly, and affordably.
          </motion.p>
        </div>
      </section>

      {/* Why + Built By */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeInOnScroll direction="left">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80"
                  alt="Local business storefront"
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
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
            </FadeInOnScroll>
            <FadeInOnScroll direction="right">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark mb-6">
                BUILT BY <span className="text-primary">THE PAID ADS AGENCY</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Review Getr is built and operated by The Paid Ads Agency — a performance marketing agency specializing in Google Ads and Meta Ads for local businesses.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine our deep knowledge of local search, Google&apos;s algorithm, and digital marketing to deliver a reviews platform that actually moves the needle on your bottom line.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-blue py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white text-center mb-12">
              WHY GOOGLE REVIEWS MATTER
            </h2>
          </FadeInOnScroll>
          <StatsInfographic />
        </div>
      </section>

      {/* How the service works */}
      <section className="section-light py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-dark text-center mb-12">
              HOW THE SERVICE WORKS
            </h2>
          </FadeInOnScroll>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 md:flex items-stretch"
                  whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="md:w-48 flex-shrink-0 relative h-40 md:h-auto">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover"
                      unoptimized
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-heading font-bold text-xl text-text-dark mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </FadeInOnScroll>
            ))}
          </div>
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
              READY TO GET STARTED?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              14-day free trial. $97/mo. No contracts. Set up in 30 minutes.
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
