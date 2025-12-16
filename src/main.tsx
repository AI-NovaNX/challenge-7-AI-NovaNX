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
import { preloadDefaultFeedbackIcons } from "./components/ui/scripts/iconCache.ts";

// Initialize page scripts
initThemeFromURLOrStorage();
// attach once now (in case toggles already exist) and again after React renders
setupThemeToggles();
setupTestimonials();
setupIndustryDrawer();
preloadDefaultFeedbackIcons();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Ensure toggles bind after React mounts header components
if (typeof requestAnimationFrame === "function") {
  requestAnimationFrame(() => setupThemeToggles());
  requestAnimationFrame(() => setupIndustryDrawer());
  requestAnimationFrame(() => setupTestimonials());
} else {
  setTimeout(() => setupThemeToggles(), 0);
  setTimeout(() => setupIndustryDrawer(), 0);
  setTimeout(() => setupTestimonials(), 0);
}
