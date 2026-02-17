import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { LocalizationProvider } from "./providers/Localization/index.tsx";

window.addEventListener("pageshow", () => {
  const nav = performance.getEntriesByType(
    "navigation"
  )[0] as PerformanceNavigationTiming;

  if (nav && nav.type === "back_forward") {
    window.location.replace(window.location.href);
  }
});

const root = document.getElementById("root")!;

createRoot(root).render(
  <LocalizationProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </LocalizationProvider>
);
