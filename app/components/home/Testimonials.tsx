 "use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmet K.",
    university: "Kazan Federal University",
    text: "Başvuru sürecinden Rusya'ya gidene kadar her aşamada yanımdaydılar. Tüm işlemler sorunsuz ilerledi.",
  },
  {
    name: "Zeynep A.",
    university: "Saint Petersburg State University",
    text: "Odak Danışmanlık sayesinde üniversite ve vize sürecim çok kolay geçti. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Mehmet Y.",
    university: "RUDN University",
    text: "İlk görüşmeden kayıt gününe kadar her konuda destek aldım. Profesyonel ve güvenilir bir ekip.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            ÖĞRENCİ YORUMLARI
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081321]">
            Öğrencilerimiz Ne Diyor?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Bugüne kadar danışmanlık verdiğimiz öğrencilerimizin deneyimlerinden bazıları.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex gap-1">
                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill="#C9A227"
                    className="text-[#C9A227]"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{item.text}"
              </p>

              <div className="mt-8 border-t pt-6">
                <h3 className="font-bold text-[#081321]">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.university}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}