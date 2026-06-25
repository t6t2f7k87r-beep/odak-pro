 "use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  GraduationCap,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#081321] pt-40 pb-32">

      {/* Blur Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-200px] top-[-120px] h-[500px] w-[500px] rounded-full bg-[#C9A227]/20 blur-[140px]" />

        <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >

            <div className="inline-flex items-center gap-3 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-5 py-3 text-[#E7C873]">

              <GraduationCap size={18} />

              <span className="text-sm font-semibold tracking-wide">

                Rusya Eğitim Danışmanlığı

              </span>

            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white lg:text-7xl">

              Geleceğini

              <span className="block text-[#E7C873]">

                Dünyaya Aç.

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">

              Üniversite seçimi, başvuru,
              kabul mektubu, vize,
              konaklama ve kayıt sürecini
              tek noktadan yönetiyoruz.

            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="https://wa.me/905459554223"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#C9A227] px-8 py-5 text-lg font-bold text-[#081321] transition hover:scale-105"
              >

                Ücretsiz Danışmanlık

                <ArrowRight size={20} />

              </Link>

              <Link
                href="#universities"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/20 px-8 py-5 text-lg font-semibold text-white transition hover:bg-white hover:text-[#081321]"
              >

                Üniversiteleri İncele

              </Link>

            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">

              <div className="flex items-start gap-4">

                <CheckCircle2
                  className="text-[#E7C873]"
                  size={26}
                />

                <div>

                  <h3 className="font-bold text-white">

                    Baştan Sona Destek

                  </h3>

                  <p className="mt-2 text-slate-400">

                    Başvurudan mezuniyete kadar.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Globe2
                  className="text-[#E7C873]"
                  size={26}
                />

                <div>

                  <h3 className="font-bold text-white">

                    40+ Üniversite

                  </h3>

                  <p className="mt-2 text-slate-400">

                    Resmi iş ortaklarımız.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>
                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main Image */}

            <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">

              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80"
                alt="Rusya Üniversiteleri"
                className="h-[700px] w-full object-cover"
              />

            </div>

            {/* Student Card */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.7,
              }}
              className="absolute -left-10 bottom-8 rounded-3xl border border-white/10 bg-white p-7 shadow-2xl"
            >
              <p className="text-5xl font-black text-[#C9A227]">
                2500+
              </p>

              <p className="mt-2 text-slate-500">
                Başarılı Öğrenci
              </p>
            </motion.div>

            {/* Visa Card */}

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="absolute -right-8 top-10 rounded-3xl bg-[#C9A227] p-7 shadow-2xl"
            >
              <p className="text-4xl font-black text-[#081321]">
                %98
              </p>

              <p className="mt-2 font-semibold text-[#081321]">
                Vize Başarısı
              </p>
            </motion.div>

            {/* University Card */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.8,
              }}
              className="absolute right-10 bottom-10 rounded-3xl border border-white/10 bg-[#081321]/90 p-7 backdrop-blur-xl"
            >
              <p className="text-3xl font-black text-[#E7C873]">
                40+
              </p>

              <p className="mt-2 text-slate-300">
                Anlaşmalı Üniversite
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}