import { motion } from "framer-motion";
import { Brain, Users, LineChart, Compass, ShieldCheck, Workflow } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const serviceIcons = [Brain, Users, LineChart, Compass, ShieldCheck, Workflow];
const serviceSpans = ["md:col-span-2", "", "", "md:col-span-2", "", "md:col-span-2"];

const content = {
  de: {
    badge: "Services",
    heading: "Drei Schwerpunkte.",
    headingAccent: "Eine Vision",
    headingTail: "für den Mittelstand.",
    intro:
      "Unser Ansatz kombiniert strategische Beratung mit Hands-on Enablement – damit KI kein abstraktes IT-Thema bleibt, sondern produktiv genutzt wird.",
    services: [
      ["AI Enablement für HR", "Training und Onboarding für generatives Prompt Engineering bei Stellenanzeigen, Zeugnissen und Bewerber-Screening."],
      ["Business Process Automation", "Automatisierungspotenziale in ATS und HR-Software identifizieren und maßgeschneiderte KI-Tools integrieren."],
      ["Strategische KI-Compliance", "Auswahl DSGVO-konformer LLMs und Aufbau sicherer, unternehmensinterner KI-Schnittstellen gegen Schatten-IT."],
      ["Workshops & Audits", "HR AI Readiness Audits zur Identifikation von Potenzialen in den Personalprozessen und Bewertung von Datenschutzrisiken."],
      ["Transformation Begleitung", "Etablierung von Human-in-the-Loop-Prozessen, um Risiken wie KI-Biases ethisch vertretbar zu minimieren."],
      ["API & Integration", "Wartung und API-Bereitstellung von internen KI-Tools zur sicheren Verbindung bestehender Systeme."],
    ],
  },
  en: {
    badge: "Services",
    heading: "Three focus areas.",
    headingAccent: "One vision",
    headingTail: "for mid-market HR.",
    intro:
      "Our approach combines strategic consulting with hands-on enablement so AI becomes productive in daily HR work instead of staying an abstract IT topic.",
    services: [
      ["AI enablement for HR", "Training and onboarding for generative prompt engineering in job ads, references and candidate screening."],
      ["Business process automation", "Identify automation potential in ATS and HR software and integrate custom AI tools."],
      ["Strategic AI compliance", "Select GDPR-compliant LLMs and build secure internal AI interfaces that prevent shadow IT."],
      ["Workshops & audits", "HR AI readiness audits to identify process potential and assess privacy risks."],
      ["Transformation support", "Establish human-in-the-loop processes to reduce risks such as AI bias responsibly."],
      ["API & integration", "Maintain and provide internal AI tools via API to connect existing systems securely."],
    ],
  },
  fr: {
    badge: "Services",
    heading: "Trois priorités.",
    headingAccent: "Une vision",
    headingTail: "pour les RH.",
    intro:
      "Notre approche combine conseil stratégique et accompagnement opérationnel afin que l'IA devienne utile au quotidien, au lieu de rester un sujet IT abstrait.",
    services: [
      ["Enablement IA pour les RH", "Formation et onboarding au prompt engineering génératif pour offres d'emploi, certificats et présélection des candidatures."],
      ["Automatisation des processus", "Identifier les potentiels d'automatisation dans les ATS et logiciels RH, puis intégrer des outils IA adaptés."],
      ["Conformité IA stratégique", "Choisir des LLM conformes au RGPD et créer des interfaces IA internes sécurisées contre le shadow IT."],
      ["Workshops & audits", "Audits HR AI Readiness pour identifier les potentiels de processus et évaluer les risques de confidentialité."],
      ["Accompagnement du changement", "Mettre en place des processus human-in-the-loop afin de limiter les biais IA de manière responsable."],
      ["API & intégration", "Maintenir et exposer des outils IA internes via API pour connecter les systèmes existants en toute sécurité."],
    ],
  },
};

const Services = () => {
  const { language } = useI18n();
  const copy = content[language];

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            {copy.heading}{" "}
            <span className="text-gradient">{copy.headingAccent}</span> {copy.headingTail}
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            {copy.intro}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {copy.services.map(([title, desc], i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-3xl border border-border bg-card-gradient p-7 overflow-hidden hover:border-primary/40 transition-all duration-500 ${serviceSpans[i]}`}
              >
                <div
                  className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(var(--primary-glow) / 0.4), transparent 70%)" }}
                />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary-glow/20 border border-white/10">
                    <Icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
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
