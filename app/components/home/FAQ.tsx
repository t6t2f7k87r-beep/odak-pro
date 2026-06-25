"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "Rusya'da üniversite okumak için YKS gerekiyor mu?",
      answer:
        "Hayır. Çoğu Rus üniversitesi YKS puanı istemez. Lise diploması ile başvuru yapılabilir.",
    },
    {
      question: "Eğitim ücretleri ne kadar?",
      answer:
        "Üniversiteye ve bölüme göre değişmekle birlikte yıllık ortalama 2.500 - 7.000 USD arasındadır.",
    },
    {
      question: "Vize işlemlerini siz mi yapıyorsunuz?",
      answer:
        "Evet. Başvuru belgeleri, davetiye ve vize sürecinde tam destek sağlıyoruz.",
    },
    {
      question: "Rusça bilmiyorum, sorun olur mu?",
      answer:
        "Hazırlık programı bulunan üniversitelerde önce Rusça eğitimi alabilir, ardından lisans eğitimine başlayabilirsiniz.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#0F2749]">
            Sık Sorulan Sorular
          </h2>

          <p className="mt-6 text-slate-500 text-xl">
            Merak ettiğiniz konuların cevapları burada.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-xl font-bold text-[#0F2749]">
                  {faq.question}
                </span>

                <span className="text-3xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-500 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}