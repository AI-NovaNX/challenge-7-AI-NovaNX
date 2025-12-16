const cache = new Map<string, string>();

export async function preloadIcon(url: string): Promise<void> {
  if (cache.has(url)) return;
  try {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) return;
    const text = await res.text();
    cache.set(url, text);
  } catch {
    // Ignore network errors; fallback to <img>
  }
}

export function getIcon(url: string): string | undefined {
  return cache.get(url);
}

export function preloadDefaultFeedbackIcons(): void {
  // Fire-and-forget preloads
  preloadIcon("/Assets/MessageFailed.svg");
  preloadIcon("/Assets/MobileMessageFailed.svg");
  preloadIcon("/Assets/Message.svg");
  preloadIcon("/Assets/MobileMessage.svg");
}
