 import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#081321] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-3">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="Odak Danışmanlık"
                width={60}
                height={60}
              />

              <div>

                <h2 className="text-2xl font-black">
                  ODAK
                </h2>

                <p className="text-sm tracking-[0.25em] uppercase text-[#C9A227]">
                  Danışmanlık
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-slate-300">
              Rusya'da üniversite eğitimi almak isteyen öğrenciler için
              profesyonel danışmanlık hizmeti sunuyoruz.
            </p>

          </div>

          {/* Menü */}

          <div>

            <h3 className="text-xl font-bold">
              Hızlı Menü
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link href="#hero">Ana Sayfa</Link>

              <Link href="#about">Neden Biz</Link>

              <Link href="#universities">Üniversiteler</Link>

              <Link href="#services">Hizmetler</Link>

              <Link href="#contact">İletişim</Link>

            </div>

          </div>

          {/* İletişim */}

          <div>

            <h3 className="text-xl font-bold">
              İletişim
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">

                <Phone className="text-[#C9A227]" size={20} />

                <span>0545 955 42 23</span>

              </div>

              <div className="flex items-center gap-3">

                <MessageCircle
                  className="text-[#C9A227]"
                  size={20}
                />

                <span>+7 960 046 73 38</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="text-[#C9A227]" size={20} />

                <span>info@odakdanismanlik.com</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="text-[#C9A227]" size={20} />

                <span>Türkiye & Rusya</span>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row">

            <p>
              © 2026 Odak Danışmanlık. Tüm Hakları Saklıdır.
            </p>

            <p>
              Rusya Üniversite Danışmanlığı • Başvuru • Vize • Konaklama
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}