import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { LocalizationProvider } from "./providers/Localization/index.tsx";

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
