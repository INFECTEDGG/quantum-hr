import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const content = {
  de: {
    badge: "Erfolge",
    heading: "Messbare Resultate für",
    headingAccent: "die Personalabteilung.",
    intro: "Einblicke aus unseren jüngsten Projekten im deutschsprachigen Mittelstand.",
    read: "Fallstudie lesen",
    cases: [
      ["Produktionsunternehmen · 800 Mitarbeiter", "Zeitersparnis bei administrativen HR-Prozessen und Zeugniserstellung", "50%", "schnellerer Prozess"],
      ["Mittelständischer Dienstleister · 300 Mitarbeiter", "Implementierung einer DSGVO-konformen KI-Schnittstelle ohne Schatten-IT", "100%", "DSGVO-konform"],
      ["Handelsgruppe · 1.500 Mitarbeiter", "Null-Fehler-Quote beim Datenschutz dank Human-in-the-Loop-Workflows", "0", "Datenschutzfehler"],
    ],
  },
  en: {
    badge: "Impact",
    heading: "Measurable outcomes for",
    headingAccent: "HR teams.",
    intro: "Insights from recent projects with mid-market companies.",
    read: "Read case study",
    cases: [
      ["Manufacturing company · 800 employees", "Time saved in administrative HR processes and reference creation", "50%", "faster process"],
      ["Mid-market services company · 300 employees", "Implementation of a GDPR-compliant AI interface without shadow IT", "100%", "GDPR-compliant"],
      ["Retail group · 1,500 employees", "Zero privacy errors thanks to human-in-the-loop workflows", "0", "privacy errors"],
    ],
  },
  fr: {
    badge: "Résultats",
    heading: "Des résultats mesurables pour",
    headingAccent: "les équipes RH.",
    intro: "Aperçus de projets récents auprès d'entreprises de taille intermédiaire.",
    read: "Lire l'étude de cas",
    cases: [
      ["Entreprise industrielle · 800 employés", "Gain de temps dans les processus RH administratifs et la création de certificats", "50%", "processus plus rapide"],
      ["Prestataire de services · 300 employés", "Mise en place d'une interface IA conforme au RGPD sans shadow IT", "100%", "conforme RGPD"],
      ["Groupe de distribution · 1 500 employés", "Zéro erreur de confidentialité grâce aux workflows human-in-the-loop", "0", "erreur de confidentialité"],
    ],
  },
};

const CaseStudies = () => {
  const { language } = useI18n();
  const copy = content[language];

  return (
    <section id="impact" className="relative py-28 md:py-36">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              {copy.heading}{" "}
              <span className="text-gradient">{copy.headingAccent}</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            {copy.intro}
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {copy.cases.map(([sector, title, metric, label], i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-border bg-card-gradient p-8 overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="font-display text-6xl font-semibold text-gradient leading-none">
                {metric}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-glow">
                {label}
              </div>
              <p className="mt-8 text-xs text-muted-foreground uppercase tracking-wider">
                {sector}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                {title}
              </h3>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                <span>{copy.read}</span>
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
