 "use client";

import {
  MessageCircle,
  FileText,
  GraduationCap,
  Plane,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "İlk Görüşme",
    text: "Hedeflerinizi dinliyor ve size en uygun üniversiteleri belirliyoruz.",
  },
  {
    icon: FileText,
    title: "Başvuru",
    text: "Belgelerinizi hazırlıyor ve resmi başvuru işlemlerini tamamlıyoruz.",
  },
  {
    icon: GraduationCap,
    title: "Kabul",
    text: "Üniversiteden kabul mektubunuzun alınmasını sağlıyoruz.",
  },
  {
    icon: Plane,
    title: "Vize & Seyahat",
    text: "Vize işlemleri, uçuş planlaması ve konaklama desteği sunuyoruz.",
  },
  {
    icon: CheckCircle,
    title: "Eğitime Başlangıç",
    text: "Rusya'ya ulaştığınızda kayıt işlemleriniz tamamlanır ve eğitime başlarsınız.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#F8FAFC] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            BAŞVURU SÜRECİ
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081321]">
            5 Adımda Rusya'da Eğitime Başlayın
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
            Tüm süreci sizin adınıza planlıyor ve her aşamada yanınızda oluyoruz.
          </p>

        </div>

        <div className="relative mt-20">

          <div className="absolute left-8 top-0 h-full w-1 bg-[#C9A227]/20"></div>

          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative flex gap-8"
                >

                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#081321] shadow-lg">
                    <Icon
                      size={30}
                      className="text-[#C9A227]"
                    />
                  </div>

                  <div className="flex-1 rounded-3xl bg-white p-8 shadow-lg">

                    <span className="text-sm font-bold uppercase tracking-widest text-[#C9A227]">
                      Adım {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-[#081321]">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-500">
                      {step.text}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}