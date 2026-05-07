"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="rounded-xl bg-brand-linen p-7 md:p-10 transition-all duration-300 hover:-translate-y-0.5"
      style={{ boxShadow: "0 1px 2px rgba(45, 42, 38, 0.04)" }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6 mb-5">
        <div>
          <p className="font-serif text-[15px] font-medium text-brand-terracotta mb-2">
            {project.number}
          </p>
          <h3 className="font-serif text-[26px] md:text-[30px] font-medium text-brand-charcoal leading-tight tracking-[-0.005em]">
            {project.title}
          </h3>
        </div>
        <div className="md:text-right shrink-0">
          <p className="text-[13px] text-brand-charcoal/60 leading-tight">
            {project.client}
          </p>
          <p className="text-[13px] text-brand-charcoal/60 leading-tight mt-0.5">
            {project.year}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
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

      <div className="mb-5">
        <p className="section-label mb-2">Problem</p>
        <p className="text-[15px] leading-[1.75] text-brand-charcoal/85">
          {project.problem}
        </p>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border border-brand-green text-brand-green font-semibold px-5 py-2.5 text-[13px] tracking-wide transition-all duration-300 hover:bg-brand-green hover:text-white"
      >
        {open ? "Collapse ↑" : "View Full Case Study →"}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-8 mt-8 border-t" style={{ borderColor: "rgba(139, 111, 78, 0.2)" }}>
              <div className="mb-6">
                <p className="section-label mb-2">Solution</p>
                <p className="text-[15px] leading-[1.75] text-brand-charcoal/85">
                  {project.solution}
                </p>
              </div>

              <div className="mb-6">
                <p className="section-label mb-2">Outcome</p>
                <p className="text-[15px] leading-[1.75] text-brand-charcoal/85">
                  {project.outcome}
                </p>
              </div>

              <div className="mb-2">
                <p className="section-label mb-3">Technical</p>
                <ul className="flex flex-col gap-2">
                  {project.technical.map((item) => (
                    <li
                      key={item}
                      className="text-[14px] leading-[1.6] text-brand-walnut flex items-start gap-2"
                    >
                      <span className="mt-[2px]">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.liveSites && project.liveSites.length > 0 && (
                <div className="mt-8">
                  <p className="section-label mb-3">Live Sites</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {project.liveSites.map((site) => (
                      <a
                        key={site.url}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg p-4 transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          backgroundColor: "#faf8f5",
                          border: "1px solid rgba(139, 111, 78, 0.2)",
                        }}
                      >
                        <p className="font-serif text-[16px] font-medium text-brand-green mb-1">
                          {site.name} ↗
                        </p>
                        <p className="text-[12.5px] leading-[1.55] text-brand-charcoal/70">
                          {site.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
