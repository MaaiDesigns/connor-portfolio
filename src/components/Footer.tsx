export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-8 border-t"
      style={{ borderColor: "rgba(139, 111, 78, 0.15)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-[12.5px] tracking-wide text-brand-charcoal/55">
        <p>© 2026 2555 Ventures LLC</p>
        <p>Savannah, GA</p>
      </div>
    </footer>
  );
}
