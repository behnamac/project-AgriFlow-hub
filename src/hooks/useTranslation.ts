import { useCallback, useMemo } from "react";
import { useApp } from "@/contexts/AppContext";
import { i18n } from "@/services/i18n";

export const useTranslation = () => {
  const { language } = useApp();

  // Create a memoized translation function that depends on language
  const t = useMemo(() => {
    return (key: string): string => {
      // Ensure i18n service is using the current language
      if (i18n.getLanguage() !== language) {
        i18n.setLanguage(language);
      }
      return i18n.t(key);
    };
  }, [language]);

  const getNestedTranslation = useMemo(() => {
    return (path: string): any => {
      // Ensure i18n service is using the current language
      if (i18n.getLanguage() !== language) {
        i18n.setLanguage(language);
      }
      return i18n.getNestedTranslation(path);
    };
  }, [language]);

  return {
    t,
    getNestedTranslation,
    language,
  };
};
