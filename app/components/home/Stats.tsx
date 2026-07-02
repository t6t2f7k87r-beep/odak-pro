const stats = [
  {
    number: "2500+",
    title: "Danışmanlık Verilen Öğrenci",
  },
  {
    number: "40+",
    title: "Anlaşmalı Üniversite",
  },
  {
    number: "%98",
    title: "Vize Başarı Oranı",
  },
  {
    number: "4-8 bin $",
    title: "Yıllık Eğitim Ücreti",
  },
  {
    number: "10+",
    title: "Yıllık Deneyim",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#081321] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <dl className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.07] p-8 text-center shadow-xl shadow-black/10 backdrop-blur"
            >
              <dt className="text-4xl font-black text-[#C9A227] xl:text-5xl">
                {item.number}
              </dt>

              <dd className="mt-4 text-lg text-slate-300">
                {item.title}
              </dd>
            </div>
          ))}

        </dl>

      </div>
    </section>
  );
}
