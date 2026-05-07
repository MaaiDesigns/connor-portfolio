"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "background", label: "Background" },
  { id: "evolution", label: "Evolution" },
  { id: "work", label: "Work" },
  { id: "next", label: "Next" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + 120;
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) {
          current = s.id;
        }
      }
      setActive(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: "rgba(250, 248, 245, 0.85)",
        borderBottom: "1px solid rgba(139, 111, 78, 0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-[18px] md:text-[19px] font-semibold text-brand-charcoal"
        >
          Connor O&apos;Hearn
        </button>

        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={`text-[13px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                active === s.id
                  ? "text-brand-green font-semibold"
                  : "text-brand-charcoal/70 hover:text-brand-charcoal"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-brand-charcoal transition-transform ${
              mobileOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-brand-charcoal transition-opacity ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-5 h-px bg-brand-charcoal transition-transform ${
              mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "rgba(139, 111, 78, 0.15)" }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className={`text-left text-[13px] uppercase tracking-[0.12em] ${
                  active === s.id
                    ? "text-brand-green font-semibold"
                    : "text-brand-charcoal/70"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
