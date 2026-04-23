import { motion } from "framer-motion";
import { Brain, Users, LineChart, Compass, ShieldCheck, Workflow } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Talent Intelligence",
    desc: "Predictive sourcing, candidate scoring and skills mapping powered by our proprietary models.",
    span: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Leadership & Culture",
    desc: "Executive coaching grounded in behavioral data.",
  },
  {
    icon: LineChart,
    title: "Workforce Analytics",
    desc: "Real-time dashboards on engagement, attrition risk, and ROI of every people decision.",
  },
  {
    icon: Compass,
    title: "Org Design",
    desc: "Restructure for AI-augmented teams without losing institutional knowledge.",
    span: "md:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Ethics",
    desc: "Audit-ready AI governance frameworks across 40+ jurisdictions.",
  },
  {
    icon: Workflow,
    title: "Transformation PMO",
    desc: "Embedded consultants drive end-to-end people transformations from day 1 to year 3.",
    span: "md:col-span-2",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Services</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Six practices.{" "}
            <span className="text-gradient">One operating system</span> for people.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Every engagement combines a senior consulting partner with our Aetheris AI
            platform — so insight moves at the speed of your business.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-3xl border border-border bg-card-gradient p-7 overflow-hidden hover:border-primary/40 transition-all duration-500 ${s.span ?? ""}`}
              >
                <div
                  className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(var(--primary-glow) / 0.4), transparent 70%)" }}
                />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary-glow/20 border border-white/10">
                    <Icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
