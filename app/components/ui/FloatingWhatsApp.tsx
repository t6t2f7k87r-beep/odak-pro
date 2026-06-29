"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/905459554223"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-6 py-4 text-white shadow-2xl transition hover:scale-105 hover:bg-green-600"
    >
      <MessageCircle size={24} />
      <span className="hidden font-semibold sm:block">
        WhatsApp
      </span>
    </a>
  );
}