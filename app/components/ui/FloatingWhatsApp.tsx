 "use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../seo";

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed right-6 bottom-6 z-50 hidden h-14 items-center justify-center rounded-full bg-[#25D366] px-6 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/30 sm:flex"
    >
      <MessageCircle className="h-7 w-7" />

      <span className="ml-3 hidden font-bold sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
