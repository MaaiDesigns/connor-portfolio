"use client";

import { motion } from "framer-motion";
import { upcoming } from "@/data/upcoming";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7 },
};

export default function WhatsNext() {
  return (
    <section id="next" className="px-6 md:px-10 py-24 md:py-32 bg-brand-linen">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeUp} className="section-label mb-6">
          What&apos;s Next
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-serif font-medium text-brand-charcoal leading-[1.15] tracking-[-0.005em] mb-16 max-w-4xl"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Currently{" "}
          <span className="italic text-brand-terracotta">in development</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {upcoming.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="rounded-xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#faf8f5",
                border: "1px solid rgba(139, 111, 78, 0.25)",
              }}
            >
              <h3 className="font-serif text-[22px] md:text-[26px] font-medium text-brand-charcoal leading-tight tracking-[-0.005em] mb-5">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-brand-charcoal/80 mb-6">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-[11.5px] font-medium tracking-wide"
                    style={{
                      backgroundColor: "rgba(139, 111, 78, 0.1)",
                      color: "#8b6f4e",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
