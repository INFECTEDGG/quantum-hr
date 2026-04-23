import { motion } from "framer-motion";

const cases = [
  {
    sector: "Produktionsunternehmen · 800 Mitarbeiter",
    title: "Zeitersparnis bei administrativen HR-Prozessen und Zeugniserstellung",
    metric: "50%",
    label: "schnellerer Prozess",
  },
  {
    sector: "Mittelständischer Dienstleister · 300 Mitarbeiter",
    title: "Implementierung einer DSGVO-konformen KI-Schnittstelle ohne Schatten-IT",
    metric: "100%",
    label: "DSGVO-konform",
  },
  {
    sector: "Handelsgruppe · 1.500 Mitarbeiter",
    title: "Null-Fehler-Quote beim Datenschutz dank Human-in-the-Loop-Workflows",
    metric: "0",
    label: "Datenschutzfehler",
  },
];

const CaseStudies = () => {
  return (
    <section id="impact" className="relative py-28 md:py-36">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Erfolge</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Messbare Resultate für{" "}
              <span className="text-gradient">die Personalabteilung.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Einblicke aus unseren jüngsten Projekten im deutschsprachigen Mittelstand.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-card-gradient p-8 overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="font-display text-6xl font-semibold text-gradient leading-none">
                {c.metric}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-glow">
                {c.label}
              </div>
              <p className="mt-8 text-xs text-muted-foreground uppercase tracking-wider">
                {c.sector}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                {c.title}
              </h3>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Fallstudie lesen</span>
                <span aria-hidden>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
