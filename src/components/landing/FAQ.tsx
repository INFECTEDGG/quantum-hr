import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which HR processes does RAWR automate?",
    a: "RAWR automates the most time-intensive administrative tasks HR teams face every day: data entry across HRIS and ATS systems, leave and absence tracking, payroll reporting, compliance monitoring, and performance review workflows. Most customers reclaim 8–12 hours of manual work per HR manager each week from day one.",
  },
  {
    q: "How quickly can we go live?",
    a: "Typical time-to-value is 14 days. After a kick-off call we ingest your existing HRIS, ATS, and payroll data, configure your workflows, and deliver a live dashboard. No lengthy IT projects — our embedded consultants handle the heavy lifting alongside your team.",
  },
  {
    q: "Which tools and systems does RAWR integrate with?",
    a: "RAWR connects natively with all major HR platforms including SAP SuccessFactors, Workday, BambooHR, Personio, HiBob, and ADP, as well as leading ATS solutions like Greenhouse, Lever, and Recruitee. We also support custom API connections and file-based imports for legacy systems.",
  },
  {
    q: "How does RAWR ensure compliance with local employment law?",
    a: "Our compliance engine covers labour law requirements across 40+ jurisdictions and is updated in real time as regulations change. Automated alerts notify HR managers of upcoming deadlines, missing documents, or policy gaps — so you stay audit-ready without manual monitoring.",
  },
  {
    q: "What reporting and analytics capabilities are included?",
    a: "Every RAWR plan includes real-time dashboards for headcount, attrition risk, absence rates, time-to-hire, and workforce cost. Reports can be exported in one click and shared with leadership as branded PDFs or embedded in your existing BI tools. Custom KPIs can be added at no extra cost.",
  },
  {
    q: "Is RAWR suitable for mid-sized companies (50–200 employees)?",
    a: "Absolutely. Our most common customer profile is an HR team of one to five people managing 50–200 employees. The platform scales as you grow — you won't pay for complexity you don't need today, and you won't hit a ceiling when your headcount doubles.",
  },
  {
    q: "How is our data protected?",
    a: "RAWR is ISO 27001 certified and fully GDPR compliant. All data is encrypted in transit and at rest, hosted on EU-based servers, and never shared with third parties. Role-based access controls ensure employees only see data relevant to their role.",
  },
  {
    q: "What does the onboarding and support experience look like?",
    a: "Every customer is assigned a dedicated senior HR consultant who handles configuration, staff training, and change management. Ongoing support is available via email, phone, and a dedicated Slack channel. Our average first-response time is under two hours on business days.",
  },
];

const FAQ = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sticky heading column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 lg:sticky lg:top-28 self-start"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">FAQ</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Questions <span className="text-gradient">worth asking</span> before you decide.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Everything HR managers and team leads ask us before their first
              call — answered honestly.
            </p>
          </motion.div>

          {/* Accordion column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map(({ q, a }, i) => (
                <AccordionItem
                  key={q}
                  value={`item-${i}`}
                  className="rounded-3xl border border-border bg-card-gradient px-7 hover:border-primary/40 transition-all duration-300 [&[data-state=open]]:border-primary/40"
                >
                  <AccordionTrigger className="font-display text-base font-semibold text-left hover:no-underline py-6">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
