import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import maximilianImage from "@/assets/team/maximilian-stephan.svg";
import maraImage from "@/assets/team/mara-schneider.svg";
import jonasImage from "@/assets/team/jonas-richter.svg";
import sophiaImage from "@/assets/team/sophia-neumann.svg";
import { useI18n } from "@/lib/i18n";

const leaderImages = [maximilianImage, maraImage, jonasImage, sophiaImage];

const content = {
  de: {
    title: "Über uns - RAWR – Recruitment AI Workforce Revolution GmbH",
    description:
      "Lernen Sie das Führungsteam von RAWR kennen: KI-Strategie, People Enablement, Automatisierung und Responsible AI für moderne HR-Abteilungen.",
    heroBadge: "DAS TEAM HINTER RAWR",
    heroTitle: "Wir machen KI im HR",
    heroAccent: "verständlich, sicher und wirksam.",
    heroText:
      "RAWR bringt Strategie, HR-Praxis, Automatisierung und Compliance zusammen. Unser Führungsteam begleitet Unternehmen vom ersten Audit bis zur produktiven Nutzung verantwortungsvoller KI-Workflows.",
    primary: "Team kennenlernen",
    secondary: "Leistungen ansehen",
    principles: [
      ["Pragmatische KI", "Wir starten dort, wo HR-Teams heute Reibung spüren, und bauen von dort aus belastbare Lösungen."],
      ["Verantwortung zuerst", "Datenschutz, Fairness und Nachvollziehbarkeit sind feste Bestandteile jedes Projekts."],
      ["Enablement statt Abhängigkeit", "Unser Ziel ist, Teams so zu befähigen, dass sie KI sicher und selbstbewusst weiterentwickeln."],
    ],
    teamBadge: "Führungsteam",
    teamHeading: "Vier Perspektiven.",
    teamAccent: "Ein gemeinsamer Anspruch.",
    teamText:
      "Jede Person verantwortet einen zentralen Teil unserer Arbeit: strategische Klarheit, operative Umsetzung, Enablement und verantwortungsvolle Governance.",
    leaders: [
      {
        name: "Maximilian Stephan",
        role: "Geschäftsführung & KI-Strategie",
        text:
          "Maximilian verbindet unternehmerischen Blick mit einem klaren Verständnis für moderne HR-Prozesse. Er sorgt dafür, dass KI-Initiativen nicht als isolierte Tools starten, sondern als messbarer Fahrplan für Produktivität, Akzeptanz und Verantwortung.",
        focus: ["Vision", "Partnerschaften", "Transformation"],
      },
      {
        name: "Dafne Ummak",
        role: "People Enablement & Change",
        text:
          "Dafne übersetzt technische Möglichkeiten in Trainings, Routinen und Arbeitsweisen, die HR-Teams wirklich nutzen. Ihr Fokus liegt auf Befähigung, verständlicher Kommunikation und einer Einführung, die Mitarbeitende mitnimmt.",
        focus: ["Workshops", "Adoption", "Team Enablement"],
      },
      {
        name: "Sören Geiger",
        role: "Automation & Product Operations",
        text:
          "Sören denkt Prozesse vom Alltag der Fachabteilungen aus. Er identifiziert Automatisierungspotenziale, priorisiert pragmatische Integrationen und baut Lösungen, die bestehende HR-Systeme sinnvoll erweitern.",
        focus: ["Automation", "Integrationen", "Prozessdesign"],
      },
      {
        name: "Niklas Burchhardt",
        role: "Compliance & Responsible AI",
        text:
          "Niklas stellt sicher, dass neue KI-Workflows belastbar, nachvollziehbar und DSGVO-konform bleiben. Er bringt Datenschutz, Governance und Human-in-the-Loop-Prinzipien in eine Form, die im Tagesgeschäft funktioniert.",
        focus: ["DSGVO", "Governance", "Risikoanalyse"],
      },
    ],
    collaborationBadge: "Zusammenarbeit",
    collaborationHeading: "Wir arbeiten nah an den Menschen, die Prozesse jeden Tag tragen.",
    collaborationText:
      "Gute KI-Transformation beginnt nicht mit einem Tool, sondern mit Vertrauen, Transparenz und klaren Entscheidungen. Deshalb verbinden wir strategische Beratung mit Workshops, Prototyping und konkreten Regeln für den produktiven Einsatz.",
    stats: [
      ["4", "Führungsbereiche"],
      ["100%", "DSGVO-Fokus"],
      ["1", "gemeinsames Ziel"],
    ],
    cta: "Gespräch mit RAWR buchen",
    imageAlt: "Portraitplatzhalter von",
  },
  en: {
    title: "About us - RAWR – Recruitment AI Workforce Revolution GmbH",
    description:
      "Meet the RAWR leadership team: AI strategy, people enablement, automation and responsible AI for modern HR departments.",
    heroBadge: "THE TEAM BEHIND RAWR",
    heroTitle: "We make AI in HR",
    heroAccent: "clear, secure and effective.",
    heroText:
      "RAWR brings strategy, HR practice, automation and compliance together. Our leadership team supports companies from the first audit to productive use of responsible AI workflows.",
    primary: "Meet the team",
    secondary: "View services",
    principles: [
      ["Pragmatic AI", "We start where HR teams feel friction today and build reliable solutions from there."],
      ["Responsibility first", "Privacy, fairness and traceability are fixed parts of every project."],
      ["Enablement over dependency", "Our goal is to empower teams to evolve AI securely and confidently."],
    ],
    teamBadge: "Leadership team",
    teamHeading: "Four perspectives.",
    teamAccent: "One shared standard.",
    teamText:
      "Each person owns a central part of our work: strategic clarity, operational delivery, enablement and responsible governance.",
    leaders: [
      {
        name: "Maximilian Stephan",
        role: "Managing Director & AI Strategy",
        text:
          "Maximilian combines an entrepreneurial perspective with a clear understanding of modern HR processes. He ensures AI initiatives start as measurable roadmaps for productivity, adoption and responsibility.",
        focus: ["Vision", "Partnerships", "Transformation"],
      },
      {
        name: "Dafne Ummak",
        role: "People Enablement & Change",
        text:
          "Dafne translates technical opportunities into trainings, routines and ways of working that HR teams actually use. Her focus is enablement, clear communication and adoption that brings people along.",
        focus: ["Workshops", "Adoption", "Team Enablement"],
      },
      {
        name: "Sören Geiger",
        role: "Automation & Product Operations",
        text:
          "Sören designs processes from the daily reality of specialist teams. He identifies automation potential, prioritizes pragmatic integrations and builds solutions that extend existing HR systems meaningfully.",
        focus: ["Automation", "Integrations", "Process design"],
      },
      {
        name: "Niklas Burchhardt",
        role: "Compliance & Responsible AI",
        text:
          "Niklas ensures new AI workflows remain robust, explainable and GDPR-compliant. He turns privacy, governance and human-in-the-loop principles into routines that work in daily operations.",
        focus: ["GDPR", "Governance", "Risk analysis"],
      },
    ],
    collaborationBadge: "Collaboration",
    collaborationHeading: "We work close to the people who carry processes every day.",
    collaborationText:
      "Good AI transformation does not start with a tool. It starts with trust, transparency and clear decisions. That is why we combine strategic consulting with workshops, prototyping and concrete rules for productive use.",
    stats: [
      ["4", "leadership areas"],
      ["100%", "GDPR focus"],
      ["1", "shared goal"],
    ],
    cta: "Book a call with RAWR",
    imageAlt: "Portrait placeholder for",
  },
  fr: {
    title: "À propos - RAWR – Recruitment AI Workforce Revolution GmbH",
    description:
      "Découvrez l'équipe dirigeante de RAWR : stratégie IA, enablement RH, automatisation et IA responsable pour les départements RH modernes.",
    heroBadge: "L'ÉQUIPE DERRIÈRE RAWR",
    heroTitle: "Nous rendons l'IA RH",
    heroAccent: "compréhensible, sûre et utile.",
    heroText:
      "RAWR réunit stratégie, pratique RH, automatisation et conformité. Notre équipe dirigeante accompagne les entreprises du premier audit jusqu'à l'utilisation productive de workflows IA responsables.",
    primary: "Rencontrer l'équipe",
    secondary: "Voir les services",
    principles: [
      ["IA pragmatique", "Nous partons des frictions vécues aujourd'hui par les équipes RH pour construire des solutions fiables."],
      ["Responsabilité d'abord", "Confidentialité, équité et traçabilité font partie intégrante de chaque projet."],
      ["Autonomie plutôt que dépendance", "Notre objectif est de rendre les équipes capables de faire évoluer l'IA en confiance et en sécurité."],
    ],
    teamBadge: "Équipe dirigeante",
    teamHeading: "Quatre perspectives.",
    teamAccent: "Une même exigence.",
    teamText:
      "Chaque personne porte une dimension essentielle de notre travail : clarté stratégique, mise en œuvre, enablement et gouvernance responsable.",
    leaders: [
      {
        name: "Maximilian Stephan",
        role: "Direction & stratégie IA",
        text:
          "Maximilian associe une vision entrepreneuriale à une compréhension claire des processus RH modernes. Il veille à ce que les initiatives IA deviennent des feuilles de route mesurables pour la productivité, l'adoption et la responsabilité.",
        focus: ["Vision", "Partenariats", "Transformation"],
      },
      {
        name: "Dafne Ummak",
        role: "People Enablement & Change",
        text:
          "Dafne transforme les possibilités techniques en formations, routines et méthodes de travail réellement utilisées par les équipes RH. Son focus : autonomie, communication claire et adoption durable.",
        focus: ["Workshops", "Adoption", "Enablement"],
      },
      {
        name: "Sören Geiger",
        role: "Automatisation & Product Operations",
        text:
          "Sören conçoit les processus à partir du quotidien des équipes métier. Il identifie les potentiels d'automatisation, priorise les intégrations pragmatiques et construit des solutions utiles aux systèmes RH existants.",
        focus: ["Automatisation", "Intégrations", "Process design"],
      },
      {
        name: "Niklas Burchhardt",
        role: "Compliance & Responsible AI",
        text:
          "Niklas veille à ce que les nouveaux workflows IA restent robustes, explicables et conformes au RGPD. Il transforme confidentialité, gouvernance et human-in-the-loop en pratiques opérationnelles.",
        focus: ["RGPD", "Gouvernance", "Analyse des risques"],
      },
    ],
    collaborationBadge: "Collaboration",
    collaborationHeading: "Nous travaillons près des personnes qui portent les processus au quotidien.",
    collaborationText:
      "Une bonne transformation IA ne commence pas par un outil, mais par la confiance, la transparence et des décisions claires. C'est pourquoi nous combinons conseil stratégique, workshops, prototypage et règles concrètes d'utilisation.",
    stats: [
      ["4", "domaines de direction"],
      ["100%", "focus RGPD"],
      ["1", "objectif commun"],
    ],
    cta: "Réserver un échange avec RAWR",
    imageAlt: "Portrait provisoire de",
  },
};

const principleIcons = [BrainCircuit, ShieldCheck, Handshake];

const AboutUs = () => {
  const { language } = useI18n();
  const copy = content[language];
  const leaders = copy.leaders.map((leader, index) => ({
    ...leader,
    image: leaderImages[index],
  }));

  useEffect(() => {
    document.title = copy.title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      copy.description,
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/ueber-uns");
  }, [copy.description, copy.title]);

  return (
    <div className="w-full bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero noise pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
                <span className="text-xs font-medium tracking-wide text-muted-foreground">
                  {copy.heroBadge}
                </span>
              </div>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.03] tracking-tight md:text-6xl lg:text-7xl">
                {copy.heroTitle}{" "}
                <span className="text-gradient">{copy.heroAccent}</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {copy.heroText}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/kontakt">
                    {copy.primary}
                    <ArrowRight />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/#services">{copy.secondary}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-2 gap-3">
                {leaders.map((leader, index) => (
                  <div
                    key={leader.name}
                    className={`overflow-hidden rounded-3xl border border-white/10 bg-card-gradient shadow-card ${
                      index % 2 === 0 ? "translate-y-5" : ""
                    }`}
                  >
                    <img
                      src={leader.image}
                      alt={`${copy.imageAlt} ${leader.name}`}
                      width={480}
                      height={600}
                      className="aspect-[4/5] h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {copy.principles.map(([title, text], index) => {
              const Icon = principleIcons[index];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-3xl border border-border bg-card-gradient p-7"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-primary/30 to-primary-glow/20">
                    <Icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold">{title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="relative border-y border-border bg-surface-1/40 py-24 md:py-32">
        <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">
              {copy.teamBadge}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {copy.teamHeading}{" "}
              <span className="text-gradient">{copy.teamAccent}</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {copy.teamText}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {leaders.map((leader, index) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card-gradient shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image}
                    alt={`${copy.imageAlt} ${leader.name}`}
                    width={960}
                    height={1200}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/5 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-glow">
                    {leader.role}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{leader.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {leader.text}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {leader.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-glow">
                {copy.collaborationBadge}
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {copy.collaborationHeading}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {copy.collaborationText}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-card-gradient p-7 shadow-card">
                <div className="grid grid-cols-3 gap-5">
                  {copy.stats.map(([value, label]) => (
                    <div key={label}>
                      <div className="font-display text-3xl font-semibold text-gradient md:text-4xl">
                        {value}
                      </div>
                      <p className="mt-2 text-xs leading-snug text-muted-foreground">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-border pt-6">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <Link to="/kontakt">
                      {copy.cta}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
