import { useCallback } from "react";
import { useApp } from "@/contexts/AppContext";
import { i18n } from "@/services/i18n";

export const useTranslation = () => {
  const { language } = useApp();

  const t = useCallback((key: string): string => {
    return i18n.t(key);
  }, [language]);

  const getNestedTranslation = useCallback((path: string): any => {
    return i18n.getNestedTranslation(path);
  }, [language]);

  return {
    t,
    getNestedTranslation,
    language,
  };
};
