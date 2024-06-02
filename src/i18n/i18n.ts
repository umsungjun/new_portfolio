import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import transEn from "../data/locales/en-US/translation.json";
import transKo from "../data/locales/ko-KR/translation.json";

const resources = {
  ko: { translation: transKo },
  en: { translation: transEn },
};

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: sessionStorage.getItem("language") || "ko",
  fallbackLng: "ko",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
