 "use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#081321] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-[40px] bg-white p-12 shadow-2xl">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Sol */}

            <div>

              <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                İLETİŞİM
              </span>

              <h2 className="mt-6 text-5xl font-black text-[#081321]">
                Hayalindeki Üniversite
                <br />
                Bir Mesaj Uzağında.
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-500">
                Ücretsiz ön görüşme için bizimle hemen iletişime geçin.
              </p>

              <div className="mt-10 space-y-8">

                <div className="flex gap-5">

                  <Phone className="text-[#C9A227]" />

                  <div>

                    <h4 className="font-bold">
                      Türkiye WhatsApp
                    </h4>

                    <p className="text-slate-500">
                      0545 955 42 23
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <MessageCircle className="text-[#C9A227]" />

                  <div>

                    <h4 className="font-bold">
                      Rusya WhatsApp
                    </h4>

                    <p className="text-slate-500">
                      +7 960 046 73 38
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <MapPin className="text-[#C9A227]" />

                  <div>

                    <h4 className="font-bold">
                      Hizmet Bölgesi
                    </h4>

                    <p className="text-slate-500">
                      Türkiye & Rusya
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Sağ */}

            <div className="rounded-3xl bg-[#F8FAFC] p-10">

              <h3 className="text-3xl font-black text-[#081321]">
                Hemen Yazın
              </h3>

              <p className="mt-3 text-slate-500">
                Ortalama cevap süremiz 5 dakikadır.
              </p>

              <div className="mt-10 flex flex-col gap-5">

                <a
                  href="https://wa.me/905459554223"
                  target="_blank"
                  className="rounded-2xl bg-[#C9A227] px-8 py-5 text-center text-lg font-bold text-[#081321] transition hover:scale-105"
                >
                  Türkiye WhatsApp
                </a>

                <a
                  href="https://wa.me/79600467338"
                  target="_blank"
                  className="rounded-2xl border-2 border-[#081321] px-8 py-5 text-center text-lg font-bold text-[#081321] transition hover:bg-[#081321] hover:text-white"
                >
                  Rusya WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}