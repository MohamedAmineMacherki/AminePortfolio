import React, { useState, useMemo } from 'react';
import { Search, ArrowLeft, ExternalLink, Code, Database, Cloud, Smartphone, Settings, Brain, Globe, Star, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  id: string;
  name: string;
  logo: string;
  category: string;
  level: number;
  description: string;
  experience: string;
  projects: string[];
  useCases: string[];
  borderColor: string;
  bgColor: string;
  documentationUrl: string;
}

interface LanguageSkill {
  language: string;
  level: string;
  proficiency: number;
  flag: string;
  description: string;
  certification?: string;
  certificateUrl?: string;
}

interface SkillsProps {
  darkMode?: boolean;
}

export const EnhancedSkills: React.FC<SkillsProps> = ({ darkMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const downloadCertificate = (certificateUrl: string, certificateName: string) => {
    const link = document.createElement('a');
    link.href = certificateUrl;
    link.download = `${certificateName.replace(/\s+/g, '_')}_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const languageSkills: LanguageSkill[] = useMemo(() => [
    {
      language: 'Arabic',
      level: 'Mother Tongue',
      proficiency: 100,
      flag: '🇹🇳',
      description: 'Native speaker with full command of formal and colloquial Arabic',
    },
    {
      language: 'French',
      level: 'Full Professional Proficiency',
      proficiency: 90,
      flag: '🇫🇷',
      description: 'Excellent written and verbal communication skills in business and technical contexts',
    },
    {
      language: 'English',
      level: 'Full Professional Proficiency',
      proficiency: 90,
      flag: '🇺🇸',
      description: 'Fluent in technical documentation, presentations, and international collaboration',
      certification: 'EF SET Certificate',
      certificateUrl: '/EF-SET-Certificate-Mohamed-Amine-MACHERKI.pdf'
    },
    {
      language: 'German',
      level: 'Professional Working Proficiency',
      proficiency: 55,
      flag: '🇩🇪',
      description: 'Solid understanding for professional communication and technical discussions',
    }
  ], []);

  const skills: Skill[] = useMemo(() => [
    // Programming Languages
    {
      id: 'java',
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      category: 'Programming Languages',
      level: 81,
      description: 'Enterprise-grade object-oriented programming language for scalable applications.',
      experience: '5+ years building microservices, REST APIs, and enterprise applications',
      projects: ['DISCO Microservices Platform', 'Banking System', 'E-commerce Backend'],
      useCases: ['Spring Boot APIs', 'Microservices Architecture', 'Enterprise Applications', 'Backend Development'],
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50',
      documentationUrl: 'https://docs.oracle.com/en/java/'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      category: 'Programming Languages',
      level: 84,
      description: 'Dynamic programming language for modern web development.',
      experience: '6+ years of full-stack JavaScript development',
      projects: ['React Applications', 'Node.js APIs', 'Real-time Chat Apps'],
      useCases: ['Frontend Development', 'Backend APIs', 'Real-time Applications', 'DOM Manipulation'],
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-50',
      documentationUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      category: 'Programming Languages',
      level: 75,
      description: 'Strongly typed superset of JavaScript for large-scale applications.',
      experience: '4+ years developing type-safe applications',
      projects: ['Enterprise Web Apps', 'Angular Applications', 'Node.js Services'],
      useCases: ['Type Safety', 'Large-scale Applications', 'Better IDE Support', 'Code Maintainability'],
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50',
      documentationUrl: 'https://www.typescriptlang.org/docs/'
    },
    {
      id: 'python',
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      category: 'Programming Languages',
      level: 70,
      description: 'Versatile language for AI, machine learning, and backend development.',
      experience: '4+ years in AI/ML and web development',
      projects: ['Lip-Reading System', 'Data Analysis Tools', 'Machine Learning Models'],
      useCases: ['Machine Learning', 'Data Analysis', 'Computer Vision', 'Automation Scripts'],
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50',
      documentationUrl: 'https://docs.python.org/3/'
    },
    {
      id: 'csharp',
      name: 'C#',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      category: 'Programming Languages',
      level: 60,
      description: 'Microsoft\'s object-oriented language for .NET applications.',
      experience: '2+ years in Unity development and .NET applications',
      projects: ['VR Medical Education Platform', 'Mixed Reality Applications', 'Unity Games'],
      useCases: ['Unity Development', 'VR/AR Applications', 'Desktop Applications', 'Game Development'],
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      documentationUrl: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
    },

    // Frameworks
    {
      id: 'react',
      name: 'React.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      category: 'Frameworks',
      level: 86,
      description: 'Component-based library for building modern user interfaces.',
      experience: '5+ years building production applications',
      projects: ['DISCO Platform Frontend', 'E-commerce Dashboard', 'Portfolio Websites'],
      useCases: ['Single Page Applications', 'Component Architecture', 'State Management', 'UI Development'],
      borderColor: 'border-cyan-500',
      bgColor: 'bg-cyan-50',
      documentationUrl: 'https://reactjs.org/docs/'
    },
    {
      id: 'angular',
      name: 'Angular',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      category: 'Frameworks',
      level: 65,
      description: 'Full-featured framework for building scalable web applications.',
      experience: '4+ years developing enterprise applications',
      projects: ['Task Management System', 'Admin Dashboards', 'Learning Management System'],
      useCases: ['Enterprise Applications', 'Complex Forms', 'Routing', 'Dependency Injection'],
      borderColor: 'border-red-500',
      bgColor: 'bg-red-50',
      documentationUrl: 'https://angular.io/docs'
    },
    {
      id: 'springboot',
      name: 'Spring Boot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      category: 'Frameworks',
      level: 85,
      description: 'Java framework for building production-ready applications.',
      experience: '4+ years building microservices and APIs',
      projects: ['DISCO Microservices', 'REST APIs', 'Banking Applications'],
      useCases: ['REST API Development', 'Microservices', 'Database Integration', 'Security'],
      borderColor: 'border-green-600',
      bgColor: 'bg-green-50',
      documentationUrl: 'https://spring.io/projects/spring-boot'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      category: 'Frameworks',
      level: 75,
      description: 'JavaScript runtime for building scalable server-side applications.',
      experience: '3+ years developing backend services',
      projects: ['Real-time Chat Applications', 'API Services', 'Web Scraping Tools'],
      useCases: ['Backend Development', 'Real-time Applications', 'API Development', 'Microservices'],
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50',
      documentationUrl: 'https://nodejs.org/en/docs/'
    },

    // Cloud & DevOps
    {
      id: 'aws',
      name: 'AWS',
      logo: 'public/logo/amazon-web-services.png',
      category: 'Cloud & DevOps',
      level: 50,
      description: 'Amazon Web Services for cloud computing solutions.',
      experience: '3+ years deploying and managing cloud applications',
      projects: ['Serverless Applications', 'Cloud Migration', 'Auto-scaling Systems'],
      useCases: ['Cloud Deployment', 'Serverless Computing', 'Storage Solutions', 'Database Management'],
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50',
      documentationUrl: 'https://docs.aws.amazon.com/'
    },
    {
      id: 'docker',
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      category: 'Cloud & DevOps',
      level: 60,
      description: 'Containerization platform for consistent deployments.',
      experience: '3+ years containerizing applications',
      projects: ['DISCO Microservices', 'Development Environments', 'CI/CD Pipelines'],
      useCases: ['Application Containerization', 'Development Consistency', 'Deployment Automation', 'Scalability'],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      documentationUrl: 'https://docs.docker.com/'
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      category: 'Cloud & DevOps',
      level: 51,
      description: 'Container orchestration for managing distributed applications.',
      experience: '2+ years orchestrating container deployments',
      projects: ['Microservices Orchestration', 'Auto-scaling Applications', 'Service Mesh'],
      useCases: ['Container Orchestration', 'Auto-scaling', 'Service Discovery', 'Load Balancing'],
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50',
      documentationUrl: 'https://kubernetes.io/docs/'
    },
    // Databases
    {
      id: 'mongodb',
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      category: 'Databases',
      level: 75,
      description: 'NoSQL document database for flexible data storage.',
      experience: '4+ years working with document databases',
      projects: ['E-commerce Systems', 'Social Media Platform', 'Real-time Analytics'],
      useCases: ['Document Storage', 'Real-time Data', 'Flexible Schema', 'Scalable Applications'],
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50',
      documentationUrl: 'https://docs.mongodb.com/'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      category: 'Databases',
      level: 50,
      description: 'Reliable relational database for structured data.',
      experience: '5+ years designing and optimizing databases',
      projects: ['E-commerce Platforms', 'User Management Systems', 'Analytics Dashboards'],
      useCases: ['CRUD Operations', 'Data Relations', 'Transaction Management', 'Performance Optimization'],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      documentationUrl: 'https://dev.mysql.com/doc/'
    },

    // AI & Machine Learning
    {
      id: 'tensorflow',
      name: 'TensorFlow',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      category: 'AI & Machine Learning',
      level: 60,
      description: 'Open-source machine learning framework.',
      experience: '2+ years developing ML models',
      projects: ['Lip-Reading System', 'Computer Vision Applications', 'NLP Models'],
      useCases: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'Natural Language Processing'],
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50',
      documentationUrl: 'https://www.tensorflow.org/learn'
    }, {
      id: 'nlp',
      name: 'NLP',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      category: 'AI & Machine Learning',
      level: 62,
      description: 'Natural Language Processing for text analysis and understanding.',
      experience: '2+ years developing NLP applications',
      projects: ['Text Classification', 'Sentiment Analysis', 'Language Models'],
      useCases: ['Text Processing', 'Sentiment Analysis', 'Named Entity Recognition', 'Language Translation'],
      borderColor: 'border-pink-500',
      bgColor: 'bg-pink-50',
      documentationUrl: 'https://www.nltk.org/'
    },
    {
      id: 'opencv',
      name: 'OpenCV',
      logo: 'https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png',
      category: 'AI & Machine Learning',
      level: 61,
      description: 'Computer vision library for image processing.',
      experience: '2+ years in computer vision projects',
      projects: ['Lip-Reading System', 'Object Detection', 'Image Processing Applications'],
      useCases: ['Image Processing', 'Object Detection', 'Feature Extraction', 'Video Analysis'],
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      documentationUrl: 'https://docs.opencv.org/'
    },

    // Web3 & Blockchain
    {
      id: 'metamask',
      name: 'MetaMask',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
      category: 'Web3 & Blockchain',
      level: 55,
      description: 'Web3 wallet integration for decentralized applications.',
      experience: '2+ years integrating Web3 wallets in applications',
      projects: ['DeFi Applications', 'NFT Marketplaces', 'Web3 Integration'],
      useCases: ['Wallet Connection', 'Transaction Signing', 'DApp Integration', 'Blockchain Interaction'],
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50',
      documentationUrl: 'https://docs.metamask.io/'
    },

    // 3D & Mixed Reality
    {
      id: 'unity',
      name: 'Unity',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
      category: '3D & Mixed Reality',
      level: 65,
      description: 'Cross-platform game engine for 3D and VR/AR applications.',
      experience: '3+ years developing VR/AR and 3D applications',
      projects: ['VR Medical Education Platform', 'Mixed Reality Applications', '3D Simulations'],
      useCases: ['VR Development', 'AR Applications', '3D Game Development', 'Interactive Simulations'],
      borderColor: 'border-gray-800',
      bgColor: 'bg-gray-50',
      documentationUrl: 'https://docs.unity3d.com/'
    },
    {
      id: 'blender',
      name: 'Blender',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
      category: '3D & Mixed Reality',
      level: 52,
      description: 'Open-source 3D creation suite for modeling, animation, and rendering.',
      experience: '2+ years creating 3D models and animations',
      projects: ['3D Asset Creation', 'Character Modeling', 'Environment Design'],
      useCases: ['3D Modeling', 'Animation', 'Texturing', 'Rendering'],
      borderColor: 'border-orange-600',
      bgColor: 'bg-orange-50',
      documentationUrl: 'https://docs.blender.org/'
    },
    {
      id: 'oculus',
      name: 'Oculus Quest 2',
      logo: 'public/logo/oculus-quest-2-pro-price-release-date-spec-benchmarks-550x309.jpg',
      category: '3D & Mixed Reality',
      level: 58,
      description: 'VR headset platform for immersive application development.',
      experience: '2+ years developing for Oculus platform',
      projects: ['VR Medical Training', 'Immersive Experiences', 'VR Simulations'],
      useCases: ['VR Development', 'Immersive Training', 'Virtual Simulations', 'Hand Tracking'],
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50',
      documentationUrl: 'https://developer.oculus.com/documentation/'
    },{
      id: 'HoloLens 2',
      name: 'HoloLens 2',
      logo: 'public/logo/1476214999_microsoft-hololens-front-logo_story.jpg',
      category: '3D & Mixed Reality',
      level: 58,
      description: 'Microsoft unveils new augmented reality headset',
      experience: '2+ years developing for Oculus platform',
      projects: ['XR Talansport', 'Immersive Experiences', 'XR Simulations'],
      useCases: ['VR Development', 'Immersive Training', 'Virtual Simulations', 'Hand Tracking'],
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50',
      documentationUrl: 'https://learn.microsoft.com/fr-fr/hololens/'
    },

    // Tools & Development
    {
      id: 'git',
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      category: 'Tools & Development',
      level: 82,
      description: 'Distributed version control system for tracking code changes.',
      experience: '6+ years using Git for version control',
      projects: ['All Software Projects', 'Team Collaboration', 'Code Management'],
      useCases: ['Version Control', 'Branch Management', 'Code Collaboration', 'Release Management'],
      borderColor: 'border-red-500',
      bgColor: 'bg-red-50',
      documentationUrl: 'https://git-scm.com/doc'
    },
    {
      id: 'gitlab',
      name: 'GitLab',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      category: 'Tools & Development',
      level: 75,
      description: 'DevOps platform for Git repository management and CI/CD.',
      experience: '4+ years using GitLab for project management',
      projects: ['CI/CD Pipelines', 'Code Reviews', 'Project Management'],
      useCases: ['Repository Management', 'CI/CD', 'Issue Tracking', 'Code Reviews'],
      borderColor: 'border-orange-600',
      bgColor: 'bg-orange-50',
      documentationUrl: 'https://docs.gitlab.com/'
    },
    {
      id: 'jira',
      name: 'Jira',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      category: 'Tools & Development',
      level: 70,
      description: 'Project management and issue tracking tool for agile teams.',
      experience: '4+ years managing projects with Jira',
      projects: ['Agile Project Management', 'Sprint Planning', 'Bug Tracking'],
      useCases: ['Project Management', 'Issue Tracking', 'Sprint Planning', 'Team Collaboration'],
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50',
      documentationUrl: 'https://support.atlassian.com/jira/'
    },
    {
      id: 'confluence',
      name: 'Confluence',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg',
      category: 'Tools & Development',
      level: 68,
      description: 'Team workspace for documentation and knowledge sharing.',
      experience: '3+ years creating and managing documentation',
      projects: ['Technical Documentation', 'Team Wikis', 'Knowledge Base'],
      useCases: ['Documentation', 'Knowledge Sharing', 'Team Collaboration', 'Project Planning'],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      documentationUrl: 'https://support.atlassian.com/confluence/'
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Star className="w-5 h-5" /> },
    { id: 'Programming Languages', name: 'Programming', icon: <Code className="w-5 h-5" /> },
    { id: 'Frameworks', name: 'Frameworks', icon: <Settings className="w-5 h-5" /> },
    { id: 'Cloud & DevOps', name: 'Cloud', icon: <Cloud className="w-5 h-5" /> },
    { id: 'Databases', name: 'Databases', icon: <Database className="w-5 h-5" /> },
    { id: 'AI & Machine Learning', name: 'AI/ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'Web3 & Blockchain', name: 'Web3', icon: <Globe className="w-5 h-5" /> },
    { id: '3D & Mixed Reality', name: '3D/VR', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'Tools & Development', name: 'Tools', icon: <Settings className="w-5 h-5" /> }
  ];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const skillsByCategory = categories.map(category => ({
    ...category,
    skills: filteredSkills.filter(skill => skill.category === category.name)
  })).filter(category => category.skills.length > 0);

  if (selectedSkill) {
    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4 py-8">
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setSelectedSkill(null)}
                className={`flex items-center gap-2 mb-8 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    darkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
                        : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 shadow-lg'
                }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Skills
            </motion.button>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-3xl p-8 shadow-2xl ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <img
                      src={selectedSkill.logo}
                      alt={`${selectedSkill.name} logo`}
                      className="w-24 h-24 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/96x96/3B82F6/FFFFFF?text=' + selectedSkill.name.charAt(0);
                      }}
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{selectedSkill.level}%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">{selectedSkill.name}</h1>
                  <p className={`text-xl mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {selectedSkill.category}
                  </p>
                  <a
                      href={selectedSkill.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Documentation
                  </a>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Description</h2>
                    <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedSkill.description}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                    <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedSkill.experience}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Proficiency Level</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {selectedSkill.name}
                        </span>
                        <span className={`font-bold text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {selectedSkill.level}%
                        </span>
                      </div>
                      <div className={`w-full h-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${selectedSkill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                    <div className="space-y-3">
                      {selectedSkill.projects.map((project, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                              }`}
                          >
                            <span className="flex items-center gap-2">
                              <ExternalLink className="w-5 h-5 text-blue-500" />
                              <span className="font-medium">{project}</span>
                            </span>
                          </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
                    <div className="space-y-3">
                      {selectedSkill.useCases.map((useCase, index) => (
                          <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                              }`}
                          >
                            <span className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                              <span className="font-medium">{useCase}</span>
                            </span>
                          </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    );
  }

  return (
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-center mb-10">
              <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                SKILLS & LANGUAGES
              </h1>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Technical expertise and language proficiency
              </p>
            </div>

            {/* Language Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
            >
              <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Language Proficiency
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {languageSkills.map((lang, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                            darkMode
                                ? 'bg-gray-800 border border-gray-700'
                                : 'bg-white border border-gray-100'
                        }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4">{lang.flag}</div>
                        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {lang.language}
                        </h3>
                        <p className={`text-sm font-medium mb-4 ${
                            lang.language === 'Arabic'
                                ? 'text-green-600'
                                : lang.proficiency >= 90
                                    ? 'text-blue-600'
                                    : 'text-orange-600'
                        }`}>
                          {lang.level}
                        </p>
                        <div className="mb-4">
                          <div className={`w-full h-2 rounded-full mb-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${lang.proficiency}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                className={`h-2 rounded-full ${
                                    lang.language === 'Arabic'
                                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                                        : lang.proficiency >= 90
                                            ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                                            : 'bg-gradient-to-r from-orange-500 to-orange-600'
                                }`}
                            />
                          </div>
                          <span className={`text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {lang.proficiency}%
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {lang.description}
                        </p>

                        {/* Certificate Download Button */}
                        {lang.certification && lang.certificateUrl && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => downloadCertificate(lang.certificateUrl!, lang.certification!)}
                                className={`flex items-center gap-2 w-full justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    darkMode
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                                } shadow-md hover:shadow-lg`}
                            >
                              <Download className="w-4 h-4" />
                              <span className="text-sm">Download {lang.certification}</span>
                            </motion.button>
                        )}
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
              <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Technical Skills
              </h2>

              {/* Search and Filter */}
              <div className="mb-8 space-y-4">
                <div className="relative max-w-md mx-auto">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                      type="text"
                      placeholder="Search skills..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-blue-500 ${
                          darkMode
                              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                      <motion.button
                          key={category.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                              selectedCategory === category.id
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                  : darkMode
                                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow'
                          }`}
                      >
                        {category.icon}
                        <span>{category.name}</span>
                      </motion.button>
                  ))}
                </div>
              </div>

              {/* Skills by Category */}
              <div className="space-y-8">
                {selectedCategory === 'all' ? (
                    skillsByCategory.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + categoryIndex * 0.1 }}
                            className="space-y-6"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-5 h-0.5 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                            <div className="flex items-center gap-2">
                              {category.icon}
                              <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {category.name}
                              </h2>
                            </div>
                            <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + skillIndex * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedSkill(skill)}
                                    className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                                        darkMode
                                            ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
                                            : 'bg-white border-gray-200 hover:bg-gray-50'
                                    }`}
                                >
                                  <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                      <img
                                          src={skill.logo}
                                          alt={`${skill.name} logo`}
                                          className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                          onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=' + skill.name.charAt(0);
                                          }}
                                      />
                                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">{skill.level}%</span>
                                      </div>
                                    </div>

                                    <h3 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                      {skill.name}
                                    </h3>

                                    <div className="w-full">
                                      <div className={`w-full h-2 rounded-full mb-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.8 + skillIndex * 0.05 }}
                                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                            ))}
                          </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredSkills.map((skill, index) => (
                          <motion.div
                              key={skill.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              onClick={() => setSelectedSkill(skill)}
                              className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                                  darkMode
                                      ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
                                      : 'bg-white border-gray-200 hover:bg-gray-50'
                              }`}
                          >
                            <div className="flex flex-col items-center text-center">
                              <div className="relative mb-4">
                                <img
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = 'https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=' + skill.name.charAt(0);
                                    }}
                                />
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                  <span className="text-white font-bold text-xs">{skill.level}%</span>
                                </div>
                              </div>

                              <h3 className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {skill.name}
                              </h3>

                              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {skill.category}
                              </p>

                              <div className="w-full">
                                <div className={`w-full h-2 rounded-full mb-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                  <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.level}%` }}
                                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                      ))}
                    </div>
                )}

                {filteredSkills.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                      <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        No skills found matching your search criteria.
                      </p>
                    </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};