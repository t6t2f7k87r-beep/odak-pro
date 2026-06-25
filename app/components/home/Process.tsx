export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Ücretsiz Danışmanlık",
      text: "Hedeflerinizi analiz ediyor ve size en uygun üniversiteleri belirliyoruz.",
    },
    {
      number: "02",
      title: "Başvuru",
      text: "Tüm başvuru ve evrak sürecini sizin adınıza yönetiyoruz.",
    },
    {
      number: "03",
      title: "Vize",
      text: "Kabul mektubu sonrası vize işlemlerini birlikte tamamlıyoruz.",
    },
    {
      number: "04",
      title: "Rusya'ya Yerleşim",
      text: "Konaklama, karşılama ve kayıt işlemlerinde yanınızdayız.",
    },
  ];

  return (
    <section className="bg-[#0F2749] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white">
            Başvuru Süreci
          </h2>

          <p className="text-slate-300 mt-6 text-xl">
            Sadece 4 adımda Rusya'da üniversite hayatına başla.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-white p-8 text-center shadow-xl"
            >
              <div className="text-5xl font-black text-[#D4AF37]">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0F2749]">
                {step.title}
              </h3>

              <p className="mt-5 text-slate-500 leading-8">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}