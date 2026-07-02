import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmet K.",
    university: "Lomonosov Moscow State University",
    text: "Odak Danışmanlık sayesinde başvuru ve vize sürecim sorunsuz geçti. Rusya'ya geldiğim ilk günden itibaren destek aldım.",
  },
  {
    name: "Zeynep A.",
    university: "Saint Petersburg State University",
    text: "Her aşamada profesyonel destek aldım. Evrak hazırlığından kayıt işlemlerine kadar tüm süreç çok kolay ilerledi.",
  },
  {
    name: "Mehmet Y.",
    university: "Kazan Federal University",
    text: "Üniversite seçiminde doğru yönlendirme yaptılar. Şu anda hayalini kurduğum bölümde eğitim görüyorum.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            ÖĞRENCİ YORUMLARI
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#081321] sm:text-5xl">
            Öğrencilerimiz Ne Diyor?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Rusya&apos;da eğitim hayaline ulaşan öğrencilerimizin deneyimleri.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      fill="#C9A227"
                      className="text-[#C9A227]"
                    />
                  ))}

                </div>

                <Quote className="h-7 w-7 text-[#C9A227]/60" />

              </div>

              <p className="leading-8 text-slate-600">
                &quot;{item.text}&quot;
              </p>

              <div className="mt-8 border-t pt-6">

                <h3 className="font-bold text-[#081321]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
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
