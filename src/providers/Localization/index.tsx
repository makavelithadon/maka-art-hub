import { createContext, useState, type PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";

import { en } from "../../lang/en";
import { fr } from "../../lang/fr";
import { getBrowserLocale } from "../../utils/locale";

import {
  getPreferredLanguageFromLS,
  setPreferredLanguageFromLS,
} from "./../../utils/localStorage";
import type { Translation } from "../../lang";

const frLanguage = "fr-FR";
const enLanguage = "en-US";

type LanguageType = typeof frLanguage | typeof enLanguage;

// eslint-disable-next-line react-refresh/only-export-components
export const availableLanguages = [frLanguage, enLanguage];

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
const initLanguage = (): LanguageContextType["locale"] => {
  const localeFromLS = getPreferredLanguageFromLS() as
    | LanguageContextType["locale"]
    | null;
  const localeFromBrowser = getBrowserLocale();

  return (
    localeFromLS ||
    (availableLanguages.includes(localeFromBrowser)
      ? (localeFromBrowser as LanguageContextType["locale"])
      : frLanguage)
  );
};

const loadMessages = (locale: string): Record<Translation, string> => {
  switch (locale) {
    case "en-US":
      return en;
    default:
      return fr;
  }
};

export const LocalizationProvider = ({ children }: PropsWithChildren) => {
  const language = initLanguage();
  const [locale, setLocale] = useState<LanguageContextType["locale"]>(language);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale: (locale) => {
          setLocale(locale);
          setPreferredLanguageFromLS(locale);
        },
      }}
    >
      <IntlProvider locale={locale} messages={loadMessages(locale)}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
