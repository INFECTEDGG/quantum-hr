import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/landing/Footer";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum - RAWR";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-12 pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-glow" />
            RAWR
          </Link>

          <div className="mt-16 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">Rechtliches</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-tight">
              Impressum
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">
              Angaben gemäss § 5 DDG für das studentische Projekt RAWR.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl space-y-10">
          <div className="rounded-2xl border-2 border-primary-glow bg-primary/10 p-7">
            <h2 className="font-display text-2xl font-semibold text-primary-glow">
              Wichtiger Hinweis - Studentisches Projekt
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bei der vorliegenden Website handelt es sich um ein ausschließlich zu Lehr- und
                Übungszwecken im Rahmen eines Hochschullabors zum Thema Online Marketing
                erstelltes studentisches Projekt.
              </p>
              <p>
                Die Inhalte dieser Website, einschliesslich der dargestellten Firma, des
                Firmennamens, der Produkte, Dienstleistungen, Preise, Adressen, Kundendaten und
                weiterer Informationen, sind vollständig fiktiv.
              </p>
              <p>
                Ein tatsächlicher Geschäftsbetrieb findet nicht statt. Über diese Website können
                keine rechtsverbindlichen Bestellungen getätigt oder sonstige Verträge
                abgeschlossen werden. Die Darstellung erfolgt rein zu didaktischen Zwecken ohne
                kommerzielle Absicht.
              </p>
              <p>
                Der verwendete Firmenname wurde exemplarisch gewählt. Sollte ein reales Unternehmen
                mit identischem oder ähnlichen Namen existieren, besteht kein rechtlicher,
                wirtschaftlicher oder inhaltlicher Zusammenhang.
              </p>
              <p>
                Für Rückfragen oder Hinweise wenden Sie sich bitte an den verantwortlichen
                Hochschullehrenden:
                <br />
                <a
                  className="text-primary-glow hover:text-foreground transition-colors"
                  href="mailto:manuel.kern@hs-heilbronn.de"
                >
                  manuel.kern@hs-heilbronn.de
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Unternehmensangaben</h2>
            <div className="mt-4 rounded-2xl border border-border bg-surface-1/40 p-6 space-y-1 text-muted-foreground">
              <p>RAWR GmbH</p>
              <p>Etzelstrasse</p>
              <p>74076 Heilbronn</p>
              <p>Deutschland</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Handelsregister</h2>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p>Registergericht: Amtsgericht Stuttgart</p>
              <p>Registernummer: HRB 768254</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Umsatzsteuer-ID</h2>
            <p className="mt-4 text-muted-foreground">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE 316 478 291
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Vertretungsberechtigte</h2>
            <p className="mt-4 text-muted-foreground">
              Geschäftsführer: Maximilian Stephan
              <br />
              Vertretungsberechtigt gemäß § 35 GmbHG
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Kontaktaufnahme</h2>
            <div className="mt-4 rounded-2xl border border-border bg-surface-1/40 p-6 space-y-1 text-muted-foreground">
              <p>Telefon: +49 7131 98 765 43</p>
              <p>
                E-Mail:{" "}
                <a
                  className="text-primary-glow hover:text-foreground transition-colors"
                  href="mailto:hello@rawr.de"
                >
                  hello@rawr.de
                </a>
              </p>
              <p>
                Website:{" "}
                <Link className="text-primary-glow hover:text-foreground transition-colors" to="/">
                  www.rawr.de
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Verantwortlich für den Inhalt</h2>
            <p className="mt-4 text-muted-foreground">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
            </p>
            <div className="mt-4 rounded-2xl border border-border bg-surface-1/40 p-6 space-y-1 text-muted-foreground">
              <p>Maximilian Stephan</p>
              <p>Etzelstrasse</p>
              <p>74076 Heilbronn</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Streitschlichtung</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
                <br />
                <a
                  className="text-primary-glow hover:text-foreground transition-colors"
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Haftung für Inhalte</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberuehrt. Bei Bekanntwerden entsprechender
                Rechtsverletzungen werden diese Inhalte umgehend entfernt.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Haftung für Links</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Für diese fremden Inhalte koennen wir keine Gewähr
                übernehmen.
              </p>
              <p>
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden derartige
                Links umgehend entfernt.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Urheberrecht</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfaeltigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Impressum;
