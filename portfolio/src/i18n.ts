import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationFR from "./locales/fr/translation.json";
import translationGB from "./locales/gb/translation.json";

const resources = {
  fr: {
    translation: translationFR,
  },
  gb: {
    translation: translationGB,
  },
};

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    keySeparator: ".",
    interpolation: {
      escapeValue: false, 
    },
  });
    

export default i18n;
