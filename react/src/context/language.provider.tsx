import { useState } from "react"
import type { ReactNode } from "react"
import { LanguageContext } from "./language.context"

export type Language = "EN" | "PT"

export interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("EN")

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}