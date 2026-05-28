import type { Language } from "@/lib/i18n";

export type MarketingPageKey =
  | "references"
  | "licenses"
  | "caseStudies"
  | "company"
  | "services"
  | "blog"
  | "shop";

export type MarketingPageItem = {
  title: string;
  description: string;
  badge?: string;
  meta?: string;
  actionLabel?: string;
  actionHref?: string;
};

export type MarketingPageSection = {
  title: string;
  intro?: string;
  items: MarketingPageItem[];
};

export type MarketingPageContent = {
  path: string;
  badge: string;
  title: string;
  accent: string;
  intro: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  stats: [string, string][];
  sections: MarketingPageSection[];
};

export const marketingPages: Record<Language, Record<MarketingPageKey, MarketingPageContent>> = {
  de: {
    references: {
      path: "/referenzen",
      badge: "Referenzen",
      title: "Referenzen für",
      accent: "HR-Entscheider.",
      intro:
        "Ausgewählte Projektprofile und Referenzformate für Unternehmen, die KI in HR sicher, pragmatisch und nachvollziehbar einführen möchten.",
      primaryCta: "Referenzgespräch anfragen",
      primaryHref: "/kontakt",
      secondaryCta: "Case Studies ansehen",
      secondaryHref: "/case-studies",
      stats: [
        ["3", "Branchenprofile"],
        ["100%", "DSGVO-Fokus"],
        ["1:1", "Referenzgespräche"],
      ],
      sections: [
        {
          title: "Kundenprofile",
          intro: "Wir arbeiten bewusst mit anonymisierten Referenzen, bis Freigaben für namentliche Veröffentlichungen vorliegen.",
          items: [
            {
              title: "Produktionsunternehmen mit 800 Mitarbeitenden",
              description:
                "Automatisierung administrativer HR-Prozesse, Einführung von Prompt-Routinen und strukturierte Qualitätssicherung für Zeugnisse und Stellenanzeigen.",
              badge: "Industrie",
              meta: "HR Operations",
            },
            {
              title: "Mittelständischer Dienstleister",
              description:
                "Aufbau einer kontrollierten KI-Schnittstelle für HR-Teams, inklusive Governance, Rollenmodell und sicherer Dokumentation der Nutzung.",
              badge: "Dienstleistung",
              meta: "Compliance & Enablement",
            },
            {
              title: "Handelsgruppe mit mehreren Standorten",
              description:
                "Human-in-the-Loop-Prozesse für sensible Personalentscheidungen und klare Leitplanken für den Einsatz generativer KI im Recruiting.",
              badge: "Handel",
              meta: "Responsible AI",
            },
          ],
        },
      ],
    },
    licenses: {
      path: "/lizenzen",
      badge: "Lizenzen",
      title: "Lizenzmodelle für",
      accent: "sichere KI-Nutzung.",
      intro:
        "Strukturierte Nutzungsmodelle für Workshops, interne KI-Tools, Prompt-Bibliotheken und Governance-Bausteine.",
      primaryCta: "Lizenzmodell besprechen",
      primaryHref: "/kontakt",
      secondaryCta: "Leistungen ansehen",
      secondaryHref: "/leistungen",
      stats: [
        ["3", "Modelle"],
        ["Team", "fähig"],
        ["DSGVO", "orientiert"],
      ],
      sections: [
        {
          title: "Modelle",
          intro: "Die finalen Konditionen werden projektspezifisch vereinbart und sauber dokumentiert.",
          items: [
            {
              title: "Starter Licence",
              description:
                "Für erste Workshops, Readiness Audits und ausgewählte Prompt-Vorlagen zur sicheren Einführung in einzelnen HR-Teams.",
              badge: "Einstieg",
              meta: "Auf Anfrage",
            },
            {
              title: "Team Licence",
              description:
                "Für mehrere HR-Nutzer, gemeinsame Prompt-Bibliotheken, Enablement-Materialien und wiederkehrende Qualitätssicherung.",
              badge: "Team",
              meta: "Auf Anfrage",
            },
            {
              title: "Enterprise Licence",
              description:
                "Für organisationsweite Governance, interne KI-Workflows, Integrationen und laufende Weiterentwicklung mit klaren Verantwortlichkeiten.",
              badge: "Enterprise",
              meta: "Auf Anfrage",
            },
          ],
        },
      ],
    },
    caseStudies: {
      path: "/case-studies",
      badge: "Case Studies",
      title: "Fallstudien aus",
      accent: "HR-Projekten.",
      intro:
        "Konkrete Projektbeispiele zeigen, wie KI in HR-Prozessen produktiv wird, ohne Compliance und Akzeptanz aus den Augen zu verlieren.",
      primaryCta: "Projekt besprechen",
      primaryHref: "/kontakt",
      secondaryCta: "Referenzen ansehen",
      secondaryHref: "/referenzen",
      stats: [
        ["50%", "schnellere Prozesse"],
        ["0", "Datenschutzfehler"],
        ["100%", "Governance-Fokus"],
      ],
      sections: [
        {
          title: "Ausgewählte Fallstudien",
          items: [
            {
              title: "Zeugniserstellung in der Industrie beschleunigen",
              description:
                "Ein standardisierter KI-Workflow reduziert manuelle Schleifen, schafft konsistente Textqualität und hält sensible Freigaben im Human-in-the-Loop.",
              badge: "Produktion",
              meta: "50% schnellerer Prozess",
            },
            {
              title: "DSGVO-konforme KI-Schnittstelle für HR",
              description:
                "Eine interne Schnittstelle verhindert Schatten-IT, schafft Transparenz über Nutzung und verbindet sichere LLM-Auswahl mit klarer Governance.",
              badge: "Mittelstand",
              meta: "100% dokumentiert",
            },
            {
              title: "Recruiting-Assistenz für verteilte Teams",
              description:
                "Guidelines, Prompt-Bibliothek und Trainings sichern einheitliche Qualität bei Stellenanzeigen, Bewerberkommunikation und Screening-Vorbereitung.",
              badge: "Handel",
              meta: "Mehr Standortkonsistenz",
            },
          ],
        },
      ],
    },
    company: {
      path: "/unternehmen",
      badge: "Unternehmensvorstellung",
      title: "RAWR verbindet",
      accent: "HR, KI und Verantwortung.",
      intro:
        "Wir begleiten Unternehmen vom ersten Audit bis zur produktiven Nutzung verantwortungsvoller KI-Workflows in HR und People Operations.",
      primaryCta: "Team kennenlernen",
      primaryHref: "/ueber-uns",
      secondaryCta: "Kontakt aufnehmen",
      secondaryHref: "/kontakt",
      stats: [
        ["4", "Führungsbereiche"],
        ["1", "gemeinsamer Standard"],
        ["DSGVO", "als Grundlage"],
      ],
      sections: [
        {
          title: "Wofür RAWR steht",
          items: [
            {
              title: "Pragmatische Transformation",
              description:
                "Wir starten bei echten HR-Reibungen und bauen daraus konkrete Prozesse, Trainings und Automatisierungen.",
              badge: "Praxis",
            },
            {
              title: "Responsible AI by design",
              description:
                "Datenschutz, Fairness, Nachvollziehbarkeit und menschliche Kontrolle werden von Beginn an mitgedacht.",
              badge: "Governance",
            },
            {
              title: "Enablement statt Abhängigkeit",
              description:
                "Teams sollen KI nicht nur nutzen, sondern verstehen, bewerten und eigenständig weiterentwickeln können.",
              badge: "Befähigung",
            },
          ],
        },
      ],
    },
    services: {
      path: "/leistungen",
      badge: "Serviceleistungen",
      title: "Leistungen für",
      accent: "KI-ready HR.",
      intro:
        "Von Strategie und Compliance bis zu Workshops, Automatisierung und Integration: unsere Leistungen sind auf produktive HR-Teams ausgelegt.",
      primaryCta: "Leistung anfragen",
      primaryHref: "/kontakt",
      secondaryCta: "Q&A lesen",
      secondaryHref: "/fragen",
      stats: [
        ["6", "Leistungsfelder"],
        ["Hands-on", "Workshops"],
        ["API", "Integration"],
      ],
      sections: [
        {
          title: "Leistungsfelder",
          items: [
            {
              title: "AI Enablement für HR",
              description:
                "Training und Onboarding für generatives Prompt Engineering bei Stellenanzeigen, Zeugnissen und Bewerber-Screening.",
              badge: "Training",
            },
            {
              title: "Business Process Automation",
              description:
                "Automatisierungspotenziale in ATS und HR-Software identifizieren und maßgeschneiderte KI-Tools integrieren.",
              badge: "Automation",
            },
            {
              title: "Strategische KI-Compliance",
              description:
                "Auswahl DSGVO-orientierter LLMs und Aufbau sicherer, unternehmensinterner KI-Schnittstellen gegen Schatten-IT.",
              badge: "Compliance",
            },
            {
              title: "Workshops & Audits",
              description:
                "HR AI Readiness Audits zur Identifikation von Potenzialen in Personalprozessen und Bewertung von Datenschutzrisiken.",
              badge: "Audit",
            },
            {
              title: "Transformationsbegleitung",
              description:
                "Etablierung von Human-in-the-Loop-Prozessen, um Risiken wie KI-Biases ethisch vertretbar zu minimieren.",
              badge: "Change",
            },
            {
              title: "API & Integration",
              description:
                "Wartung und Bereitstellung interner KI-Tools zur sicheren Verbindung bestehender Systeme.",
              badge: "Integration",
            },
          ],
        },
      ],
    },
    blog: {
      path: "/blog",
      badge: "Blog",
      title: "Wissen für",
      accent: "KI im HR.",
      intro:
        "Ein redaktioneller Bereich für Leitfäden, Einschätzungen und Praxiswissen rund um KI, Datenschutz und HR-Automatisierung.",
      primaryCta: "Thema vorschlagen",
      primaryHref: "/kontakt",
      secondaryCta: "Q&A lesen",
      secondaryHref: "/fragen",
      stats: [
        ["Guides", "für HR"],
        ["Praxis", "statt Hype"],
        ["DSGVO", "im Blick"],
      ],
      sections: [
        {
          title: "Geplante Beiträge",
          intro: "Die Beitragsseiten können später einzeln ergänzt werden. Die Struktur ist vorbereitet.",
          items: [
            {
              title: "KI im HR sicher einführen: die ersten 30 Tage",
              description:
                "Ein praktischer Leitfaden für Priorisierung, Stakeholder, Datenschutz und erste produktive Anwendungsfälle.",
              badge: "Guide",
              meta: "In Vorbereitung",
            },
            {
              title: "Prompt-Bibliotheken für Recruiting-Teams",
              description:
                "Wie HR-Teams wiederverwendbare Prompts strukturieren, testen und mit Qualitätskriterien verbinden.",
              badge: "Praxis",
              meta: "In Vorbereitung",
            },
            {
              title: "Human-in-the-Loop: warum Kontrolle kein Bremsklotz ist",
              description:
                "Einordnung, wie menschliche Freigaben Effizienz und Verantwortung in sensiblen HR-Prozessen verbinden.",
              badge: "Responsible AI",
              meta: "In Vorbereitung",
            },
          ],
        },
      ],
    },
    shop: {
      path: "/shop",
      badge: "Digitale Produkte",
      title: "Shop für",
      accent: "HR-AI-Assets.",
      intro:
        "Digitale Produkte, Vorlagen und Toolkits für HR-Teams, die erste KI-Workflows schneller und sicherer aufsetzen möchten.",
      primaryCta: "Produkt anfragen",
      primaryHref: "/kontakt",
      secondaryCta: "Lizenzen ansehen",
      secondaryHref: "/lizenzen",
      stats: [
        ["4", "Produktideen"],
        ["Download", "fähig"],
        ["Team", "orientiert"],
      ],
      sections: [
        {
          title: "Digitale Produkte",
          intro: "Der Shop ist strukturell vorbereitet. Checkout und Zahlungsanbieter können später ergänzt werden.",
          items: [
            {
              title: "HR AI Readiness Audit Kit",
              description:
                "Checklisten, Interviewfragen und Bewertungslogik für den Einstieg in KI-Projekte im HR-Bereich.",
              badge: "Toolkit",
              meta: "Coming soon",
              actionLabel: "Anfragen",
              actionHref: "/kontakt",
            },
            {
              title: "Prompt-Bibliothek Recruiting",
              description:
                "Kuratiertes Set für Stellenanzeigen, Bewerberkommunikation, Screening-Vorbereitung und Interviewleitfäden.",
              badge: "Vorlagen",
              meta: "Coming soon",
              actionLabel: "Anfragen",
              actionHref: "/kontakt",
            },
            {
              title: "Compliance-Checkliste KI im HR",
              description:
                "Strukturierte Prüfpunkte für Datenschutz, Rollen, Dokumentation und Human-in-the-Loop-Entscheidungen.",
              badge: "Checkliste",
              meta: "Coming soon",
              actionLabel: "Anfragen",
              actionHref: "/kontakt",
            },
            {
              title: "Workshop Deck: KI-Enablement",
              description:
                "Modulare Workshop-Unterlagen für interne Schulungen, Awareness-Sessions und erste Prompt-Übungen.",
              badge: "Workshop",
              meta: "Coming soon",
              actionLabel: "Anfragen",
              actionHref: "/kontakt",
            },
          ],
        },
      ],
    },
  },
  en: {
    references: {
      path: "/referenzen",
      badge: "References",
      title: "References for",
      accent: "HR decision makers.",
      intro:
        "Selected project profiles and reference formats for companies introducing AI in HR securely and pragmatically.",
      primaryCta: "Request reference call",
      primaryHref: "/kontakt",
      secondaryCta: "View case studies",
      secondaryHref: "/case-studies",
      stats: [["3", "industry profiles"], ["100%", "GDPR focus"], ["1:1", "reference calls"]],
      sections: [
        {
          title: "Customer profiles",
          intro: "We use anonymized references until named publication approvals are available.",
          items: [
            {
              title: "Manufacturing company with 800 employees",
              description:
                "Automation of administrative HR processes, prompt routines and quality assurance for references and job ads.",
              badge: "Manufacturing",
              meta: "HR Operations",
            },
            {
              title: "Mid-market services company",
              description:
                "Controlled AI interface for HR teams, including governance, role model and usage documentation.",
              badge: "Services",
              meta: "Compliance & Enablement",
            },
            {
              title: "Retail group with multiple locations",
              description:
                "Human-in-the-loop processes for sensitive people decisions and clear guardrails for generative AI in recruiting.",
              badge: "Retail",
              meta: "Responsible AI",
            },
          ],
        },
      ],
    },
    licenses: {
      path: "/lizenzen",
      badge: "Licences",
      title: "Licence models for",
      accent: "secure AI use.",
      intro:
        "Structured usage models for workshops, internal AI tools, prompt libraries and governance modules.",
      primaryCta: "Discuss licence model",
      primaryHref: "/kontakt",
      secondaryCta: "View services",
      secondaryHref: "/leistungen",
      stats: [["3", "models"], ["Team", "ready"], ["GDPR", "oriented"]],
      sections: [
        {
          title: "Models",
          intro: "Final terms are agreed per project and documented clearly.",
          items: [
            {
              title: "Starter Licence",
              description: "For first workshops, readiness audits and selected prompt templates for individual HR teams.",
              badge: "Starter",
              meta: "On request",
            },
            {
              title: "Team Licence",
              description:
                "For multiple HR users, shared prompt libraries, enablement materials and recurring quality assurance.",
              badge: "Team",
              meta: "On request",
            },
            {
              title: "Enterprise Licence",
              description:
                "For organization-wide governance, internal AI workflows, integrations and ongoing development.",
              badge: "Enterprise",
              meta: "On request",
            },
          ],
        },
      ],
    },
    caseStudies: {
      path: "/case-studies",
      badge: "Case Studies",
      title: "Case studies from",
      accent: "HR projects.",
      intro:
        "Concrete project examples show how AI becomes productive in HR processes while keeping compliance and adoption in view.",
      primaryCta: "Discuss project",
      primaryHref: "/kontakt",
      secondaryCta: "View references",
      secondaryHref: "/referenzen",
      stats: [["50%", "faster processes"], ["0", "privacy errors"], ["100%", "governance focus"]],
      sections: [
        {
          title: "Selected case studies",
          items: [
            {
              title: "Accelerating reference creation in manufacturing",
              description:
                "A standardized AI workflow reduces manual loops, creates consistent text quality and keeps sensitive approvals human-controlled.",
              badge: "Manufacturing",
              meta: "50% faster process",
            },
            {
              title: "GDPR-oriented AI interface for HR",
              description:
                "An internal interface prevents shadow IT and combines secure LLM selection with clear governance.",
              badge: "Mid-market",
              meta: "100% documented",
            },
            {
              title: "Recruiting assistance for distributed teams",
              description:
                "Guidelines, prompt library and training ensure consistent quality in job ads, candidate communication and screening preparation.",
              badge: "Retail",
              meta: "More location consistency",
            },
          ],
        },
      ],
    },
    company: {
      path: "/unternehmen",
      badge: "Company",
      title: "RAWR connects",
      accent: "HR, AI and responsibility.",
      intro:
        "We support companies from the first audit to productive use of responsible AI workflows in HR and People Operations.",
      primaryCta: "Meet the team",
      primaryHref: "/ueber-uns",
      secondaryCta: "Contact us",
      secondaryHref: "/kontakt",
      stats: [["4", "leadership areas"], ["1", "shared standard"], ["GDPR", "as foundation"]],
      sections: [
        {
          title: "What RAWR stands for",
          items: [
            {
              title: "Pragmatic transformation",
              description: "We start with real HR friction and turn it into concrete processes, training and automation.",
              badge: "Practice",
            },
            {
              title: "Responsible AI by design",
              description:
                "Privacy, fairness, explainability and human control are considered from the start.",
              badge: "Governance",
            },
            {
              title: "Enablement over dependency",
              description:
                "Teams should not only use AI, but understand, assess and evolve it confidently.",
              badge: "Enablement",
            },
          ],
        },
      ],
    },
    services: {
      path: "/leistungen",
      badge: "Services",
      title: "Services for",
      accent: "AI-ready HR.",
      intro:
        "From strategy and compliance to workshops, automation and integration: our services are built for productive HR teams.",
      primaryCta: "Request service",
      primaryHref: "/kontakt",
      secondaryCta: "Read Q&A",
      secondaryHref: "/fragen",
      stats: [["6", "service fields"], ["Hands-on", "workshops"], ["API", "integration"]],
      sections: [
        {
          title: "Service fields",
          items: [
            {
              title: "AI enablement for HR",
              description: "Training and onboarding for generative prompt engineering in job ads, references and screening.",
              badge: "Training",
            },
            {
              title: "Business process automation",
              description: "Identify automation potential in ATS and HR software and integrate custom AI tools.",
              badge: "Automation",
            },
            {
              title: "Strategic AI compliance",
              description: "Select GDPR-oriented LLMs and build secure internal AI interfaces that prevent shadow IT.",
              badge: "Compliance",
            },
            {
              title: "Workshops & audits",
              description: "HR AI readiness audits to identify process potential and assess privacy risks.",
              badge: "Audit",
            },
            {
              title: "Transformation support",
              description: "Establish human-in-the-loop processes to reduce risks such as AI bias responsibly.",
              badge: "Change",
            },
            {
              title: "API & integration",
              description: "Maintain and provide internal AI tools to connect existing systems securely.",
              badge: "Integration",
            },
          ],
        },
      ],
    },
    blog: {
      path: "/blog",
      badge: "Blog",
      title: "Knowledge for",
      accent: "AI in HR.",
      intro:
        "An editorial area for guides, perspectives and practical knowledge around AI, privacy and HR automation.",
      primaryCta: "Suggest topic",
      primaryHref: "/kontakt",
      secondaryCta: "Read Q&A",
      secondaryHref: "/fragen",
      stats: [["Guides", "for HR"], ["Practice", "over hype"], ["GDPR", "in view"]],
      sections: [
        {
          title: "Planned posts",
          intro: "Individual article pages can be added later. The structure is ready.",
          items: [
            {
              title: "Introducing AI in HR safely: the first 30 days",
              description: "A practical guide for prioritization, stakeholders, privacy and first productive use cases.",
              badge: "Guide",
              meta: "In progress",
            },
            {
              title: "Prompt libraries for recruiting teams",
              description: "How HR teams structure, test and connect reusable prompts with quality criteria.",
              badge: "Practice",
              meta: "In progress",
            },
            {
              title: "Human-in-the-loop: why control is not a blocker",
              description: "How human approvals combine efficiency and responsibility in sensitive HR processes.",
              badge: "Responsible AI",
              meta: "In progress",
            },
          ],
        },
      ],
    },
    shop: {
      path: "/shop",
      badge: "Digital products",
      title: "Shop for",
      accent: "HR AI assets.",
      intro:
        "Digital products, templates and toolkits for HR teams that want to set up first AI workflows faster and more securely.",
      primaryCta: "Request product",
      primaryHref: "/kontakt",
      secondaryCta: "View licences",
      secondaryHref: "/lizenzen",
      stats: [["4", "product ideas"], ["Download", "ready"], ["Team", "oriented"]],
      sections: [
        {
          title: "Digital products",
          intro: "The shop structure is prepared. Checkout and payment providers can be added later.",
          items: [
            {
              title: "HR AI Readiness Audit Kit",
              description: "Checklists, interview questions and scoring logic for starting AI projects in HR.",
              badge: "Toolkit",
              meta: "Coming soon",
              actionLabel: "Request",
              actionHref: "/kontakt",
            },
            {
              title: "Recruiting prompt library",
              description: "Curated prompts for job ads, candidate communication, screening preparation and interview guides.",
              badge: "Templates",
              meta: "Coming soon",
              actionLabel: "Request",
              actionHref: "/kontakt",
            },
            {
              title: "AI in HR compliance checklist",
              description: "Structured checkpoints for privacy, roles, documentation and human-in-the-loop decisions.",
              badge: "Checklist",
              meta: "Coming soon",
              actionLabel: "Request",
              actionHref: "/kontakt",
            },
            {
              title: "Workshop deck: AI enablement",
              description: "Modular workshop materials for internal training, awareness sessions and prompt exercises.",
              badge: "Workshop",
              meta: "Coming soon",
              actionLabel: "Request",
              actionHref: "/kontakt",
            },
          ],
        },
      ],
    },
  },
  fr: {
    references: {
      path: "/referenzen",
      badge: "Références",
      title: "Références pour",
      accent: "décideurs RH.",
      intro:
        "Profils de projets et formats de référence pour les entreprises qui introduisent l'IA RH de manière sûre et pragmatique.",
      primaryCta: "Demander une référence",
      primaryHref: "/kontakt",
      secondaryCta: "Voir les cas clients",
      secondaryHref: "/case-studies",
      stats: [["3", "profils sectoriels"], ["100%", "focus RGPD"], ["1:1", "échanges référence"]],
      sections: [
        {
          title: "Profils clients",
          intro: "Nous utilisons des références anonymisées jusqu'à validation de publications nominatives.",
          items: [
            {
              title: "Entreprise industrielle de 800 personnes",
              description:
                "Automatisation de processus RH administratifs, routines de prompts et assurance qualité pour certificats et offres.",
              badge: "Industrie",
              meta: "HR Operations",
            },
            {
              title: "Prestataire de services mid-market",
              description:
                "Interface IA contrôlée pour les équipes RH, avec gouvernance, modèle de rôles et documentation d'utilisation.",
              badge: "Services",
              meta: "Compliance & Enablement",
            },
            {
              title: "Groupe de distribution multi-sites",
              description:
                "Processus human-in-the-loop pour décisions sensibles et règles claires pour l'IA générative en recrutement.",
              badge: "Retail",
              meta: "Responsible AI",
            },
          ],
        },
      ],
    },
    licenses: {
      path: "/lizenzen",
      badge: "Licences",
      title: "Modèles de licences pour",
      accent: "un usage IA sécurisé.",
      intro:
        "Modèles d'utilisation structurés pour workshops, outils IA internes, bibliothèques de prompts et modules de gouvernance.",
      primaryCta: "Discuter du modèle",
      primaryHref: "/kontakt",
      secondaryCta: "Voir les services",
      secondaryHref: "/leistungen",
      stats: [["3", "modèles"], ["Team", "ready"], ["RGPD", "orienté"]],
      sections: [
        {
          title: "Modèles",
          intro: "Les conditions finales sont convenues par projet et documentées clairement.",
          items: [
            {
              title: "Starter Licence",
              description: "Pour premiers workshops, audits readiness et modèles de prompts pour une équipe RH.",
              badge: "Starter",
              meta: "Sur demande",
            },
            {
              title: "Team Licence",
              description:
                "Pour plusieurs utilisateurs RH, bibliothèques partagées, supports d'enablement et assurance qualité.",
              badge: "Team",
              meta: "Sur demande",
            },
            {
              title: "Enterprise Licence",
              description:
                "Pour gouvernance organisationnelle, workflows IA internes, intégrations et développement continu.",
              badge: "Enterprise",
              meta: "Sur demande",
            },
          ],
        },
      ],
    },
    caseStudies: {
      path: "/case-studies",
      badge: "Cas clients",
      title: "Cas clients issus de",
      accent: "projets RH.",
      intro:
        "Des exemples concrets montrent comment l'IA devient productive dans les processus RH sans perdre conformité et adoption.",
      primaryCta: "Discuter du projet",
      primaryHref: "/kontakt",
      secondaryCta: "Voir les références",
      secondaryHref: "/referenzen",
      stats: [["50%", "processus plus rapides"], ["0", "erreur confidentialité"], ["100%", "focus gouvernance"]],
      sections: [
        {
          title: "Cas sélectionnés",
          items: [
            {
              title: "Accélérer les certificats dans l'industrie",
              description:
                "Un workflow IA standardisé réduit les boucles manuelles et garde les validations sensibles sous contrôle humain.",
              badge: "Industrie",
              meta: "50% plus rapide",
            },
            {
              title: "Interface IA orientée RGPD pour les RH",
              description:
                "Une interface interne limite le shadow IT et combine choix LLM sécurisé avec gouvernance claire.",
              badge: "Mid-market",
              meta: "100% documenté",
            },
            {
              title: "Assistance recruiting pour équipes distribuées",
              description:
                "Guidelines, bibliothèque de prompts et formation assurent une qualité homogène des pratiques.",
              badge: "Retail",
              meta: "Plus de cohérence",
            },
          ],
        },
      ],
    },
    company: {
      path: "/unternehmen",
      badge: "Présentation",
      title: "RAWR relie",
      accent: "RH, IA et responsabilité.",
      intro:
        "Nous accompagnons les entreprises du premier audit à l'usage productif de workflows IA responsables en RH.",
      primaryCta: "Rencontrer l'équipe",
      primaryHref: "/ueber-uns",
      secondaryCta: "Nous contacter",
      secondaryHref: "/kontakt",
      stats: [["4", "domaines"], ["1", "standard commun"], ["RGPD", "comme base"]],
      sections: [
        {
          title: "Ce que représente RAWR",
          items: [
            {
              title: "Transformation pragmatique",
              description: "Nous partons des frictions RH réelles pour créer processus, formations et automatisations.",
              badge: "Pratique",
            },
            {
              title: "Responsible AI by design",
              description: "Confidentialité, équité, explicabilité et contrôle humain sont intégrés dès le départ.",
              badge: "Gouvernance",
            },
            {
              title: "Autonomie plutôt que dépendance",
              description: "Les équipes doivent utiliser, comprendre, évaluer et faire évoluer l'IA avec confiance.",
              badge: "Enablement",
            },
          ],
        },
      ],
    },
    services: {
      path: "/leistungen",
      badge: "Services",
      title: "Services pour",
      accent: "des RH prêtes pour l'IA.",
      intro:
        "De la stratégie à la conformité, des workshops à l'automatisation et l'intégration: nos services sont conçus pour les équipes RH productives.",
      primaryCta: "Demander un service",
      primaryHref: "/kontakt",
      secondaryCta: "Lire le Q&A",
      secondaryHref: "/fragen",
      stats: [["6", "champs"], ["Hands-on", "workshops"], ["API", "intégration"]],
      sections: [
        {
          title: "Champs de service",
          items: [
            {
              title: "Enablement IA pour les RH",
              description: "Formation au prompt engineering génératif pour offres, certificats et présélection.",
              badge: "Formation",
            },
            {
              title: "Automatisation des processus",
              description: "Identifier les potentiels dans ATS et logiciels RH, puis intégrer des outils IA adaptés.",
              badge: "Automation",
            },
            {
              title: "Conformité IA stratégique",
              description: "Choisir des LLM orientés RGPD et créer des interfaces internes sécurisées.",
              badge: "Compliance",
            },
            {
              title: "Workshops & audits",
              description: "Audits HR AI Readiness pour identifier les potentiels et évaluer les risques.",
              badge: "Audit",
            },
            {
              title: "Accompagnement du changement",
              description: "Mettre en place des processus human-in-the-loop pour réduire les risques.",
              badge: "Change",
            },
            {
              title: "API & intégration",
              description: "Maintenir et exposer des outils IA internes pour connecter les systèmes existants.",
              badge: "Intégration",
            },
          ],
        },
      ],
    },
    blog: {
      path: "/blog",
      badge: "Blog",
      title: "Savoirs pour",
      accent: "l'IA RH.",
      intro:
        "Un espace éditorial pour guides, analyses et savoir pratique autour de l'IA, la confidentialité et l'automatisation RH.",
      primaryCta: "Proposer un sujet",
      primaryHref: "/kontakt",
      secondaryCta: "Lire le Q&A",
      secondaryHref: "/fragen",
      stats: [["Guides", "pour RH"], ["Pratique", "avant hype"], ["RGPD", "en vue"]],
      sections: [
        {
          title: "Articles prévus",
          intro: "Les pages d'articles pourront être ajoutées ensuite. La structure est prête.",
          items: [
            {
              title: "Introduire l'IA RH en sécurité: les 30 premiers jours",
              description: "Guide pratique pour priorisation, parties prenantes, confidentialité et premiers cas d'usage.",
              badge: "Guide",
              meta: "En préparation",
            },
            {
              title: "Bibliothèques de prompts pour le recruiting",
              description: "Comment structurer, tester et relier les prompts réutilisables à des critères qualité.",
              badge: "Pratique",
              meta: "En préparation",
            },
            {
              title: "Human-in-the-loop: pourquoi le contrôle n'est pas un frein",
              description: "Comment les validations humaines relient efficacité et responsabilité dans les processus RH.",
              badge: "Responsible AI",
              meta: "En préparation",
            },
          ],
        },
      ],
    },
    shop: {
      path: "/shop",
      badge: "Produits numériques",
      title: "Shop pour",
      accent: "assets IA RH.",
      intro:
        "Produits numériques, modèles et toolkits pour équipes RH souhaitant créer des workflows IA plus vite et plus sûrement.",
      primaryCta: "Demander un produit",
      primaryHref: "/kontakt",
      secondaryCta: "Voir les licences",
      secondaryHref: "/lizenzen",
      stats: [["4", "idées produit"], ["Download", "ready"], ["Team", "orienté"]],
      sections: [
        {
          title: "Produits numériques",
          intro: "La structure du shop est prête. Checkout et paiement pourront être ajoutés plus tard.",
          items: [
            {
              title: "HR AI Readiness Audit Kit",
              description: "Checklists, questions d'entretien et logique d'évaluation pour démarrer les projets IA RH.",
              badge: "Toolkit",
              meta: "Coming soon",
              actionLabel: "Demander",
              actionHref: "/kontakt",
            },
            {
              title: "Bibliothèque de prompts recruiting",
              description: "Prompts pour offres, communication candidats, présélection et guides d'entretien.",
              badge: "Modèles",
              meta: "Coming soon",
              actionLabel: "Demander",
              actionHref: "/kontakt",
            },
            {
              title: "Checklist conformité IA RH",
              description: "Points de contrôle pour confidentialité, rôles, documentation et décisions human-in-the-loop.",
              badge: "Checklist",
              meta: "Coming soon",
              actionLabel: "Demander",
              actionHref: "/kontakt",
            },
            {
              title: "Workshop deck: AI enablement",
              description: "Supports modulaires pour formations internes, sessions awareness et exercices de prompts.",
              badge: "Workshop",
              meta: "Coming soon",
              actionLabel: "Demander",
              actionHref: "/kontakt",
            },
          ],
        },
      ],
    },
  },
};
