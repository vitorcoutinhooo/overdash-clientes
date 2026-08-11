declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export function trackPageView() {
  window.fbq?.("track", "PageView");
}

export function trackLead(contentName: string) {
  window.fbq?.("track", "Lead", { content_name: contentName });
}

export function isWhatsAppUrl(href?: string) {
  return !!href && href.includes("whatsapp.com");
}
