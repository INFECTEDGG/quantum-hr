import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import LogoCloud from "@/components/landing/LogoCloud";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import CaseStudies from "@/components/landing/CaseStudies";
import Testimonial from "@/components/landing/Testimonial";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import { useI18n } from "@/lib/i18n";
import { createWebPageJsonLd, usePageSeo, websiteJsonLd } from "@/lib/seo";

const seo = {
  de: {
    title: "RAWR – Recruitment AI Workforce Revolution GmbH — KI-Enablement für HR & People Operations",
    description:
      "RAWR – Recruitment AI Workforce Revolution GmbH begleitet den Mittelstand bei der DSGVO-konformen Integration von KI in HR-Prozesse.",
  },
  en: {
    title: "RAWR – Recruitment AI Workforce Revolution GmbH — AI enablement for HR & People Operations",
    description:
      "RAWR – Recruitment AI Workforce Revolution GmbH helps mid-market companies integrate AI into HR processes in a GDPR-compliant way.",
  },
  fr: {
    title: "RAWR – Recruitment AI Workforce Revolution GmbH — Enablement IA pour RH & People Operations",
    description:
      "RAWR – Recruitment AI Workforce Revolution GmbH accompagne les PME et ETI dans l'intégration conforme au RGPD de l'IA dans les processus RH.",
  },
};

const Index = () => {
  const location = useLocation();
  const { language } = useI18n();
  const pageSeo = seo[language];

  usePageSeo({
    title: pageSeo.title,
    description: pageSeo.description,
    path: "/",
    language,
    jsonLd: [
      websiteJsonLd,
      createWebPageJsonLd({
        title: pageSeo.title,
        description: pageSeo.description,
        path: "/",
        language,
      }),
    ],
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="w-full">
      <Hero />
      <LogoCloud />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonial />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
