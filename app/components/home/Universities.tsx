import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const universities = [
  {
    name: "Lomonosov Moscow State University",
    city: "Moskova",
    image: "/images/universities/lomonosov.jpg",
    rank: "QS Top 100",
    tuition: "4.000 - 8.000 USD",
  },
  {
    name: "Saint Petersburg State University",
    city: "St. Petersburg",
    image: "/images/universities/spbu.jpg",
    rank: "QS Top 300",
    tuition: "4.000 - 8.000 USD",
  },
  {
    name: "Kazan Federal University",
    city: "Kazan",
    image: "/images/universities/kazan.jpg",
    rank: "QS Top 400",
    tuition: "4.000 - 8.000 USD",
  },
  {
    name: "Bauman Moscow State Technical University",
    city: "Moskova",
    image: "/images/universities/bauman.jpg",
    rank: "Mühendislik",
    tuition: "4.000 - 8.000 USD",
  },
  {
    name: "RUDN University",
    city: "Moskova",
    image: "/images/universities/rudn.jpg",
    rank: "Tıp",
    tuition: "4.000 - 8.000 USD",
  },
  {
    name: "ITMO University",
    city: "St. Petersburg",
    image: "/images/universities/itmo.jpg",
    rank: "Bilgisayar Bilimleri",
    tuition: "4.000 - 8.000 USD",
  },
];

export default function Universities() {
  return (
    <section
      id="universities"
      className="bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            ÜNİVERSİTELER
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#081321] sm:text-5xl">
            Anlaşmalı Üniversitelerimiz
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
            Rusya&apos;nın en prestijli devlet üniversiteleri ile
            öğrencilerimizi buluşturuyoruz.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {universities.map((item) => (

            <div
              key={item.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl"
            >

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.image}
                  alt={`${item.name} kampüsü`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/20 bg-[#081321]/90 px-4 py-3 text-white shadow-xl backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E7C873]">
                    Yıllık ücret aralığı
                  </p>
                  <p className="mt-1 text-lg font-black">
                    {item.tuition}
                  </p>
                </div>
              </div>

              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A227]">
                  {item.rank}
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#081321]">
                  {item.name}
                </h3>

                <p className="mt-4 flex items-center gap-2 text-slate-500">
                  <MapPin size={18} className="text-[#C9A227]" />
                  {item.city}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#081321] px-6 py-3 font-bold text-white transition hover:bg-[#C9A227] hover:text-[#081321]"
                >
                  Bilgi Al
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
