"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7 },
};

export default function Background() {
  return (
    <section id="background" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeUp} className="section-label mb-6">
          Background
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-serif font-medium text-brand-charcoal leading-[1.15] tracking-[-0.005em] mb-16 max-w-4xl"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          I think in processes. AI lets me{" "}
          <span className="italic text-brand-terracotta">redesign them.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-xl bg-brand-linen p-8 md:p-10 transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "0 1px 2px rgba(45, 42, 38, 0.04)" }}
          >
            <p className="section-label mb-5">The Foundation</p>
            <p className="text-[15.5px] leading-[1.75] text-brand-charcoal/85 mb-5">
              My background is in Supply Chain and Operations Management —
              designing efficient pipelines, modeling throughput, and optimizing
              complex multi-step processes. That training is exactly what AI
              implementation requires: breaking a workflow into steps,
              identifying where human judgment is actually needed vs. where it
              isn&apos;t, and building systems that handle the rest.
            </p>
            <p className="text-[15.5px] leading-[1.75] text-brand-charcoal/85">
              I added a Master&apos;s in Geography with a GIS concentration and
              a certificate in Financial Planning &amp; Analysis from the
              Wharton School — which means I also speak the language of spatial
              data and financial modeling when projects call for it.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="rounded-xl bg-brand-linen p-8 md:p-10 transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "0 1px 2px rgba(45, 42, 38, 0.04)" }}
          >
            <p className="section-label mb-5">The Proving Ground</p>
            <p className="text-[15.5px] leading-[1.75] text-brand-charcoal/85 mb-5">
              My early career was at Textron Aviation — a Fortune 100 aircraft
              manufacturer — selling business jets to sophisticated buyers.
              That built the client-facing instincts and technical
              communication skills that carry through every engagement today:
              translating complex capabilities into clear value for
              decision-makers.
            </p>
            <p className="text-[15.5px] leading-[1.75] text-brand-charcoal/85">
              From there, I joined a venture-backed AI startup where I led
              product design — not just business development, but hands-on
              UX/UI work, feature architecture, and direct collaboration with
              engineering teams. We became a Microsoft Co-Pilot partner, I
              presented at Microsoft Build, and I worked side-by-side with
              Microsoft product managers on development projects. That
              experience gave me a deep understanding of how AI products get
              designed, scoped, and built.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="rounded-xl bg-brand-linen p-8 md:p-10"
          style={{ borderLeft: "3px solid #b87333" }}
        >
          <p className="font-serif text-[20px] md:text-[22px] leading-[1.55] text-brand-charcoal/90">
            I&apos;m not a developer writing production code. I&apos;m the
            person who sits between a business problem and a technical
            solution — designing the system, choosing the right tools, and
            building practical workflows that a team can actually use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
