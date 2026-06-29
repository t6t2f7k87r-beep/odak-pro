 "use client";

import {
  GraduationCap,
  ShieldCheck,
  Globe,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "40+ Üniversite",
    text: "Rusya'nın seçkin devlet üniversiteleriyle resmi danışmanlık.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Süreç",
    text: "Başvurudan vizeye kadar tüm işlemler profesyonel şekilde yürütülür.",
  },
  {
    icon: Globe,
    title: "Uluslararası Destek",
    text: "Rusya'daki yaşam ve eğitim sürecinde yanınızdayız.",
  },
  {
    icon: BadgeCheck,
    title: "Yüksek Başarı",
    text: "Yüzlerce öğrenciyi hayalindeki üniversiteye ulaştırdık.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-bold tracking-[0.3em] text-[#C9A227] uppercase">
            NEDEN ODAK?
          </p>

          <h2 className="mt-5 text-5xl font-black text-[#081321]">
            Eğitim Yolculuğunuz
            <span className="text-[#C9A227]"> Güvende </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Üniversite seçiminden kayıt sürecine kadar her adımda
            profesyonel danışmanlık hizmeti sunuyoruz.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]/10">

                  <Icon
                    size={34}
                    className="text-[#C9A227]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#081321]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  {item.text}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}