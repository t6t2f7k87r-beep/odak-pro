export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-black text-[#D4AF37]">
            ODAK
          </h2>

          <p className="text-slate-400 mt-2">
            Rusya Eğitim Danışmanlığı
          </p>
        </div>

        <div className="flex gap-8 text-slate-400">
          <a href="#">Ana Sayfa</a>
          <a href="#">Hizmetler</a>
          <a href="#">İletişim</a>
        </div>

        <p className="text-slate-500 text-sm">
          © 2026 Odak Danışmanlık. Tüm hakları saklıdır.
        </p>

      </div>
    </footer>
  );
}