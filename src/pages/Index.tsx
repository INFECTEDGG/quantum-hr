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
import { createWebPageJsonLd, organizationJsonLd, usePageSeo, websiteJsonLd } from "@/lib/seo";

const seo = {
  de: {
    title: "RAWR | KI-Enablement für HR & Recruiting",
    description:
      "DSGVO-orientierte KI-Beratung für Recruiting, Talent Acquisition und People Operations im Mittelstand.",
  },
  en: {
    title: "RAWR | AI Enablement for HR & Recruiting",
    description:
      "GDPR-oriented AI consulting for recruiting, talent acquisition and people operations in mid-market companies.",
  },
  fr: {
    title: "RAWR | Enablement IA pour RH & Recruiting",
    description:
      "Conseil IA orienté RGPD pour le recrutement, l'acquisition de talents et les people operations des PME et ETI.",
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
      organizationJsonLd,
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
