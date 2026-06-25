 export default function Contact() {
  return (
    <section className="bg-[#0F2749] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="text-[#D4AF37] uppercase tracking-widest font-bold">
            İletişim
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            Hayalindeki Üniversite İçin
            İlk Adımı At.
          </h2>

          <p className="mt-8 text-slate-300 text-xl leading-9">
            Ücretsiz danışmanlık al, sana en uygun üniversiteyi birlikte
            belirleyelim.
          </p>
<div className="mt-10 space-y-5">

  <div>
    <p className="text-[#D4AF37] font-semibold">
      🇹🇷 WhatsApp Türkiye
    </p>

    <p className="text-white text-lg">
      0545 955 42 23
    </p>
  </div>

  <div>
    <p className="text-[#D4AF37] font-semibold">
      🇷🇺 WhatsApp Rusya
    </p>

    <p className="text-white text-lg">
      +7 960 046-73-38
    </p>
  </div>

  <div>
    <p className="text-[#D4AF37] font-semibold">
      📍 Merkez
    </p>

    <p className="text-white">
      Malatya / Türkiye
    </p>
  </div>

</div>
        </div>

        <form className="bg-white rounded-3xl p-10 shadow-2xl space-y-6">

          <input
            type="text"
            placeholder="Ad Soyad"
            className="w-full rounded-xl border p-4"
          />

          <input
            type="email"
            placeholder="E-posta"
            className="w-full rounded-xl border p-4"
          />

          <input
            type="tel"
            placeholder="Telefon"
            className="w-full rounded-xl border p-4"
          />

          <textarea
            placeholder="Mesajınız"
            rows={5}
            className="w-full rounded-xl border p-4"
          />

          <button
            className="w-full rounded-xl bg-[#D4AF37] py-4 font-bold"
          >
            Başvuruyu Gönder
          </button>

        </form>

      </div>
    </section>
  );
}