import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link to="/impressum" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">
              Datenschutz
            </Link>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="bg-surface-2 p-4 rounded-md border border-border text-[10px] leading-relaxed text-muted-foreground text-justify">
          Bei der vorliegenden Website handelt es sich um ein ausschließlich zu Lehr- und Übungszwecken im Rahmen eines Hochschullabors zum Thema Online Marketing erstelltes studentisches Projekt. Die Inhalte dieser Website, einschließlich der dargestellten Firma, des Firmennamens, der Produkte, Dienstleistungen, Preise, Adressen, Kundendaten und weiterer Informationen, sind vollständig fiktiv. Ein tatsächlicher Geschäftsbetrieb findet nicht statt. Insbesondere können über diese Website keine rechtsverbindlichen Bestellungen getätigt oder sonstige Verträge abgeschlossen werden. Die Darstellung erfolgt rein zu didaktischen Zwecken ohne kommerzielle Absicht. Der verwendete Firmenname wurde exemplarisch und unabhängig von bestehenden Unternehmen gewählt. Sollte ein reales Unternehmen mit identischer oder ähnlicher Firma existieren, besteht keinerlei rechtlicher, wirtschaftlicher oder inhaltlicher Zusammenhang. Diese Website ist nur temporär öffentlich zugänglich. Für Rückfragen wenden Sie sich bitte an: manuel.kern@hs-heilbronn.de
        </div>
      </div>
    </footer>
  );
};
