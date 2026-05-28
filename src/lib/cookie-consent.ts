export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
  version: 1;
};

export const COOKIE_CONSENT_STORAGE_KEY = "rawr.cookieConsent.v1";
export const COOKIE_CONSENT_CHANGE_EVENT = "rawr.cookieConsentChange";
export const COOKIE_SETTINGS_OPEN_EVENT = "rawr.openCookieSettings";

const isCookieConsent = (value: Partial<CookieConsent> | null): value is CookieConsent =>
  value?.necessary === true &&
  typeof value.analytics === "boolean" &&
  typeof value.updatedAt === "string" &&
  value.version === 1;

export const getCookieConsent = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedConsent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!storedConsent) {
      return null;
    }

    const parsedConsent = JSON.parse(storedConsent) as Partial<CookieConsent>;
    return isCookieConsent(parsedConsent) ? parsedConsent : null;
  } catch {
    return null;
  }
};

export const persistCookieConsent = (analytics: boolean) => {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
    version: 1,
  };

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_CHANGE_EVENT, { detail: consent }));

  return consent;
};
