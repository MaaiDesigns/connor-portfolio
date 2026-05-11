"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { education } from "@/data/education";
import { career } from "@/data/career";
import { ventures, type VentureStatus } from "@/data/ventures";

const tabs = [
  { id: "education", label: "Education" },
  { id: "career", label: "Career" },
  { id: "ventures", label: "Current Ventures" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7 },
};

const statusColor: Record<VentureStatus, string> = {
  Active: "#3d5a47",
  "In development": "#b87333",
  "Side project": "#8b6f4e",
  "Early stage": "#b87333",
};

export default function Profile() {
  const [active, setActive] = useState<TabId>("education");

  return (
    <section id="profile" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p {...fadeUp} className="section-label mb-6">
          Profile
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-serif font-medium text-brand-charcoal leading-[1.15] tracking-[-0.005em] mb-10 max-w-4xl"
          style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}
        >
          Background, roles, and{" "}
          <span className="italic text-brand-terracotta">current work</span>
        </motion.h2>

        <div
          className="flex flex-wrap gap-2 mb-12 overflow-x-auto"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={`rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-brand-green text-white"
                    : "border border-brand-walnut/40 text-brand-walnut hover:bg-brand-walnut/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {active === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col gap-4"
              >
                {education.map((c) => (
                  <div
                    key={c.credential}
                    className="rounded-xl bg-brand-linen p-6 md:p-7 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ boxShadow: "0 1px 2px rgba(45, 42, 38, 0.04)" }}
                  >
                    <h3 className="font-serif text-[19px] md:text-[21px] font-medium text-brand-charcoal leading-tight mb-1.5">
                      {c.credential}
                    </h3>
                    <p className="text-[14px] text-brand-charcoal/75">
                      {c.institution}
                    </p>
                    <p className="text-[12.5px] text-brand-walnut mt-0.5">
                      {c.location}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {active === "career" && (
              <motion.div
                key="career"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div
                  className="absolute left-2 top-2 bottom-2 w-px"
                  style={{ backgroundColor: "rgba(139, 111, 78, 0.25)" }}
                />
                <div className="flex flex-col gap-8">
                  {career.map((role) => (
                    <div key={role.company} className="relative pl-8">
                      <span
                        className="absolute left-2 top-2 -translate-x-1/2 w-3 h-3 rounded-full ring-4 ring-brand-bg"
                        style={{ backgroundColor: "#8b6f4e" }}
                      />
                      <div
                        className="rounded-xl bg-brand-linen p-6 md:p-7"
                        style={{ boxShadow: "0 1px 2px rgba(45, 42, 38, 0.04)" }}
                      >
                        <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-brand-charcoal leading-tight">
                          {role.company}
                        </h3>
                        <p className="text-[13px] text-brand-walnut mt-0.5">
                          {role.context}
                        </p>
                        <p className="text-[13.5px] italic text-brand-charcoal/70 mt-2 mb-3">
                          {role.role}
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {role.bullets.map((b) => (
                            <li
                              key={b}
                              className="text-[14px] leading-[1.6] text-brand-charcoal/85 flex items-start gap-2"
                            >
                              <span className="mt-[2px] text-brand-walnut">→</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {active === "ventures" && (
              <motion.div
                key="ventures"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid md:grid-cols-2 gap-4 md:gap-5"
              >
                {ventures.map((v) => (
                  <div
                    key={v.name}
                    className="rounded-xl bg-brand-linen p-6 md:p-7 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ boxShadow: "0 1px 2px rgba(45, 42, 38, 0.04)" }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-[19px] md:text-[21px] font-medium text-brand-charcoal leading-tight">
                        {v.name}
                      </h3>
                      <div className="flex items-center gap-1.5 shrink-0 pt-1">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: statusColor[v.status] }}
                        />
                        <span
                          className="text-[10.5px] font-semibold tracking-[0.08em] uppercase"
                          style={{ color: statusColor[v.status] }}
                        >
                          {v.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-[14px] leading-[1.65] text-brand-charcoal/80">
                      {v.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
