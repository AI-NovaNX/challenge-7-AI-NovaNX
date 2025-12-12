import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  initThemeFromURLOrStorage,
  setupThemeToggles,
} from "./components/ui/scripts/theme.ts";
import { setupTestimonials } from "./components/ui/scripts/testimonials.ts";
import { setupIndustryDrawer } from "./components/ui/scripts/industryDrawer.ts";

// Initialize page scripts
initThemeFromURLOrStorage();
setupThemeToggles();
setupTestimonials();
setupIndustryDrawer();

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
