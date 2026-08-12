declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>,
      options?: Record<string, unknown>,
    ) => void;
  }
}

function getCookie(name: string): string {
  const m = document.cookie.match(new RegExp(`(?:^|;)\\s*${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : "";
}

function genId(): string {
  return typeof crypto?.randomUUID === "function"
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function sendCapi(payload: {
  event_name: string;
  event_id: string;
  source_url: string;
  fbp: string;
  fbc: string;
}) {
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

export function trackPageView() {
  window.fbq?.("track", "PageView");
}

export function trackLead(contentName: string) {
  const eventId = genId();
  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc");

  // Browser pixel (client-side)
  window.fbq?.("track", "Lead", { content_name: contentName }, { eventID: eventId });

  // CAPI (server-side) — mesmo event_id para deduplicação
  sendCapi({
    event_name: "Lead",
    event_id: eventId,
    source_url: window.location.href,
    fbp,
    fbc,
  });
}

export function isWhatsAppUrl(href?: string) {
  return !!href && href.includes("whatsapp.com");
}
