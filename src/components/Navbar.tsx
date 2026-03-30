"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > 40);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/98 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-navy/95 backdrop-blur-sm border-b border-white/10"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <motion.span
              className="text-gold text-2xl"
              whileHover={{ rotate: 72, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              &#9733;
            </motion.span>
            <span className="font-heading font-bold text-xl md:text-2xl text-white">
              Review <span className="text-gold">Getr</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "/about", label: "About" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-light/80 hover:text-white font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="btn-primary !py-3 !px-6 !text-base">
                GET STARTED
              </Link>
            </motion.div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/about" className="block text-text-light/80 hover:text-white font-medium py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/pricing" className="block text-text-light/80 hover:text-white font-medium py-2" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/contact" className="block text-text-light/80 hover:text-white font-medium py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/contact" className="btn-primary block text-center !text-base" onClick={() => setIsOpen(false)}>GET STARTED</Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
