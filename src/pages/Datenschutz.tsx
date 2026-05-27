import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

const content = {
  de: {
    title: "Datenschutz",
    badge: "Rechtliches",
    intro:
      "Diese Datenschutzerklärung beschreibt, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden. Bitte vor Veröffentlichung rechtlich prüfen und an die tatsächlichen Dienste anpassen.",
    sections: [
      ["Verantwortlicher", ["RAWR – Recruitment AI Workforce Revolution GmbH", "Etzelstraße", "74076 Heilbronn", "E-Mail: [datenschutz@rawr.com]"]],
      ["Erhebung von Zugriffsdaten", "Beim Aufruf dieser Website koennen technisch notwendige Zugriffsdaten verarbeitet werden, etwa IP-Adresse, Datum und Uhrzeit der Anfrage, Browsertyp, Betriebssystem, Referrer-URL und angeforderte Dateien. Die Verarbeitung dient der sicheren und stabilen Bereitstellung der Website."],
      ["Kontaktaufnahme", "Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen."],
      ["Cookies und externe Dienste", "Soweit Cookies, Analysewerkzeuge, eingebettete Inhalte oder externe Dienste eingesetzt werden, müssen diese hier konkret benannt und die jeweilige Rechtsgrundlage ergaenzt werden. Nicht erforderliche Dienste sollten erst nach Einwilligung geladen werden."],
      ["Ihre Rechte", "Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem können Sie sich bei einer Datenschutzaufsichtsbehörde beschweren."],
      ["Speicherdauer", "Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen."],
    ],
  },
  en: {
    title: "Privacy",
    badge: "Legal",
    intro:
      "This privacy notice describes which personal data may be processed when visiting this website. Please have it legally reviewed before publication and adapt it to the services actually used.",
    sections: [
      ["Controller", ["RAWR – Recruitment AI Workforce Revolution GmbH", "Etzelstraße", "74076 Heilbronn", "Email: [datenschutz@rawr.com]"]],
      ["Collection of access data", "When this website is accessed, technically necessary access data may be processed, such as IP address, date and time of the request, browser type, operating system, referrer URL and requested files. Processing serves the secure and stable provision of the website."],
      ["Contact", "If you contact us by email or via a contact form, we process the data you provide to handle your request and possible follow-up questions."],
      ["Cookies and external services", "If cookies, analytics tools, embedded content or external services are used, they must be named here specifically and the relevant legal basis must be added. Non-essential services should only be loaded after consent."],
      ["Your rights", "Within the legal requirements, you have rights to access, rectification, deletion, restriction of processing, data portability and objection. You may also lodge a complaint with a data protection supervisory authority."],
      ["Storage period", "Personal data is stored only for as long as required for the respective purposes or as long as statutory retention obligations apply."],
    ],
  },
  fr: {
    title: "Confidentialité",
    badge: "Juridique",
    intro:
      "Cette déclaration de confidentialité décrit quelles données personnelles peuvent être traitées lors de la visite de ce site. Veuillez la faire vérifier juridiquement avant publication et l'adapter aux services réellement utilisés.",
    sections: [
      ["Responsable du traitement", ["RAWR – Recruitment AI Workforce Revolution GmbH", "Etzelstraße", "74076 Heilbronn", "E-mail : [datenschutz@rawr.com]"]],
      ["Collecte des données d'accès", "Lors de l'accès à ce site, des données techniquement nécessaires peuvent être traitées, par exemple l'adresse IP, la date et l'heure de la demande, le type de navigateur, le système d'exploitation, l'URL de référence et les fichiers demandés. Le traitement sert à fournir le site de manière sûre et stable."],
      ["Prise de contact", "Si vous nous contactez par e-mail ou via un formulaire, nous traitons les données que vous indiquez afin de répondre à votre demande et à d'éventuelles questions de suivi."],
      ["Cookies et services externes", "Si des cookies, outils d'analyse, contenus intégrés ou services externes sont utilisés, ils doivent être nommés ici précisément et la base juridique correspondante doit être ajoutée. Les services non nécessaires ne devraient être chargés qu'après consentement."],
      ["Vos droits", "Dans le cadre des conditions légales, vous disposez de droits d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité des données et d'opposition. Vous pouvez également déposer une réclamation auprès d'une autorité de protection des données."],
      ["Durée de conservation", "Les données personnelles ne sont conservées que pendant la durée nécessaire aux finalités concernées ou tant que des obligations légales de conservation existent."],
    ],
  },
};

const Datenschutz = () => {
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
            <p className="mt-5 text-muted-foreground text-lg">
              {copy.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl space-y-10">
          {copy.sections.map(([title, body]) => (
            <div key={title}>
              <h2 className="font-display text-2xl font-semibold">{title}</h2>
              {Array.isArray(body) ? (
                <div className="mt-4 space-y-1 text-muted-foreground">
                  {body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Datenschutz;
