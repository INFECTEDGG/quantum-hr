import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogoCloud from "@/components/landing/LogoCloud";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import CaseStudies from "@/components/landing/CaseStudies";
import Testimonial from "@/components/landing/Testimonial";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "People & Prompts — KI-Enablement für HR & People Operations";

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
      "People & Prompts begleitet den Mittelstand bei der DSGVO-konformen Integration von KI in HR-Prozesse."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
