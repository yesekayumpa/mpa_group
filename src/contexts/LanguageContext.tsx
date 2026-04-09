import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Hook personnalisé pour accéder au contexte de langue
 * @returns Objet contenant la langue actuelle, la fonction pour la changer et les traductions
 * @throws Erreur si utilisé hors du LanguageProvider
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Composant fournisseur pour le contexte de langue
 * @param children - Composants enfants qui auront accès au contexte
 * @returns Provider React avec les valeurs de langue
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
