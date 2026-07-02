import {
  GraduationCap,
  FileCheck,
  Building2,
  Languages,
  Plane,
  Headset,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Üniversite Yerleştirme",
    text: "Bölüm, şehir, bütçe ve kariyer hedefinize göre en uygun Rus üniversitesini birlikte belirliyoruz.",
  },
  {
    icon: FileCheck,
    title: "Başvuru ve Vize",
    text: "Başvuru evrakları ve vize işlemlerini eksiksiz hazırlıyoruz.",
  },
  {
    icon: Building2,
    title: "Konaklama",
    text: "Yurt ve konaklama seçeneklerini sizin için organize ediyoruz.",
  },
  {
    icon: Languages,
    title: "Hazırlık Eğitimi",
    text: "Rusça hazırlık ve dil sürecinde danışmanlık sağlıyoruz.",
  },
  {
    icon: Plane,
    title: "Havalimanı Karşılama",
    text: "Rusya'ya vardığınız andan itibaren yanınızdayız.",
  },
  {
    icon: Headset,
    title: "7/24 Destek",
    text: "Eğitiminiz boyunca danışmanlarımızla iletişim kurabilirsiniz.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F8FAFC] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            HİZMETLERİMİZ
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#081321] sm:text-5xl">
            Tüm Süreçte Yanınızdayız
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Üniversite seçiminden Rusya&apos;daki eğitim hayatınıza başlayana kadar
            tüm aşamalarda profesyonel destek sunuyoruz.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl hover:ring-[#C9A227]/20"
          >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#081321]">
                <service.icon
                  className="h-9 w-9 text-[#E7C873]"
                />
              </div>

              <h3 className="text-2xl font-black text-[#081321]">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {service.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
