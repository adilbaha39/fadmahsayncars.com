"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Tracks all clicks on WhatsApp links (wa.me) site-wide as GA4 event: whatsapp_click
 */
export default function WhatsAppTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.href || "";
      const label = anchor.getAttribute("aria-label") || anchor.textContent?.trim().slice(0, 80) || "whatsapp";

      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: label,
          link_url: href,
          page_path: window.location.pathname,
          page_location: window.location.href,
        });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
