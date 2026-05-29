import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { SITE_SHORT_NAME, usePageSeo } from "@/lib/seo";

const content = {
  de: { message: "Diese Seite wurde nicht gefunden", home: "Zurück zur Startseite" },
  en: { message: "Page not found", home: "Return home" },
  fr: { message: "Page introuvable", home: "Retour à l'accueil" },
};

const NotFound = () => {
  const location = useLocation();
  const { language } = useI18n();
  const copy = content[language];

  usePageSeo({
    title: `404 | ${SITE_SHORT_NAME}`,
    description: copy.message,
    path: location.pathname,
    language,
    noIndex: true,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{copy.message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {copy.home}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
