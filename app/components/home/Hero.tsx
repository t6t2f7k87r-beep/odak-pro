import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "../../seo";

const proofItems = [
  "Resmi başvuru ve kabul süreci",
  "4.000 - 8.000 USD arası yıllık eğitim ücretleri",
  "Vize, kayıt ve konaklama desteği",
  "Türkiye & Rusya'da öğrenci takibi",
];

const stats = [
  { value: "40+", label: "Üniversite" },
  { value: "4-8 bin $", label: "Yıllık ücret aralığı" },
  { value: "%98", label: "Vize başarısı" },
  { value: "2500+", label: "Öğrenci" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#081321] pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <Image
        src="/images/hero/russia.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(8,19,33,.96)_0%,rgba(8,19,33,.88)_45%,rgba(8,19,33,.58)_100%)]" />

      <div className="mx-auto grid w-full max-w-[calc(100vw-2rem)] items-center gap-12 px-0 sm:max-w-7xl sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px]">

        <div className="w-[calc(100vw-2rem)] min-w-0 max-w-4xl sm:w-auto">

          <span className="inline-flex rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-5 py-2 text-sm font-bold text-[#E7C873] shadow-lg shadow-[#C9A227]/10">
            Rusya Üniversite Danışmanlığı
          </span>

          <h1 className="mt-8 max-w-full text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            <span className="block">Rusya&apos;da</span>
            <span className="block text-[#E7C873]">Üniversite Eğitimi</span>
            <span className="block">İçin Güvenilir Danışmanınız</span>
          </h1>

          <p className="mt-8 max-w-full text-lg leading-9 text-slate-200 sm:max-w-2xl">
            Üniversite başvurusu, kabul mektubu, vize işlemleri,
            konaklama ve kayıt sürecinin tamamını tek noktadan
            profesyonel olarak yönetiyoruz.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C9A227] px-7 py-4 font-black text-[#081321] shadow-xl shadow-[#C9A227]/20 transition hover:-translate-y-0.5 hover:bg-[#E7C873] sm:w-auto"
            >
              <MessageCircle size={20} />
              Ücretsiz Ön Görüşme
            </a>

            <a
              href="#universities"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#081321] sm:w-auto"
            >
              Üniversiteleri İncele
              <ArrowRight size={20} />
            </a>

          </div>

          <div className="mt-12 grid w-full max-w-full grid-cols-2 gap-3 sm:max-w-3xl sm:grid-cols-4 sm:gap-5">

            {stats.map((item) => (
              <div
                key={item.label}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.12] p-4 shadow-lg shadow-black/10 backdrop-blur"
              >
                <h3 className="text-2xl font-black text-[#E7C873] sm:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-slate-200">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

        <aside className="mx-auto w-[calc(100vw-2rem)] min-w-0 max-w-[420px] rounded-[32px] border border-[#C9A227]/30 bg-white p-6 shadow-2xl shadow-black/30 sm:w-full lg:max-w-none">
          <div className="flex justify-center rounded-3xl bg-white p-3">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logosu`}
              width={siteConfig.logoWidth}
              height={siteConfig.logoHeight}
              className="h-44 w-auto"
              priority
            />
          </div>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#C9A227]">
              Premium başvuru takibi
            </p>

            <div className="mt-5 rounded-2xl bg-[#081321] p-5 text-white">
              <p className="text-sm text-slate-300">Yıllık eğitim ücretleri</p>
              <p className="mt-2 text-2xl font-black text-[#E7C873] sm:text-3xl">
                4.000 - 8.000 USD
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {proofItems.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A227]" />
                  <p className="text-sm leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}
