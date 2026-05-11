"use client";

import { motion } from "framer-motion";
import { sites } from "@/data/sites";
import DeviceMockup from "./DeviceMockup";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7 },
};

export default function DesignShowcase() {
  return (
    <section id="design" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeUp} className="section-label mb-6">
          Design Work
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-serif font-medium text-brand-charcoal leading-[1.15] tracking-[-0.005em] mb-6 max-w-4xl"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Built to ship, designed to{" "}
          <span className="italic text-brand-terracotta">last</span>
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[16px] leading-[1.7] text-brand-charcoal/75 max-w-3xl mb-16"
        >
          Every site I build follows a cohesive design system — consistent
          typography, warm palettes, and performance-optimized Next.js
          architecture deployed on Vercel.
        </motion.p>

        <div className="flex flex-col gap-16 md:gap-24">
          {sites.map((site, i) => (
            <motion.article
              key={site.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-8 order-2 lg:order-1">
                <div className="flex items-end gap-6 md:gap-8">
                  <div className="flex-1 min-w-0">
                    <DeviceMockup
                      type="laptop"
                      src={site.desktop}
                      alt={`${site.name} desktop view`}
                    />
                  </div>
                  <div className="hidden sm:block shrink-0">
                    <DeviceMockup
                      type="phone"
                      src={site.mobile}
                      alt={`${site.name} mobile view`}
                    />
                  </div>
                </div>
                <div className="sm:hidden mt-8">
                  <DeviceMockup
                    type="phone"
                    src={site.mobile}
                    alt={`${site.name} mobile view`}
                  />
                </div>
              </div>

              <div className="lg:col-span-4 order-1 lg:order-2">
                <h3 className="font-serif text-[26px] md:text-[30px] font-medium text-brand-charcoal leading-tight tracking-[-0.005em] mb-4">
                  {site.name}
                </h3>
                <p className="text-[15px] leading-[1.7] text-brand-charcoal/80 mb-5">
                  {site.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {site.tags.map((tag) => (
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
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-green hover:opacity-75 transition-opacity"
                >
                  Visit Site ↗
                </a>
                <p className="text-[12px] text-brand-charcoal/50 mt-1.5">
                  {site.hostname}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
