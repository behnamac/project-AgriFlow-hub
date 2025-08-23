import React, { createContext, useContext, useEffect, useState } from "react";
import type { Theme, Language, AppContextType } from "@/types";
import { DEFAULT_LANGUAGE, DEFAULT_THEME } from "@/constants";
import { i18n } from "@/services/i18n";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    
    return DEFAULT_THEME;
  });

  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Check browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "nl") {
      return "nl";
    }
    
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");
    
    // Add current theme class
    root.classList.add(theme);
    
    // Set data-theme attribute for DaisyUI
    root.setAttribute("data-theme", theme);
    
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Set language in i18n service
    i18n.setLanguage(language);
    
    // Save to localStorage
    localStorage.setItem("language", language);
    
    // Force a re-render by updating the document title (this is a simple way to trigger re-renders)
    document.title = `AgriFlow Document Hub - ${language.toUpperCase()}`;
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        language,
        toggleTheme,
        setLanguage: handleSetLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
