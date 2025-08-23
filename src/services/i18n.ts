import type { Language, Translation } from "@/types";

// Import translations
import enTranslations from "@/locales/en/translations.json";
import nlTranslations from "@/locales/nl/translations.json";

const translations: Record<Language, Translation> = {
  en: enTranslations,
  nl: nlTranslations,
};

class I18nService {
  private currentLanguage: Language = "en";

  setLanguage(language: Language) {
    this.currentLanguage = language;
  }

  getLanguage(): Language {
    return this.currentLanguage;
  }

  t(key: string): string {
    const keys = key.split(".");
    let value: any = translations[this.currentLanguage];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = this.getFallbackTranslation(key);
        break;
      }
    }

    return typeof value === "string" ? value : key;
  }

  private getFallbackTranslation(key: string): string {
    const keys = key.split(".");
    let value: any = translations.en;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  }

  // Helper method to get nested translations
  getNestedTranslation(path: string): any {
    const keys = path.split(".");
    let value: any = translations[this.currentLanguage];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }

    return value;
  }
}

export const i18n = new I18nService();
