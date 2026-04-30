import { motion } from "framer-motion";

const cases = [
  {
    sector: "Global Bank · 84,000 employees",
    title: "Cut time-to-hire by 41% across 12 markets",
    metric: "41%",
    label: "faster hiring",
  },
  {
    sector: "SaaS Leader · 12,000 employees",
    title: "Predicted attrition 6 months ahead, retained $54M in talent",
    metric: "$54M",
    label: "retained talent",
  },
  {
    sector: "Industrial Group · 60,000 employees",
    title: "Redesigned org for AI adoption — 3.2x productivity in pilot teams",
    metric: "3.2×",
    label: "productivity uplift",
  },
];

const CaseStudies = () => {
  return (
    <section id="impact" className="relative py-28 md:py-36">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Impact</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Outcomes that show up{" "}
              <span className="text-gradient">on the balance sheet.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A selection of recent transformations with our enterprise clients.
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
                <span>Read case study</span>
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
