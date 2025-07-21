import React, { useState } from 'react';
import { Calendar, MapPin, Building, Briefcase, GraduationCap, ChevronDown, ChevronUp, Code } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [showAllInternships, setShowAllInternships] = useState(false);

  const workExperiences = [
    {
      title: "Software Development Engineer",
      company: "Sofrecom Tunisia",
      period: "09/2023 – Present",
      location: "Tunis, Tunisia",
      description: [
        "Front-end/back-end developer for the DISCO microservices and microfrontend project (DTW Innovation Award laureate)",
        "Development of RESTful APIs using Java Spring Boot following TMF standards",
        "Participation in the creation of administration and order management portals using React.js",
        "Implementation of the first microfrontend using Webpack architecture",
        "Contribution to deployment processes on Orange Cloud via OpenShift and Kafka integration",
        "Collaboration with a distributed Agile team across 5 countries and time zones",
        "Documentation of developed features and onboarding materials for new team members",
        "Active involvement in sprint reviews, demos, and technical discussions"
      ],
      techStack: [
        "Spring Boot", "React", "Microfrontends", "Microservices", "Keycloak",
        "Kafka", "S3", "JUnit", "Mockito", "TDD", "OpenShift", "Kubernetes", "Docker"
      ],
      image: "/public/logo/sofrecom-logo.png",
      experienceImage: "/public/work/Disco.jpeg",
      link: "https://sofrecom.com"
    }
  ];

  const internshipExperiences = [
    {
      title: "End-of-studies Internship",
      company: "Sofrecom Tunisia",
      period: "02/2023 – 07/2023",
      location: "Tunis, Tunisia",
      description: [
        "Design and implementation of an innovative medical education platform",
        "Integration of VR, smart contracts, and Rental NFTs",
        "Development of an AI virtual professor in the Metaverse (NLP and ML)"
      ],
      techStack: [
        "Virtual Reality", "Blockchain", "AI", "Machine Learning", "NLP",
        "Smart Contracts", "NFT", "Unity", "Oculus Quest 2", "Solidity", "Ganache", "Blender"
      ],
      image: "/public/logo/sofrecom-logo.png",
      experienceImage: "/public/work/pfe.jpg",
      link: "https://sofrecom.com"
    },
    {
      title: "R&D Engineer Intern",
      company: "Talan Tunisia",
      period: "06/2022 – 07/2022",
      location: "Tunis, Tunisia",
      description: [
        "Multiplayer mixed reality application for MetaSports",
        "Integration of AI functionalities for real-time interactions",
        "Full Hololens 2 compatibility"
      ],
      techStack: [
        "Mixed Reality", "AI", "Machine Learning", "Unity", "HoloLens 2",
        "Photon", "C#", "MRTK", "Azure"
      ],
      image: "/public/logo/talan-logo.png",
      experienceImage: "/public/work/TALAN.jpg",
      link: "https://talan.com"
    },
    {
      title: "Frontend & Big Data Intern",
      company: "Consultim-it",
      period: "08/2022 – 10/2022",
      location: "Tunis, Tunisia",
      description: [
        "Application with drag-and-drop interface",
        "Big Data solutions for real-time customer data processing and display"
      ],
      techStack: [
        "React", "JavaScript", "Big Data", "Apache Kafka", "Elasticsearch",
        "D3.js", "Node.js", "MongoDB", "REST APIs"
      ],
      image: "/public/logo/consultim-logo.png",
      link: "https://consultim-it.com"
    },
    {
      title: "Web Development Intern",
      company: "ALLNET GmbH",
      period: "07/2021 – 07/2022",
      location: "Sousse, Tunisia",
      description: [
        "Development of a real-time stock management web application",
        "Front-end developed with React.js for an intuitive user interface",
        "Back-end logic implemented with Java 17 for inventory tracking",
        "Integration of stock management and reporting functionalities"
      ],
      techStack: [
        "React.js", "Java 17", "Spring Boot", "MySQL", "REST APIs",
        "JavaScript", "HTML5", "CSS3", "Bootstrap"
      ],
      image: "/public/logo/allnet-logo.png",
      link: "https://allnet.de"
    },
    {
      title: "Summer Intern",
      company: "Tunisie Telecom",
      period: "06/2021 – 07/2022",
      location: "Mahdia, Tunisia",
      description: [
        "Discovery of the operation of the ROC telecommunications center",
        "Training on fiber optic department and RF technologies",
        "Learning about energy systems and mobile departments",
        "Acquisition of skills in quality and telecommunications"
      ],
      techStack: [
        "Telecommunications", "Fiber Optic", "RF Technologies", "Network Management",
        "Quality Control", "Mobile Networks", "Energy Systems"
      ],
      image: "/public/logo/tunisie-telecom-logo.png",
      link: "https://www.tunisietelecom.tn"
    }
  ];

  const handleImageClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const getTechInfo = (tech: string) => {
    const techMap: { [key: string]: { logo: string; url: string } } = {
      'Spring Boot': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', url: 'https://spring.io/projects/spring-boot' },
      'React': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://reactjs.org/docs' },
      'React.js': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://reactjs.org/docs' },
      'Microfrontends': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://micro-frontends.org/' },
      'Microservices': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://microservices.io/' },
      'Keycloak': { logo: 'https://www.keycloak.org/resources/images/keycloak_icon_128px.png', url: 'https://www.keycloak.org/documentation' },
      'Kafka': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', url: 'https://kafka.apache.org/documentation/' },
      'Apache Kafka': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', url: 'https://kafka.apache.org/documentation/' },
      'S3': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', url: 'https://docs.aws.amazon.com/s3/' },
      'JUnit': { logo: 'https://junit.org/junit5/assets/img/junit5-logo.png', url: 'https://junit.org/junit5/docs/current/user-guide/' },
      'Mockito': { logo: 'https://github.com/mockito/mockito/raw/main/src/javadoc/org/mockito/logo.png', url: 'https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html' },
      'TDD': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html' },
      'OpenShift': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openshift/openshift-original.svg', url: 'https://docs.openshift.com/' },
      'Kubernetes': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', url: 'https://kubernetes.io/docs/' },
      'Docker': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://docs.docker.com/' },
      'Virtual Reality': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', url: 'https://developers.meta.com/horizon/documentation/' },
      'Blockchain': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', url: 'https://ethereum.org/en/developers/docs/' },
      'AI': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', url: 'https://www.tensorflow.org/learn' },
      'Machine Learning': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://scikit-learn.org/stable/documentation.html' },
      'NLP': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.nltk.org/' },
      'Smart Contracts': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', url: 'https://docs.soliditylang.org/' },
      'NFT': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg', url: 'https://ethereum.org/en/nft/' },
      'Unity': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', url: 'https://docs.unity3d.com/' },
      'Oculus Quest 2': { logo: 'https://developer.oculus.com/assets/oculus-icon.svg', url: 'https://developer.oculus.com/documentation/' },
      'Solidity': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', url: 'https://docs.soliditylang.org/' },
      'Ganache': { logo: 'https://trufflesuite.com/img/ganache-logo-dark.svg', url: 'https://trufflesuite.com/ganache/' },
      'Blender': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', url: 'https://docs.blender.org/' },
      'Mixed Reality': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', url: 'https://docs.microsoft.com/en-us/windows/mixed-reality/' },
      'HoloLens 2': { logo: 'https://docs.microsoft.com/en-us/windows/mixed-reality/images/hololens-icon.png', url: 'https://docs.microsoft.com/en-us/hololens/' },
      'Photon': { logo: 'https://www.photonengine.com/images/photon-logo.png', url: 'https://doc.photonengine.com/' },
      'C#': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
      'MRTK': { logo: 'https://docs.microsoft.com/en-us/windows/mixed-reality/images/mrtk-logo.png', url: 'https://docs.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/' },
      'Azure': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', url: 'https://docs.microsoft.com/en-us/azure/' },
      'JavaScript': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      'Big Data': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', url: 'https://hadoop.apache.org/docs/' },
      'Elasticsearch': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg', url: 'https://www.elastic.co/guide/' },
      'D3.js': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg', url: 'https://d3js.org/' },
      'Node.js': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/en/docs/' },
      'MongoDB': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://docs.mongodb.com/' },
      'REST APIs': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', url: 'https://restfulapi.net/' },
      'Java 17': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', url: 'https://docs.oracle.com/en/java/javase/17/' },
      'MySQL': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://dev.mysql.com/doc/' },
      'HTML5': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      'CSS3': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      'Bootstrap': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com/docs/' },
      'Telecommunications': { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networx/networx-original.svg', url: 'https://www.itu.int/en/ITU-T/Pages/default.aspx' },
      'Fiber Optic': { logo: 'https://img.icons8.com/color/48/000000/optical-fiber.png', url: 'https://www.fiber-optic-tutorial.com/' },
      'RF Technologies': { logo: 'https://img.icons8.com/color/48/000000/radio-waves.png', url: 'https://www.rfcafe.com/' },
      'Network Management': { logo: 'https://img.icons8.com/color/48/000000/network.png', url: 'https://tools.ietf.org/rfc/' },
      'Quality Control': { logo: 'https://img.icons8.com/color/48/000000/quality.png', url: 'https://asq.org/' },
      'Mobile Networks': { logo: 'https://img.icons8.com/color/48/000000/cell-phone.png', url: 'https://www.3gpp.org/' },
      'Energy Systems': { logo: 'https://img.icons8.com/color/48/000000/energy.png', url: 'https://www.ieee.org/' }
    };

    return techMap[tech] || { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg', url: '#' };
  };

  const renderTechStack = (techStack: string[]) => {
    return (
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Code className="w-5 h-5 mr-2 text-green-600" />
            <h5 className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              Tech Stack:
            </h5>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => {
              const techInfo = getTechInfo(tech);
              return (
                  <a
                      key={index}
                      href={techInfo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer ${
                          darkMode
                              ? 'bg-gray-700 text-green-300 border border-gray-600 hover:bg-gray-600'
                              : 'bg-green-50 text-green-800 border border-green-200 hover:bg-green-100'
                      }`}
                      title={`Learn more about ${tech}`}
                  >
                    <img
                        src={techInfo.logo}
                        alt={`${tech} logo`}
                        className="w-4 h-4 flex-shrink-0"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                        }}
                    />
                    <span>{tech}</span>
                  </a>
              );
            })}
          </div>
        </div>
    );
  };

  const renderExperienceSection = (
      experiences: typeof workExperiences,
      title: string,
      icon: React.ReactNode,
      gradientFrom: string,
      gradientTo: string,
      isInternship: boolean = false
  ) => {
    const displayedExperiences = isInternship && !showAllInternships
        ? experiences.slice(0, 2)
        : experiences;

    return (
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              {icon}
              <h3 className={`text-3xl font-bold ml-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h3>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b ${gradientFrom} ${gradientTo} hidden md:block`}></div>

            <div className="space-y-12">
              {displayedExperiences.map((exp, index) => (
                  <div
                      key={index}
                      className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full hidden md:block`}></div>

                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:ml-16' : 'md:pl-12 md:mr-16'}`}>
                      <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`}>
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <h4 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {exp.title}
                            </h4>
                            <div className="flex items-center mb-2">
                              <Building className="w-5 h-5 mr-2 text-blue-600" />
                              <span className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {exp.company}
                          </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.period}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <div
                              className="w-16 h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-blue-500 flex-shrink-0 ml-4"
                              onClick={() => handleImageClick(exp.link)}
                              title={`Visit ${exp.company} website`}
                          >
                            <img
                                src={exp.image}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain p-2"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.parentElement;
                                  if (fallback) {
                                    fallback.className = fallback.className.replace('overflow-hidden', '');
                                    fallback.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg">${exp.company.split(' ')[0].charAt(0)}</div>`;
                                  }
                                }}
                            />
                          </div>
                        </div>

                        {/* Experience Photo */}
                        {exp.experienceImage && (
                            <div className="mb-6">
                              <div className={`w-full h-48 rounded-lg overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                                <img
                                    src={exp.experienceImage}
                                    alt={`${exp.title} at ${exp.company}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                      const fallback = target.parentElement;
                                      if (fallback) {
                                        fallback.innerHTML = `<div class="text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}"><div class="text-4xl mb-2">📸</div><p class="text-sm">Experience Photo</p><p class="text-xs">${exp.company}</p></div>`;
                                      }
                                    }}
                                />
                              </div>
                            </div>
                        )}

                        <ul className="space-y-3 mb-6">
                          {exp.description.map((item, idx) => (
                              <li key={idx} className={`flex items-start text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        {renderTechStack(exp.techStack)}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {isInternship && experiences.length > 2 && (
              <div className="flex justify-center mt-8">
                <button
                    onClick={() => setShowAllInternships(!showAllInternships)}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${darkMode ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-orange-500 hover:bg-orange-600 text-white'} hover:shadow-lg transform hover:scale-105`}
                >
                  {showAllInternships ? (
                      <>
                        <ChevronUp className="w-5 h-5 mr-2" />
                        View Less
                      </>
                  ) : (
                      <>
                        <ChevronDown className="w-5 h-5 mr-2" />
                        View More
                      </>
                  )}
                </button>
              </div>
          )}
        </div>
    );
  };

  return (
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              My Professional Journey
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Professional experiences and formative internships
            </p>
          </div>

          {renderExperienceSection(
              workExperiences,
              "Work Experience",
              <Briefcase className="w-8 h-8 text-blue-600" />,
              "from-blue-600",
              "to-blue-800",
              false
          )}

          {renderExperienceSection(
              internshipExperiences,
              "Internships",
              <GraduationCap className="w-8 h-8 text-orange-600" />,
              "from-orange-600",
              "to-orange-800",
              true
          )}
        </div>
      </section>
  );
};