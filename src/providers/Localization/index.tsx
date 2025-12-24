import { createContext, useState, type PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";

import en from "./../../lang/en.json";
import fr from "./../../lang/fr.json";
import { getBrowserLocale } from "../../utils/locale";

import {
  getPreferredLanguageFromLS,
  setPreferredLanguageFromLS,
} from "./../../utils/localStorage";

const frLanguage = "fr-FR";
const enLanguage = "en-US";

// eslint-disable-next-line react-refresh/only-export-components
export const availableLanguages = [frLanguage, enLanguage];

type LanguageType = typeof frLanguage | typeof enLanguage;

// eslint-disable-next-line react-refresh/only-export-components
export const defaultLocale = frLanguage;

export type LanguageContextType = {
  locale: LanguageType;
  setLocale(locale: LanguageType): void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | null>(null);

// 1. Check from local storage
// 2. Check from navigator language
// 3. Fallback to FR 🇫🇷
const getLanguage = (): LanguageContextType["locale"] => {
  return (
    (getPreferredLanguageFromLS() as LanguageContextType["locale"] | null) ||
    (getBrowserLocale() === "en-US" ? "en-US" : defaultLocale)
  );
};

const loadMessages = (locale: string): { [key: string]: string } => {
  switch (locale) {
    case "en-US":
      return en;
    default:
      return fr;
  }
};

export const Localization = ({ children }: PropsWithChildren) => {
  const language = getLanguage();
  const [locale, setLocale] = useState<LanguageContextType["locale"]>(language);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale: (l) => {
          setLocale(l);
          setPreferredLanguageFromLS(l);
        },
      }}
    >
      <IntlProvider locale={locale} messages={loadMessages(locale)}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
