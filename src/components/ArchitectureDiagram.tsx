"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type NodeVariant = "default" | "start" | "output" | "dashed";

type DiagramNodeProps = {
  variant?: NodeVariant;
  label?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
};

function DiagramNode({
  variant = "default",
  label,
  children,
  className = "",
  delay = 0,
}: DiagramNodeProps) {
  const styles: Record<NodeVariant, { bg: string; border: string; text: string }> = {
    default: { bg: "#faf8f5", border: "#8b6f4e", text: "#2d2a26" },
    start: { bg: "rgba(61, 90, 71, 0.08)", border: "#3d5a47", text: "#2d2a26" },
    output: {
      bg: "rgba(184, 115, 51, 0.1)",
      border: "#b87333",
      text: "#2d2a26",
    },
    dashed: { bg: "#faf8f5", border: "#8b6f4e", text: "#2d2a26" },
  };
  const s = styles[variant];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay }}
      className={`rounded-xl px-3 py-2 text-center ${className}`}
      style={{
        backgroundColor: s.bg,
        border: `1.5px ${variant === "dashed" ? "dashed" : "solid"} ${s.border}`,
        color: s.text,
        minWidth: "120px",
      }}
    >
      {label && (
        <p
          className="text-[9px] font-bold tracking-[0.12em] uppercase mb-0.5"
          style={{ color: "#8b6f4e" }}
        >
          {label}
        </p>
      )}
      <p className="text-[11px] font-medium leading-tight">{children}</p>
    </motion.div>
  );
}

function Arrow({
  direction = "down",
  delay = 0,
}: {
  direction?: "down" | "right";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay }}
      className={`flex items-center justify-center text-[16px] leading-none ${
        direction === "down" ? "py-1.5" : "px-1.5"
      }`}
      style={{ color: "#8b6f4e" }}
      aria-hidden
    >
      {direction === "down" ? "↓" : "→"}
    </motion.div>
  );
}

function ConnectorLines({ count }: { count: number }) {
  return (
    <div className="relative h-6 w-full" aria-hidden>
      <svg
        viewBox={`0 0 ${count * 100} 24`}
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {Array.from({ length: count }).map((_, i) => {
          const x = (i + 0.5) * 100;
          const center = (count * 100) / 2;
          return (
            <line
              key={i}
              x1={center}
              y1={0}
              x2={x}
              y2={24}
              stroke="#8b6f4e"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>
    </div>
  );
}

function ReverseConnectorLines({ count }: { count: number }) {
  return (
    <div className="relative h-6 w-full" aria-hidden>
      <svg
        viewBox={`0 0 ${count * 100} 24`}
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {Array.from({ length: count }).map((_, i) => {
          const x = (i + 0.5) * 100;
          const center = (count * 100) / 2;
          return (
            <line
              key={i}
              x1={x}
              y1={0}
              x2={center}
              y2={24}
              stroke="#8b6f4e"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>
    </div>
  );
}

function GeoDiagram() {
  return (
    <div className="flex flex-col items-center gap-0">
      <DiagramNode variant="start" delay={0}>
        ICP Prompt
      </DiagramNode>
      <Arrow delay={0.05} />
      <DiagramNode delay={0.1}>Geography Decomposer</DiagramNode>
      <ConnectorLines count={3} />
      <div className="grid grid-cols-3 gap-3 w-full">
        {["Agent: Region A", "Agent: Region B", "Agent: Region C"].map((n, i) => (
          <DiagramNode key={n} delay={0.18 + i * 0.05}>
            {n}
          </DiagramNode>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 w-full mt-2">
        {[0, 1, 2].map((i) => (
          <Arrow key={i} delay={0.32 + i * 0.03} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 w-full">
        {[0, 1, 2].map((i) => (
          <DiagramNode key={i} delay={0.38 + i * 0.03}>
            Search & Filter
          </DiagramNode>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 w-full mt-2">
        {[0, 1, 2].map((i) => (
          <Arrow key={i} delay={0.5 + i * 0.03} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 w-full">
        {[0, 1, 2].map((i) => (
          <DiagramNode key={i} delay={0.55 + i * 0.03}>
            Ranked Leads
          </DiagramNode>
        ))}
      </div>
      <ReverseConnectorLines count={3} />
      <DiagramNode delay={0.72}>Deduplication Engine</DiagramNode>
      <Arrow delay={0.78} />
      <DiagramNode variant="output" delay={0.82}>
        CRM-Ready CSVs
      </DiagramNode>
      <Arrow delay={0.88} />
      <DiagramNode variant="dashed" delay={0.92}>
        OpenClaw Autonomous Layer
        <span className="block text-[10px] font-normal text-brand-charcoal/60 mt-0.5 italic">
          added later — fully automated
        </span>
      </DiagramNode>
    </div>
  );
}

function VcDiagram() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p
          className="text-[10px] font-bold tracking-[0.12em] uppercase mb-3"
          style={{ color: "#8b6f4e" }}
        >
          Phase 1 — Meeting Intelligence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-2">
          <div className="md:col-span-1">
            <DiagramNode variant="start" delay={0}>
              Meeting Audio / Notes
            </DiagramNode>
          </div>
          <div className="md:col-span-1 flex justify-center">
            <Arrow direction="right" delay={0.06} />
          </div>
          <div className="md:col-span-1">
            <DiagramNode delay={0.1}>Transcript Processor</DiagramNode>
          </div>
          <div className="md:col-span-1 flex justify-center">
            <Arrow direction="right" delay={0.16} />
          </div>
          <div className="md:col-span-1">
            <DiagramNode delay={0.2}>Detail Extractor</DiagramNode>
          </div>
          <div className="md:col-span-1 flex justify-center">
            <Arrow direction="right" delay={0.26} />
          </div>
          <div className="md:col-span-1">
            <DiagramNode variant="output" delay={0.3}>
              Structured CRM Entry
            </DiagramNode>
          </div>
        </div>
      </div>

      <div>
        <p
          className="text-[10px] font-bold tracking-[0.12em] uppercase mb-3"
          style={{ color: "#8b6f4e" }}
        >
          Phase 2 — Autonomous Deal Sourcing
        </p>
        <div className="flex flex-col items-center gap-0 max-w-md mx-auto">
          <DiagramNode variant="start" delay={0} className="!min-w-[220px]">
            Investment Thesis Prompt
          </DiagramNode>
          <Arrow delay={0.05} />
          <DiagramNode delay={0.1} className="!min-w-[200px]">
            Search APIs → Initial Company List
          </DiagramNode>
          <Arrow delay={0.15} />
          <DiagramNode delay={0.2} className="!min-w-[200px]">
            Stage 1: Thesis-Fit Scoring
          </DiagramNode>
          <p className="text-[10px] italic text-brand-charcoal/55 my-1">
            passes only ↓
          </p>
          <DiagramNode delay={0.28} className="!min-w-[180px]">
            Enrichment APIs
          </DiagramNode>
          <Arrow delay={0.33} />
          <DiagramNode delay={0.38} className="!min-w-[180px]">
            Stage 2: Deep Thesis-Fit Scoring
          </DiagramNode>
          <p className="text-[10px] italic text-brand-charcoal/55 my-1">
            passes only ↓
          </p>
          <DiagramNode delay={0.45} className="!min-w-[170px]">
            Stage 3: Contact & LinkedIn Enrichment
          </DiagramNode>
          <Arrow delay={0.5} />
          <div className="flex items-center gap-3">
            <DiagramNode delay={0.55} className="!min-w-[160px]">
              Kanban Staging
            </DiagramNode>
            <span style={{ color: "#8b6f4e" }} className="text-[14px]">
              ←
            </span>
            <DiagramNode variant="dashed" delay={0.6} className="!min-w-[140px]">
              OpenClaw Enrichment
            </DiagramNode>
          </div>
          <Arrow delay={0.66} />
          <DiagramNode variant="output" delay={0.7} className="!min-w-[220px]">
            Daily Email Digest → Analyst Inbox
            <span className="block font-semibold text-[12px] mt-1 text-brand-terracotta">
              5 qualified companies / day
            </span>
          </DiagramNode>
        </div>
      </div>
    </div>
  );
}

function MocoDiagram() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-0">
        <div className="grid grid-cols-2 gap-3 w-full max-w-md">
          <DiagramNode variant="start" delay={0}>
            Telegram Bot
          </DiagramNode>
          <DiagramNode variant="start" delay={0.05}>
            Next.js Dashboard
          </DiagramNode>
        </div>
        <ReverseConnectorLines count={2} />
        <DiagramNode delay={0.15}>Task Router</DiagramNode>
        <Arrow delay={0.2} />
        <DiagramNode delay={0.25}>Model Router Engine</DiagramNode>
        <ConnectorLines count={3} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
          <DiagramNode delay={0.32}>Skill Config</DiagramNode>
          <DiagramNode delay={0.37}>Routing Table</DiagramNode>
          <DiagramNode delay={0.42}>Keyword Inference</DiagramNode>
        </div>
        <ReverseConnectorLines count={3} />
        <DiagramNode delay={0.55}>Selected Model (Sonnet / Opus)</DiagramNode>
        <Arrow delay={0.6} />
        <DiagramNode delay={0.65}>Claude Code API (moco-worker)</DiagramNode>
        <Arrow delay={0.7} />
        <DiagramNode delay={0.75}>
          Skill Execution Engine
          <span className="block text-[10px] font-normal text-brand-charcoal/60 mt-0.5 italic">
            50 skills synced from GitHub
          </span>
        </DiagramNode>
        <Arrow delay={0.8} />
        <DiagramNode variant="output" delay={0.85}>
          Output: Content / Code / Research / Outreach
        </DiagramNode>
        <Arrow delay={0.9} />
        <DiagramNode variant="output" delay={0.95}>
          Client Delivery via MOCO
        </DiagramNode>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 1.05 }}
        className="rounded-xl px-4 py-3 mt-2"
        style={{ backgroundColor: "#1a2e22", color: "#f3f0eb" }}
      >
        <p
          className="text-[10px] font-bold tracking-[0.12em] uppercase mb-2"
          style={{ color: "rgba(243, 240, 235, 0.65)" }}
        >
          Infrastructure Layer
        </p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11.5px] font-medium">
          <span>Mac Mini M4</span>
          <span className="opacity-40">·</span>
          <span>PM2 Process Mgmt</span>
          <span className="opacity-40">·</span>
          <span>Tailscale VPN</span>
          <span className="opacity-40">·</span>
          <span>macOS Keychain</span>
          <span className="opacity-40">·</span>
          <span>GitHub Sync (5-min cron)</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function ArchitectureDiagram({
  variant,
}: {
  variant: "geo" | "vc" | "moco";
}) {
  return (
    <div
      className="rounded-xl p-5 md:p-7 mb-6"
      style={{
        backgroundColor: "#faf8f5",
        border: "1px solid rgba(139, 111, 78, 0.25)",
      }}
    >
      <p
        className="text-[10px] font-bold tracking-[0.12em] uppercase mb-5"
        style={{ color: "#8b6f4e" }}
      >
        Architecture
      </p>
      {variant === "geo" && <GeoDiagram />}
      {variant === "vc" && <VcDiagram />}
      {variant === "moco" && <MocoDiagram />}
    </div>
  );
}
