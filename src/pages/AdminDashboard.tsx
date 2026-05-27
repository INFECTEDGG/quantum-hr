import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  KeyRound,
  LogOut,
  Plus,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createAccount, updateAccountPassword, type AuthRole, type PublicAccount } from "@/lib/auth";
import { useAuthState } from "@/hooks/use-auth-state";
import { useI18n } from "@/lib/i18n";

type AccountForm = {
  name: string;
  email: string;
  company: string;
  role: AuthRole;
  password: string;
};

type PasswordForm = {
  accountId: string;
  password: string;
};

const initialForm: AccountForm = {
  name: "",
  email: "",
  company: "",
  role: "customer",
  password: "",
};

const initialPasswordForm: PasswordForm = {
  accountId: "",
  password: "",
};

const content = {
  de: {
    title: "Adminbereich - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "Adminbereich",
    heading: "Konten verwalten und neue Zugänge vorbereiten.",
    intro: "Angemeldet als {name}. Von hier aus können neue Admins und Kundenkonten für den späteren Portalbetrieb angelegt werden.",
    logout: "Abmelden",
    admins: "Admins",
    customers: "Kundenkonten",
    total: "Konten gesamt",
    newAccount: "Neues Konto",
    newAccountHint: "Admin oder Kunde anlegen",
    passwordPanel: "Passwort ändern",
    passwordPanelHint: "Neues Passwort für Admin- oder Kundenkonten setzen",
    account: "Konto",
    selectAccount: "Konto wählen",
    newPassword: "Neues Passwort",
    namePlaceholder: "Vorname Nachname",
    emailPlaceholder: "person@unternehmen.de",
    companyPlaceholder: "Optional",
    accountType: "Kontotyp",
    selectAccountType: "Kontotyp wählen",
    customerAccount: "Kundenkonto",
    startPassword: "Startpasswort",
    passwordPlaceholder: "Mindestens 8 Zeichen",
    generate: "Generieren",
    creating: "Konto wird erstellt...",
    create: "Konto erstellen",
    createdToast: "Konto wurde erstellt",
    createdDescription: "{name} kann sich jetzt mit der hinterlegten E-Mail anmelden.",
    updatingPassword: "Passwort wird geändert...",
    updatePassword: "Passwort speichern",
    passwordUpdatedToast: "Passwort wurde geändert",
    passwordUpdatedDescription: "Das neue Passwort ist für {name} aktiv.",
    existing: "Bestehende Konten",
    existingHint: "Verwaltung für Admins und spätere Kundenlogins.",
  },
  en: {
    title: "Admin area - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "Admin area",
    heading: "Manage accounts and prepare new access.",
    intro: "Signed in as {name}. From here, new admins and customer accounts can be created for the future portal.",
    logout: "Sign out",
    admins: "Admins",
    customers: "Customer accounts",
    total: "Total accounts",
    newAccount: "New account",
    newAccountHint: "Create an admin or customer",
    passwordPanel: "Change password",
    passwordPanelHint: "Set a new password for admin or customer accounts",
    account: "Account",
    selectAccount: "Choose account",
    newPassword: "New password",
    namePlaceholder: "First name Last name",
    emailPlaceholder: "person@company.com",
    companyPlaceholder: "Optional",
    accountType: "Account type",
    selectAccountType: "Choose account type",
    customerAccount: "Customer account",
    startPassword: "Initial password",
    passwordPlaceholder: "At least 8 characters",
    generate: "Generate",
    creating: "Creating account...",
    create: "Create account",
    createdToast: "Account created",
    createdDescription: "{name} can now sign in with the email address provided.",
    updatingPassword: "Updating password...",
    updatePassword: "Save password",
    passwordUpdatedToast: "Password updated",
    passwordUpdatedDescription: "The new password is active for {name}.",
    existing: "Existing accounts",
    existingHint: "Management for admins and future customer logins.",
  },
  fr: {
    title: "Espace admin - RAWR – Recruitment AI Workforce Revolution GmbH",
    badge: "Espace admin",
    heading: "Gérer les comptes et préparer de nouveaux accès.",
    intro: "Connecté en tant que {name}. Vous pouvez créer ici de nouveaux admins et comptes clients pour le futur portail.",
    logout: "Déconnexion",
    admins: "Admins",
    customers: "Comptes clients",
    total: "Comptes au total",
    newAccount: "Nouveau compte",
    newAccountHint: "Créer un admin ou un client",
    passwordPanel: "Modifier le mot de passe",
    passwordPanelHint: "Définir un nouveau mot de passe pour les comptes admin ou client",
    account: "Compte",
    selectAccount: "Choisir un compte",
    newPassword: "Nouveau mot de passe",
    namePlaceholder: "Prénom Nom",
    emailPlaceholder: "personne@entreprise.fr",
    companyPlaceholder: "Facultatif",
    accountType: "Type de compte",
    selectAccountType: "Choisir le type de compte",
    customerAccount: "Compte client",
    startPassword: "Mot de passe initial",
    passwordPlaceholder: "Au moins 8 caractères",
    generate: "Générer",
    creating: "Création du compte...",
    create: "Créer le compte",
    createdToast: "Compte créé",
    createdDescription: "{name} peut maintenant se connecter avec l'adresse e-mail indiquée.",
    updatingPassword: "Modification du mot de passe...",
    updatePassword: "Enregistrer le mot de passe",
    passwordUpdatedToast: "Mot de passe modifié",
    passwordUpdatedDescription: "Le nouveau mot de passe est actif pour {name}.",
    existing: "Comptes existants",
    existingHint: "Gestion des admins et futurs logins clients.",
  },
};

const formatDate = (value: string, locale: string) =>
  new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));

const generatePassword = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!#$%";
  const values = new Uint32Array(20);
  crypto.getRandomValues(values);

  return Array.from(values)
    .map((value) => chars[value % chars.length])
    .join("");
};

const AccountRow = ({
  account,
  locale,
  roleLabel,
}: {
  account: PublicAccount;
  locale: string;
  roleLabel: Record<AuthRole, string>;
}) => (
  <div className="grid gap-4 border-t border-border px-5 py-4 text-sm md:grid-cols-[1.4fr_1.4fr_0.8fr_0.8fr] md:items-center">
    <div>
      <p className="font-medium text-foreground">{account.name}</p>
      {account.company && <p className="mt-1 text-muted-foreground">{account.company}</p>}
    </div>
    <p className="break-all text-muted-foreground">{account.email}</p>
    <div>
      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
        {roleLabel[account.role]}
      </span>
    </div>
    <p className="text-muted-foreground">{formatDate(account.createdAt, locale)}</p>
  </div>
);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { language, locale, t } = useI18n();
  const copy = content[language];
  const { user, accounts, refresh, logout } = useAuthState();
  const [form, setForm] = useState<AccountForm>(initialForm);
  const [passwordForm, setPasswordForm] = useState<PasswordForm>(initialPasswordForm);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const roleLabel: Record<AuthRole, string> = {
    admin: t("common.admin"),
    customer: t("common.customer"),
  };

  useEffect(() => {
    document.title = copy.title;
  }, [copy.title]);

  useEffect(() => {
    if (!accounts.length) {
      return;
    }

    const selectedAccountExists = accounts.some((account) => account.id === passwordForm.accountId);
    if (!selectedAccountExists) {
      setPasswordForm((current) => ({ ...current, accountId: accounts[0].id }));
    }
  }, [accounts, passwordForm.accountId]);

  const stats = useMemo(() => {
    const admins = accounts.filter((account) => account.role === "admin").length;
    const customers = accounts.filter((account) => account.role === "customer").length;

    return [
      { label: copy.admins, value: admins, icon: ShieldCheck },
      { label: copy.customers, value: customers, icon: Building2 },
      { label: copy.total, value: accounts.length, icon: UsersRound },
    ];
  }, [accounts, copy.admins, copy.customers, copy.total]);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const account = await createAccount(form);
      setForm(initialForm);
      refresh();
      toast.success(copy.createdToast, {
        description: copy.createdDescription.replace("{name}", account.name),
      });
    } catch (submitError) {
      setError(submitError instanceof Error ? t(submitError.message) : t("auth.error.createFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordError("");
    setIsUpdatingPassword(true);

    try {
      const account = await updateAccountPassword(passwordForm.accountId, passwordForm.password);
      setPasswordForm({ accountId: account.id, password: "" });
      refresh();
      toast.success(copy.passwordUpdatedToast, {
        description: copy.passwordUpdatedDescription.replace("{name}", account.name),
      });
    } catch (submitError) {
      setPasswordError(submitError instanceof Error ? t(submitError.message) : t("auth.error.updateFailed"));
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
              <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight md:text-6xl">
                {copy.heading}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {copy.intro.replace("{name}", user?.name ?? "")}
              </p>
            </div>
            <Button variant="glass" size="lg" onClick={handleLogout}>
              <LogOut />
              {copy.logout}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-border bg-card-gradient p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-2 font-display text-4xl font-semibold text-gradient">{stat.value}</p>
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/30 to-primary-glow/20">
                      <Icon className="h-5 w-5 text-primary-glow" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-5">
              <div className="rounded-3xl border border-border bg-card-gradient p-6 shadow-card md:p-8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/30 to-primary-glow/20">
                    <Plus className="h-5 w-5 text-primary-glow" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold">{copy.newAccount}</h2>
                    <p className="text-sm text-muted-foreground">{copy.newAccountHint}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      {t("common.name")}
                    </label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                      className="mt-2"
                      placeholder={copy.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="account-email" className="text-sm font-medium text-foreground">
                      {t("common.email")}
                    </label>
                    <Input
                      id="account-email"
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                      className="mt-2"
                      placeholder={copy.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      {t("common.company")}
                    </label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                      className="mt-2"
                      placeholder={copy.companyPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="text-sm font-medium text-foreground">
                      {copy.accountType}
                    </label>
                    <Select
                      value={form.role}
                      onValueChange={(role) => setForm((current) => ({ ...current, role: role as AuthRole }))}
                    >
                      <SelectTrigger id="role" className="mt-2">
                        <SelectValue placeholder={copy.selectAccountType} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="customer">{copy.customerAccount}</SelectItem>
                        <SelectItem value="admin">{t("common.admin")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="new-password" className="text-sm font-medium text-foreground">
                      {copy.startPassword}
                    </label>
                    <div className="mt-2 flex gap-2">
                      <Input
                        id="new-password"
                        value={form.password}
                        onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                        placeholder={copy.passwordPlaceholder}
                      />
                      <Button
                        type="button"
                        variant="glass"
                        onClick={() => setForm((current) => ({ ...current, password: generatePassword() }))}
                      >
                        {copy.generate}
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                      {error}
                    </div>
                  )}

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? copy.creating : copy.create}
                    <ArrowRight />
                  </Button>
                </form>
              </div>

              <div className="rounded-3xl border border-border bg-card-gradient p-6 shadow-card md:p-8">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/30 to-primary-glow/20">
                    <KeyRound className="h-5 w-5 text-primary-glow" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold">{copy.passwordPanel}</h2>
                    <p className="text-sm text-muted-foreground">{copy.passwordPanelHint}</p>
                  </div>
                </div>

                <form onSubmit={handlePasswordSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="password-account" className="text-sm font-medium text-foreground">
                      {copy.account}
                    </label>
                    <Select
                      value={passwordForm.accountId}
                      onValueChange={(accountId) =>
                        setPasswordForm((current) => ({ ...current, accountId, password: "" }))
                      }
                    >
                      <SelectTrigger id="password-account" className="mt-2">
                        <SelectValue placeholder={copy.selectAccount} />
                      </SelectTrigger>
                      <SelectContent>
                        {accounts.map((account) => (
                          <SelectItem key={account.id} value={account.id}>
                            {account.name} - {roleLabel[account.role]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="changed-password" className="text-sm font-medium text-foreground">
                      {copy.newPassword}
                    </label>
                    <div className="mt-2 flex gap-2">
                      <Input
                        id="changed-password"
                        value={passwordForm.password}
                        onChange={(event) =>
                          setPasswordForm((current) => ({ ...current, password: event.target.value }))
                        }
                        placeholder={copy.passwordPlaceholder}
                      />
                      <Button
                        type="button"
                        variant="glass"
                        onClick={() =>
                          setPasswordForm((current) => ({ ...current, password: generatePassword() }))
                        }
                      >
                        {copy.generate}
                      </Button>
                    </div>
                  </div>

                  {passwordError && (
                    <div className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                      {passwordError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isUpdatingPassword || accounts.length === 0}
                  >
                    {isUpdatingPassword ? copy.updatingPassword : copy.updatePassword}
                    <ArrowRight />
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-border bg-card-gradient shadow-card">
                <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-semibold">{copy.existing}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {copy.existingHint}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                    <UserRound className="h-3.5 w-3.5" />
                    {accounts.length} {t("common.active")}
                  </div>
                </div>

                <div className="hidden border-t border-border px-5 py-3 text-xs uppercase tracking-[0.16em] text-muted-foreground md:grid md:grid-cols-[1.4fr_1.4fr_0.8fr_0.8fr]">
                  <span>{t("common.name")}</span>
                  <span>{t("common.email")}</span>
                  <span>{t("common.role")}</span>
                  <span>{t("common.created")}</span>
                </div>

                {accounts.map((account) => (
                  <AccountRow key={account.id} account={account} locale={locale} roleLabel={roleLabel} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
