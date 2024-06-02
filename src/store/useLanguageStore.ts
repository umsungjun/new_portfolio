import { create } from "zustand";

type UseLanguageStore = {
  language: string;
  toggleLanguage: () => void;
};

export const useLanguageStore = create<UseLanguageStore>((set) => ({
  language: sessionStorage.getItem("language") || "ko",
  toggleLanguage: () =>
    set((state) => ({ language: state.language === "ko" ? "en" : "ko" })),
}));
