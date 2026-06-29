 "use client";

import Image from "next/image";

const universities = [
  {
    name: "Lomonosov Moscow State University",
    city: "Moskova",
    rank: "QS İlk 100",
    image: "/images/universities/lomonosov.jpg",
  },
  {
    name: "Saint Petersburg State University",
    city: "St. Petersburg",
    rank: "QS İlk 300",
    image: "/images/universities/spbu.jpg",
  },
  {
    name: "Kazan Federal University",
    city: "Kazan",
    rank: "QS İlk 400",
    image: "/images/universities/kazan.jpg",
  },
  {
    name: "Bauman Moscow State Technical University",
    city: "Moskova",
    rank: "Mühendislik",
    image: "/images/universities/bauman.jpg",
  },
  {
    name: "RUDN University",
    city: "Moskova",
    rank: "Tıp",
    image: "/images/universities/rudn.jpg",
  },
  {
    name: "ITMO University",
    city: "St. Petersburg",
    rank: "Bilgisayar Bilimleri",
    image: "/images/universities/itmo.jpg",
  },
];

export default function Universities() {
  return (
    <section
      id="universities"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            ÜNİVERSİTELER
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081321]">
            Anlaşmalı Üniversiteler
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Rusya'nın prestijli üniversitelerine güvenle başvurun.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {universities.map((u) => (

            <div
              key={u.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-60">

                <Image
                  src={u.image}
                  alt={u.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-[#C9A227]">
                  {u.city}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#081321]">
                  {u.name}
                </h3>

                <p className="mt-4 text-slate-500">
                  {u.rank}
                </p>

                <button className="mt-8 w-full rounded-xl bg-[#081321] py-4 font-semibold text-white transition hover:bg-[#0f2749]">
                  Detayları İncele
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}