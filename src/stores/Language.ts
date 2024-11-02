import { create } from "zustand";

interface LanguageStore {
  language: "ru" | "ky";
  setLanguage: (language: "ru" | "ky") => void;
  translate: (ky: string, ru: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "ru",
  setLanguage: (language: "ru" | "ky") => set({ language }),
  translate: (ky: string, ru: string) => {
    const blablaLanguage = get().language;
    if (blablaLanguage === "ky") return ky;
    return ru;
  },
}));
