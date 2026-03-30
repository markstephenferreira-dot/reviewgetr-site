"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProcessDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    {
      num: "01",
      title: "Request",
      desc: "Automated SMS & email",
      color: "#4285F4",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      ),
    },
    {
      num: "02",
      title: "Respond",
      desc: "AI-powered replies",
      color: "#FBBC05",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      num: "03",
      title: "Repost",
      desc: "Share on social media",
      color: "#34A853",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      ),
    },
  ];

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <motion.div
            className="flex flex-col items-center text-center w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.25 }}
          >
            {/* Circle with icon */}
            <motion.div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-3 border-2"
              style={{ borderColor: step.color, backgroundColor: `${step.color}15` }}
              initial={{ rotate: -90 }}
              animate={isInView ? { rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.25 }}
            >
              <svg
                className="w-9 h-9"
                fill="none"
                stroke={step.color}
                viewBox="0 0 24 24"
              >
                {step.icon}
              </svg>
            </motion.div>

            <span
              className="text-xs font-heading font-bold tracking-widest mb-1"
              style={{ color: step.color }}
            >
              STEP {step.num}
            </span>
            <h4 className="font-heading font-bold text-lg text-white mb-1">
              {step.title}
            </h4>
            <p className="text-text-light/60 text-sm">{step.desc}</p>
          </motion.div>

          {/* Arrow connector (not after last) */}
          {i < steps.length - 1 && (
            <motion.div
              className="hidden md:flex items-center mx-2"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
            >
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                <motion.path
                  d="M0 12h50"
                  stroke="#ffffff30"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.25 }}
                />
                <motion.path
                  d="M46 6l8 6-8 6"
                  stroke="#ffffff50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.25 }}
                />
              </svg>
            </motion.div>
          )}

          {/* Mobile arrow (vertical) */}
          {i < steps.length - 1 && (
            <motion.div
              className="md:hidden my-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.25 }}
            >
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                <path d="M12 0v30" stroke="#ffffff30" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M6 26l6 8 6-8" stroke="#ffffff50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
