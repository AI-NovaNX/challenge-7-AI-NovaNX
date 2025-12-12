interface Slide {
  quote: string;
  name: string;
  role: string;
}

const slides: Slide[] = [
  {
    quote:
      "“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
  },
  {
    quote:
      "“AI-NovaNX helped us modernize a legacy platform in record time. The collaboration felt seamless from strategy to deployment.”",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
  },
  {
    quote:
      "“Their proactive support and ability to anticipate risks kept our launch on schedule. It’s rare to find a partner this committed.”",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
  },
];

export function setupTestimonials(): void {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-testimonials]")
  );
  if (!sections.length) return;

  sections.forEach((section) => {
    const quoteEl = section.querySelector<HTMLElement>("[data-quote-target]");
    const nameEl = section.querySelector<HTMLElement>("[data-name-target]");
    const roleEl = section.querySelector<HTMLElement>("[data-role-target]");
    const dots = Array.from(
      section.querySelectorAll<HTMLElement>("[data-dot]")
    );
    if (!quoteEl || !nameEl || !roleEl || dots.length === 0) return;

    const setSlide = (index: number) => {
      const slide = slides[index];
      if (!slide) return;
      quoteEl.textContent = slide.quote;
      nameEl.textContent = slide.name;
      roleEl.textContent = slide.role;
      dots.forEach((dot, i) => {
        const isActive = i === index;
        dot.dataset.active = isActive ? "true" : "false";
        dot.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    };

    const initialIndex = dots.findIndex((dot) => dot.dataset.active === "true");
    setSlide(initialIndex >= 0 ? initialIndex : 0);

    dots.forEach((dot, index) => {
      const activate = () => setSlide(index);
      dot.addEventListener("click", activate);
      dot.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate();
        }
      });
    });
  });
}
