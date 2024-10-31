import { create } from "zustand";

interface LanguageStore {
  language: "ky" | "ru";
  setLanguage: (language: "ky" | "ru") => void;
  translate: (ky: string, ru: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "ru",
  setLanguage: (language: "ky" | "ru") => set({ language }),
  translate: (ky: string, ru: string) => {
    const blablaLanguage = get().language;
    if (blablaLanguage === "ky") return ky;
    return ru;
  },
}));
