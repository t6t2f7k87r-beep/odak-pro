 "use client";

export default function Hero() {
  return (
   <section
  id="hero"
  className="relative overflow-hidden pt-36 pb-24"
  style={{
    backgroundImage:
      "linear-gradient(rgba(8,19,33,.78), rgba(8,19,33,.82)), url('/images/hero/russia.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <span className="rounded-full bg-[#C9A227]/20 px-5 py-2 text-sm font-bold text-[#E7C873]">
          Rusya'da Eğitim Danışmanlığı
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
          Hayalindeki
          <span className="text-[#C9A227]"> Üniversiteye </span>
          Odak Danışmanlık ile Ulaş.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Üniversite seçimi, başvuru, kabul, vize ve konaklama süreçlerinde
          profesyonel danışmanlık hizmeti sunuyoruz.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <a
            href="https://wa.me/905459554223"
            target="_blank"
            className="rounded-2xl bg-[#C9A227] px-8 py-4 text-lg font-bold text-[#081321] transition hover:scale-105"
          >
            Ücretsiz Danışmanlık
          </a>

          <a
            href="#universities"
            className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold text-white"
          >
            Üniversiteleri İncele
          </a>

        </div>

      </div>
    </section>
  );
}