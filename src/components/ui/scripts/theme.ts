type ThemeMode = "light" | "dark";

const KEY = "pref-theme";
const root = document.documentElement;

export function applyTheme(mode: ThemeMode): void {
  if (mode === "light") root.classList.add("theme-light");
  else root.classList.remove("theme-light");
  try {
    localStorage.setItem(KEY, mode);
  } catch {}
}

export function initThemeFromURLOrStorage(): void {
  const params = new URLSearchParams(window.location.search);
  const forced = params.get("theme");

  if (forced === "light" || forced === "dark") {
    applyTheme(forced);
    params.delete("theme");
    if (window.history && window.history.replaceState) {
      const query = params.toString();
      const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${
        window.location.hash
      }`;
      window.history.replaceState({}, "", nextUrl);
    }
    return;
  }

  try {
    const stored = localStorage.getItem(KEY);
    if (stored === "light" || stored === "dark") {
      applyTheme(stored as ThemeMode);
      return;
    }
  } catch {}

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    root.classList.add("theme-light");
  }
}

function syncToggles(): void {
  const toggles = Array.from(
    document.querySelectorAll<HTMLElement>("[data-theme-toggle]")
  );
  const isLight = root.classList.contains("theme-light");
  toggles.forEach((toggle) => {
    toggle.setAttribute("aria-pressed", isLight ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
    const label = toggle.querySelector<HTMLElement>("[data-theme-label]");
    if (label) {
      const nextIcon = isLight
        ? label.dataset.light || "☀︎"
        : label.dataset.dark || "🌙";
      label.textContent = nextIcon;
    }
  });
}

export function setupThemeToggles(): void {
  const toggles = Array.from(
    document.querySelectorAll<HTMLElement>("[data-theme-toggle]")
  );
  if (!toggles.length) return;

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const nextIsLight = !root.classList.contains("theme-light");
      root.classList.toggle("theme-light", nextIsLight);
      try {
        localStorage.setItem(KEY, nextIsLight ? "light" : "dark");
      } catch {}
      syncToggles();
    });
  });

  syncToggles();
}
