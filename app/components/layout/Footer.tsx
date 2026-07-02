import Image from "next/image";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../../seo";

const footerLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Neden Biz" },
  { href: "#process", label: "Başvuru Süreci" },
  { href: "#services", label: "Hizmetler" },
  { href: "#universities", label: "Üniversiteler" },
  { href: "#contact", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-[#06101d] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>

            <div className="inline-flex rounded-3xl bg-white p-3 shadow-lg">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logosu`}
                width={siteConfig.logoWidth}
                height={siteConfig.logoHeight}
                className="h-24 w-auto"
              />
            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Rusya Üniversite Danışmanlığı alanında
              öğrencilerimize güvenilir ve profesyonel
              hizmet sunuyoruz.
            </p>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Menü
            </h3>

            <ul className="space-y-3 text-slate-400">

              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-[#C9A227]">
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              İletişim
            </h3>

            <div className="space-y-4 text-slate-400">

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 transition hover:text-[#C9A227]"
              >
                <Phone size={18} />
                {siteConfig.displayPhone}
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 transition hover:text-[#C9A227]"
              >
                <Mail size={18} />
                {siteConfig.email}
              </a>

              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C9A227]" />
                Türkiye & Rusya
              </p>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              Sosyal Medya
            </h3>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#C9A227] transition hover:text-white"
            >
              <Globe size={18} />
              {siteConfig.instagramHandle}
            </a>

            <div className="mt-8">

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-6 py-3 font-black text-[#081321] transition hover:bg-[#E7C873]"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-slate-500">

          © 2026 Odak Danışmanlık • Tüm Hakları Saklıdır.

        </div>

      </div>
    </footer>
  );
}
