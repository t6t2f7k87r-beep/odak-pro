 "use client";

import { CheckCircle2 } from "lucide-react";

const items = [
  "Üniversite seçimi ve bölüm danışmanlığı",
  "Başvuru belgelerinin hazırlanması",
  "Resmi kabul mektubu süreci",
  "Vize ve seyahat danışmanlığı",
  "Konaklama ve kayıt desteği",
];

export default function WhyUs() {
  return (
    <section className="bg-[#F8FAFC] py-28" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Sol */}

        <div>

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            NEDEN ODAK DANIŞMANLIK?
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-[#081321]">
            Başvurudan
            <span className="text-[#C9A227]">
              {" "}Mezuniyete
            </span>
            <br />
            Yanınızdayız.
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            Odak Danışmanlık olarak yalnızca üniversiteye yerleşmenizi
            değil, Rusya'daki eğitim hayatınıza güvenle başlamanızı
            hedefliyoruz.
          </p>

          <div className="mt-10 space-y-5">

            {items.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <CheckCircle2
                  className="text-[#C9A227]"
                  size={24}
                />

                <p className="text-lg text-slate-700">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Sağ */}

        <div className="relative">

          <div className="overflow-hidden rounded-[36px] shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              alt="Üniversite"
              className="h-[650px] w-full object-cover"
            />

          </div>

          <div className="absolute -left-8 bottom-8 rounded-3xl bg-white p-8 shadow-2xl">

            <h3 className="text-5xl font-black text-[#C9A227]">
              2500+
            </h3>

            <p className="mt-2 text-slate-500">
              Başarılı Öğrenci
            </p>

          </div>

          <div className="absolute -right-6 top-10 rounded-3xl bg-[#081321] p-8 shadow-2xl">

            <h3 className="text-4xl font-black text-white">
              40+
            </h3>

            <p className="mt-2 text-slate-300">
              Üniversite
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}