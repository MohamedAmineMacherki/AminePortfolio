
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'ar' | 'de' | 'es' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Mohamed Amine Macherki',
    'hero.subtitle': 'Software Engineer',
    'hero.location': 'Tunis, Tunisia',
    'hero.description': 'Junior Software Engineer with 2 years of proven experience in the fintech and telecommunications sectors, actively contributing to the development and support of high-performance microservice architectures. Passionate about leveraging technology and continuous learning to deliver scalable, effective solutions.',
    'hero.contact': 'Contact Me',
    'hero.download': 'Download CV',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Discover my journey and passions',
    'about.description1': 'Passionate about technological innovation and the transformative potential of technology. My journey has led me from data science research at Orange Innovation to developing innovative solutions combining AI, VR and blockchain.',
    'about.description2': 'As a full-stack developer, I lead teams in creating complex microservices architectures while maintaining an agile approach. My expertise covers front-end and back-end development, with a specialization in emerging technologies.',
    'about.description3': 'My community involvement and academic achievements reflect my constant desire to learn, innovate and contribute positively to the Tunisian and international technology ecosystem.',
    'about.fullstack': 'Full-Stack Development',
    'about.fullstack.desc': 'Expertise in React.js, Angular, Spring Boot and microservices architectures',
    'about.leadership': 'Team Leadership',
    'about.leadership.desc': 'Leading agile teams and managing complex projects',
    'about.innovation': 'Tech Innovation',
    'about.innovation.desc': 'Specialization in AI, VR, blockchain and emerging technologies',
    'about.research': 'Research & Development',
    'about.research.desc': 'Contributing to innovation at Orange Innovation and R&D projects',

    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My professional journey and achievements',

    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'My expertise and areas of competence',
    'skills.frameworks': 'Web Frameworks',
    'skills.ai': 'AI & Web3',
    'skills.databases': 'Databases',
    'skills.tools': 'Tools & DevOps',
    'skills.languages': 'Languages',
    'skills.vr': 'VR/AR Technologies',
    'skills.spoken': 'Languages',
    'skills.arabic': 'Arabic',
    'skills.arabic.desc': 'Native language',
    'skills.french': 'French',
    'skills.french.desc': 'Full professional proficiency',
    'skills.english': 'English',
    'skills.english.desc': 'Full professional proficiency',
    'skills.german': 'German',
    'skills.german.desc': 'Professional proficiency',

    // Education Section
    'education.title': 'Education & Certifications',
    'education.subtitle': 'My academic background and achievements',
    'education.certifications': 'Certifications & Awards',

    // Projects Section
    'projects.title': 'Projects & Achievements',
    'projects.subtitle': 'Discover my most significant projects',
    'projects.all': 'All',
    'projects.viewMore': 'View More',

    // Achievements Section
    'achievements.title': 'Achievements & Distinctions',
    'achievements.subtitle': 'My accomplishments and professional recognitions',
    'achievements.projects': 'Major Projects',
    'achievements.experience': 'Years of Experience',
    'achievements.awards': 'International Awards',
    'achievements.technologies': 'Mastered Technologies',
    'achievements.cta.title': 'Ready to Take on New Challenges',
    'achievements.cta.description': 'Always seeking innovation and stimulating projects that push technological boundaries',
    'achievements.cta.button': 'Let\'s Discuss Your Project',

    // Contact Section
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Let\'s discuss your projects and opportunities',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.social': 'Social Networks',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Subject of your message',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Your message...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with React, TypeScript and Tailwind CSS'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.education': 'Formation',
    'nav.projects': 'Projets',
    'nav.achievements': 'Réalisations',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Mohamed Amine Macherki',
    'hero.subtitle': 'Software Engineer',
    'hero.location': 'Tunis, Tunisia',
    'hero.description': 'Ingénieur Logiciel Junior avec 2 ans d\'expérience avérée dans les secteurs de la fintech et des télécommunications, contribuant activement au développement et au support d\'architectures microservices haute performance. Passionné par l\'exploitation de la technologie et l\'apprentissage continu pour livrer des solutions évolutives et efficaces.',
    'hero.contact': 'Me Contacter',
    'hero.download': 'Télécharger CV',

    // About Section
    'about.title': 'À Propos de Moi',
    'about.subtitle': 'Découvrez mon parcours et mes passions',
    'about.description1': 'Passionné par l\'innovation technologique et le potentiel transformateur de la technologie. Mon parcours m\'a mené de la recherche en data science chez Orange Innovation au développement de solutions innovantes combinant IA, VR et blockchain.',
    'about.description2': 'En tant que développeur full-stack, je dirige des équipes dans la création d\'architectures microservices complexes tout en maintenant une approche agile. Mon expertise couvre le développement front-end et back-end, avec une spécialisation dans les technologies émergentes.',
    'about.description3': 'Mon engagement associatif et mes réalisations académiques reflètent ma volonté constante d\'apprendre, d\'innover et de contribuer positivement à l\'écosystème technologique tunisien et international.',
    'about.fullstack': 'Développement Full-Stack',
    'about.fullstack.desc': 'Expertise en React.js, Angular, Spring Boot et architectures microservices',
    'about.leadership': 'Leadership d\'Équipe',
    'about.leadership.desc': 'Leadership d\'équipes agiles et gestion de projets complexes',
    'about.innovation': 'Innovation Tech',
    'about.innovation.desc': 'Spezialisation en IA, VR, blockchain et technologies émergentes',
    'about.research': 'Recherche & Développement',
    'about.research.desc': 'Contribution à l\'innovation chez Orange Innovation et projets R&D',

    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    'experience.subtitle': 'Mon parcours professionnel et mes réalisations',

    // Skills Section
    'skills.title': 'Compétences Techniques',
    'skills.subtitle': 'Mes expertises et domaines de compétence',
    'skills.frameworks': 'Frameworks Web',
    'skills.ai': 'IA & Web3',
    'skills.databases': 'Bases de Données',
    'skills.tools': 'Outils & DevOps',
    'skills.languages': 'Langages',
    'skills.vr': 'Technologies VR/AR',
    'skills.spoken': 'Langues',
    'skills.arabic': 'Arabe',
    'skills.arabic.desc': 'Langue maternelle',
    'skills.french': 'Français',
    'skills.french.desc': 'Compétence professionnelle complète',
    'skills.english': 'Anglais',
    'skills.english.desc': 'Compétence professionnelle complète',
    'skills.german': 'Allemand',
    'skills.german.desc': 'Compétence professionnelle',

    // Education Section
    'education.title': 'Formation & Certifications',
    'education.subtitle': 'Mon parcours académique et mes réalisations',
    'education.certifications': 'Certifications & Récompenses',

    // Projects Section
    'projects.title': 'Projets & Réalisations',
    'projects.subtitle': 'Découvrez mes projets les plus significatifs',
    'projects.all': 'Tous',
    'projects.viewMore': 'Voir plus',

    // Achievements Section
    'achievements.title': 'Réalisations & Distinctions',
    'achievements.subtitle': 'Mes accomplissements et reconnaissances professionnelles',
    'achievements.projects': 'Projets Majeurs',
    'achievements.experience': 'Ans d\'Expérience',
    'achievements.awards': 'Prix Internationaux',
    'achievements.technologies': 'Technologies Maîtrisées',
    'achievements.cta.title': 'Prêt à Relever de Nouveaux Défis',
    'achievements.cta.description': 'Toujours en quête d\'innovation et de projets stimulants qui repoussent les limites technologiques',
    'achievements.cta.button': 'Discutons de Votre Projet',

    // Contact Section
    'contact.title': 'Contactez-Moi',
    'contact.subtitle': 'Discutons de vos projets et opportunités',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.social': 'Réseaux Sociaux',
    'contact.form.name': 'Nom Complet',
    'contact.form.name.placeholder': 'Votre nom complet',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.placeholder': 'Sujet de votre message',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Votre message...',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Développé avec React, TypeScript et Tailwind CSS'
  },

  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.experience': 'Erfahrung',
    'nav.skills': 'Fähigkeiten',
    'nav.education': 'Bildung',
    'nav.projects': 'Projekte',
    'nav.achievements': 'Erfolge',
    'nav.contact': 'Kontakt',

    // Hero Section
    'hero.title': 'Mohamed Amine Macherki',
    'hero.subtitle': 'Software-Ingenieur',
    'hero.location': 'Tunis, Tunesien',
    'hero.description': 'Junior Software-Ingenieur mit 2 Jahren nachgewiesener Erfahrung in den Fintech- und Telekommunikationssektoren, der aktiv zur Entwicklung und Unterstützung leistungsstarker Microservice-Architekturen beiträgt. Leidenschaftlich darin, Technologie und kontinuierliches Lernen zu nutzen, um skalierbare, effektive Lösungen zu liefern.',
    'hero.contact': 'Kontaktieren Sie mich',
    'hero.download': 'Lebenslauf herunterladen',

    // About Section
    'about.title': 'Über mich',
    'about.subtitle': 'Entdecken Sie meine Reise und Leidenschaften',
    'about.description1': 'Leidenschaftlich für technologische Innovation und das transformative Potenzial der Technologie. Meine Reise führte mich von der Data Science-Forschung bei Orange Innovation zur Entwicklung innovativer Lösungen, die KI, VR und Blockchain kombinieren.',
    'about.description2': 'Als Full-Stack-Entwickler leite ich Teams bei der Erstellung komplexer Microservices-Architekturen und behalte dabei einen agilen Ansatz bei. Meine Expertise umfasst Frontend- und Backend-Entwicklung mit Spezialisierung auf aufkommende Technologien.',
    'about.description3': 'Mein gesellschaftliches Engagement und meine akademischen Erfolge spiegeln meinen ständigen Wunsch wider, zu lernen, zu innovieren und positiv zum tunesischen und internationalen Technologie-Ökosystem beizutragen.',
    'about.fullstack': 'Full-Stack-Entwicklung',
    'about.fullstack.desc': 'Expertise in React.js, Angular, Spring Boot und Microservices-Architekturen',
    'about.leadership': 'Teamführung',
    'about.leadership.desc': 'Führung agiler Teams und Management komplexer Projekte',
    'about.innovation': 'Tech-Innovation',
    'about.innovation.desc': 'Spezialisierung auf KI, VR, Blockchain und aufkommende Technologien',
    'about.research': 'Forschung & Entwicklung',
    'about.research.desc': 'Beitrag zur Innovation bei Orange Innovation und F&E-Projekten',

    // Experience Section
    'experience.title': 'Berufserfahrung',
    'experience.subtitle': 'Meine berufliche Laufbahn und Erfolge',

    // Skills Section
    'skills.title': 'Technische Fähigkeiten',
    'skills.subtitle': 'Meine Expertise und Kompetenzbereiche',
    'skills.frameworks': 'Web-Frameworks',
    'skills.ai': 'KI & Web3',
    'skills.databases': 'Datenbanken',
    'skills.tools': 'Tools & DevOps',
    'skills.languages': 'Programmiersprachen',
    'skills.vr': 'VR/AR-Technologien',
    'skills.spoken': 'Sprachen',
    'skills.arabic': 'Arabisch',
    'skills.arabic.desc': 'Muttersprache',
    'skills.french': 'Französisch',
    'skills.french.desc': 'Vollständige berufliche Kompetenz',
    'skills.english': 'Englisch',
    'skills.english.desc': 'Vollständige berufliche Kompetenz',
    'skills.german': 'Deutsch',
    'skills.german.desc': 'Berufliche Kompetenz',

    // Education Section
    'education.title': 'Bildung & Zertifizierungen',
    'education.subtitle': 'Mein akademischer Hintergrund und Erfolge',
    'education.certifications': 'Zertifizierungen & Auszeichnungen',

    // Projects Section
    'projects.title': 'Projekte & Erfolge',
    'projects.subtitle': 'Entdecken Sie meine bedeutendsten Projekte',
    'projects.all': 'Alle',
    'projects.viewMore': 'Mehr anzeigen',

    // Achievements Section
    'achievements.title': 'Erfolge & Auszeichnungen',
    'achievements.subtitle': 'Meine Leistungen und berufliche Anerkennungen',
    'achievements.projects': 'Hauptprojekte',
    'achievements.experience': 'Jahre Erfahrung',
    'achievements.awards': 'Internationale Auszeichnungen',
    'achievements.technologies': 'Beherrschte Technologien',
    'achievements.cta.title': 'Bereit für neue Herausforderungen',
    'achievements.cta.description': 'Immer auf der Suche nach Innovation und anregenden Projekten, die technologische Grenzen verschieben',
    'achievements.cta.button': 'Lassen Sie uns über Ihr Projekt sprechen',

    // Contact Section
    'contact.title': 'Kontaktieren Sie mich',
    'contact.subtitle': 'Lassen Sie uns über Ihre Projekte und Möglichkeiten sprechen',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.location': 'Standort',
    'contact.social': 'Soziale Netzwerke',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.name.placeholder': 'Ihr vollständiger Name',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'ihre@email.com',
    'contact.form.subject': 'Betreff',
    'contact.form.subject.placeholder': 'Betreff Ihrer Nachricht',
    'contact.form.message': 'Nachricht',
    'contact.form.message.placeholder': 'Ihre Nachricht...',
    'contact.form.send': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',

    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.built': 'Erstellt mit React, TypeScript und Tailwind CSS'
  },

  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.education': 'Educación',
    'nav.projects': 'Proyectos',
    'nav.achievements': 'Logros',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.title': 'Mohamed Amine Macherki',
    'hero.subtitle': 'Ingeniero de Software',
    'hero.location': 'Túnez, Túnez',
    'hero.description': 'Ingeniero de Software Junior con 2 años de experiencia probada en los sectores fintech y de telecomunicaciones, contribuyendo activamente al desarrollo y soporte de arquitecturas de microservicios de alto rendimiento. Apasionado por aprovechar la tecnología y el aprendizaje continuo para ofrecer soluciones escalables y efectivas.',
    'hero.contact': 'Contáctame',
    'hero.download': 'Descargar CV',

    // About Section
    'about.title': 'Acerca de Mí',
    'about.subtitle': 'Descubre mi trayectoria y pasiones',
    'about.description1': 'Apasionado por la innovación tecnológica y el potencial transformador de la tecnología. Mi trayectoria me ha llevado desde la investigación en ciencia de datos en Orange Innovation hasta el desarrollo de soluciones innovadoras que combinan IA, VR y blockchain.',
    'about.description2': 'Como desarrollador full-stack, lidero equipos en la creación de arquitecturas de microservicios complejas manteniendo un enfoque ágil. Mi experiencia abarca el desarrollo frontend y backend, con especialización en tecnologías emergentes.',
    'about.description3': 'Mi compromiso comunitario y logros académicos reflejan mi deseo constante de aprender, innovar y contribuir positivamente al ecosistema tecnológico tunecino e internacional.',
    'about.fullstack': 'Desarrollo Full-Stack',
    'about.fullstack.desc': 'Experiencia en React.js, Angular, Spring Boot y arquitecturas de microservicios',
    'about.leadership': 'Liderazgo de Equipos',
    'about.leadership.desc': 'Liderando equipos ágiles y gestionando proyectos complejos',
    'about.innovation': 'Innovación Tecnológica',
    'about.innovation.desc': 'Especialización en IA, VR, blockchain y tecnologías emergentes',
    'about.research': 'Investigación y Desarrollo',
    'about.research.desc': 'Contribuyendo a la innovación en Orange Innovation y proyectos I+D',

    // Experience Section
    'experience.title': 'Experiencia Profesional',
    'experience.subtitle': 'Mi trayectoria profesional y logros',

    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Mi experiencia y áreas de competencia',
    'skills.frameworks': 'Frameworks Web',
    'skills.ai': 'IA y Web3',
    'skills.databases': 'Bases de Datos',
    'skills.tools': 'Herramientas y DevOps',
    'skills.languages': 'Lenguajes de Programación',
    'skills.vr': 'Tecnologías VR/AR',
    'skills.spoken': 'Idiomas',
    'skills.arabic': 'Árabe',
    'skills.arabic.desc': 'Idioma nativo',
    'skills.french': 'Francés',
    'skills.french.desc': 'Competencia profesional completa',
    'skills.english': 'Inglés',
    'skills.english.desc': 'Competencia profesional completa',
    'skills.german': 'Alemán',
    'skills.german.desc': 'Competencia profesional',

    // Education Section
    'education.title': 'Educación y Certificaciones',
    'education.subtitle': 'Mi formación académica y logros',
    'education.certifications': 'Certificaciones y Premios',

    // Projects Section
    'projects.title': 'Proyectos y Logros',
    'projects.subtitle': 'Descubre mis proyectos más significativos',
    'projects.all': 'Todos',
    'projects.viewMore': 'Ver más',

    // Achievements Section
    'achievements.title': 'Logros y Distinciones',
    'achievements.subtitle': 'Mis logros y reconocimientos profesionales',
    'achievements.projects': 'Proyectos Principales',
    'achievements.experience': 'Años de Experiencia',
    'achievements.awards': 'Premios Internacionales',
    'achievements.technologies': 'Tecnologías Dominadas',
    'achievements.cta.title': 'Listo para Nuevos Desafíos',
    'achievements.cta.description': 'Siempre buscando innovación y proyectos estimulantes que empujen los límites tecnológicos',
    'achievements.cta.button': 'Hablemos de Tu Proyecto',

    // Contact Section
    'contact.title': 'Contáctame',
    'contact.subtitle': 'Hablemos de tus proyectos y oportunidades',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.social': 'Redes Sociales',
    'contact.form.name': 'Nombre Completo',
    'contact.form.name.placeholder': 'Tu nombre completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.subject': 'Asunto',
    'contact.form.subject.placeholder': 'Asunto de tu mensaje',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Tu mensaje...',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con React, TypeScript y Tailwind CSS'
  },

  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Chi sono',
    'nav.experience': 'Esperienza',
    'nav.skills': 'Competenze',
    'nav.education': 'Formazione',
    'nav.projects': 'Progetti',
    'nav.achievements': 'Risultati',
    'nav.contact': 'Contatto',

    // Hero Section
    'hero.title': 'Mohamed Amine Macherki',
    'hero.subtitle': 'Ingegnere Software',
    'hero.location': 'Tunisi, Tunisia',
    'hero.description': 'Ingegnere Software Junior con 2 anni di comprovata esperienza nei settori fintech e delle telecomunicazioni, che contribuisce attivamente allo sviluppo e al supporto di architetture di microservizi ad alte prestazioni. Appassionato di sfruttare la tecnologia e l\'apprendimento continuo per fornire soluzioni scalabili ed efficaci.',
    'hero.contact': 'Contattami',
    'hero.download': 'Scarica CV',

    // About Section
    'about.title': 'Chi Sono',
    'about.subtitle': 'Scopri il mio percorso e le mie passioni',
    'about.description1': 'Appassionato di innovazione tecnologica e del potenziale trasformativo della tecnologia. Il mio percorso mi ha portato dalla ricerca in data science presso Orange Innovation allo sviluppo di soluzioni innovative che combinano IA, VR e blockchain.',
    'about.description2': 'Come sviluppatore full-stack, guido team nella creazione di architetture microservizi complesse mantenendo un approccio agile. La mia esperienza copre lo sviluppo frontend e backend, con specializzazione in tecnologie emergenti.',
    'about.description3': 'Il mio impegno comunitario e i risultati accademici riflettono il mio desiderio costante di imparare, innovare e contribuire positivamente all\'ecosistema tecnologico tunisino e internazionale.',
    'about.fullstack': 'Sviluppo Full-Stack',
    'about.fullstack.desc': 'Esperienza in React.js, Angular, Spring Boot e architetture microservizi',
    'about.leadership': 'Leadership di Team',
    'about.leadership.desc': 'Guidare team agili e gestire progetti complessi',
    'about.innovation': 'Innovazione Tecnologica',
    'about.innovation.desc': 'Specializzazione in IA, VR, blockchain e tecnologie emergenti',
    'about.research': 'Ricerca e Sviluppo',
    'about.research.desc': 'Contribuire all\'innovazione presso Orange Innovation e progetti R&S',

    // Experience Section
    'experience.title': 'Esperienza Professionale',
    'experience.subtitle': 'Il mio percorso professionale e risultati',

    // Skills Section
    'skills.title': 'Competenze Tecniche',
    'skills.subtitle': 'La mia esperienza e aree di competenza',
    'skills.frameworks': 'Framework Web',
    'skills.ai': 'IA e Web3',
    'skills.databases': 'Database',
    'skills.tools': 'Strumenti e DevOps',
    'skills.languages': 'Linguaggi di Programmazione',
    'skills.vr': 'Tecnologie VR/AR',
    'skills.spoken': 'Lingue',
    'skills.arabic': 'Arabo',
    'skills.arabic.desc': 'Lingua madre',
    'skills.french': 'Francese',
    'skills.french.desc': 'Competenza professionale completa',
    'skills.english': 'Inglese',
    'skills.english.desc': 'Competenza professionale completa',
    'skills.german': 'Tedesco',
    'skills.german.desc': 'Competenza professionale',

    // Education Section
    'education.title': 'Formazione e Certificazioni',
    'education.subtitle': 'Il mio background accademico e risultati',
    'education.certifications': 'Certificazioni e Premi',

    // Projects Section
    'projects.title': 'Progetti e Risultati',
    'projects.subtitle': 'Scopri i miei progetti più significativi',
    'projects.all': 'Tutti',
    'projects.viewMore': 'Vedi di più',

    // Achievements Section
    'achievements.title': 'Risultati e Riconoscimenti',
    'achievements.subtitle': 'I miei successi e riconoscimenti professionali',
    'achievements.projects': 'Progetti Principali',
    'achievements.experience': 'Anni di Esperienza',
    'achievements.awards': 'Premi Internazionali',
    'achievements.technologies': 'Tecnologie Padroneggiate',
    'achievements.cta.title': 'Pronto per Nuove Sfide',
    'achievements.cta.description': 'Sempre alla ricerca di innovazione e progetti stimolanti che spingono i confini tecnologici',
    'achievements.cta.button': 'Parliamo del Tuo Progetto',

    // Contact Section
    'contact.title': 'Contattami',
    'contact.subtitle': 'Parliamo dei tuoi progetti e opportunità',
    'contact.email': 'Email',
    'contact.phone': 'Telefono',
    'contact.location': 'Posizione',
    'contact.social': 'Social Network',
    'contact.form.name': 'Nome Completo',
    'contact.form.name.placeholder': 'Il tuo nome completo',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tua@email.com',
    'contact.form.subject': 'Oggetto',
    'contact.form.subject.placeholder': 'Oggetto del tuo messaggio',
    'contact.form.message': 'Messaggio',
    'contact.form.message.placeholder': 'Il tuo messaggio...',
    'contact.form.send': 'Invia Messaggio',
    'contact.form.sending': 'Invio in corso...',

    // Footer
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.built': 'Costruito con React, TypeScript e Tailwind CSS'
  },

  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.experience': 'الخبرة',
    'nav.skills': 'المهارات',
    'nav.education': 'التعليم',
    'nav.projects': 'المشاريع',
    'nav.achievements': 'الإنجازات',
    'nav.contact': 'اتصل بي',

    // Hero Section
    'hero.title': 'محمد أمين ماشركي',
    'hero.subtitle': 'مهندس برمجيات',
    'hero.location': 'تونس، تونس',
    'hero.description': 'مهندس برمجيات مبتدئ بخبرة مثبتة تمتد لسنتين في قطاعي التكنولوجيا المالية والاتصالات، يساهم بفعالية في تطوير ودعم هياكل الخدمات المصغرة عالية الأداء. شغوف بتسخير التكنولوجيا والتعلم المستمر لتقديم حلول قابلة للتطوير وفعالة.',
    'hero.contact': 'اتصل بي',
    'hero.download': 'تحميل السيرة الذاتية',

    // About Section
    'about.title': 'نبذة عني',
    'about.subtitle': 'اكتشف رحلتي وشغفي',
    'about.description1': 'شغوف بالابتكار التكنولوجي والإمكانات التحويلية للتكنولوجيا. قادتني رحلتي من البحث في علوم البيانات في Orange Innovation إلى تطوير حلول مبتكرة تجمع بين الذكاء الاصطناعي والواقع الافتراضي والبلوك تشين.',
    'about.description2': 'كمطور متكامل، أقود الفرق في إنشاء هياكل الخدمات المصغرة المعقدة مع الحفاظ على نهج رشيق. تغطي خبرتي التطوير الأمامي والخلفي، مع التخصص في التقنيات الناشئة.',
    'about.description3': 'مشاركتي المجتمعية وإنجازاتي الأكاديمية تعكس رغبتي المستمرة في التعلم والابتكار والمساهمة الإيجابية في النظام البيئي التكنولوجي التونسي والدولي.',
    'about.fullstack': 'التطوير المتكامل',
    'about.fullstack.desc': 'خبرة في React.js و Angular و Spring Boot وهياكل الخدمات المصغرة',
    'about.leadership': 'قيادة الفريق',
    'about.leadership.desc': 'قيادة الفرق الرشيقة وإدارة المشاريع المعقدة',
    'about.innovation': 'الابتكار التقني',
    'about.innovation.desc': 'التخصص في الذكاء الاصطناعي والواقع الافتراضي والبلوك تشين والتقنيات الناشئة',
    'about.research': 'البحث والتطوير',
    'about.research.desc': 'المساهمة في الابتكار في Orange Innovation ومشاريع البحث والتطوير',

    // Experience Section
    'experience.title': 'الخبرة المهنية',
    'experience.subtitle': 'رحلتي المهنية وإنجازاتي',

    // Skills Section
    'skills.title': 'المهارات التقنية',
    'skills.subtitle': 'خبراتي ومجالات اختصاصي',
    'skills.frameworks': 'أطر العمل للويب',
    'skills.ai': 'الذكاء الاصطناعي والويب 3',
    'skills.databases': 'قواعد البيانات',
    'skills.tools': 'الأدوات والتطوير',
    'skills.languages': 'لغات البرمجة',
    'skills.vr': 'تقنيات الواقع الافتراضي/المعزز',
    'skills.spoken': 'اللغات',
    'skills.arabic': 'العربية',
    'skills.arabic.desc': 'اللغة الأم',
    'skills.french': 'الفرنسية',
    'skills.french.desc': 'كفاءة مهنية كاملة',
    'skills.english': 'الإنجليزية',
    'skills.english.desc': 'كفاءة مهنية كاملة',
    'skills.german': 'الألمانية',
    'skills.german.desc': 'كفاءة مهنية',

    // Education Section
    'education.title': 'التعليم والشهادات',
    'education.subtitle': 'خلفيتي الأكاديمية وإنجازاتي',
    'education.certifications': 'الشهادات والجوائز',

    // Projects Section
    'projects.title': 'المشاريع والإنجازات',
    'projects.subtitle': 'اكتشف مشاريعي الأكثر أهمية',
    'projects.all': 'الكل',
    'projects.viewMore': 'عرض المزيد',

    // Achievements Section
    'achievements.title': 'الإنجازات والتميز',
    'achievements.subtitle': 'إنجازاتي والاعتراف المهني',
    'achievements.projects': 'المشاريع الرئيسية',
    'achievements.experience': 'سنوات الخبرة',
    'achievements.awards': 'الجوائز الدولية',
    'achievements.technologies': 'التقنيات المتقنة',
    'achievements.cta.title': 'مستعد لمواجهة تحديات جديدة',
    'achievements.cta.description': 'أسعى دائماً للابتكار والمشاريع المحفزة التي تدفع الحدود التكنولوجية',
    'achievements.cta.button': 'لنناقش مشروعك',

    // Contact Section
    'contact.title': 'اتصل بي',
    'contact.subtitle': 'لنناقش مشاريعك والفرص',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    'contact.social': 'الشبكات الاجتماعية',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.name.placeholder': 'اسمك الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'الموضوع',
    'contact.form.subject.placeholder': 'موضوع رسالتك',
    'contact.form.message': 'الرسالة',
    'contact.form.message.placeholder': 'رسالتك...',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.built': 'تم البناء باستخدام React و TypeScript و Tailwind CSS'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['fr', 'en', 'ar', 'de', 'es', 'it'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
