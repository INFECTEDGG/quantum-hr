import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, beforeEach } from "vitest";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { COOKIE_CONSENT_STORAGE_KEY } from "@/lib/cookie-consent";
import { LanguageProvider } from "@/lib/i18n";

const renderCookieConsent = () =>
  render(
    <BrowserRouter>
      <LanguageProvider>
        <CookieConsentBanner />
      </LanguageProvider>
    </BrowserRouter>,
  );

describe("cookie consent banner", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.localStorage.setItem("rawr.language", "de");
  });

  it("stores a necessary-only decision", async () => {
    renderCookieConsent();

    fireEvent.click(screen.getByRole("button", { name: /nur notwendige/i }));

    await waitFor(() => {
      expect(screen.queryByText(/privatsphäre-einstellungen/i)).not.toBeInTheDocument();
    });

    const storedConsent = JSON.parse(window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) ?? "{}");
    expect(storedConsent.analytics).toBe(false);
  });

  it("stores analytics consent from the settings dialog", () => {
    renderCookieConsent();

    fireEvent.click(screen.getByRole("button", { name: /auswahl anpassen/i }));
    fireEvent.click(screen.getByRole("switch", { name: /analyse/i }));
    fireEvent.click(screen.getByRole("button", { name: /auswahl speichern/i }));

    const storedConsent = JSON.parse(window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) ?? "{}");
    expect(storedConsent.analytics).toBe(true);
  });
});
