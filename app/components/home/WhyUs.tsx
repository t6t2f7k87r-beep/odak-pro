 "use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  GraduationCap,
  Globe2,
} from "lucide-react";

export default function WhyUs() {
  return (
    <section className="bg-[#F8FAFC] py-28" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span className="font-bold tracking-[0.3em] text-[#C9A227] uppercase">
            NEDEN ODAK?
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-[#081321]">
            Eğitim Yolculuğunuzda
            <span className="text-[#C9A227]">
              {" "}Güvenilir Partneriniz
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Rusya'da üniversite eğitimi almak isteyen öğrenciler için
            başvuru, kabul, vize, konaklama ve kayıt süreçlerini
            profesyonel şekilde yönetiyoruz.
          </p>

          <div className="mt-12 space-y-7">

            <div className="flex gap-5">

              <ShieldCheck
                className="mt-1 text-[#C9A227]"
                size={34}
              />

              <div>

                <h3 className="font-bold text-xl text-[#081321]">
                  Güvenilir Süreç
                </h3>

                <p className="mt-2 text-slate-500">
                  Tüm işlemler resmi prosedürlere uygun şekilde yürütülür.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <BadgeCheck
                className="mt-1 text-[#C9A227]"
                size={34}
              />

              <div>

                <h3 className="font-bold text-xl text-[#081321]">
                  Profesyonel Destek
                </h3>

                <p className="mt-2 text-slate-500">
                  Sürecin her aşamasında birebir danışmanlık.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <GraduationCap
                className="mt-1 text-[#C9A227]"
                size={34}
              />

              <div>

                <h3 className="font-bold text-xl text-[#081321]">
                  Üniversite Yerleşimi
                </h3>

                <p className="mt-2 text-slate-500">
                  Size en uygun üniversiteyi birlikte belirliyoruz.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative"
        >

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              alt="University"
              className="h-[650px] w-full object-cover"
            />

          </div>

          <div className="absolute -left-8 bottom-10 rounded-3xl bg-white p-8 shadow-2xl">

            <p className="text-5xl font-black text-[#C9A227]">
              2500+
            </p>

            <p className="mt-2 text-slate-500">
              Başarılı Öğrenci
            </p>

          </div>

          <div className="absolute -right-6 top-12 rounded-3xl bg-[#081321] p-8 shadow-2xl">

            <Globe2
              className="text-[#C9A227]"
              size={42}
            />

            <p className="mt-4 text-4xl font-black text-white">
              40+
            </p>

            <p className="mt-2 text-slate-300">
              Üniversite
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}