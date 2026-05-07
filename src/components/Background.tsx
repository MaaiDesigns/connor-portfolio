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
              a certificate in Financial Planning &amp; Analysis — bringing
              spatial analysis and financial modeling into the toolkit.
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
              In 2021, I joined a venture-backed AI startup in a product
              leadership role and led a major project with Microsoft. My role
              was translating customer requirements into technical strategy —
              scoping what gets built, how it&apos;s architected, and how it
              ships.
            </p>
            <p className="text-[15.5px] leading-[1.75] text-brand-charcoal/85">
              From there, I moved into AI consulting — working directly with
              small manufacturers, venture capital firms, and early-stage
              companies to identify where AI creates real operational leverage.
              Each engagement built the pattern library for the systems I
              design today.
            </p>
          </motion.div>
        </div>

        <motion.blockquote
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="rounded-xl bg-brand-linen p-8 md:p-10 mb-12"
          style={{ borderLeft: "3px solid #b87333" }}
        >
          <p className="font-serif italic text-[20px] md:text-[22px] leading-[1.55] text-brand-charcoal/90">
            &ldquo;I apply that supply chain way of thinking — architecting
            systems, optimizing throughput, eliminating bottlenecks — to build
            progressively more complex software products, both for clients and
            for my own ventures.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 md:gap-10 pt-8 border-t"
          style={{ borderColor: "rgba(139, 111, 78, 0.2)" }}
        >
          <div>
            <p className="section-label mb-3">Education</p>
            <p className="text-[14px] leading-[1.7] text-brand-charcoal/80">
              B.S. Supply Chain &amp; Operations Mgmt
              <br />
              M.S. Geography (GIS)
              <br />
              Cert. Financial Planning &amp; Analysis
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Experience</p>
            <p className="text-[14px] leading-[1.7] text-brand-charcoal/80">
              Product Lead, AI Startup (w/ Microsoft)
              <br />
              AI Consulting — SMB &amp; Venture
              <br />
              Founder, 2555 Ventures LLC
            </p>
          </div>
          <div>
            <p className="section-label mb-3">Based In</p>
            <p className="text-[14px] leading-[1.7] text-brand-charcoal/80">
              Savannah, GA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
