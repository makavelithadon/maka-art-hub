import { useContext } from "react";
import {
  LanguageContext,
  type LanguageContextType,
} from "../providers/Localization";

export const LangSwitcher = () => {
  const { locale, setLocale } = useContext(
    LanguageContext
  ) as LanguageContextType;

  return (
    <div className="lang-switcher">
      <svg
        id="fr"
        data-value="fr-FR"
        onClick={() => setLocale("fr-FR")}
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 512 420.16"
        className={`lang-switcher-item${locale === "fr-FR" ? " active" : ""}`}
      >
        <path
          fill-rule="nonzero"
          d="M74.32 0h363.36C478.55 0 512 33.46 512 74.32v271.53c0 40.81-33.5 74.31-74.32 74.31H74.32C33.44 420.16 0 386.69 0 345.85V74.32C0 33.41 33.41 0 74.32 0zm295 278.35h-48.05l-17.92-40.63h-9.39v40.63h-43.69V141.81h68.81c31.31 0 46.97 15.96 46.97 47.85 0 21.84-6.77 36.26-20.32 43.25l23.59 45.44zm-75.36-101.58v27.3h10.05c5.24 0 9.06-.54 11.46-1.63 2.41-1.09 3.61-3.61 3.61-7.54v-8.96c0-3.93-1.2-6.44-3.61-7.53-2.4-1.09-6.22-1.64-11.46-1.64h-10.05zm-70.46 50.9h-37.13v50.68h-43.7V141.81h89.57l-5.46 34.96h-40.41v18.35h37.13v32.55zM437.68 35.93H74.32c-21.08 0-38.39 17.31-38.39 38.39v271.53c0 21.1 17.25 38.39 38.39 38.39h363.36c21.16 0 38.39-17.24 38.39-38.39V74.32c0-21.09-17.29-38.39-38.39-38.39z"
        />
      </svg>
      <svg
        id="en"
        data-value="en-US"
        onClick={() => setLocale("en-US")}
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 512 420.16"
        className={`lang-switcher-item${locale === "en-US" ? " active" : ""}`}
      >
        <path
          fill-rule="nonzero"
          d="M74.32 0h363.36C478.55 0 512 33.46 512 74.32v271.53c0 40.81-33.5 74.31-74.32 74.31H74.32C33.44 420.16 0 386.69 0 345.85V74.32C0 33.41 33.41 0 74.32 0zm148.91 226.79h-43.69v16.61h53.53v34.95h-97.22V141.81h96.12l-5.46 34.96h-46.97v18.35h43.69v31.67zm111.85 51.56c-3.99-5.79-36.19-58.98-36.48-58.98v58.98h-43.69V141.81h41.06c3.94 5.72 35.42 58.99 36.49 58.99v-58.99h43.69v136.54h-41.07zm102.6-242.42H74.32c-21.08 0-38.39 17.31-38.39 38.39v271.53c0 21.1 17.25 38.39 38.39 38.39h363.36c21.16 0 38.39-17.24 38.39-38.39V74.32c0-21.09-17.29-38.39-38.39-38.39z"
        />
      </svg>
    </div>
  );
};
