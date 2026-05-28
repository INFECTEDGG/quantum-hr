import { motion } from "framer-motion";
import { ArrowRight, CircleHelp, MessageCircleQuestion } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { faqContent } from "@/lib/faq-content";
import { useI18n } from "@/lib/i18n";

const FAQ = () => {
  const { language } = useI18n();
  const copy = faqContent[language];

  return (
    <section id="faq" className="relative overflow-hidden border-y border-border bg-surface-1/40 py-28 md:py-36">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary-glow">
              <CircleHelp className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {copy.heading} <span className="text-gradient">{copy.headingAccent}</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">{copy.intro}</p>
            <div className="mt-8 flex flex-col gap-3 border-l border-primary/30 pl-5">
              <p className="text-sm font-medium text-foreground">{copy.ctaText}</p>
              <Button variant="glass" size="sm" className="w-fit" asChild>
                <Link to="/kontakt">
                  <MessageCircleQuestion className="h-4 w-4" aria-hidden="true" />
                  {copy.ctaButton}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
