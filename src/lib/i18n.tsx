/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "de" | "en" | "fr";

type LanguageOption = {
  code: Language;
  label: string;
  shortLabel: string;
  locale: string;
};

type I18nContextValue = {
  language: Language;
  locale: string;
  languages: LanguageOption[];
  setLanguage: (language: Language) => void;
  t: (key: string, values?: Record<string, string | number>) => string;
};

const STORAGE_KEY = "rawr.language";

export const languages: LanguageOption[] = [
  { code: "de", label: "Deutsch", shortLabel: "DE", locale: "de-DE" },
  { code: "en", label: "English", shortLabel: "EN", locale: "en-US" },
  { code: "fr", label: "Français", shortLabel: "FR", locale: "fr-FR" },
];

const translations: Record<Language, Record<string, string>> = {
  de: {
    "language.label": "Sprache",
    "nav.services": "Leistungen",
    "nav.process": "Prozess",
    "nav.impact": "Erfolge",
    "nav.caseStudies": "Case Studies",
    "nav.references": "Referenzen",
    "nav.licenses": "Lizenzen",
    "nav.companyProfile": "Unternehmen",
    "nav.blog": "Blog",
    "nav.shop": "Shop",
    "nav.more": "Mehr",
    "nav.faq": "Q&A",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.login": "Login",
    "nav.admin": "Admin",
    "nav.portal": "Portal",
    "nav.logout": "Abmelden",
    "nav.bookCall": "Gespräch buchen",
    "nav.menu": "Menü öffnen",
    "footer.company": "Unternehmen",
    "footer.resources": "Ressourcen",
    "footer.description": "KI-Enablement und strategische Beratung für HR & People Operations im Mittelstand.",
    "footer.allRights": "Alle Rechte vorbehalten.",
    "footer.slogan": "Sicherheit. Pragmatismus. Befähigung.",
    "footer.privacy": "Datenschutz",
    "footer.imprint": "Impressum",
    "footer.cookieSettings": "Cookie-Einstellungen",
    "cookie.title": "Privatsphäre-Einstellungen",
    "cookie.description": "Wir verwenden notwendige Technologien für den Betrieb der Website. Optionale Analyse-Dienste helfen uns, die Website zu verbessern, und werden erst nach Ihrer Zustimmung geladen.",
    "cookie.customize": "Auswahl anpassen",
    "cookie.rejectOptional": "Nur notwendige",
    "cookie.acceptAll": "Alle akzeptieren",
    "cookie.save": "Auswahl speichern",
    "cookie.modalTitle": "Cookie-Einstellungen verwalten",
    "cookie.modalDescription": "Legen Sie fest, welche optionalen Dienste wir verwenden dürfen. Notwendige Technologien bleiben aktiv, damit die Website zuverlässig funktioniert.",
    "cookie.necessaryTitle": "Notwendig",
    "cookie.necessaryDescription": "Speichert zum Beispiel Ihre Sprach- und Cookie-Auswahl und stellt grundlegende Funktionen bereit.",
    "cookie.analyticsTitle": "Analyse",
    "cookie.analyticsDescription": "Erlaubt anonyme Nutzungsstatistiken über Vercel Analytics, damit wir Inhalte und Nutzerführung verbessern können.",
    "cookie.alwaysActive": "Immer aktiv",
    "common.optional": "Optional",
    "common.email": "E-Mail",
    "common.name": "Name",
    "common.company": "Firma",
    "common.password": "Passwort",
    "common.admin": "Admin",
    "common.customer": "Kunde",
    "common.customers": "Kundenkonten",
    "common.active": "aktiv",
    "common.created": "Erstellt",
    "common.role": "Rolle",
    "common.loading": "Wird geprüft...",
    "common.send": "Absenden",
    "auth.error.cryptoUnsupported": "Dieser Browser unterstützt die Demo-Verschlüsselung nicht.",
    "auth.error.invalidCredentials": "E-Mail oder Passwort ist nicht korrekt.",
    "auth.error.adminOnly": "Nur Admins können Konten verwalten.",
    "auth.error.nameShort": "Bitte gib einen Namen mit mindestens 2 Zeichen ein.",
    "auth.error.invalidEmail": "Bitte gib eine gültige E-Mail-Adresse ein.",
    "auth.error.passwordShort": "Das Passwort muss mindestens 8 Zeichen lang sein.",
    "auth.error.emailExists": "Für diese E-Mail-Adresse existiert bereits ein Konto.",
    "auth.error.accountNotFound": "Das ausgewählte Konto wurde nicht gefunden.",
    "auth.error.loginFailed": "Der Login ist fehlgeschlagen.",
    "auth.error.createFailed": "Das Konto konnte nicht erstellt werden.",
    "auth.error.updateFailed": "Das Passwort konnte nicht geändert werden.",
  },
  en: {
    "language.label": "Language",
    "nav.services": "Services",
    "nav.process": "Process",
    "nav.impact": "Impact",
    "nav.caseStudies": "Case Studies",
    "nav.references": "References",
    "nav.licenses": "Licences",
    "nav.companyProfile": "Company",
    "nav.blog": "Blog",
    "nav.shop": "Shop",
    "nav.more": "More",
    "nav.faq": "Q&A",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.admin": "Admin",
    "nav.portal": "Portal",
    "nav.logout": "Sign out",
    "nav.bookCall": "Book a call",
    "nav.menu": "Open menu",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.description": "AI enablement and strategic consulting for HR and People Operations in mid-market companies.",
    "footer.allRights": "All rights reserved.",
    "footer.slogan": "Security. Pragmatism. Enablement.",
    "footer.privacy": "Privacy",
    "footer.imprint": "Legal notice",
    "footer.cookieSettings": "Cookie settings",
    "cookie.title": "Privacy settings",
    "cookie.description": "We use necessary technologies to run this website. Optional analytics services help us improve the site and are loaded only after your consent.",
    "cookie.customize": "Customize",
    "cookie.rejectOptional": "Necessary only",
    "cookie.acceptAll": "Accept all",
    "cookie.save": "Save selection",
    "cookie.modalTitle": "Manage cookie settings",
    "cookie.modalDescription": "Choose which optional services we may use. Necessary technologies remain active so the website can work reliably.",
    "cookie.necessaryTitle": "Necessary",
    "cookie.necessaryDescription": "Stores your language and cookie choices, for example, and provides core functionality.",
    "cookie.analyticsTitle": "Analytics",
    "cookie.analyticsDescription": "Allows anonymous usage statistics through Vercel Analytics so we can improve content and navigation.",
    "cookie.alwaysActive": "Always active",
    "common.optional": "Optional",
    "common.email": "Email",
    "common.name": "Name",
    "common.company": "Company",
    "common.password": "Password",
    "common.admin": "Admin",
    "common.customer": "Customer",
    "common.customers": "Customer accounts",
    "common.active": "active",
    "common.created": "Created",
    "common.role": "Role",
    "common.loading": "Checking...",
    "common.send": "Submit",
    "auth.error.cryptoUnsupported": "This browser does not support demo encryption.",
    "auth.error.invalidCredentials": "Email or password is incorrect.",
    "auth.error.adminOnly": "Only admins can manage accounts.",
    "auth.error.nameShort": "Please enter a name with at least 2 characters.",
    "auth.error.invalidEmail": "Please enter a valid email address.",
    "auth.error.passwordShort": "The password must be at least 8 characters long.",
    "auth.error.emailExists": "An account with this email address already exists.",
    "auth.error.accountNotFound": "The selected account could not be found.",
    "auth.error.loginFailed": "Login failed.",
    "auth.error.createFailed": "The account could not be created.",
    "auth.error.updateFailed": "The password could not be updated.",
  },
  fr: {
    "language.label": "Langue",
    "nav.services": "Services",
    "nav.process": "Processus",
    "nav.impact": "Résultats",
    "nav.caseStudies": "Cas clients",
    "nav.references": "Références",
    "nav.licenses": "Licences",
    "nav.companyProfile": "Entreprise",
    "nav.blog": "Blog",
    "nav.shop": "Shop",
    "nav.more": "Plus",
    "nav.faq": "Q&A",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.login": "Connexion",
    "nav.admin": "Admin",
    "nav.portal": "Portail",
    "nav.logout": "Déconnexion",
    "nav.bookCall": "Réserver un appel",
    "nav.menu": "Ouvrir le menu",
    "footer.company": "Entreprise",
    "footer.resources": "Ressources",
    "footer.description": "Accompagnement IA et conseil stratégique pour les RH et People Operations des PME et ETI.",
    "footer.allRights": "Tous droits réservés.",
    "footer.slogan": "Sécurité. Pragmatisme. Autonomie.",
    "footer.privacy": "Confidentialité",
    "footer.imprint": "Mentions légales",
    "footer.cookieSettings": "Paramètres cookies",
    "cookie.title": "Paramètres de confidentialité",
    "cookie.description": "Nous utilisons les technologies nécessaires au fonctionnement du site. Les services d'analyse facultatifs nous aident à améliorer le site et ne sont chargés qu'après votre accord.",
    "cookie.customize": "Personnaliser",
    "cookie.rejectOptional": "Nécessaires seuls",
    "cookie.acceptAll": "Tout accepter",
    "cookie.save": "Enregistrer",
    "cookie.modalTitle": "Gérer les paramètres cookies",
    "cookie.modalDescription": "Choisissez les services facultatifs que nous pouvons utiliser. Les technologies nécessaires restent actives pour assurer le bon fonctionnement du site.",
    "cookie.necessaryTitle": "Nécessaire",
    "cookie.necessaryDescription": "Stocke par exemple vos choix de langue et de cookies et fournit les fonctionnalités essentielles.",
    "cookie.analyticsTitle": "Analyse",
    "cookie.analyticsDescription": "Autorise des statistiques d'utilisation anonymes via Vercel Analytics afin d'améliorer le contenu et la navigation.",
    "cookie.alwaysActive": "Toujours actif",
    "common.optional": "Facultatif",
    "common.email": "E-mail",
    "common.name": "Nom",
    "common.company": "Entreprise",
    "common.password": "Mot de passe",
    "common.admin": "Admin",
    "common.customer": "Client",
    "common.customers": "Comptes clients",
    "common.active": "actif",
    "common.created": "Créé",
    "common.role": "Rôle",
    "common.loading": "Vérification...",
    "common.send": "Envoyer",
    "auth.error.cryptoUnsupported": "Ce navigateur ne prend pas en charge le chiffrement de démonstration.",
    "auth.error.invalidCredentials": "L'e-mail ou le mot de passe est incorrect.",
    "auth.error.adminOnly": "Seuls les admins peuvent gérer les comptes.",
    "auth.error.nameShort": "Veuillez saisir un nom d'au moins 2 caractères.",
    "auth.error.invalidEmail": "Veuillez saisir une adresse e-mail valide.",
    "auth.error.passwordShort": "Le mot de passe doit contenir au moins 8 caractères.",
    "auth.error.emailExists": "Un compte existe déjà pour cette adresse e-mail.",
    "auth.error.accountNotFound": "Le compte sélectionné est introuvable.",
    "auth.error.loginFailed": "La connexion a échoué.",
    "auth.error.createFailed": "Le compte n'a pas pu être créé.",
    "auth.error.updateFailed": "Le mot de passe n'a pas pu être modifié.",
  },
};

const I18nContext = createContext<I18nContextValue | null>(null);

const isLanguage = (value: string | null): value is Language =>
  value === "de" || value === "en" || value === "fr";

const detectLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "de";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguage = window.navigator.language.slice(0, 2);
  return isLanguage(browserLanguage) ? browserLanguage : "de";
};

const interpolate = (value: string, values?: Record<string, string | number>) => {
  if (!values) {
    return value;
  }

  return Object.entries(values).reduce(
    (result, [key, replacement]) => result.replaceAll(`{${key}}`, String(replacement)),
    value,
  );
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => detectLanguage());

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key: string, values?: Record<string, string | number>) =>
      interpolate(translations[language][key] ?? translations.de[key] ?? key, values),
    [language],
  );

  const locale = languages.find((option) => option.code === language)?.locale ?? "de-DE";

  const value = useMemo(
    () => ({
      language,
      locale,
      languages,
      setLanguage,
      t,
    }),
    [language, locale, setLanguage, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }

  return context;
};
