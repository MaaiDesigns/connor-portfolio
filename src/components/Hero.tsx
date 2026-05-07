"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f5e6d3 0%, #f7ecdc 35%, #faf0e2 60%, #faf8f5 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="section-label mb-6">
            Systems Architect · AI Builder · Founder
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif font-medium text-brand-charcoal leading-[1.05] tracking-[-0.01em] mb-8"
          style={{ fontSize: "clamp(42px, 6vw, 74px)" }}
        >
          I architect systems that{" "}
          <span className="italic text-brand-terracotta">compound.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-[17px] leading-[1.65] text-brand-charcoal/75 max-w-2xl mb-10"
        >
          Five years in AI — from product leadership at a venture-backed startup
          to building autonomous agent platforms. I design pipelines,
          orchestration layers, and production systems that turn complex
          problems into repeatable infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => handleClick("work")}
            className="rounded-full bg-brand-green text-white font-semibold px-7 py-3.5 text-[14px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ boxShadow: "0 4px 14px rgba(61, 90, 71, 0.18)" }}
          >
            View Work →
          </button>
          <button
            onClick={() => handleClick("background")}
            className="rounded-full border border-brand-green text-brand-green font-semibold px-7 py-3.5 text-[14px] tracking-wide transition-all duration-300 hover:bg-brand-green hover:text-white"
          >
            Read the Story
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-brand-walnut">
          Scroll
        </span>
        <motion.div
          animate={{ opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #8b6f4e, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
