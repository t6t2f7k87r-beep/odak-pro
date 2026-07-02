import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Ücretsiz Ön Görüşme",
    text: "Hedeflerinizi dinliyor ve size en uygun üniversiteleri belirliyoruz.",
  },
  {
    number: "02",
    title: "Üniversite Başvurusu",
    text: "Tüm başvuru belgelerini hazırlıyor ve başvuruları gerçekleştiriyoruz.",
  },
  {
    number: "03",
    title: "Kabul Mektubu",
    text: "Üniversiteden kabul mektubunuzun alınmasını sağlıyoruz.",
  },
  {
    number: "04",
    title: "Vize ve Konaklama",
    text: "Vize başvurusu, yurt ve konaklama süreçlerini yönetiyoruz.",
  },
  {
    number: "05",
    title: "Rusya'ya Yolculuk",
    text: "Kayıt işlemleri tamamlanır ve eğitim hayatınız başlar.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#081321] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            BAŞVURU SÜRECİ
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black text-white sm:text-5xl">
            5 Adımda Rusya&apos;da Eğitime Başlayın
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Tüm süreci sizin adınıza yönetiyor, eğitim yolculuğunuzu
            güvenli ve hızlı şekilde tamamlıyoruz.
          </p>

        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-5">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-[#C9A227]/50 hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-4xl font-black text-[#C9A227]">
                  {step.number}
                </span>

                <CheckCircle2 className="h-6 w-6 text-[#E7C873] opacity-70 transition group-hover:opacity-100" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
