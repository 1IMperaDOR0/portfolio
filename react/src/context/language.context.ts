import { createContext } from "react"

export type Language = "EN" | "PT"

export interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextType | null>(null)