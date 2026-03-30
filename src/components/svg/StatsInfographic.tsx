"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "../motion/AnimatedCounter";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
  isInView: boolean;
  icon: React.ReactNode;
}

function StatItem({ value, suffix, label, delay, isInView, icon }: StatItemProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-center mb-3">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="font-heading font-bold text-4xl md:text-5xl text-gold mb-2">
        <AnimatedCounter value={value} suffix={suffix} duration={2} decimals={suffix === "x" ? 1 : 0} />
      </div>
      <p className="text-text-light/70 text-sm leading-relaxed max-w-[200px] mx-auto">{label}</p>
    </motion.div>
  );
}

export default function StatsInfographic() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const stats = [
    {
      value: 93,
      suffix: "%",
      label: "of consumers read reviews before visiting a local business",
      icon: (
        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      value: 72,
      suffix: "%",
      label: "won't take action until they've read reviews",
      icon: (
        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: 3.3,
      suffix: "x",
      label: "more likely to be clicked in Google's top 3 results",
      icon: (
        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      value: 1,
      suffix: "#",
      label: "factor in local search ranking — Google Reviews",
      icon: (
        <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <StatItem
          key={i}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          delay={i * 0.15}
          isInView={isInView}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
