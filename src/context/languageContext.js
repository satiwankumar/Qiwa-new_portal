// LanguageContext.js
/* eslint-disable */
import { setDirection } from "context";
import i18n from "hooks/useLocale/useLocale";
import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem("selectedLanguage") || "en");

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("selectedLanguage", newLang); // Store selected language
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");

    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
