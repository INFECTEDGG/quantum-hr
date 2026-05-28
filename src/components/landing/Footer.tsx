import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-border py-14 bg-surface-1/40">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/rawr-logo.png"
                alt="RAWR"
                className="h-12 w-12 shrink-0 rounded-xl bg-white object-contain p-1.5 shadow-sm"
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                RAWR – Recruitment AI Workforce Revolution GmbH
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground">{t("footer.company")}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-foreground transition-colors" to="/unternehmen">{t("nav.companyProfile")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/ueber-uns">{t("nav.about")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/referenzen">{t("nav.references")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/lizenzen">{t("nav.licenses")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/kontakt">{t("nav.contact")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/impressum">{t("footer.imprint")}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground">{t("footer.resources")}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-foreground transition-colors" to="/leistungen">{t("nav.services")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/case-studies">{t("nav.caseStudies")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/blog">{t("nav.blog")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/shop">{t("nav.shop")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/fragen">{t("nav.faq")}</Link></li>
              <li><Link className="hover:text-foreground transition-colors" to="/datenschutz">{t("footer.privacy")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} RAWR – Recruitment AI Workforce Revolution GmbH. {t("footer.allRights")}</p>
          <p>{t("footer.slogan")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
