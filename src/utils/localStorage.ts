const preferredLanguageKey = "makaArtHubPreferredLanguage";

export const getKey = (key: string) => window.localStorage.getItem(key);

export const setKey = (key: string, value: string) => window.localStorage.setItem(key, value);

export const getPreferredLanguageFromLS = () => getKey(preferredLanguageKey);

export const setPreferredLanguageFromLS = (value: string) => setKey(preferredLanguageKey, value);
