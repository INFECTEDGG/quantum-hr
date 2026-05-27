import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const content = {
  de: {
    quote:
      "RAWR – Recruitment AI Workforce Revolution GmbH hat uns nicht nur beraten, sondern unser HR-Team direkt an der Tastatur befähigt. Die Automatisierung ist enorm. Der Fokus auf Datenschutz ist",
    highlight: "beruhigend und sicher.",
    name: "Thomas Müller",
    role: "HR-Direktor, Produktionsunternehmen",
  },
  en: {
    quote:
      "RAWR – Recruitment AI Workforce Revolution GmbH did not just advise us; they enabled our HR team hands-on. The automation impact is enormous. Their focus on privacy is",
    highlight: "reassuring and secure.",
    name: "Thomas Müller",
    role: "HR Director, manufacturing company",
  },
  fr: {
    quote:
      "RAWR – Recruitment AI Workforce Revolution GmbH ne nous a pas seulement conseillés; l'équipe a formé nos RH directement en pratique. L'automatisation est considérable. Leur attention à la confidentialité est",
    highlight: "rassurante et sécurisante.",
    name: "Thomas Müller",
    role: "Directeur RH, entreprise industrielle",
  },
};

const Testimonial = () => {
  const { language } = useI18n();
  const copy = content[language];

  return (
    <section className="relative py-28 md:py-36 bg-surface-1/40 border-y border-border overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.18), transparent 60%)" }}
      />
      <div className="container relative">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="font-display text-5xl text-primary-glow leading-none">“</div>
          <blockquote className="mt-4 font-display text-2xl md:text-4xl font-medium leading-[1.25] tracking-tight">
            {copy.quote}{" "}
            <span className="text-gradient">{copy.highlight}</span>
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-glow" />
            <div className="text-left">
              <div className="font-medium">{copy.name}</div>
              <div className="text-sm text-muted-foreground">{copy.role}</div>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Testimonial;
