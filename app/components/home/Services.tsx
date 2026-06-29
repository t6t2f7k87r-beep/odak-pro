 "use client";

import {
  GraduationCap,
  FileCheck,
  Plane,
  Home,
  Languages,
  Headset,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Üniversite Yerleştirme",
    text: "Size en uygun üniversite ve bölümü birlikte belirliyoruz.",
  },
  {
    icon: FileCheck,
    title: "Başvuru & Vize",
    text: "Tüm evraklar, kabul mektubu ve vize işlemleri profesyonel şekilde hazırlanır.",
  },
  {
    icon: Home,
    title: "Konaklama",
    text: "Yurt veya daire seçenekleriyle güvenli konaklama sağlıyoruz.",
  },
  {
    icon: Plane,
    title: "Seyahat Desteği",
    text: "Uçuş planlaması ve Rusya'ya varış sürecinde yanınızdayız.",
  },
  {
    icon: Languages,
    title: "Rusça Hazırlık",
    text: "Hazırlık programları ve dil eğitimi konusunda rehberlik sunuyoruz.",
  },
  {
    icon: Headset,
    title: "7/24 Destek",
    text: "Rusya'daki eğitim süreciniz boyunca danışmanlık desteği alabilirsiniz.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            HİZMETLERİMİZ
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081321]">
            Tüm Süreçte Yanınızdayız
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            İlk görüşmeden üniversite kaydına kadar her adımı sizin için yönetiyoruz.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]/10">
                  <Icon
                    size={32}
                    className="text-[#C9A227]"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#081321]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  {service.text}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}