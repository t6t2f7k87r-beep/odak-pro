"use client";

import { GraduationCap, Building2, BadgeCheck, Globe2 } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    number: "2500+",
    title: "Başarılı Öğrenci",
  },
  {
    icon: Building2,
    number: "40+",
    title: "Anlaşmalı Üniversite",
  },
  {
    icon: BadgeCheck,
    number: "%98",
    title: "Vize Başarı Oranı",
  },
  {
    icon: Globe2,
    number: "10+",
    title: "Yıllık Deneyim",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#081321] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            RAKAMLARLA ODAK
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Güven Veren Başarılarımız
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Yıllardır yüzlerce öğrencinin Rusya'da eğitim hayalini
            gerçeğe dönüştürüyoruz.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-[#C9A227]"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C9A227]/20">

                  <Icon
                    size={34}
                    className="text-[#C9A227]"
                  />

                </div>

                <h3 className="mt-8 text-5xl font-black text-white">
                  {item.number}
                </h3>

                <p className="mt-4 text-slate-300">
                  {item.title}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}