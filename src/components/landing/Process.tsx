import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const content = {
  de: {
    badge: "Unser Prozess",
    heading: "Vom",
    headingAccent: "Konzept zur Befähigung",
    headingTail: "in vier Schritten.",
    intro:
      "Ein pragmatischer Ansatz speziell für mittelständische Fachabteilungen. Keine abstrakten PowerPoint-Schlachten – nur messbares Enablement.",
    steps: [
      ["Audit", "Wir führen ein 'HR AI Readiness Audit' durch, um Potenziale in Personalprozessen und Datenschutzrisiken zu bewerten."],
      ["Strategie", "Entwicklung maßgeschneiderter Konzepte für DSGVO-konforme LLM-Auswahl und sichere Enterprise-KI Schnittstellen."],
      ["Enablement", "Wir schulen Ihre HR-Mitarbeiter direkt an der Tastatur in Best Practices für Prompt Engineering und Automatisierung."],
      ["Integration", "Nahtlose Verbindung bestehender HR-Software (z.B. Personio, Workday) mit KI-Fähigkeiten für nachhaltige Effizienz."],
    ],
  },
  en: {
    badge: "Our process",
    heading: "From",
    headingAccent: "concept to enablement",
    headingTail: "in four steps.",
    intro:
      "A pragmatic approach built for mid-market HR teams. No abstract slide battles, just measurable enablement.",
    steps: [
      ["Audit", "We run an HR AI readiness audit to assess process potential and privacy risks."],
      ["Strategy", "We develop tailored concepts for GDPR-compliant LLM selection and secure enterprise AI interfaces."],
      ["Enablement", "We train HR teams hands-on in prompt engineering and automation best practices."],
      ["Integration", "We connect existing HR software such as Personio or Workday with AI capabilities for sustainable efficiency."],
    ],
  },
  fr: {
    badge: "Notre processus",
    heading: "Du",
    headingAccent: "concept à l'autonomie",
    headingTail: "en quatre étapes.",
    intro:
      "Une approche pragmatique pensée pour les équipes RH des PME et ETI. Pas de théorie interminable, mais une montée en compétence mesurable.",
    steps: [
      ["Audit", "Nous réalisons un audit HR AI Readiness pour évaluer les potentiels de processus et les risques de confidentialité."],
      ["Stratégie", "Nous développons des concepts adaptés pour le choix de LLM conformes au RGPD et des interfaces IA d'entreprise sécurisées."],
      ["Enablement", "Nous formons les équipes RH directement en pratique aux bonnes méthodes de prompt engineering et d'automatisation."],
      ["Intégration", "Nous connectons les logiciels RH existants, comme Personio ou Workday, à des capacités IA durables."],
    ],
  },
};

const Process = () => {
  const { language } = useI18n();
  const copy = content[language];

  return (
    <section id="process" className="relative py-28 md:py-36 bg-surface-1/40 border-y border-border">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              {copy.heading} <span className="text-gradient">{copy.headingAccent}</span> {copy.headingTail}
            </h2>
            <p className="mt-5 text-muted-foreground">
              {copy.intro}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {copy.steps.map(([title, desc], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex gap-6 rounded-3xl border border-border bg-card-gradient p-7 hover:border-primary/40 transition-all"
              >
                <div className="font-display text-3xl font-semibold text-gradient shrink-0 w-16">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
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
