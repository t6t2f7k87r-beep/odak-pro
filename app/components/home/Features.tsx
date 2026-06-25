 "use client";

import { motion } from "framer-motion";
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
    description:
      "Rusya'nın önde gelen devlet üniversiteleriyle resmi danışmanlık hizmeti.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir Süreç",
    description:
      "Başvuru, kabul, vize ve kayıt işlemlerinde profesyonel destek.",
  },
  {
    icon: Globe,
    title: "Uluslararası Deneyim",
    description:
      "Yurt dışında eğitim sürecini baştan sona birlikte planlıyoruz.",
  },
  {
    icon: BadgeCheck,
    title: "Yüksek Başarı",
    description:
      "Yüzlerce öğrencimizi başarıyla üniversitelerine yerleştirdik.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            NEDEN ODAK?
          </span>

          <h2 className="mt-5 text-5xl font-black text-[#081321]">
            Hayallerinizi
            <span className="text-[#C9A227]"> Gerçeğe </span>
            Dönüştürüyoruz
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            Üniversite seçimiyle başlayan yolculuğunuz boyunca
            güvenilir, hızlı ve profesyonel danışmanlık hizmeti sunuyoruz.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C9A227]/15">

                  <Icon
                    size={34}
                    className="text-[#C9A227]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#081321]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}