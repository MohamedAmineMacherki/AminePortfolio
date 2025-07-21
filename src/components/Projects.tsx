import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Brain, Globe, Database, Cloud, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "Disco Microservices Platform",
      description: "A microservices and microfrontend platform for Orange, laureate of DTW23. It integrates 5 open-source components for prepaid mobile offers according to TMF standards.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Spring Boot", "Kafka", "OpenShift", "Docker"],
      category: "Enterprise",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      githubLink: "https://github.com/MohamedAmineMacherki/disco-microservices-platform",
      externalLink: "https://disco-microservices-platform.netlify.app"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Spring Boot backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Spring Boot", "PostgreSQL", "JWT", "Stripe API"],
      category: "Web",
      icon: <Globe className="w-6 h-6" />,
      color: "from-emerald-600 to-emerald-700",
      githubLink: "https://github.com/MohamedAmineMacherki/ecommerce-platform.git",
      externalLink: "https://advanced-ecommerce-platform.netlify.app"
    },
    {
      title: "DevOps CI/CD Pipeline Platform",
      description: "Enterprise-grade DevOps platform with automated CI/CD pipelines, container orchestration, monitoring, and infrastructure as code. Built with microservices architecture.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus"],
      category: "DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-600 to-orange-700",
      githubLink: "https://github.com/MohamedAmineMacherki/devops-cicd-platform",
      externalLink: "https://devops-cicd-platform.netlify.app"
    },
    {
      title: "Blockchain DeFi Trading Platform",
      description: "Decentralized finance platform with smart contracts, yield farming, liquidity pools, and automated market making. Features real-time trading and portfolio management.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum", "IPFS", "Node.js", "MongoDB"],
      category: "Blockchain",
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-600 to-purple-700",
      githubLink: "https://github.com/MohamedAmineMacherki/defi-trading-platform",
      externalLink: "https://defi-trading-platform.netlify.app"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with machine learning models, real-time data processing, predictive analytics, and interactive visualizations. Supports multiple data sources.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "TensorFlow", "Apache Kafka", "Redis", "PostgreSQL", "D3.js"],
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      color: "from-cyan-600 to-cyan-700",
      githubLink: "https://github.com/MohamedAmineMacherki/ai-analytics-dashboard",
      externalLink: "https://ai-analytics-dashboard.netlify.app"
    },
    {
      title: "Cloud-Native Monitoring System",
      description: "Comprehensive monitoring and observability platform for cloud-native applications. Features distributed tracing, metrics collection, alerting, and performance optimization.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Go", "Prometheus", "Grafana", "Jaeger", "Kubernetes", "Elasticsearch"],
      category: "Cloud",
      icon: <Zap className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-700",
      githubLink: "https://github.com/MohamedAmineMacherki/cloud-monitoring-system",
      externalLink: "https://cloud-monitoring-system.netlify.app"
    },
    {
      title: "Task Management System",
      description: "Angular-based project management application with real-time collaboration features. Built with Spring Boot REST API and WebSocket for live updates.",
      image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Angular", "Spring Boot", "WebSocket", "MongoDB", "TypeScript"],
      category: "Web",
      icon: <Code className="w-6 h-6" />,
      color: "from-red-600 to-red-700",
      githubLink: "https://github.com/MohamedAmineMacherki/task-management-system.git",
      externalLink: "https://advanced-task-management.netlify.app"
    },
    {
      title: "Microservices Event-Driven Architecture",
      description: "Scalable microservices platform with event sourcing, CQRS pattern, distributed caching, and API gateway. Implements domain-driven design principles.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Istio"],
      category: "Architecture",
      icon: <Database className="w-6 h-6" />,
      color: "from-teal-600 to-teal-700",
      githubLink: "https://github.com/MohamedAmineMacherki/microservices-event-driven",
      externalLink: "https://microservices-architecture-demo.netlify.app"
    },
    {
      title: "Social Media Dashboard",
      description: "React-based social media analytics dashboard with Spring Boot microservices architecture. Provides real-time insights and data visualization.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Spring Boot", "Redis", "Chart.js", "Docker"],
      category: "Web",
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-600 to-cyan-700",
      githubLink: "https://github.com/MohamedAmineMacherki/social-media-dashboard.git",
      externalLink: "https://social-media-analytics-dashboard.netlify.app"
    },
    {
      title: "Real-Time IoT Data Platform",
      description: "IoT data processing platform with real-time streaming, device management, edge computing, and predictive maintenance. Handles millions of sensor data points.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Apache Kafka", "InfluxDB", "MQTT", "Docker", "Kubernetes"],
      category: "IoT",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-600 to-green-700",
      githubLink: "https://github.com/MohamedAmineMacherki/iot-data-platform",
      externalLink: "https://iot-data-platform.netlify.app"
    },
    {
      title: "VR Medical Education Platform",
      description: "An innovative solution combining VR, smart contracts, and Rental NFTs with an AI virtual professor using NLP and ML for medical education in the Metaverse.",
      image: "public/VR.jpeg",
      technologies: ["Unity", "Oculus Quest", "Blockchain", "AI/ML", "NLP"],
      category: "Innovation",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-600 to-purple-700",
      githubLink: "https://github.com/MohamedAmineMacherki/vr-medical-education",
      externalLink: "https://vr-medical-education.netlify.app"
    },
    {
      title: "MetaSports AR Application",
      description: "A multiplayer mixed reality application for MetaSports with AI integration for real-time interactions and full HoloLens 2 compatibility.",
      image: "https://images.pexels.com/photos/7862481/pexels-photo-7862481.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HoloLens 2", "Unity", "Mixed Reality", "AI", "C#"],
      category: "AR/VR",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-600 to-green-700",
      githubLink: "https://github.com/MohamedAmineMacherki/metasports-ar",
      externalLink: "https://metasports-ar-demo.netlify.app"
    }
  ];

  const categories = ["All", "Enterprise", "Web", "DevOps", "Blockchain", "AI/ML", "Cloud", "Architecture", "IoT", "Innovation", "AR/VR"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All"
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
      <section id="projects" className={`py-20 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Projects & Achievements
            </h2>
            <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore my most significant projects with advanced architectures
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category
                            ? 'bg-blue-600 text-white shadow-lg'
                            : darkMode
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl ${
                        darkMode
                            ? 'bg-gray-900 border border-gray-700'
                            : 'bg-white border border-gray-100'
                    }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      darkMode
                          ? 'bg-gray-800/80 text-gray-200'
                          : 'bg-white/80 text-gray-700'
                  }`}>
                    {project.category}
                  </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm mb-4 leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                          <span
                              key={techIndex}
                              className={`px-3 py-1 text-xs rounded-full ${
                                  darkMode
                                      ? 'bg-gray-700 text-gray-300'
                                      : 'bg-gray-100 text-gray-700'
                              }`}
                          >
                      {tech}
                    </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        {project.githubLink && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                                className={`p-2 rounded-lg transition-colors duration-200 ${
                                    darkMode
                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                              <Github size={16} />
                            </motion.a>
                        )}
                        {project.externalLink && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                href={project.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} live`}
                                className={`p-2 rounded-lg transition-colors duration-200 ${
                                    darkMode
                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                              <ExternalLink size={16} />
                            </motion.a>
                        )}
                      </div>
                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r ${project.color} text-white hover:shadow-lg transition-all duration-200`}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};