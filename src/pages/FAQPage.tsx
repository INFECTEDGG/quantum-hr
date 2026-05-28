import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqContent } from "@/lib/faq-content";
import { useI18n } from "@/lib/i18n";

const FAQPage = () => {
  const { language } = useI18n();
  const copy = faqContent[language];

  useEffect(() => {
    document.title = `${copy.badge} - RAWR – Recruitment AI Workforce Revolution GmbH`;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", copy.intro);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/fragen");
  }, [copy.badge, copy.intro]);

  return (
    <div className="w-full bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
            <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-7xl">
              {copy.heading} <span className="text-gradient">{copy.headingAccent}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {copy.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 lg:sticky lg:top-28"
            >
              <div className="rounded-2xl border border-border bg-card-gradient p-6">
                <p className="text-sm font-medium text-foreground">{copy.ctaText}</p>
                <Button variant="hero" size="sm" className="mt-4 w-fit" asChild>
                  <Link to="/kontakt">
                    <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
                    {copy.ctaButton}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8"
            >
              <Accordion type="single" collapsible defaultValue="question-0" className="space-y-3">
                {copy.questions.map(([question, answer], index) => (
                  <AccordionItem
                    key={question}
                    value={`question-${index}`}
                    className="rounded-2xl border border-border bg-card-gradient px-5 transition-colors hover:border-primary/40 md:px-7"
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-base font-semibold leading-snug hover:no-underline md:text-lg">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
