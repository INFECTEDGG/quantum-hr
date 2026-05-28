import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "@/hooks/use-auth-state";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const primaryLinks = [
  { href: "/leistungen", labelKey: "nav.services" },
  { href: "/case-studies", labelKey: "nav.caseStudies" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/shop", labelKey: "nav.shop" },
  { href: "/unternehmen", labelKey: "nav.companyProfile" },
];

const moreLinks = [
  { href: "/referenzen", labelKey: "nav.references" },
  { href: "/lizenzen", labelKey: "nav.licenses" },
  { href: "/fragen", labelKey: "nav.faq" },
  { href: "/kontakt", labelKey: "nav.contact" },
];

const mobileLinks = [...primaryLinks, ...moreLinks];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuthState();
  const { t } = useI18n();
  const portalPath = user?.role === "admin" ? "/admin" : "/portal";
  const portalLabel = user?.role === "admin" ? t("nav.admin") : t("nav.portal");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 group">
          <img
            src="/rawr-logo.png"
            alt="RAWR"
            className="h-11 w-11 shrink-0 rounded-xl bg-white object-contain p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-sm sm:text-base xl:text-lg font-semibold tracking-tight leading-tight max-w-[calc(100vw-5.5rem)] xl:max-w-none">
            RAWR – Recruitment AI Workforce Revolution
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(l.labelKey)}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus:text-foreground">
              {t("nav.more")}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-48 border-border bg-popover/95 backdrop-blur-xl">
              {moreLinks.map((l) => (
                <DropdownMenuItem key={l.href} asChild>
                  <Link to={l.href}>{t(l.labelKey)}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden xl:flex items-center gap-2">
          <LanguageSwitcher />
          {user ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to={portalPath}>{portalLabel}</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                {t("nav.logout")}
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">{t("nav.login")}</Link>
            </Button>
          )}
          <Button variant="hero" size="sm" asChild>
            <Link to="/kontakt">{t("nav.bookCall")}</Link>
          </Button>
        </div>

        <button
          className="xl:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("nav.menu")}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden mt-3 mx-4 rounded-2xl border border-border bg-card-gradient backdrop-blur-xl p-5">
          <nav className="flex flex-col gap-1">
            {mobileLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                {t(l.labelKey)}
              </Link>
            ))}
            <LanguageSwitcher className="mt-2 w-full justify-start" />
            <Link
              to={user ? portalPath : "/login"}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              {user ? portalLabel : t("nav.login")}
            </Link>
            {user && (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setOpen(false);
                  navigate("/login");
                }}
                className="px-3 py-3 rounded-lg text-left text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                {t("nav.logout")}
              </button>
            )}
            <Button variant="hero" size="sm" className="mt-3" asChild>
              <Link to="/kontakt" onClick={() => setOpen(false)}>{t("nav.bookCall")}</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
