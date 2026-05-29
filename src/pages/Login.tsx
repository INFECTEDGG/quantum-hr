import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCurrentUser, login } from "@/lib/auth";
import { useI18n } from "@/lib/i18n";
import { usePageSeo } from "@/lib/seo";

const getAccountTarget = (role: "admin" | "customer") => (role === "admin" ? "/admin" : "/portal");

const content = {
  de: {
    title: "Login - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "RAWR KUNDENPORTAL",
    heading: "Login für Admins und spätere Kundenkonten.",
    intro: "Admins und Kunden können sich hier anmelden, sobald ein Konto im Adminbereich angelegt wurde.",
    passwordLabel: "Passwort",
    cardTitle: "Einloggen",
    cardSubtitle: "Zugang zum internen Bereich",
    emailPlaceholder: "name@unternehmen.de",
    passwordPlaceholder: "Passwort eingeben",
    hidePassword: "Passwort ausblenden",
    showPassword: "Passwort anzeigen",
    submit: "Einloggen",
    loading: "Wird geprüft...",
    noAccess: "Noch keinen Zugang?",
    contact: "Kontakt aufnehmen",
  },
  en: {
    title: "Login - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "RAWR CUSTOMER PORTAL",
    heading: "Login for admins and future customer accounts.",
    intro: "Admins and customers can sign in here once an account has been created in the admin area.",
    passwordLabel: "Password",
    cardTitle: "Sign in",
    cardSubtitle: "Access the internal area",
    emailPlaceholder: "name@company.com",
    passwordPlaceholder: "Enter password",
    hidePassword: "Hide password",
    showPassword: "Show password",
    submit: "Sign in",
    loading: "Checking...",
    noAccess: "No access yet?",
    contact: "Contact us",
  },
  fr: {
    title: "Connexion - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "PORTAIL CLIENT RAWR",
    heading: "Connexion pour admins et futurs comptes clients.",
    intro: "Les admins et clients peuvent se connecter ici dès qu'un compte a été créé dans l'espace admin.",
    passwordLabel: "Mot de passe",
    cardTitle: "Connexion",
    cardSubtitle: "Accès à l'espace interne",
    emailPlaceholder: "nom@entreprise.fr",
    passwordPlaceholder: "Saisir le mot de passe",
    hidePassword: "Masquer le mot de passe",
    showPassword: "Afficher le mot de passe",
    submit: "Se connecter",
    loading: "Vérification...",
    noAccess: "Pas encore d'accès ?",
    contact: "Nous contacter",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, t } = useI18n();
  const copy = content[language];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  usePageSeo({
    title: copy.title,
    description: copy.intro,
    path: "/login",
    language,
    noIndex: true,
  });

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      navigate(getAccountTarget(user.role), { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const user = await login(email, password);
      const state = location.state as { from?: string } | null;
      const target = state?.from && state.from !== "/login" ? state.from : getAccountTarget(user.role);
      navigate(target, { replace: true });
    } catch (loginError) {
      setError(loginError instanceof Error ? t(loginError.message) : t("auth.error.loginFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-glow" />
                <span className="text-xs font-medium tracking-wide text-muted-foreground">
                  {copy.badge}
                </span>
              </div>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl">
                {copy.heading}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {copy.intro}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-border bg-card-gradient p-6 shadow-card md:p-8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/30 to-primary-glow/20">
                    <LockKeyhole className="h-5 w-5 text-primary-glow" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold">{copy.cardTitle}</h2>
                    <p className="text-sm text-muted-foreground">{copy.cardSubtitle}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      {t("common.email")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="mt-2"
                      placeholder={copy.emailPlaceholder}
                      autoComplete="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="text-sm font-medium text-foreground">
                      {copy.passwordLabel}
                    </label>
                    <div className="relative mt-2">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="pr-12"
                        placeholder={copy.passwordPlaceholder}
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((visible) => !visible)}
                        className="absolute inset-y-0 right-0 inline-flex w-11 items-center justify-center text-muted-foreground hover:text-foreground"
                        aria-label={showPassword ? copy.hidePassword : copy.showPassword}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                      {error}
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={isSubmitting}>
                      {isSubmitting ? copy.loading : copy.submit}
                      <ArrowRight />
                    </Button>
                  </div>
                </form>

                <div className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
                  {copy.noAccess}{" "}
                  <Link to="/kontakt" className="text-primary-glow transition-colors hover:text-foreground">
                    {copy.contact}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
