import { useState, useEffect } from 'react';

export type LanguageCode = 'fr' | 'en' | 'it' | 'es';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as LanguageCode;
  }, []);

  const changeLanguage = (language: LanguageCode) => {
    setCurrentLanguage(language);
    localStorage.setItem('portfolio-language', language);
  };

};