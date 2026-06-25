 export default function Universities() {
  const universities = [
    {
      name: "Lomonosov Moscow State University",
      city: "Moskova",
    },
    {
      name: "Saint Petersburg State University",
      city: "St. Petersburg",
    },
    {
      name: "Kazan Federal University",
      city: "Kazan",
    },
    {
      name: "Bauman Moscow State Technical University",
      city: "Moskova",
    },
    {
      name: "Peoples' Friendship University",
      city: "Moskova",
    },
    {
      name: "ITMO University",
      city: "St. Petersburg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#0F2749]">
          Anlaşmalı Üniversiteler
        </h2>

        <p className="text-center text-gray-500 mt-5 mb-16 text-xl">
          Rusya'nın en prestijli üniversitelerine başvuru sürecinizi
          profesyonel olarak yönetiyoruz.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {universities.map((u) => (

            <div
              key={u.name}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition"
            >

              <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
                🎓
              </div>

              <h3 className="font-bold text-2xl text-[#0F2749]">
                {u.name}
              </h3>

              <p className="mt-3 text-gray-500">
                {u.city}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}