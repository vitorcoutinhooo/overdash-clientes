declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Adiciona o GA4 Measurement ID de cada cliente aqui.
// Quando criar uma nova página, basta adicionar a rota e o ID novo.
const ROUTE_GA4: Record<string, string> = {
  "/rubianaramos": "G-37D2E8Y6G2",
  "/rubianaramos-bio": "G-37D2E8Y6G2",
};

function getMeasurementId(pathname: string): string | undefined {
  for (const [prefix, id] of Object.entries(ROUTE_GA4)) {
    if (pathname.startsWith(prefix)) return id;
  }
}

export function ga4PageView(pathname: string) {
  const id = getMeasurementId(pathname);
  if (!id) return;
  window.gtag?.("config", id, { page_path: pathname });
}

export function ga4Lead(contentName: string, pathname: string) {
  const id = getMeasurementId(pathname);
  if (!id) return;
  window.gtag?.("event", "generate_lead", {
    send_to: id,
    event_category: "engagement",
    event_label: contentName,
  });
}
