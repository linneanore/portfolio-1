import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/lib/translations";

type Language = "en" | "sv";

type T = (typeof translations)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: T;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

function getInitialLanguage(): Language {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "sv") return saved;

  const browser = navigator.language?.toLowerCase() ?? "";
  if (browser.startsWith("sv")) return "sv";
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);