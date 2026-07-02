import { Globe, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { siteConfig } from "../../seo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#081321] py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">

        <div>

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            İLETİŞİM
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            Hayalinizdeki Üniversiteye
            <br />
            Birlikte Ulaşalım.
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            Rusya&apos;da eğitim hakkında ücretsiz bilgi almak için
            bizimle hemen iletişime geçebilirsiniz.
          </p>

          <div className="mt-12 space-y-8">

            <div className="flex items-center gap-4">
              <Phone className="text-[#C9A227]" />
              <div>
                <h4 className="font-semibold text-white">
                  Telefon
                </h4>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-slate-300 transition hover:text-[#E7C873]"
                >
                  {siteConfig.displayPhone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#C9A227]" />

              <div>
                <h4 className="font-semibold text-white">
                  E-posta
                </h4>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-300 transition hover:text-[#E7C873]"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="text-[#C9A227]" />

              <div>
                <h4 className="font-semibold text-white">
                  Instagram
                </h4>

                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#C9A227] hover:underline"
                >
                  {siteConfig.instagramHandle}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#C9A227]" />

              <div>
                <h4 className="font-semibold text-white">
                  Hizmet Bölgesi
                </h4>

                <p className="text-slate-300">
                  Türkiye & Rusya
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-2xl sm:p-10">

          <h3 className="text-3xl font-black text-[#081321]">
            Bize Hemen Yazın
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Ortalama dönüş süremiz 5 dakikadır.
          </p>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 text-center text-lg font-black text-white transition hover:scale-[1.02]"
          >
            <MessageCircle size={22} />
            WhatsApp&apos;tan Yaz
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 flex items-center justify-center gap-2 rounded-2xl border-2 border-[#081321] py-4 text-center text-lg font-black text-[#081321] transition hover:bg-[#081321] hover:text-white"
          >
            <Send size={20} />
            E-posta Gönder
          </a>

          <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-600">
            Ön görüşmede hedef bölümünüz, bütçeniz ve başvuru takviminiz birlikte değerlendirilir.
          </p>

        </div>

      </div>
    </section>
  );
}
