import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import Certifications from './Certifications';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: "National Engineering Diploma",
      field: "Telecommunications and Computer Science",
      institution: "National School of Electronics and Telecommunications of Sfax",
      shortName: "ENET'COM",
      period: "2020 - 2023",
      graduation: "11/2023",
      location: "Sfax, Tunisia",
      mention: "Very Good Distinction",
      description: "Engineering training specialized in telecommunications and computer systems with a focus on technological innovation and applied research.",
      color: "from-blue-600 to-blue-700",
      logo: "/logo/enetcomm.jpg",
      photo: "/study/graduation.jpg",
      website: "https://enetcom.rnu.tn/fr",
      alt: "ENET'COM Campus"
    },
    {
      degree: "Undergraduate Degree",
      field: "Pre-engineering (Mathematics and Physics)",
      institution: "Preparatory Institute for Engineering Studies of Monastir",
      shortName: "IPEIM",
      period: "2018 - 2020",
      graduation: "06/2020",
      location: "Monastir, Tunisia",
      mention: "Good Distinction",
      description: "Preparatory classes for 'grandes écoles' of engineering with in-depth training in mathematics, physics, and fundamental sciences.",
      color: "from-orange-600 to-orange-700",
      logo: "/logo/logo-ipeim.jpeg",
      photo: "/study/ipeim.jpeg",
      website: "https://ipeim.rnu.tn/",
      alt: "IPEIM Campus"
    },
    {
      degree: "Baccalaureate",
      field: "Mathematics - Physics",
      institution: "Ksour Essef High School",
      shortName: "Ksour Essef High School",
      period: "2014 - 2018",
      graduation: "06/2018",
      location: "Ksour Essef, Mahdia, Tunisia",
      mention: "Very Good Distinction",
      description: "Secondary education focused on scientific disciplines with a specialization in mathematics and physics, developing strong foundations for engineering studies.",
      color: "from-blue-600 to-blue-700",
      logo: "/logo/lycé.jpeg",
      photo: "/study/lycee.jpg",
      website: "",
      alt: "Ksour Essef High School"
    }
  ];

  return (
      <section id="education" className={`py-20 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education & Certifications
            </h2>
            <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My academic journey and professional certifications
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="space-y-8">
              {education.map((edu, index) => (
                  <div
                      key={index}
                      className={`p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl ${
                          darkMode
                              ? 'bg-gray-800 border border-gray-700'
                              : 'bg-white border border-gray-100'
                      }`}
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Photo Section */}
                      <div className="lg:w-1/3">
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                              src={edu.photo}
                              alt={edu.alt}
                              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-2/3">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center mb-3">
                              <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} text-white mr-4`}>
                                <GraduationCap className="w-6 h-6" />
                              </div>
                              <div>
                                <h3 className={`text-2xl font-bold ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {edu.degree}
                                </h3>
                                <p className={`text-lg ${
                                    darkMode ? 'text-blue-400' : 'text-blue-600'
                                }`}>
                                  {edu.field}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                              {edu.period}
                            </span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                              {edu.location}
                            </span>
                              </div>
                              <div className="flex items-center">
                                <Award className="w-4 h-4 mr-2 text-orange-600" />
                                <span className="text-orange-600 font-semibold">
                              {edu.mention}
                            </span>
                              </div>
                            </div>

                            {/* Institution with Logo */}
                            <div className="flex items-center mb-4">
                              <a
                                  href={edu.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center group transition-all duration-300 hover:scale-105"
                              >
                                <div className={`p-2 rounded-lg mr-3 transition-all duration-300 ${
                                    darkMode
                                        ? 'bg-gray-700 group-hover:bg-gray-600'
                                        : 'bg-gray-100 group-hover:bg-gray-200'
                                }`}>
                                  <img
                                      src={edu.logo}
                                      alt={`${edu.shortName} logo`}
                                      className="w-8 h-8 object-contain"
                                  />
                                </div>
                                <div>
                                  <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                                      darkMode
                                          ? 'text-gray-200 group-hover:text-blue-400'
                                          : 'text-gray-800 group-hover:text-blue-600'
                                  }`}>
                                    {edu.institution}
                                  </h4>
                                  <span className={`text-sm flex items-center ${
                                      darkMode ? 'text-gray-400' : 'text-gray-600'
                                  }`}>
                                {edu.shortName}
                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </span>
                                </div>
                              </a>
                            </div>

                            <p className={`text-sm leading-relaxed ${
                                darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {edu.description}
                            </p>
                          </div>

                          <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                            {edu.graduation.split('/')[1]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <Certifications />
          </div>
        </div>
      </section>
  );
};