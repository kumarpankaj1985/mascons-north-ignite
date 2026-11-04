const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const requests = new Map<string, { count: number; resetAt: number }>();

// Best-effort per-instance IP throttling; the handler also checks persisted per-email submissions.
export function acceptEnquiryRequest(key: string, now = Date.now()): boolean {
  for (const [storedKey, value] of requests) {
    if (value.resetAt <= now) requests.delete(storedKey);
  }
  const current = requests.get(key);
  if (current && current.count >= MAX_REQUESTS) return false;
  requests.set(key, { count: (current?.count || 0) + 1, resetAt: current?.resetAt || now + WINDOW_MS });
  return true;
}