import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { href: "#services", label: "Leistungen" },
  { href: "#process", label: "Prozess" },
  { href: "#impact", label: "Erfolge" },
  { href: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-glow">
            <div className="absolute inset-1 rounded-lg bg-background/40 backdrop-blur-sm" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            People & Prompts<span className="text-primary-glow">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            l.href.startsWith("/") ? (
              <Link
                key={l.href}
                to={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/kontakt">Gespräch buchen</Link>
          </Button>
        </div>

        <button
          className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl border border-border bg-card-gradient backdrop-blur-xl p-5">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              l.href.startsWith("/") ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
                >
                  {l.label}
                </a>
              )
            ))}
            <Button variant="hero" size="sm" className="mt-3" asChild>
              <Link to="/kontakt">Gespräch buchen</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
