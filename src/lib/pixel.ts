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

// A LP tem 5 botões de WhatsApp (header, hero, seção da avaliação, fechamento
// e barra fixa). Sem trava, a mesma pessoa dispara 3 ou 4 eventos Lead e o
// Gerenciador mostra 4 leads para 1 conversa no Kommo. Só o primeiro clique
// da sessão vira Lead no Meta.
const LEAD_SESSION_KEY = "ramonie_lead_enviado";

function leadJaEnviado(): boolean {
  try {
    return sessionStorage.getItem(LEAD_SESSION_KEY) === "1";
  } catch {
    return false; // aba anônima sem storage: melhor contar do que perder
  }
}

function marcarLeadEnviado() {
  try {
    sessionStorage.setItem(LEAD_SESSION_KEY, "1");
  } catch {
    /* segue sem dedup */
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
    keepalive: true, // sobrevive à troca para o app do WhatsApp no celular
  }).catch(() => {});
}

export function trackPageView() {
  window.fbq?.("track", "PageView");
}

/**
 * Dispara Lead no Meta uma única vez por sessão.
 * O GA4 continua registrando todos os cliques (chamada separada no Cta),
 * então o dado de quantos botões a pessoa tocou não se perde.
 */
export function trackLead(contentName: string) {
  if (leadJaEnviado()) return;
  marcarLeadEnviado();

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
