import { useCallback, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_SETTINGS_OPEN_EVENT,
  getCookieConsent,
  persistCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";
import { useI18n } from "@/lib/i18n";

export const CookieControlledAnalytics = () => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(() => getCookieConsent()?.analytics ?? false);

  useEffect(() => {
    const syncConsent = () => setAnalyticsEnabled(getCookieConsent()?.analytics ?? false);
    const handleConsentChange = (event: Event) => {
      const consent = (event as CustomEvent<CookieConsent>).detail;
      setAnalyticsEnabled(consent?.analytics ?? false);
    };

    window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, handleConsentChange);
    window.addEventListener("storage", syncConsent);
    syncConsent();

    return () => {
      window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, handleConsentChange);
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  return analyticsEnabled ? <Analytics /> : null;
};

const CookieConsentBanner = () => {
  const { t } = useI18n();
  const [storedConsent, setStoredConsent] = useState<CookieConsent | null>(() => getCookieConsent());
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsSelected, setAnalyticsSelected] = useState(storedConsent?.analytics ?? false);

  const saveConsent = useCallback((analytics: boolean) => {
    const nextConsent = persistCookieConsent(analytics);
    setStoredConsent(nextConsent);
    setAnalyticsSelected(analytics);
    setSettingsOpen(false);
  }, []);

  useEffect(() => {
    const handleOpenSettings = () => {
      const currentConsent = getCookieConsent();
      setStoredConsent(currentConsent);
      setAnalyticsSelected(currentConsent?.analytics ?? false);
      setSettingsOpen(true);
    };

    window.addEventListener(COOKIE_SETTINGS_OPEN_EVENT, handleOpenSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_OPEN_EVENT, handleOpenSettings);
  }, []);

  const shouldShowBanner = !storedConsent;

  return (
    <>
      {shouldShowBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5">
          <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-background/95 p-4 shadow-elegant backdrop-blur-xl sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="flex gap-3">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary-glow">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-base font-semibold leading-tight text-foreground sm:text-lg">
                    {t("cookie.title")}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                    {t("cookie.description")}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <Link to="/datenschutz" className="hover:text-foreground">
                      {t("footer.privacy")}
                    </Link>
                    <Link to="/impressum" className="hover:text-foreground">
                      {t("footer.imprint")}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-3 lg:w-[31rem]">
                <Button variant="outline" size="sm" onClick={() => setSettingsOpen(true)}>
                  {t("cookie.customize")}
                </Button>
                <Button variant="secondary" size="sm" onClick={() => saveConsent(false)}>
                  {t("cookie.rejectOptional")}
                </Button>
                <Button variant="hero" size="sm" onClick={() => saveConsent(true)}>
                  {t("cookie.acceptAll")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="max-w-2xl rounded-2xl border-border bg-background/95 p-0 backdrop-blur-xl">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle>{t("cookie.modalTitle")}</DialogTitle>
              <DialogDescription className="leading-relaxed">
                {t("cookie.modalDescription")}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-border bg-surface-1/60 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-foreground">{t("cookie.necessaryTitle")}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t("cookie.necessaryDescription")}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary-glow">
                    {t("cookie.alwaysActive")}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-1/60 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <label className="font-medium text-foreground" htmlFor="analytics-consent">
                      {t("cookie.analyticsTitle")}
                    </label>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t("cookie.analyticsDescription")}
                    </p>
                  </div>
                  <Switch
                    id="analytics-consent"
                    aria-label={t("cookie.analyticsTitle")}
                    checked={analyticsSelected}
                    onCheckedChange={setAnalyticsSelected}
                  />
                </div>
              </div>
            </div>

            <DialogFooter className="mt-6 gap-2 sm:space-x-0">
              <Button variant="outline" onClick={() => saveConsent(false)}>
                {t("cookie.rejectOptional")}
              </Button>
              <Button variant="hero" onClick={() => saveConsent(analyticsSelected)}>
                {t("cookie.save")}
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsentBanner;
