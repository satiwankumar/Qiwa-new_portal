import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("../../translations/locale/en.json"),
    },
    ar: {
      translation: require("../../translations/locale/ar.json"),
    },
  },
  lng: localStorage.getItem("selectedLanguage") || "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
