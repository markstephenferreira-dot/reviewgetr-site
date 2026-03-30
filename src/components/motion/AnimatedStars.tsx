"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedStarsProps {
  count?: number;
  size?: string;
}

export default function AnimatedStars({
  count = 5,
  size = "text-2xl",
}: AnimatedStarsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`flex justify-center gap-1 ${size}`}
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="text-gold-light inline-block"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0, rotate: -180 }
          }
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          &#9733;
        </motion.span>
      ))}
    </div>
  );
}
