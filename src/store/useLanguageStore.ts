import { create } from "zustand";
import { persist } from "zustand/middleware";
import i18n from "../i18n/i18n";

type UseLanguageStore = {
  language: string;
  toggleLanguage: () => void;
};

export const useLanguageStore = create<UseLanguageStore>()(
  persist(
    (set, get) => ({
      language: "ko",
      toggleLanguage: () => {
        /* i18n 설정 언어 변경 */
        i18n.changeLanguage(get().language === "ko" ? "en" : "ko");
        set(() => ({
          language: get().language === "ko" ? "en" : "ko",
        }));
      },
    }),
    {
      name: "language-storage",
    }
  )
);
