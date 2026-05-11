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
          Operations and supply chain trained me to think in{" "}
          <span className="italic text-brand-terracotta">systems.</span> AI gave
          me the tools to build them at scale.
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
              complex multi-step processes. That systems-thinking foundation
              translates directly to the software I build today: data flows,
              orchestration layers, and architectures where every component
              feeds the next.
            </p>
            <p className="text-[15.5px] leading-[1.75] text-brand-charcoal/85">
              I added a Master&apos;s in Geography with a GIS concentration and
              a certificate in Financial Planning &amp; Analysis from the
              Wharton School — bringing spatial analysis and financial modeling
              into the toolkit.
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
              manufacturer — where I completed a year-long sales development
              program and then sold business jets in the field: Cessna
              Citations, Beechcraft King Airs, and Caravans. That experience
              built the client-facing instincts and technical communication
              skills that carry through everything I do today.
            </p>
            <p className="text-[15.5px] leading-[1.75] text-brand-charcoal/85">
              From there, I joined a venture-backed AI startup in a product
              leadership role, built a partnership with Microsoft, and led our
              team to become a Microsoft Co-Pilot partner — presenting at
              Microsoft Build and working on development projects with
              Microsoft hand in hand.
            </p>
          </motion.div>
        </div>

        <motion.blockquote
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="rounded-xl bg-brand-linen p-8 md:p-10"
          style={{ borderLeft: "3px solid #b87333" }}
        >
          <p className="font-serif italic text-[20px] md:text-[22px] leading-[1.55] text-brand-charcoal/90">
            &ldquo;I apply that supply chain way of thinking — architecting
            systems, optimizing throughput, eliminating bottlenecks — to build
            progressively more complex software products, both for clients and
            for my own ventures.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
