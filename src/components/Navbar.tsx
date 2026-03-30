"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold text-2xl">&#9733;</span>
            <span className="font-heading font-bold text-xl md:text-2xl text-white">
              Review <span className="text-gold">Getr</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-text-light/80 hover:text-white font-medium transition-colors">About</Link>
            <Link href="/pricing" className="text-text-light/80 hover:text-white font-medium transition-colors">Pricing</Link>
            <Link href="/contact" className="text-text-light/80 hover:text-white font-medium transition-colors">Contact</Link>
            <Link href="/contact" className="btn-primary !py-3 !px-6 !text-base">GET STARTED</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
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
          <div className="md:hidden pb-4 space-y-3">
            <Link href="/about" className="block text-text-light/80 hover:text-white font-medium py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/pricing" className="block text-text-light/80 hover:text-white font-medium py-2" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/contact" className="block text-text-light/80 hover:text-white font-medium py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/contact" className="btn-primary block text-center !text-base" onClick={() => setIsOpen(false)}>GET STARTED</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
