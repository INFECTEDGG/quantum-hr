import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  FileCheck2,
  Layers3,
  Newspaper,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { marketingPages, type MarketingPageKey } from "@/lib/marketing-pages";
import { useI18n } from "@/lib/i18n";
import { createWebPageJsonLd, SITE_NAME, usePageSeo } from "@/lib/seo";

const pageIcons: Record<MarketingPageKey, LucideIcon> = {
  references: UsersRound,
  licenses: BadgeCheck,
  caseStudies: FileCheck2,
  services: BriefcaseBusiness,
  blog: Newspaper,
  shop: ShoppingBag,
};

const itemIcons: LucideIcon[] = [
  ShieldCheck,
  Layers3,
  BookOpenText,
  PackageCheck,
  Sparkles,
  FileCheck2,
];

type MarketingPageProps = {
  pageKey: MarketingPageKey;
};

const MarketingPage = ({ pageKey }: MarketingPageProps) => {
  const { language } = useI18n();
  const page = marketingPages[language][pageKey];
  const PageIcon = pageIcons[pageKey];
  const title = `${page.badge} - ${SITE_NAME}`;

  usePageSeo({
    title,
    description: page.intro,
    path: page.path,
    language,
    jsonLd: createWebPageJsonLd({
      title,
      description: page.intro,
      path: page.path,
      language,
    }),
  });

  return (
    <div className="w-full bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <PageIcon className="h-3.5 w-3.5 text-primary-glow" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {page.badge}
              </span>
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight leading-[0.95] md:text-7xl">
              {page.title} <span className="text-gradient">{page.accent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {page.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to={page.primaryHref}>
                  {page.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              {page.secondaryCta && page.secondaryHref && (
                <Button variant="glass" size="lg" asChild>
                  <Link to={page.secondaryHref}>{page.secondaryCta}</Link>
                </Button>
              )}
            </div>
          </motion.div>

          <div className="mt-14 grid gap-3 sm:grid-cols-3">
            {page.stats.map(([value, label]) => (
              <div key={`${value}-${label}`} className="border-l border-primary/30 pl-5">
                <p className="font-display text-3xl font-semibold text-gradient">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {page.sections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`relative py-20 md:py-28 ${sectionIndex % 2 === 1 ? "border-y border-border bg-surface-1/40" : ""}`}
        >
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{page.badge}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {section.title}
              </h2>
              {section.intro && (
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{section.intro}</p>
              )}
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item, index) => {
                const ItemIcon = itemIcons[index % itemIcons.length];

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative flex min-h-[17rem] flex-col rounded-2xl border border-border bg-card-gradient p-6 transition-colors hover:border-primary/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-glow">
                        <ItemIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      {item.badge && (
                        <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5 text-sm">
                      <span className="text-muted-foreground">{item.meta}</span>
                      {item.actionLabel && item.actionHref && (
                        <Link
                          to={item.actionHref}
                          className="inline-flex items-center gap-1 font-medium text-primary-glow transition-colors hover:text-foreground"
                        >
                          {item.actionLabel}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MarketingPage;
