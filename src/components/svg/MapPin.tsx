"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MapPinProps {
  rating?: string;
  reviews?: string;
  name?: string;
  highlighted?: boolean;
}

export default function MapPin({
  rating = "4.9",
  reviews = "138",
  name = "Your Business",
  highlighted = true,
}: MapPinProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="inline-flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Card above pin */}
      <div
        className={`rounded-lg px-3 py-2 shadow-lg mb-1 text-center ${
          highlighted
            ? "bg-white border-2 border-gold"
            : "bg-white/90 border border-gray-200"
        }`}
      >
        <p className={`font-heading font-bold text-xs ${highlighted ? "text-text-dark" : "text-gray-500"}`}>
          {name}
        </p>
        <div className="flex items-center justify-center gap-1 mt-0.5">
          <span className={`text-xs font-bold ${highlighted ? "text-text-dark" : "text-gray-400"}`}>
            {rating}
          </span>
          <span className="text-gold-light text-xs">&#9733;</span>
          <span className="text-gray-400 text-[10px]">({reviews})</span>
        </div>
      </div>
      {/* Pin shape */}
      <svg width="32" height="42" viewBox="0 0 32 42" fill="none">
        <motion.path
          d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26C32 7.163 24.837 0 16 0z"
          fill={highlighted ? "#EA4335" : "#9CA3AF"}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
        <circle cx="16" cy="15" r="6" fill="white" />
      </svg>
    </motion.div>
  );
}
