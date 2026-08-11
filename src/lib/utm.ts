const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

/** Read UTM params from the current page URL. */
export function readUtms(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) result[key] = val;
  }
  return result;
}

/**
 * Append current-page UTMs to `baseUrl`, preserving any params already in it.
 * Falls back to `baseUrl` unchanged if there are no UTMs in the current URL.
 */
export function withUtms(baseUrl: string): string {
  const utms = readUtms();
  if (!Object.keys(utms).length) return baseUrl;

  const [base, hash] = baseUrl.split("#");
  const [path, existingQuery] = base.split("?");
  const params = new URLSearchParams(existingQuery ?? "");
  for (const [k, v] of Object.entries(utms)) {
    if (!params.has(k)) params.set(k, v);
  }
  const qs = params.toString();
  return `${path}${qs ? `?${qs}` : ""}${hash ? `#${hash}` : ""}`;
}
