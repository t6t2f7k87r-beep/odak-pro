 "use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#081321] shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="Odak Danışmanlık"
            className="h-14 w-auto"
          />

        </Link>

        {/* Menü */}

        <nav className="hidden items-center gap-8 md:flex">

          <a href="#hero" className="text-white hover:text-[#C9A227]">
            Ana Sayfa
          </a>

          <a href="#about" className="text-white hover:text-[#C9A227]">
            Neden Biz
          </a>

          <a href="#universities" className="text-white hover:text-[#C9A227]">
            Üniversiteler
          </a>

          <a href="#services" className="text-white hover:text-[#C9A227]">
            Hizmetler
          </a>

          <a href="#contact" className="text-white hover:text-[#C9A227]">
            İletişim
          </a>

        </nav>

        {/* Buton */}

        <a
          href="https://wa.me/905459554223"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#C9A227] px-6 py-3 font-bold text-[#081321] transition hover:scale-105"
        >
          Ücretsiz Danışmanlık
        </a>

      </div>
    </header>
  );
}