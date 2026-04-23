import { motion } from "framer-motion";
import { Brain, Users, LineChart, Compass, ShieldCheck, Workflow } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Enablement für HR",
    desc: "Training und Onboarding für generatives Prompt Engineering bei Stellenanzeigen, Zeugnissen und Bewerber-Screening.",
    span: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Business Process Automation",
    desc: "Automatisierungspotenziale in ATS und HR-Software identifizieren und maßgeschneiderte KI-Tools integrieren.",
  },
  {
    icon: LineChart,
    title: "Strategische KI-Compliance",
    desc: "Auswahl DSGVO-konformer LLMs und Aufbau sicherer, unternehmensinterner KI-Schnittstellen gegen Schatten-IT.",
  },
  {
    icon: Compass,
    title: "Workshops & Audits",
    desc: "HR AI Readiness Audits zur Identifikation von Potenzialen in den Personalprozessen und Bewertung von Datenschutzrisiken.",
    span: "md:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Transformation Begleitung",
    desc: "Etablierung von Human-in-the-Loop-Prozessen, um Risiken wie KI-Biases ethisch vertretbar zu minimieren.",
  },
  {
    icon: Workflow,
    title: "API & Integration",
    desc: "Wartung und API-Bereitstellung von internen KI-Tools zur sicheren Verbindung bestehender Systeme.",
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
            Drei Schwerpunkte.{" "}
            <span className="text-gradient">Eine Vision</span> für den Mittelstand.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Unser Ansatz kombiniert strategische Beratung mit Hands-on Enablement – damit KI kein abstraktes IT-Thema bleibt, sondern produktiv genutzt wird.
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
