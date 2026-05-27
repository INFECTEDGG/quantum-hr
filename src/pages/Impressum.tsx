import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const content = {
  de: {
    title: "Impressum",
    badge: "Rechtliches",
    intro:
      "Angaben gemäss § 5 DDG für das studentische Projekt RAWR – Recruitment AI Workforce Revolution GmbH.",
    noticeTitle: "Wichtiger Hinweis - Studentisches Projekt",
    notice: [
      "Bei der vorliegenden Website handelt es sich um ein ausschließlich zu Lehr- und Übungszwecken im Rahmen eines Hochschullabors zum Thema Online Marketing erstelltes studentisches Projekt.",
      "Die Inhalte dieser Website, einschliesslich der dargestellten Firma, des Firmennamens, der Produkte, Dienstleistungen, Preise, Adressen, Kundendaten und weiterer Informationen, sind vollständig fiktiv.",
      "Ein tatsächlicher Geschäftsbetrieb findet nicht statt. Über diese Website können keine rechtsverbindlichen Bestellungen getätigt oder sonstige Verträge abgeschlossen werden.",
      "Der verwendete Firmenname wurde exemplarisch gewählt. Sollte ein reales Unternehmen mit identischem oder ähnlichen Namen existieren, besteht kein rechtlicher, wirtschaftlicher oder inhaltlicher Zusammenhang.",
      "Für Rückfragen oder Hinweise wenden Sie sich bitte an den verantwortlichen Hochschullehrenden:",
    ],
    sections: [
      ["Unternehmensangaben", ["RAWR – Recruitment AI Workforce Revolution GmbH", "Etzelstrasse", "74076 Heilbronn", "Deutschland"]],
      ["Handelsregister", ["Registergericht: Amtsgericht Stuttgart", "Registernummer: HRB 768254"]],
      ["Umsatzsteuer-ID", ["Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:", "DE 316 478 291"]],
      ["Vertretungsberechtigte", ["Geschäftsführer: Maximilian Stephan", "Vertretungsberechtigt gemäß § 35 GmbHG"]],
      ["Kontaktaufnahme", ["Telefon: +49 7131 98 765 43", "E-Mail: hello@rawr.de", "Website: www.rawr.de"]],
      ["Verantwortlich für den Inhalt", ["Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:", "Maximilian Stephan", "Etzelstrasse", "74076 Heilbronn"]],
      ["Streitschlichtung", ["Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:", "https://ec.europa.eu/consumers/odr/", "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."]],
      ["Haftung für Inhalte", ["Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.", "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberuehrt. Bei Bekanntwerden entsprechender Rechtsverletzungen werden diese Inhalte umgehend entfernt."]],
      ["Haftung für Links", ["Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte koennen wir keine Gewähr übernehmen.", "Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt."]],
      ["Urheberrecht", ["Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfaeltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.", "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis."]],
    ],
  },
  en: {
    title: "Legal notice",
    badge: "Legal",
    intro:
      "Information pursuant to Section 5 DDG for the student project RAWR – Recruitment AI Workforce Revolution GmbH.",
    noticeTitle: "Important note - Student project",
    notice: [
      "This website is a student project created exclusively for teaching and practice purposes as part of a university lab on online marketing.",
      "All content on this website, including the company shown, company name, products, services, prices, addresses, customer data and further information, is entirely fictional.",
      "No actual business operation takes place. No legally binding orders or contracts can be concluded via this website.",
      "The company name was chosen as an example. If a real company with an identical or similar name exists, there is no legal, economic or content-related connection.",
      "For questions or notices, please contact the responsible university lecturer:",
    ],
    sections: [
      ["Company information", ["RAWR – Recruitment AI Workforce Revolution GmbH", "Etzelstrasse", "74076 Heilbronn", "Germany"]],
      ["Commercial register", ["Register court: Stuttgart Local Court", "Registration number: HRB 768254"]],
      ["VAT ID", ["VAT identification number pursuant to Section 27a German VAT Act:", "DE 316 478 291"]],
      ["Authorized representatives", ["Managing director: Maximilian Stephan", "Authorized to represent pursuant to Section 35 GmbHG"]],
      ["Contact", ["Phone: +49 7131 98 765 43", "Email: hello@rawr.de", "Website: www.rawr.de"]],
      ["Responsible for content", ["Responsible for content pursuant to Section 18 para. 2 MStV:", "Maximilian Stephan", "Etzelstrasse", "74076 Heilbronn"]],
      ["Dispute resolution", ["The European Commission provides a platform for online dispute resolution:", "https://ec.europa.eu/consumers/odr/", "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."]],
      ["Liability for content", ["As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate unlawful activity.", "Obligations to remove or block the use of information under general laws remain unaffected. If we become aware of corresponding legal violations, we will remove such content immediately."]],
      ["Liability for links", ["Our offer contains links to external third-party websites over whose content we have no influence. We therefore cannot accept any liability for this third-party content.", "The respective provider or operator is always responsible for the content of linked pages. If we become aware of legal violations, such links will be removed immediately."]],
      ["Copyright", ["The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any use outside the limits of copyright require the written consent of the respective author or creator.", "Where content on this site was not created by the operator, third-party copyrights are respected. If you nevertheless become aware of a copyright infringement, please notify us accordingly."]],
    ],
  },
  fr: {
    title: "Mentions légales",
    badge: "Juridique",
    intro:
      "Informations conformément à l'article 5 DDG pour le projet étudiant RAWR – Recruitment AI Workforce Revolution GmbH.",
    noticeTitle: "Remarque importante - Projet étudiant",
    notice: [
      "Ce site est un projet étudiant créé exclusivement à des fins d'enseignement et d'exercice dans le cadre d'un laboratoire universitaire sur le marketing en ligne.",
      "Tous les contenus de ce site, y compris l'entreprise présentée, le nom de l'entreprise, les produits, services, prix, adresses, données clients et autres informations, sont entièrement fictifs.",
      "Aucune activité commerciale réelle n'a lieu. Aucune commande ou contrat juridiquement contraignant ne peut être conclu via ce site.",
      "Le nom de l'entreprise a été choisi à titre d'exemple. Si une entreprise réelle porte un nom identique ou similaire, il n'existe aucun lien juridique, économique ou éditorial.",
      "Pour toute question ou remarque, veuillez contacter l'enseignant responsable :",
    ],
    sections: [
      ["Informations sur l'entreprise", ["RAWR – Recruitment AI Workforce Revolution GmbH", "Etzelstrasse", "74076 Heilbronn", "Allemagne"]],
      ["Registre du commerce", ["Tribunal d'enregistrement : Amtsgericht Stuttgart", "Numéro d'enregistrement : HRB 768254"]],
      ["Numéro de TVA", ["Numéro d'identification TVA conformément à l'article 27a de la loi allemande sur la TVA :", "DE 316 478 291"]],
      ["Représentation autorisée", ["Gérant : Maximilian Stephan", "Autorisé à représenter la société conformément à l'article 35 GmbHG"]],
      ["Contact", ["Téléphone : +49 7131 98 765 43", "E-mail : hello@rawr.de", "Site web : www.rawr.de"]],
      ["Responsable du contenu", ["Responsable du contenu conformément à l'article 18, paragraphe 2 MStV :", "Maximilian Stephan", "Etzelstrasse", "74076 Heilbronn"]],
      ["Règlement des litiges", ["La Commission européenne met à disposition une plateforme de règlement en ligne des litiges :", "https://ec.europa.eu/consumers/odr/", "Nous ne sommes ni disposés ni obligés de participer à une procédure de règlement des litiges devant un organisme de médiation des consommateurs."]],
      ["Responsabilité pour le contenu", ["En tant que fournisseur de services, nous sommes responsables de nos propres contenus sur ces pages conformément aux lois générales. Nous ne sommes toutefois pas tenus de surveiller les informations tierces transmises ou stockées ni de rechercher des circonstances indiquant une activité illégale.", "Les obligations de supprimer ou de bloquer l'utilisation d'informations conformément aux lois générales restent inchangées. Si nous avons connaissance d'infractions correspondantes, nous supprimerons immédiatement ces contenus."]],
      ["Responsabilité pour les liens", ["Notre offre contient des liens vers des sites web externes de tiers sur le contenu desquels nous n'avons aucune influence. Nous ne pouvons donc assumer aucune responsabilité pour ces contenus tiers.", "Le fournisseur ou l'exploitant respectif est toujours responsable du contenu des pages liées. Si nous avons connaissance d'infractions, ces liens seront supprimés immédiatement."]],
      ["Droit d'auteur", ["Les contenus et œuvres créés par les exploitants du site sont soumis au droit d'auteur allemand. Toute reproduction, modification, distribution ou utilisation en dehors des limites du droit d'auteur nécessite l'accord écrit de l'auteur ou du créateur concerné.", "Lorsque les contenus de ce site n'ont pas été créés par l'exploitant, les droits d'auteur de tiers sont respectés. Si vous constatez néanmoins une violation du droit d'auteur, veuillez nous en informer."]],
    ],
  },
};

const renderLine = (line: string) => {
  if (line === "E-Mail: hello@rawr.de" || line === "Email: hello@rawr.de" || line === "E-mail : hello@rawr.de") {
    const label = line.split(":")[0];
    return (
      <>
        {label}:{" "}
        <a className="text-primary-glow hover:text-foreground transition-colors" href="mailto:hello@rawr.de">
          hello@rawr.de
        </a>
      </>
    );
  }

  if (line === "Website: www.rawr.de" || line === "Site web : www.rawr.de") {
    const label = line.includes(":") ? line.split(":")[0] : "Website";
    return (
      <>
        {label}:{" "}
        <Link className="text-primary-glow hover:text-foreground transition-colors" to="/">
          www.rawr.de
        </Link>
      </>
    );
  }

  if (line.startsWith("https://")) {
    return (
      <a className="text-primary-glow hover:text-foreground transition-colors" href={line} target="_blank" rel="noopener noreferrer">
        {line}
      </a>
    );
  }

  return line;
};

const Impressum = () => {
  const { language } = useI18n();
  const copy = content[language];

  useEffect(() => {
    document.title = `${copy.title} - RAWR – Recruitment AI Workforce Revolution GmbH`;
  }, [copy.title]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-12 pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <div className="mt-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">{copy.badge}</p>
            <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold tracking-tight">
              {copy.title}
            </h1>
            <p className="mt-5 text-muted-foreground text-lg">{copy.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl space-y-10">
          <div className="rounded-2xl border-2 border-primary-glow bg-primary/10 p-7">
            <h2 className="font-display text-2xl font-semibold text-primary-glow">
              {copy.noticeTitle}
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              {copy.notice.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <a
                  className="text-primary-glow hover:text-foreground transition-colors"
                  href="mailto:manuel.kern@hs-heilbronn.de"
                >
                  manuel.kern@hs-heilbronn.de
                </a>
              </p>
            </div>
          </div>

          {copy.sections.map(([title, lines]) => (
            <div key={title}>
              <h2 className="font-display text-2xl font-semibold">{title}</h2>
              <div className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                {lines.map((line) => (
                  <p key={line}>{renderLine(line)}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Impressum;
