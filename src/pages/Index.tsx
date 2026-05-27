import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import LogoCloud from "@/components/landing/LogoCloud";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import CaseStudies from "@/components/landing/CaseStudies";
import Testimonial from "@/components/landing/Testimonial";
import CTA from "@/components/landing/CTA";
import { useI18n } from "@/lib/i18n";

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
  useEffect(() => {
    document.title = seo[language].title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      seo[language].description
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, [language]);

  return (
    <div className="w-full">
      <Hero />
      <LogoCloud />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default Index;
