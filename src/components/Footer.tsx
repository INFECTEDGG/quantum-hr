import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link to="/ueber-uns" className="hover:text-foreground transition-colors">
              {t("nav.about")}
            </Link>
            <Link to="/kontakt" className="hover:text-foreground transition-colors">
              {t("nav.contact")}
            </Link>
            <Link to="/impressum" className="hover:text-foreground transition-colors">
              {t("footer.imprint")}
            </Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://www.linkedin.com/company/rawr-recruitment-ai-workforce-revolution" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"> <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.68h-3.138v12.138a2.727 2.727 0 1 1-2.727-2.727c.214 0 .42.025.618.07V8.32a5.859 5.859 0 1 0 5.859 5.859V8.98a7.902 7.902 0 0 0 4.607 1.473V7.314a4.76 4.76 0 0 1-1.449-.628z" /></svg>
              <span className="sr-only">TikTok</span>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"> <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" /></svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" /></svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
