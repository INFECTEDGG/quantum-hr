import { Link } from "react-router-dom";
import { ArrowRight, FolderKanban, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthState } from "@/hooks/use-auth-state";
import { useI18n } from "@/lib/i18n";
import { usePageSeo } from "@/lib/seo";

const content = {
  de: {
    title: "Kundenportal - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "Kundenportal",
    welcome: "Willkommen",
    text:
      "Der Kundenbereich ist für die nächste Ausbaustufe vorbereitet. Hier können später Projektstatus, Unterlagen, Workshop-Termine und Freigaben sichtbar werden.",
    contact: "Ansprechpartner kontaktieren",
    logout: "Abmelden",
  },
  en: {
    title: "Customer portal - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "Customer portal",
    welcome: "Welcome",
    text:
      "The customer area is prepared for the next expansion stage. Later it can show project status, documents, workshop dates and approvals.",
    contact: "Contact your advisor",
    logout: "Sign out",
  },
  fr: {
    title: "Portail client - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "Portail client",
    welcome: "Bienvenue",
    text:
      "L'espace client est préparé pour la prochaine étape. Il pourra ensuite afficher l'état du projet, les documents, les dates d'ateliers et les validations.",
    contact: "Contacter votre interlocuteur",
    logout: "Déconnexion",
  },
};

const CustomerPortal = () => {
  const { user, logout } = useAuthState();
  const { language } = useI18n();
  const copy = content[language];

  usePageSeo({
    title: copy.title,
    description: copy.text,
    path: "/portal",
    language,
    noIndex: true,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/30 to-primary-glow/20">
              <FolderKanban className="h-6 w-6 text-primary-glow" />
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
              {copy.welcome}{user?.name ? `, ${user.name}` : ""}.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {copy.text}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  {copy.contact}
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="glass" size="lg" onClick={logout} asChild>
                <Link to="/login">
                  <LogOut />
                  {copy.logout}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerPortal;
