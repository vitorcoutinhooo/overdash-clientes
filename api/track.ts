import type { VercelRequest, VercelResponse } from "@vercel/node";

const PIXEL_ID = "831679386397540";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).end();

  const token = process.env.META_CAPI_TOKEN;
  if (!token) return res.status(500).json({ error: "token not configured" });

  const { event_name, event_id, source_url, fbp, fbc } = req.body ?? {};

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ??
    (req.headers["x-real-ip"] as string) ??
    "";
  const ua = (req.headers["user-agent"] as string) ?? "";

  const userData: Record<string, string> = {
    client_ip_address: ip,
    client_user_agent: ua,
  };
  if (fbp) userData["fbp"] = fbp;
  if (fbc) userData["fbc"] = fbc;

  const payload = {
    data: [
      {
        event_name: event_name ?? "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: event_id ?? crypto.randomUUID(),
        action_source: "website",
        event_source_url: source_url ?? "",
        user_data: userData,
      },
    ],
    access_token: token,
  };

  const r = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await r.json();
  return res.status(r.ok ? 200 : 500).json(data);
}
