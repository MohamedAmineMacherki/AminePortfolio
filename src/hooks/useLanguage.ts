import { useState, useEffect } from 'react';
import { translations } from '../../../../project-bolt-sb1-bbnc7h3v/project/src/data/translations';

export type LanguageCode = 'fr' | 'en' | 'it' | 'es';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as LanguageCode;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: LanguageCode) => {
    setCurrentLanguage(language);
    localStorage.setItem('portfolio-language', language);
  };

  const t = translations[currentLanguage];

  return { currentLanguage, changeLanguage, t };
};