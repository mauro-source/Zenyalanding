import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Detecta idioma do navegador ou usa português como padrão
  const getInitialLanguage = () => {
    const stored = localStorage.getItem('zenya-language');
    if (stored) return stored;
    
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['pt', 'fr', 'nl', 'en'];
    return supportedLangs.includes(browserLang) ? browserLang : 'pt';
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('zenya-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
