import { useEffect } from "react";

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutz - RAWR – Recruitment AI Workforce Revolution GmbH";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-12 pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <div className="mt-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Rechtliches</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-tight">
              Datenschutz
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Diese Datenschutzerklärung beschreibt, welche personenbezogenen Daten beim Besuch
              dieser Website verarbeitet werden. Bitte vor Veröffentlichung rechtlich prüfen und
              an die tatsächlichen Dienste anpassen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl space-y-10">
          <div>
            <h2 className="font-display text-2xl font-semibold">Verantwortlicher</h2>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p>RAWR – Recruitment AI Workforce Revolution GmbH</p>
              <p>Etzelstraße</p>
              <p>74076 Heilbronn</p>
              <p>E-Mail: [datenschutz@rawr.com]</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Erhebung von Zugriffsdaten</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Beim Aufruf dieser Website koennen technisch notwendige Zugriffsdaten verarbeitet
              werden, etwa IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp, Betriebssystem,
              Referrer-URL und angeforderte Dateien. Die Verarbeitung dient der sicheren und
              stabilen Bereitstellung der Website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Kontaktaufnahme</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, verarbeiten wir
              die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage und für mögliche
              Anschlussfragen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Cookies und externe Dienste</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Soweit Cookies, Analysewerkzeuge, eingebettete Inhalte oder externe Dienste eingesetzt
              werden, müssen diese hier konkret benannt und die jeweilige Rechtsgrundlage ergaenzt
              werden. Nicht erforderliche Dienste sollten erst nach Einwilligung geladen werden.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Ihre Rechte</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
              Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Speicherdauer</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen
              Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Datenschutz;
