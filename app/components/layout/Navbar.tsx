 "use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { siteConfig } from "../../seo";

const navItems = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Neden Biz" },
  { href: "#process", label: "Süreç" },
  { href: "#services", label: "Hizmetler" },
  { href: "#universities", label: "Üniversiteler" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#081321]/95 shadow-2xl shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">

        <Link
          href="/"
          className="flex shrink-0 items-center rounded-2xl bg-white px-3 py-1.5 shadow-lg shadow-black/10 transition hover:scale-[1.02]"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logosu`}
            width={siteConfig.logoWidth}
            height={siteConfig.logoHeight}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/90 transition hover:text-[#E7C873]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#C9A227] px-5 py-3 text-sm font-black text-[#081321] shadow-lg shadow-[#C9A227]/20 transition hover:-translate-y-0.5 hover:bg-[#E7C873] sm:flex"
        >
          <MessageCircle size={18} />
          Ücretsiz Danışmanlık
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#081321] px-4 pb-5 shadow-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 font-semibold text-white/90 transition hover:bg-white/10 hover:text-[#E7C873]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex max-w-7xl items-center justify-center gap-2 rounded-2xl bg-[#C9A227] px-5 py-4 font-black text-[#081321]"
          >
            <MessageCircle size={20} />
            WhatsApp ile Görüş
          </a>
        </div>
      )}
    </header>
  );
}
