"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ReviewComparisonChart() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const bars = [
    { label: "Your Business", reviews: 138, color: "#FBBC05", textColor: "#202124" },
    { label: "Competitor A", reviews: 8, color: "#E0E0E0", textColor: "#757575" },
    { label: "Competitor B", reviews: 3, color: "#E0E0E0", textColor: "#757575" },
    { label: "Competitor C", reviews: 1, color: "#E0E0E0", textColor: "#757575" },
  ];

  const maxReviews = 138;
  const barHeight = 44;
  const gap = 16;
  const labelWidth = 120;
  const chartWidth = 400;
  const barAreaWidth = chartWidth - labelWidth - 60;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${chartWidth} ${bars.length * (barHeight + gap) + 40}`}
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="Review comparison: Your business 138 reviews vs competitors with 1-8 reviews"
    >
      <text x={chartWidth / 2} y="20" textAnchor="middle" className="fill-gray-400 text-xs" fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="600">
        GOOGLE REVIEWS COMPARISON
      </text>
      {bars.map((bar, i) => {
        const y = 40 + i * (barHeight + gap);
        const barWidth = (bar.reviews / maxReviews) * barAreaWidth;
        return (
          <g key={i}>
            <text
              x={labelWidth - 8}
              y={y + barHeight / 2 + 5}
              textAnchor="end"
              fontSize="12"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight={i === 0 ? "700" : "500"}
              fill={bar.textColor}
            >
              {bar.label}
            </text>
            {/* Background bar */}
            <rect
              x={labelWidth}
              y={y}
              width={barAreaWidth}
              height={barHeight}
              rx="6"
              fill="#F3F4F6"
            />
            {/* Animated fill bar */}
            <motion.rect
              x={labelWidth}
              y={y}
              height={barHeight}
              rx="6"
              fill={bar.color}
              initial={{ width: 0 }}
              animate={isInView ? { width: barWidth } : { width: 0 }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            {/* Review count */}
            <motion.text
              x={labelWidth + barWidth + 8}
              y={y + barHeight / 2 + 5}
              fontSize="14"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="700"
              fill={bar.textColor}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.2 }}
            >
              {bar.reviews}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}
