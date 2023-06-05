import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, handleLanguageChange }}>
        {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { selectedLanguage, handleLanguageChange } = useContext(LanguageContext);
  return [selectedLanguage, handleLanguageChange];
};

export default LanguageContext;
