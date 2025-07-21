import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
    darkMode: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ darkMode }) => {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; name: string; flag: string }[] = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'ar', name: 'العربية', flag: '🇹🇳' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'it', name: 'Italiano', flag: '🇮🇹' }
    ];

    return (
        <div className="relative group">
            <button
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                }`}
            >
                <Globe size={18} />
                <span className="text-lg">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
            </button>

            <div className={`absolute top-full right-0 mt-2 w-48 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-300 first:rounded-t-xl last:rounded-b-xl hover:scale-105 ${
                            language === lang.code
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                : darkMode
                                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                        {language === lang.code && (
                            <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};