import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    t: "Diagnose",
    d: "We ingest your HRIS, ATS and engagement data. The RAWR model maps your workforce in 14 days.",
  },
  {
    n: "02",
    t: "Design",
    d: "Senior consultants co-create a roadmap with your leadership — grounded in benchmarks from 240+ enterprises.",
  },
  {
    n: "03",
    t: "Deploy",
    d: "Embedded squads ship interventions, AI agents and dashboards. We measure outcomes weekly.",
  },
  {
    n: "04",
    t: "Compound",
    d: "Continuous learning loops keep your people strategy ahead of the market — quarter after quarter.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-surface-1/40 border-y border-border">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">The Method</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              From <span className="text-gradient">data to decisions</span> in four moves.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A repeatable engagement model refined across 600+ projects. No
              50-slide decks — just measurable change.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex gap-6 rounded-3xl border border-border bg-card-gradient p-7 hover:border-primary/40 transition-all"
              >
                <div className="font-display text-3xl font-semibold text-gradient shrink-0 w-16">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
