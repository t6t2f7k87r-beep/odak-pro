import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Bölüme göre netleşir",
    text: "Tıp, mühendislik ve sosyal bilimlerde ücretler üniversiteye göre değişir.",
  },
  {
    icon: CalendarCheck,
    title: "Takvimle birlikte planlanır",
    text: "Başvuru, kabul ve vize adımları bütçe takviminize göre hazırlanır.",
  },
  {
    icon: BadgeCheck,
    title: "Şeffaf yönlendirme",
    text: "Üniversite, şehir ve yaşam giderleri ön görüşmede birlikte değerlendirilir.",
  },
];

export default function Investment() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,#F8FAFC_0%,rgba(248,250,252,0)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_480px]">
        <div>
          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            ÜCRET ARALIĞI
          </span>

          <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-[#081321] sm:text-5xl">
            Rusya Üniversite Ücretleri İçin Net ve Şeffaf Planlama
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-600">
            Rusya&apos;da üniversite eğitim ücretleri yıllık olarak genellikle
            <strong className="font-black text-[#081321]"> 4.000 - 8.000 USD arası</strong>
            değişmektedir. Net tutar; bölüm, üniversite, şehir ve hazırlık eğitimi
            tercihine göre birlikte belirlenir.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="border-l-2 border-[#C9A227] pl-5">
                <item.icon className="h-7 w-7 text-[#C9A227]" />

                <h3 className="mt-4 text-lg font-black text-[#081321]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[32px] border border-[#C9A227]/30 bg-[#081321] p-7 shadow-2xl shadow-[#081321]/20 sm:p-9">
          <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-7">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#E7C873]">
                Yıllık Eğitim Ücreti
              </p>
              <h3 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                4.000 - 8.000 USD
              </h3>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#C9A227] text-[#081321] shadow-lg shadow-[#C9A227]/20">
              <DollarSign className="h-8 w-8" />
            </div>
          </div>

          <div className="divide-y divide-white/10">
            <div className="flex items-start justify-between gap-5 py-6">
              <span className="font-semibold text-slate-300">Başlangıç aralığı</span>
              <strong className="text-right text-xl text-[#E7C873]">4.000 USD</strong>
            </div>

            <div className="flex items-start justify-between gap-5 py-6">
              <span className="font-semibold text-slate-300">Üst program aralığı</span>
              <strong className="text-right text-xl text-[#E7C873]">8.000 USD</strong>
            </div>

            <div className="flex items-start justify-between gap-5 py-6">
              <span className="font-semibold text-slate-300">Ön görüşme</span>
              <strong className="text-right text-xl text-[#E7C873]">Ücretsiz</strong>
            </div>
          </div>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Ücret aralığı üniversitelerin yıllık eğitim bedelleri içindir;
            danışmanlık ve yaşam giderleri ön görüşmede ayrıca netleştirilir.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C9A227] px-7 py-4 font-black text-[#081321] shadow-xl shadow-[#C9A227]/20 transition hover:-translate-y-0.5 hover:bg-[#E7C873]"
          >
            Bütçeme Uygun Üniversite Bul
            <ArrowRight size={20} />
          </a>
        </aside>
      </div>
    </section>
  );
}
