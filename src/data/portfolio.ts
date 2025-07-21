import { Experience, Education, Project, Skill, Achievement } from '../types';

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer",
    company: "Sofrecom Tunisia",
    period: "09/2023 – Présent",
    location: "Tunis, Tunisia",
    description: "Développeur front-end/back-end pour le projet Disco microservices et microfrontend (lauréat DTW23)",
    achievements: [
      "Intégration de 5 composants open-source pour les offres mobiles prépayées (normes TMF)",
      "Déploiement sur Orange Cloud via OpenShift avec événements Kafka",
      "Direction d'un projet de fin d'études sur un système de lecture labiale",
      "Amélioration des performances système de 40% grâce à l'optimisation des microservices"
    ],
    technologies: ["React.js", "Spring Boot", "Kafka", "OpenShift", "TMF APIs", "Microservices"]
  },
  {
    title: "Stage de fin d'études",
    company: "Sofrecom Tunisia",
    period: "02/2023 – 07/2023",
    location: "Tunis, Tunisia",
    description: "Conception et implémentation d'une plateforme d'éducation médicale innovante",
    achievements: [
      "Intégration VR, smart contracts, et Rental NFTs",
      "Développement d'un professeur virtuel IA dans le Metaverse (NLP et ML)",
      "Réduction du temps d'apprentissage de 60% grâce à l'immersion VR",
      "Implémentation de 15+ smart contracts pour la gestion des NFTs éducatifs"
    ],
    technologies: ["Unity", "Solidity", "Python", "TensorFlow", "Oculus SDK", "Blockchain"]
  },
  {
    title: "R&D Engineer Intern",
    company: "Talan Tunisia",
    period: "06/2022 – 07/2022",
    location: "Tunis, Tunisia",
    description: "Application de réalité mixte multijoueur pour MetaSports",
    achievements: [
      "Intégration de fonctionnalités IA pour interactions temps réel",
      "Compatibilité complète Hololens 2",
      "Développement d'algorithmes de tracking 3D avec précision de 95%",
      "Optimisation des performances pour 10+ utilisateurs simultanés"
    ],
    technologies: ["Unity", "HoloLens 2", "C#", "Mixed Reality Toolkit", "Azure", "Computer Vision"]
  },
  {
    title: "Frontend & Big Data Intern",
    company: "Consultim-it",
    period: "08/2022 – 10/2022",
    location: "Tunis, Tunisia",
    description: "Application avec interface drag-and-drop",
    achievements: [
      "Solutions Big Data pour traitement et affichage de données client en temps réel",
      "Interface utilisateur intuitive avec fonctionnalité drag-and-drop",
      "Traitement de 1M+ enregistrements avec latence <100ms",
      "Amélioration de l'expérience utilisateur de 80% selon les tests A/B"
    ],
    technologies: ["Angular", "Apache Spark", "MongoDB", "D3.js", "Elasticsearch", "Docker"]
  }
];

export const education: Education[] = [
  {
    degree: "Diplôme d'Ingénieur National en Télécommunications et Informatique",
    institution: "École Nationale d'Électronique et des Télécommunications de Sfax",
    period: "2020 - 2023",
    grade: "Mention Très Bien"
  },
  {
    degree: "Diplôme de Premier Cycle en Pré-ingénierie (Mathématiques et Physique)",
    institution: "Institut Préparatoire aux Études d'Ingénieurs de Monastir",
    period: "2018 - 2020",
    grade: "Mention Bien"
  }
];

export const projects: Project[] = [
  {
    title: "Plateforme d'Éducation Médicale VR",
    description: "Plateforme immersive combinant VR, IA et blockchain pour l'éducation médicale",
    technologies: ["Unity", "Solidity", "Python", "TensorFlow", "Oculus SDK"],
    image: "/src/assets/VR.jpeg",
    situation: "Besoin d'une solution innovante pour l'éducation médicale immersive",
    task: "Développer une plateforme VR complète avec IA et blockchain",
    action: "Conception d'architecture microservices, intégration VR/IA, développement smart contracts",
    result: "60% de réduction du temps d'apprentissage, 15+ smart contracts déployés"
  },
  {
    title: "Système de Lecture Labiale IA",
    description: "Système intelligent de reconnaissance de parole par lecture labiale",
    technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
    image: "/src/assets/1675717687024.jpeg",
    situation: "Nécessité d'améliorer l'accessibilité pour les personnes malentendantes",
    task: "Créer un système de lecture labiale précis et temps réel",
    action: "Développement d'algorithmes de computer vision et réseaux de neurones",
    result: "Précision de 92% en temps réel, interface utilisateur intuitive"
  },
  {
    title: "Application MetaSports Mixed Reality",
    description: "Application multijoueur en réalité mixte pour le sport",
    technologies: ["Unity", "HoloLens 2", "C#", "Azure", "Mixed Reality Toolkit"],
    image: "/src/assets/WhatsApp.jpeg",
    situation: "Demande croissante d'expériences sportives immersives",
    task: "Développer une application MR multijoueur pour HoloLens 2",
    action: "Implémentation tracking 3D, optimisation performances, intégration IA",
    result: "Support 10+ utilisateurs simultanés, précision tracking 95%"
  }
];

export const skills: Skill[] = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Angular", level: 90, category: "Frontend" },
  { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
  { name: "Spring Boot", level: 88, category: "Backend" },
  { name: "Python", level: 92, category: "Backend" },
  { name: "Java", level: 85, category: "Backend" },
  { name: "Machine Learning", level: 88, category: "AI" },
  { name: "Computer Vision", level: 85, category: "AI" },
  { name: "NLP", level: 82, category: "AI" },
  { name: "Unity", level: 90, category: "XR" },
  { name: "Blender", level: 75, category: "XR" },
  { name: "Oculus Quest 2", level: 85, category: "XR" },
  { name: "MongoDB", level: 88, category: "Database" },
  { name: "MySQL", level: 90, category: "Database" },
  { name: "Docker", level: 85, category: "DevOps" },
  { name: "Git", level: 95, category: "Tools" }
];

export const achievements: Achievement[] = [
  {
    title: "1er prix 'Galactic Problem-Solver'",
    organization: "NASA International Space Apps Challenge",
    date: "2023",
    description: "Solution innovante pour l'exploration spatiale utilisant l'IA et la simulation"
  },
  {
    title: "2ème place challenge 'Innov'Project 1'",
    organization: "PACK DGSE",
    date: "2022",
    description: "Projet d'innovation technologique dans le domaine de la cybersécurité"
  },
  {
    title: "Lauréat DTW23",
    organization: "Digital Transformation Week",
    date: "2023",
    description: "Projet Disco microservices reconnu pour son innovation technique"
  }
];

export const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];