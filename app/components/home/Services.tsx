export default function Services() {
  const services = [
    {
      icon: "🎓",
      title: "Üniversite Yerleştirme",
      text: "Hedeflerine uygun üniversiteyi birlikte seçiyoruz."
    },
    {
      icon: "📄",
      title: "Başvuru İşlemleri",
      text: "Tüm belgeleri hazırlıyor ve süreci yönetiyoruz."
    },
    {
      icon: "🛂",
      title: "Vize Danışmanlığı",
      text: "Vize başvurunu eksiksiz tamamlıyoruz."
    },
    {
      icon: "🏠",
      title: "Konaklama",
      text: "Yurt ve konaklama seçeneklerini ayarlıyoruz."
    },
    {
      icon: "✈️",
      title: "Karşılama",
      text: "Rusya'ya ulaştığında seni karşılıyoruz."
    },
    {
      icon: "🤝",
      title: "7/24 Destek",
      text: "Eğitim hayatın boyunca yanındayız."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-black text-[#0F2749]">
            Hizmetlerimiz
          </h2>

          <p className="mt-6 text-xl text-slate-500">
            Başvurudan mezuniyete kadar tüm süreçte yanındayız.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 p-10 hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="text-6xl">
                {service.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-[#0F2749]">
                {service.title}
              </h3>

              <p className="mt-5 text-slate-500 leading-8">
                {service.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}