import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // auto detect language
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // default language
    debug: true,
    interpolation: { escapeValue: false }, // React me XSS prevent
    backend: { loadPath: "/locales/{{lng}}/translation.json" }
  });



export default i18n;



