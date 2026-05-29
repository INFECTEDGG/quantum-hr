import { useEffect } from "react";
import type { Language } from "@/lib/i18n";

export const SITE_URL = "https://rawr.solutions";
export const SITE_NAME = "RAWR – Recruitment AI Workforce Revolution GmbH";
export const SITE_SHORT_NAME = "RAWR";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/rawr-logo.png`;

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  language: Language;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
  jsonLd?: JsonLd;
};

type WebPageJsonLdOptions = {
  title: string;
  description: string;
  path: string;
  language: Language;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage";
};

const HTML_LANG_BY_LANGUAGE: Record<Language, string> = {
  de: "de-DE",
  en: "en-US",
  fr: "fr-FR",
};

const OG_LOCALE_BY_LANGUAGE: Record<Language, string> = {
  de: "de_DE",
  en: "en_US",
  fr: "fr_FR",
};

export const absoluteUrl = (path = "/") => new URL(path, SITE_URL).toString();

const setMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const setPageJsonLd = (jsonLdString?: string) => {
  const id = "page-structured-data";
  const existing = document.getElementById(id);

  if (!jsonLdString) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement("script");
  element.id = id;
  element.setAttribute("type", "application/ld+json");
  element.textContent = jsonLdString;

  if (!existing) {
    document.head.appendChild(element);
  }
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_SHORT_NAME,
  legalName: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description:
    "RAWR begleitet Unternehmen bei KI-Enablement, HR-Automatisierung, Recruiting-Workflows und verantwortungsvoller KI-Governance.",
  email: "hello@rawr.de",
  telephone: "+49 7131 98 765 43",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Etzelstrasse",
    postalCode: "74076",
    addressLocality: "Heilbronn",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@rawr.de",
    telephone: "+49 7131 98 765 43",
    availableLanguage: ["de", "en", "fr"],
  },
  areaServed: ["Deutschland", "DACH"],
  knowsAbout: [
    "AI Enablement",
    "HR Automation",
    "Recruiting",
    "People Operations",
    "Responsible AI",
    "GDPR",
  ],
  sameAs: ["https://www.linkedin.com/company/rawr-recruitment-ai-workforce-revolution"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: ["de-DE", "en-US", "fr-FR"],
};

export const createWebPageJsonLd = ({
  title,
  description,
  path,
  language,
  pageType = "WebPage",
}: WebPageJsonLdOptions) => {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: HTML_LANG_BY_LANGUAGE[language],
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
};

export const createFaqJsonLd = (questions: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});

export const usePageSeo = ({
  title,
  description,
  path,
  language,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  jsonLd,
}: SeoOptions) => {
  const canonical = absoluteUrl(path);
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    document.documentElement.lang = HTML_LANG_BY_LANGUAGE[language];
    document.title = title;

    setCanonical(canonical);
    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("name", "author", SITE_NAME);

    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", image);
    setMeta("property", "og:locale", OG_LOCALE_BY_LANGUAGE[language]);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    setPageJsonLd(jsonLdString);
  }, [canonical, description, image, jsonLdString, language, noIndex, title, type]);
};
