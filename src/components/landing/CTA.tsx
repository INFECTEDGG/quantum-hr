import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const content = {
  de: {
    badge: "Jetzt starten",
    title: "Machen Sie Ihre Personalabteilung",
    accent: "KI-ready.",
    copy: "Vereinbaren Sie ein kostenloses Erstgespräch. Wir besprechen Ihre Automatisierungspotenziale und einen Fahrplan für sicheres KI-Enablement.",
    primary: "Erstgespräch buchen",
    secondary: "Whitepaper herunterladen",
  },
  en: {
    badge: "Get started",
    title: "Make your HR department",
    accent: "AI-ready.",
    copy: "Book a free introductory call. We will discuss your automation potential and a roadmap for secure AI enablement.",
    primary: "Book intro call",
    secondary: "Download whitepaper",
  },
  fr: {
    badge: "Commencer",
    title: "Préparez votre département RH à",
    accent: "l'IA.",
    copy: "Réservez un premier échange gratuit. Nous discuterons de vos potentiels d'automatisation et d'une feuille de route pour un enablement IA sécurisé.",
    primary: "Réserver un échange",
    secondary: "Télécharger le livre blanc",
  },
};

const CTA = () => {
  const { language } = useI18n();
  const copy = content[language];

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container">
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-card-gradient shadow-elegant p-10 md:p-20">
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at top left, hsl(var(--primary) / 0.35), transparent 55%), radial-gradient(ellipse at bottom right, hsl(var(--primary-glow) / 0.3), transparent 55%)",
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              {copy.title}{" "}
              <span className="text-gradient">{copy.accent}</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              {copy.copy}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  {copy.primary}
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="glass" size="lg">
                {copy.secondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
