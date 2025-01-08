import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import spanish from "../language/spanish.json";
import russian from "../language/russain.json";
import english from "../language/english.json";

// Mapping of available translations
const translations = {
  spanish,
  russian,
  english,
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const language = useSelector((state) => state.language.language); // Get selected language from redux
  const [currentTranslations, setCurrentTranslations] = useState(
    translations[language]
  );

  useEffect(() => {
    // When the language changes, update the current translations
    if (translations[language]) {
      setCurrentTranslations(translations[language]);
    }
  }, [language]);

  return (
    <TranslationContext.Provider value={currentTranslations}>
      {children}
    </TranslationContext.Provider>
  );
};

// Hook to access translation data
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
