import { translations } from "../i18n/translations"
import { useLanguage } from "../context/useLanguage"

export function useTranslation() {
  const { lang } = useLanguage()
  return translations[lang]
}