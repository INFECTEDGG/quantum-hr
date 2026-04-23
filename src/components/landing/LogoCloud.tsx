const logos = [
  "NORTHWIND", "ACME CORP", "VERTEX", "HELIOS", "QUANTA", "OBSIDIAN", "MERIDIAN", "ATLAS BANK",
];

const LogoCloud = () => {
  return (
    <section className="relative py-16 border-y border-border bg-surface-1/40">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by people leaders at
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 animate-ticker w-max">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-xl md:text-2xl font-semibold tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
