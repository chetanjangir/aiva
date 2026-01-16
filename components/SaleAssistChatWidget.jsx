"use client";

import { useEffect } from "react";

const WIDGET_ID = "5cba2459-ce62-4665-ad88-14f4f4a807fe";

export default function SaleAssistChatWidget() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__SALEASSIST_CHAT_WIDGET_MOUNTED__) return;

    const tryMount = () => {
      if (!window.saleassist?.mountWidget) return false;

      window.saleassist.mountWidget({ id: WIDGET_ID });
      window.__SALEASSIST_CHAT_WIDGET_MOUNTED__ = true;
      return true;
    };

    if (tryMount()) return;

    const start = Date.now();
    const interval = setInterval(() => {
      if (tryMount() || Date.now() - start > 15000) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
