export function setupIndustryDrawer(): void {
  const drawer = document.getElementById("industry-drawer");
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("[data-industry-link]")
  );
  if (!drawer || !links.length) return;

  const panels = Array.from(
    drawer.querySelectorAll<HTMLElement>("[data-industry]")
  );
  if (!panels.length) return;

  const showPanel = (id: string) => {
    drawer.classList.remove("hidden");
    panels.forEach((panel) => {
      const isMatch = panel.dataset.industry === id;
      panel.classList.toggle("hidden", !isMatch);
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = link.getAttribute("href")?.slice(1);
      if (!target) return;
      event.preventDefault();
      showPanel(target);
      drawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  const initialHash = window.location.hash.slice(1);
  if (initialHash) {
    const panelExists = panels.some(
      (panel) => panel.dataset.industry === initialHash
    );
    if (panelExists) showPanel(initialHash);
  }
}
