"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/timeline";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7 },
};

export default function Evolution() {
  return (
    <section id="evolution" className="px-6 md:px-10 py-24 md:py-32 bg-brand-linen">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeUp} className="section-label mb-6">
          Technical Evolution
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-serif font-medium text-brand-charcoal leading-[1.15] tracking-[-0.005em] mb-6 max-w-4xl"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          From product design to{" "}
          <span className="italic text-brand-terracotta">
            autonomous systems
          </span>
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[16px] leading-[1.7] text-brand-charcoal/75 max-w-3xl mb-16"
        >
          Each phase built on the last — deeper technical capability, better
          pattern recognition for where AI actually moves the needle.
        </motion.p>

        <div className="relative">
          <div
            className="absolute left-0 md:left-[33.333%] top-2 bottom-2 w-px"
            style={{ backgroundColor: "rgba(139, 111, 78, 0.25)" }}
          />

          <div className="flex flex-col gap-12 md:gap-14">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="grid md:grid-cols-3 gap-4 md:gap-10 items-start relative"
              >
                <div className="md:text-right md:pr-10 pl-8 md:pl-0">
                  <p className="section-label mb-1">{entry.period}</p>
                  <p className="font-serif text-[19px] md:text-[21px] font-medium text-brand-charcoal leading-tight">
                    {entry.label}
                  </p>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.06 + 0.2 }}
                  className="absolute left-0 md:left-[33.333%] top-1.5 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-brand-linen"
                  style={{
                    backgroundColor: entry.isCurrent ? "#3d5a47" : "#8b6f4e",
                  }}
                />

                <div className="md:col-span-2 md:pl-10 pl-8">
                  <p className="text-[15px] leading-[1.75] text-brand-charcoal/80">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
