# RAWR - Recruitment AI Workforce Revolution GmbH

Rethink HR. Powered by AI.

## Überblick

RAWR ist eine fiktive Website fuer ein AI-gestuetztes HR-Consulting-Unternehmen. Das Projekt entstand im Kontext einer Hochschul-/Marketingarbeit und dient der Darstellung einer modernen, mehrsprachigen Unternehmenswebsite fuer KI-Enablement, HR-Automatisierung und Responsible AI.

Die Website ist als React/Vite-Anwendung aufgebaut und kombiniert eine Landingpage mit separaten Inhaltsseiten fuer Leistungen, Referenzen, Lizenzen, Case Studies, Blog, Shop, Q&A und rechtliche Informationen.

Alle Inhalte, Kundennamen, Referenzen, Produkte, Leistungen und Unternehmensdaten sind fiktiv und muessen vor einer echten Veroeffentlichung fachlich und rechtlich geprueft werden.

## Aktueller Funktionsumfang

- Responsive Landingpage mit Hero, Logos, Services, Prozess, Case Studies, Testimonial, Q&A-Teaser und CTA
- Mehrsprachigkeit fuer Deutsch, Englisch und Franzoesisch
- Globale Navigation mit Hauptlinks und `Mehr`-Dropdown
- Footer mit Unternehmens-, Ressourcen-, Datenschutz- und Cookie-Einstellungslinks
- Cookie-Consent-Banner mit Auswahl fuer notwendige Technologien und optionale Analyse
- Vercel Analytics wird erst nach Zustimmung zu Analyse geladen
- Separate Q&A-Seite mit Accordion fuer haeufige Fragen
- Separate Marketingseiten fuer Referenzen, Lizenzen, Case Studies, Unternehmensvorstellung, Serviceleistungen, Blog und digitale Produkte/Shop
- Datenschutz- und Impressumsseite
- Kontaktseite
- Demo-Login mit Admin- und Customer-Portal-Struktur
- Tests fuer App-Rendering und Cookie-Consent-Verhalten

## Wichtige Seiten und Routes

```text
/                         Landingpage
/leistungen               Serviceleistungen
/serviceleistungen        Alias fuer Serviceleistungen
/case-studies             Case Studies
/referenzen               Kundenreferenzen
/lizenzen                 Lizenzmodelle
/licences                 Alias fuer Lizenzmodelle
/unternehmen              Unternehmensvorstellung
/blog                     Blog-Uebersicht
/shop                     Digitale Produkte / Shop
/digitale-produkte        Alias fuer Shop
/fragen                   Q&A / FAQ
/ueber-uns                Team und Unternehmenskontext
/kontakt                  Kontakt
/datenschutz              Datenschutzerklaerung
/impressum                Impressum
/login                    Login
/admin                    Geschuetztes Admin-Dashboard
/portal                   Geschuetztes Kundenportal
```

## Inhaltspflege

Zentrale Inhalte liegen bewusst in wiederverwendbaren Dateien, damit mehrere Seiten konsistent bleiben:

```text
src/lib/i18n.tsx              Navigation, Footer, Cookie-Banner und globale Uebersetzungen
src/lib/faq-content.ts        Q&A-Inhalte fuer Startseiten-Teaser und FAQ-Seite
src/lib/marketing-pages.ts    Inhalte fuer Referenzen, Lizenzen, Case Studies, Unternehmen, Leistungen, Blog und Shop
```

Die gemeinsame Seitenschablone fuer die neuen Marketingseiten liegt hier:

```text
src/pages/MarketingPage.tsx
```

Neue Marketingseiten koennen durch einen weiteren Eintrag in `marketing-pages.ts` und eine Route in `App.tsx` ergaenzt werden.

## Cookie Consent und Analytics

Der Cookie-Banner befindet sich in:

```text
src/components/CookieConsentBanner.tsx
src/lib/cookie-consent.ts
```

Die Auswahl wird in `localStorage` unter `rawr.cookieConsent.v1` gespeichert. Notwendige Einstellungen bleiben aktiv. Vercel Analytics wird nur gerendert, wenn der Nutzer Analyse zugestimmt hat.

Die Cookie-Einstellungen koennen spaeter ueber den Footer erneut geoeffnet werden.

## Projektstruktur

```text
src/
  assets/                  Bilder und Team-Assets
  components/
    landing/               Landingpage-Sections und Navigation/Footer
    ui/                    shadcn/ui-Komponenten
    auth/                  Auth-Guard
  hooks/                   React Hooks
  lib/                     i18n, Auth, Cookie Consent, Content-Daten, Utils
  pages/                   App-Seiten und Routen
  test/                    Vitest Setup und Tests
```

## Technologien

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- Framer Motion
- lucide-react
- Vercel Analytics
- Vitest
- Testing Library

## Entwicklung

### Abhaengigkeiten installieren

```bash
npm install
```

### Entwicklungsserver starten

```bash
npm run dev
```

Standardmaessig laeuft Vite auf:

```text
http://localhost:8080/
```

### Tests ausfuehren

```bash
npm test
```

### Produktionsbuild erstellen

```bash
npm run build
```

### Linting

```bash
npm run lint
```

Hinweis: Der aktuelle Lint-Lauf scheitert noch an bestehenden shadcn/Tailwind-Themen in generierten UI-Dateien und `tailwind.config.ts`, unter anderem:

- `src/components/ui/command.tsx`
- `src/components/ui/textarea.tsx`
- `tailwind.config.ts`

Die zuletzt ergaenzten Website-Bereiche, Cookie-Consent-Logik und Marketingseiten bauen erfolgreich.

## Aktueller Status einzelner Bereiche

- Referenzen: als anonymisierte Kundenprofile vorbereitet
- Lizenzen: Lizenzmodelle als Informationsseite vorbereitet
- Case Studies: Fallstudienuebersicht mit beispielhaften Projektprofilen
- Unternehmensvorstellung: separate Uebersichtsseite plus bestehende Teamseite
- Serviceleistungen: eigene Seite mit Leistungsfeldern
- Blog: Struktur und geplante Artikel vorbereitet, noch keine Detailartikel
- Shop: Produktkarten und Anfrage-CTA vorbereitet, noch kein Checkout oder Zahlungsanbieter

## Disclaimer

Dieses Projekt ist fiktiv und dient ausschliesslich akademischen und demonstrativen Zwecken. Es werden keine realen Geschaeftstaetigkeiten durchgefuehrt.

Vor einer produktiven Nutzung muessen insbesondere Datenschutz, Impressum, Cookie-Banner, Analytics, Referenzen, Produktangebote, Preise, Lizenzen und externe Markennennungen rechtlich geprueft und an die tatsaechlichen Gegebenheiten angepasst werden.

## Autoren

Erstellt als Hochschul-/Marketingprojekt rund um KI-Enablement im HR-Bereich.
