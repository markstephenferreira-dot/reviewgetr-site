import Link from "next/link";

const features = [
  "Review Activation Campaign",
  "Automated Review Requests (SMS & Email)",
  "AI-Powered Review Responses",
  "Negative Review Interception",
  "Instant Reposts To Social Media",
  "Google Business Profile Optimization",
  "Monthly Performance Reports",
  "Dedicated Support",
];

interface PricingCardProps {
  compact?: boolean;
}

export default function PricingCard({ compact = false }: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-md mx-auto">
      <div className="bg-navy p-6 md:p-8 text-center">
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-gold text-2xl">&#9733;</span>
          ))}
        </div>
        <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
          Get More 5-Star Google Reviews
        </h3>
        <p className="text-text-light/60 text-sm">Everything you need to dominate local search</p>
      </div>

      <div className="p-6 md:p-8 text-center border-b border-gray-100">
        <div className="mb-2">
          <span className="text-sm text-gray-500 uppercase tracking-wide font-heading font-semibold">
            14 days FREE then just
          </span>
        </div>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl md:text-6xl font-heading font-bold text-text-dark">$97</span>
          <span className="text-gray-500 font-medium">/mth</span>
        </div>
        <p className="text-sm text-gray-400 mt-2">No Contracts. Cancel Anytime.</p>
      </div>

      <div className={`p-6 md:p-8 ${compact ? "" : ""}`}>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-text-dark font-medium text-sm md:text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 md:p-8 pt-0">
        <Link href="/contact" className="btn-primary block text-center w-full">
          14-DAY FREE TRIAL
        </Link>
      </div>
    </div>
  );
}
