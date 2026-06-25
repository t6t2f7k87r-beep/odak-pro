export default function Stats() {
  const stats = [
    {
      number: "2500+",
      title: "Öğrenci",
    },
    {
      number: "40+",
      title: "Üniversite",
    },
    {
      number: "%98",
      title: "Vize Başarısı",
    },
    {
      number: "10+",
      title: "Yıllık Deneyim",
    },
  ];

  return (
    <section className="bg-[#0F2749] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-black text-white">
            Rakamlarla Odak Danışmanlık
          </h2>

          <p className="mt-6 text-xl text-slate-300">
            Binlerce öğrencinin hayalini gerçeğe dönüştürdük.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-10 text-center shadow-xl"
            >
              <h3 className="text-6xl font-black text-[#D4AF37]">
                {item.number}
              </h3>

              <p className="mt-6 text-xl font-semibold text-[#0F2749]">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}