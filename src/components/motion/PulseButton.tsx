"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface PulseButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function PulseButton({
  href,
  children,
  className = "",
}: PulseButtonProps) {
  return (
    <motion.div
      className="inline-block relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Glow ring */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-accent/30"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <Link href={href} className={`btn-primary relative z-10 ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
