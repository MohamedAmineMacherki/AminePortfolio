import React from 'react';
import { Code, Users, Target, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: t('about.fullstack'),
      description: t('about.fullstack.desc')
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: t('about.leadership'),
      description: t('about.leadership.desc')
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: t('about.innovation'),
      description: t('about.innovation.desc')
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: t('about.research'),
      description: t('about.research.desc')
    }
  ];

  return (
      <section id="about" className={`py-20 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t('about.title')}
            </h2>
            <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-600 flex items-center justify-center">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                        src="../../public/study/inov day.jpeg"
                        alt="Mohamed Amine Macherki"
                        className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('about.description1')}
              </p>

              <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('about.description2')}
              </p>

              <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t('about.description3')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
                <div
                    key={index}
                    className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                        darkMode
                            ? 'bg-gray-900 border border-gray-700'
                            : 'bg-white border border-gray-100'
                    }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-900/20 dark:to-orange-900/20">
                      {item.icon}
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};