import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import transEn from "../data/locales/en-US/translation.json";
import transKo from "../data/locales/ko-KR/translation.json";

const resources = {
  ko: { translation: transKo },
  en: { translation: transEn },
};

// localStorage에서 language-storage 값을 통해서 초기 언어 설정
const storedLanguage = localStorage.getItem("language-storage");
const initialLanguage = storedLanguage
  ? JSON.parse(storedLanguage).state.language
  : "ko";

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: initialLanguage,
  fallbackLng: "ko",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
