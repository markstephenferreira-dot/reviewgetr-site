import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-text-light border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-gold text-2xl">&#9733;</span>
              <span className="font-heading font-bold text-xl text-white">
                Review <span className="text-gold">Getr</span>
              </span>
            </Link>
            <p className="text-text-light/60 text-sm leading-relaxed">
              The easiest way to get more 5-star Google Reviews and outrank your
              local competitors. Built by The Paid Ads Agency.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-text-light/60 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/pricing" className="text-text-light/60 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/contact" className="text-text-light/60 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-gold">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-text-light/60 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-text-light/60 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><a href="mailto:support@reviewgetr.com" className="text-text-light/60 hover:text-white transition-colors text-sm">support@reviewgetr.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-text-light/40 text-sm">
          &copy; {new Date().getFullYear()} Review Getr. All rights reserved. A product of The Paid Ads Agency.
        </div>
      </div>
    </footer>
  );
}
