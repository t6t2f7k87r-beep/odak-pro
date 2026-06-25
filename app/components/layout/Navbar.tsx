 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Globe,
  ChevronRight,
} from "lucide-react";

const links = [
  {
    title: "Ana Sayfa",
    href: "#hero",
  },
  {
    title: "Neden Biz",
    href: "#about",
  },
  {
    title: "Üniversiteler",
    href: "#universities",
  },
  {
    title: "Hizmetler",
    href: "#services",
  },
  {
    title: "İletişim",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: .6,
        }}
        className="fixed left-0 top-0 z-50 w-full"
      >
        <div className="mx-auto max-w-7xl px-6 pt-5">

          <div
            className={`flex h-20 items-center justify-between rounded-2xl border transition-all duration-500 ${
              scrolled
                ? "border-white/20 bg-[#081321]/80 backdrop-blur-2xl shadow-2xl"
                : "border-white/10 bg-white/10 backdrop-blur-xl"
            }`}
          >

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-4 pl-7"
            >
              <Image
                src="/logo.png"
                alt="Odak Danışmanlık"
                width={46}
                height={46}
                priority
              />

              <div>

                <h2 className="text-xl font-black text-white">

                  ODAK

                </h2>

                <p className="text-[11px] uppercase tracking-[0.35em] text-[#C9A227]">

                  CONSULTING

                </p>

              </div>

            </Link>

            {/* Desktop Menu */}

            <nav className="hidden items-center gap-9 lg:flex">

              {links.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative text-sm font-semibold text-white transition"
                >

                  {item.title}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C9A227] transition-all duration-300 group-hover:w-full" />

                </Link>

              ))}

            </nav>

            {/* Right */}

            <div className="hidden items-center gap-3 pr-5 lg:flex">

              <a
                href="https://wa.me/905459554223"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#C9A227]"
              >
                <Phone size={17} />

                Türkiye
              </a>

              <a
                href="https://wa.me/79600467338"
                target="_blank"
                className="flex items-center gap-2 rounded-xl bg-[#C9A227] px-5 py-3 text-sm font-bold text-[#081321] transition hover:scale-105"
              >
                <Globe size={17} />

                Rusya
              </a>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="mr-6 flex lg:hidden"
            >

              {open ? (
                <X
                  size={30}
                  color="white"
                />
              ) : (
                <Menu
                  size={30}
                  color="white"
                />
              )}

            </button>

          </div>
                      {/* Mobile Menu */}

            <AnimatePresence>

              {open && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: .25,
                  }}
                  className="absolute left-6 right-6 top-[105px] overflow-hidden rounded-3xl border border-white/10 bg-[#081321]/95 p-7 shadow-2xl backdrop-blur-2xl lg:hidden"
                >

                  <div className="flex flex-col">

                    {links.map((item) => (

                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between border-b border-white/10 py-5 text-lg font-semibold text-white transition hover:text-[#C9A227]"
                      >

                        {item.title}

                        <ChevronRight size={20} />

                      </Link>

                    ))}

                  </div>

                  <div className="mt-8 flex flex-col gap-4">

                    <a
                      href="https://wa.me/905459554223"
                      target="_blank"
                      className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 py-4 font-semibold text-white"
                    >

                      <Phone size={18} />

                      WhatsApp Türkiye

                    </a>

                    <a
                      href="https://wa.me/79600467338"
                      target="_blank"
                      className="flex items-center justify-center gap-3 rounded-2xl bg-[#C9A227] py-4 font-bold text-[#081321]"
                    >

                      <Globe size={18} />

                      WhatsApp Rusya

                    </a>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        </div>

      </motion.header>
          </>
  );
}