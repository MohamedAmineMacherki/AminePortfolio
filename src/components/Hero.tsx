import React from 'react';
import { Download, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import CVFile from '../../public/CV-MOHAMED-Amine - Macherki-2025.pdf';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { t } = useLanguage();

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent('Hello Mohamed Amine,\n\nI found your portfolio and would like to get in touch.\n\nBest regards,');
    window.location.href = `mailto:mohamedamine.macherki@ieee.org?subject=${subject}&body=${body}`;
  };

  return (
      <section id="hero" className={`min-h-screen flex items-center justify-center ${
          darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-orange-50'
      } transition-colors duration-300`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-orange-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <div className="relative">
                      <div className=" rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                        <img
                            src="/Amine-profile-picture.png"
                            alt="Mohamed Amine Macherki"
                            className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white font-bold text-sm">ICT</span>
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center animate-bounce">
                        <span className="text-white font-bold text-xs">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t('hero.title').split(' ').slice(0, 2).join(' ')} <span className="text-blue-600">{t('hero.title').split(' ').slice(2).join(' ')}</span>
            </h1>

            <p className={`text-xl md:text-2xl mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('hero.subtitle')}
            </p>

            <div className={`flex items-center justify-center mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <MapPin className="mr-2" size={18} />
              <span>{t('hero.location')}</span>
            </div>

            <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button
                  onClick={handleEmailClick}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center"
              >
                <Mail className="mr-2" size={18} />
                {t('hero.contact')}
              </button>
              <a
                  href={CVFile}
                  download="CV-Mohamed-Amine-Macherki.pdf"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 flex items-center"
              >
                <Download className="mr-2" size={18} />
                {t('hero.download')}
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <a
                  href="https://github.com/MohamedAmineMacherki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-200 ${
                      darkMode
                          ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                          : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  } shadow-lg hover:shadow-xl`}
              >
                <Github size={24} />
              </a>
              <a
                  href="https://www.linkedin.com/in/mohamed-amine-macherki-b62a65200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-200 ${
                      darkMode
                          ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                          : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  } shadow-lg hover:shadow-xl`}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};