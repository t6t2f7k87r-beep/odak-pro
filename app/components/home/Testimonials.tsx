export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmet Yılmaz",
      university: "Kazan Federal University",
      text: "Başvuru sürecinde hiçbir zorluk yaşamadım. Tüm işlemler profesyonel şekilde yönetildi.",
    },
    {
      name: "Elif Demir",
      university: "Lomonosov Moscow State University",
      text: "Vize ve konaklama dahil her konuda destek aldım. Kesinlikle tavsiye ederim.",
    },
    {
      name: "Mert Kaya",
      university: "Saint Petersburg State University",
      text: "Rusya'ya ilk geldiğim andan itibaren yanımda oldular. Çok güvenilir bir ekip.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-black text-[#0F2749]">
            Öğrencilerimiz Ne Diyor?
          </h2>

          <p className="mt-6 text-xl text-slate-500">
            Odak Danışmanlık ile eğitim hayatına başlayan öğrencilerimizin yorumları.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-white shadow-xl p-10 hover:-translate-y-2 transition"
            >
              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-6 text-slate-600 leading-8">
                "{review.text}"
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-[#0F2749]">
                  {review.name}
                </h3>

                <p className="text-slate-500">
                  {review.university}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}