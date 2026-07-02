import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../seo";

const strengths = [
  "Üniversite ve bölüm seçimini birlikte netleştiriyoruz.",
  "Belgeleri, kabul mektubunu ve vize adımlarını takip ediyoruz.",
  "Rusya'ya varıştan kayıt sürecine kadar yanınızda oluyoruz.",
];

export default function WhyUs() {
  return (
    <section
      id="about"
      className="bg-[#F8FAFC] py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">

        <div>

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            NEDEN ODAK DANIŞMANLIK?
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-[#081321] sm:text-5xl">
            Rusya&apos;da Üniversite
            <br />
            Hayalinizi
            <br />
            Güvenle Gerçekleştiriyoruz.
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Üniversite seçimi, başvuru, kabul mektubu, vize,
            konaklama ve kayıt sürecinin tamamında
            öğrencilerimize profesyonel danışmanlık veriyoruz.
          </p>

          <div className="mt-8 space-y-4">
            {strengths.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#C9A227]" />
                <p className="leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">

              <h3 className="text-4xl font-black text-[#C9A227]">
                2500+
              </h3>

              <p className="mt-3 text-slate-600">
                Danışmanlık Verilen Öğrenci
              </p>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">

              <h3 className="text-4xl font-black text-[#C9A227]">
                40+
              </h3>

              <p className="mt-3 text-slate-600">
                Anlaşmalı Üniversite
              </p>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">

              <h3 className="text-4xl font-black text-[#C9A227]">
                %98
              </h3>

              <p className="mt-3 text-slate-600">
                Vize Başarı Oranı
              </p>

            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">

              <h3 className="text-4xl font-black text-[#C9A227]">
                7/24
              </h3>

              <p className="mt-3 text-slate-600">
                Öğrenci Desteği
              </p>

            </div>

          </div>

        </div>

        <div className="relative">

          <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] shadow-2xl sm:h-[560px] lg:h-[650px]">
            <Image
              src="/images/hero/russia.jpg"
              alt="Rusya Üniversite"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:left-auto sm:right-8 sm:w-72">
            <div className="flex items-center gap-4">
              <Image
                src={siteConfig.logoMark}
                alt=""
                width={512}
                height={512}
                className="h-14 w-14 rounded-2xl"
              />

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227]">
                  Odak sistemi
                </p>
                <p className="mt-1 font-black text-[#081321]">
                  Başvurudan kayda kadar takip
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
