import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { AnimatedLogo } from './AnimatedLogo';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'hero', label: t('nav.home'), path: '/' },
    { id: 'about', label: t('nav.about'), path: '/about' },
    { id: 'experience', label: t('nav.experience'), path: '/experience' },
    { id: 'skills', label: t('nav.skills'), path: '/skills' },
    { id: 'education', label: t('nav.education'), path: '/education' },
    { id: 'projects', label: t('nav.projects'), path: '/projects' },
    { id: 'achievements', label: t('nav.achievements'), path: '/achievements' },
    { id: 'contact', label: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || darkMode
              ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-xl'
              : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <AnimatedLogo size="md" darkMode={darkMode || scrolled} />
              <span className={`hidden sm:block font-bold text-lg transition-all duration-300 group-hover:text-blue-500 ${
                  darkMode || scrolled ? 'text-white' : 'text-gray-900'
              }`}>
                Med Amine Macherki
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                  <Link
                      key={item.id}
                      to={item.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                          isActive(item.path)
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                              : darkMode || scrolled
                                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                      }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    )}
                    {!isActive(item.path) && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
                    )}
                  </Link>
              ))}

              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-300 dark:border-gray-600">
                <LanguageSelector darkMode={darkMode || scrolled} />
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 relative group ${
                        darkMode || scrolled
                            ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                    }`}
                    aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                      <Sun className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                  ) : (
                      <Moon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  )}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/20 group-hover:to-orange-400/20 transition-all duration-300"></div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center space-x-2 md:hidden">
              <LanguageSelector darkMode={darkMode || scrolled} />
              <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode || scrolled
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                  }`}
                  aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode || scrolled
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                  }`}
                  aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className={`border-t ${
                darkMode || scrolled ? 'border-gray-700 bg-gray-900/95' : 'border-gray-200 bg-white/95'
            } backdrop-blur-md`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                            isActive(item.path)
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : darkMode || scrolled
                                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                        }`}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                    >
                      {item.label}
                    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};