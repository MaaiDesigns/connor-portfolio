"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7 },
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-40">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          {...fadeUp}
          className="font-serif font-medium text-brand-charcoal leading-[1.05] tracking-[-0.01em] mb-8"
          style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
        >
          Let&apos;s talk.
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[17px] md:text-[18px] leading-[1.7] text-brand-charcoal/80 mb-10 max-w-2xl mx-auto"
        >
          I work with businesses and entrepreneurs who see the potential of AI
          and want a practical system built — not a strategy deck. Whether
          it&apos;s an internal tool, an agent workflow, or rethinking how your
          team operates, I&apos;m interested in problems where AI can compress
          weeks into hours.
        </motion.p>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
          <a
            href="mailto:connor@maaidesigns.com"
            className="font-serif text-[22px] md:text-[28px] text-brand-green underline underline-offset-[6px] decoration-1 transition-opacity hover:opacity-75"
            style={{ textDecorationColor: "rgba(61, 90, 71, 0.4)" }}
          >
            connor@maaidesigns.com
          </a>
        </motion.div>

        {/* TODO: Add testimonial/social proof block here when available */}
      </div>
    </section>
  );
}
