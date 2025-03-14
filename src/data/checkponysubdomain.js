export function isPonySubdomain() {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const subdomain = hostname.split(".")[0];

    console.debug(`[Subdomain Check] Hostname: ${hostname}`);
    console.debug(`[Subdomain Check] Extracted Subdomain: ${subdomain}`);

    const isTest = subdomain === "test";

    console.debug(`[Subdomain Check] isTestSubdomain: ${isTest ? "Yes" : "No"}`);

    return isTest;
  }

  console.warn("[Subdomain Check] Cannot determine subdomain (window is undefined).");
  return false;
}