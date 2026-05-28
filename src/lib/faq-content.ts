import type { Language } from "@/lib/i18n";

export const faqContent: Record<
  Language,
  {
    badge: string;
    heading: string;
    headingAccent: string;
    intro: string;
    questions: [string, string][];
    ctaText: string;
    ctaButton: string;
  }
> = {
  de: {
    badge: "Q&A",
    heading: "Häufige Fragen.",
    headingAccent: "Klare Antworten.",
    intro:
      "Hier finden Sie die wichtigsten Antworten zu Zusammenarbeit, Datenschutz und Umsetzung von KI-Projekten im HR-Bereich.",
    questions: [
      [
        "Womit startet ein Projekt mit RAWR?",
        "In der Regel beginnen wir mit einem kompakten HR AI Readiness Audit. Dabei prüfen wir Prozesse, Datenflüsse, Tool-Landschaft und konkrete Automatisierungspotenziale, bevor wir eine priorisierte Roadmap ableiten.",
      ],
      [
        "Ist der Einsatz von KI im HR DSGVO-konform möglich?",
        "Ja, wenn Tool-Auswahl, Datenverarbeitung, Rollen, Dokumentation und Human-in-the-Loop-Prozesse sauber gestaltet sind. Genau hier setzen unsere Compliance- und Governance-Bausteine an.",
      ],
      [
        "Müssen bestehende HR-Systeme ersetzt werden?",
        "Nein. Unser Ansatz ist integrationsorientiert. Wir prüfen, wie bestehende Systeme wie ATS, HRIS oder Wissensdatenbanken sinnvoll erweitert werden können, statt funktionierende Abläufe unnötig zu ersetzen.",
      ],
      [
        "Wie schnell sieht ein HR-Team erste Ergebnisse?",
        "Erste Quick Wins entstehen häufig bereits in Workshops oder Prototypen, etwa bei Stellenanzeigen, Screening-Workflows oder interner HR-Kommunikation. Für produktive Integrationen planen wir abhängig von Komplexität mehrere Wochen ein.",
      ],
      [
        "Schult RAWR auch Mitarbeitende ohne technischen Hintergrund?",
        "Ja. Enablement ist ein Kernbestandteil unserer Arbeit. Wir übersetzen KI, Prompting und Automatisierung in verständliche Routinen, die HR-Teams sicher im Tagesgeschäft nutzen können.",
      ],
      [
        "Was passiert nach der Einführung?",
        "Wir begleiten bei Bedarf Betrieb, Optimierung und Governance weiter. Dazu gehören Feedback-Schleifen, Prompt-Bibliotheken, Qualitätskriterien, Risiko-Checks und die Weiterentwicklung interner KI-Workflows.",
      ],
    ],
    ctaText: "Noch eine Frage offen?",
    ctaButton: "Frage stellen",
  },
  en: {
    badge: "Q&A",
    heading: "Common questions.",
    headingAccent: "Clear answers.",
    intro:
      "Find the most important answers about collaboration, privacy and implementation of AI projects in HR.",
    questions: [
      [
        "How does a project with RAWR usually start?",
        "We usually begin with a compact HR AI readiness audit. We review processes, data flows, the tool landscape and concrete automation potential before deriving a prioritized roadmap.",
      ],
      [
        "Can AI be used in HR in a GDPR-compliant way?",
        "Yes, if tool selection, data processing, roles, documentation and human-in-the-loop processes are designed properly. This is exactly where our compliance and governance modules come in.",
      ],
      [
        "Do existing HR systems need to be replaced?",
        "No. Our approach is integration-oriented. We assess how existing systems such as ATS, HRIS or knowledge bases can be extended meaningfully instead of replacing workflows that already work.",
      ],
      [
        "How quickly can an HR team see first results?",
        "First quick wins often emerge during workshops or prototypes, for example in job ads, screening workflows or internal HR communication. Productive integrations usually take several weeks depending on complexity.",
      ],
      [
        "Does RAWR train employees without a technical background?",
        "Yes. Enablement is a core part of our work. We translate AI, prompting and automation into understandable routines that HR teams can use confidently in daily work.",
      ],
      [
        "What happens after implementation?",
        "If needed, we continue supporting operations, optimization and governance. This includes feedback loops, prompt libraries, quality criteria, risk checks and the evolution of internal AI workflows.",
      ],
    ],
    ctaText: "Still have a question?",
    ctaButton: "Ask a question",
  },
  fr: {
    badge: "Q&A",
    heading: "Questions fréquentes.",
    headingAccent: "Réponses claires.",
    intro:
      "Retrouvez les réponses essentielles sur la collaboration, la confidentialité et la mise en œuvre de projets IA dans les RH.",
    questions: [
      [
        "Comment commence généralement un projet avec RAWR ?",
        "Nous commençons le plus souvent par un audit HR AI Readiness compact. Nous analysons les processus, les flux de données, les outils existants et les potentiels d'automatisation avant de définir une feuille de route priorisée.",
      ],
      [
        "L'utilisation de l'IA dans les RH peut-elle être conforme au RGPD ?",
        "Oui, si le choix des outils, le traitement des données, les rôles, la documentation et les processus human-in-the-loop sont conçus correctement. C'est précisément l'objectif de nos modules de conformité et de gouvernance.",
      ],
      [
        "Faut-il remplacer les systèmes RH existants ?",
        "Non. Notre approche est orientée intégration. Nous évaluons comment les systèmes existants comme ATS, HRIS ou bases de connaissances peuvent être enrichis sans remplacer inutilement ce qui fonctionne déjà.",
      ],
      [
        "Quand une équipe RH peut-elle voir les premiers résultats ?",
        "Les premiers quick wins apparaissent souvent dès les workshops ou prototypes, par exemple pour les offres d'emploi, les workflows de présélection ou la communication RH interne. Les intégrations productives prennent généralement plusieurs semaines selon la complexité.",
      ],
      [
        "RAWR forme-t-il aussi des équipes sans profil technique ?",
        "Oui. L'enablement est au cœur de notre travail. Nous traduisons l'IA, le prompting et l'automatisation en routines compréhensibles que les équipes RH peuvent utiliser avec confiance au quotidien.",
      ],
      [
        "Que se passe-t-il après la mise en œuvre ?",
        "Si besoin, nous accompagnons l'exploitation, l'optimisation et la gouvernance. Cela inclut des boucles de feedback, des bibliothèques de prompts, des critères qualité, des contrôles de risque et l'évolution des workflows IA internes.",
      ],
    ],
    ctaText: "Une question reste ouverte ?",
    ctaButton: "Poser une question",
  },
};
