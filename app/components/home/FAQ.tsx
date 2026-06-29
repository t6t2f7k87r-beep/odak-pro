 "use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Rusya'da üniversite okumak için YKS gerekli mi?",
    answer:
      "Hayır. Birçok Rus üniversitesi YKS puanı istemeden uluslararası öğrenci kabul etmektedir.",
  },
  {
    question: "Rusça bilmeden eğitim alabilir miyim?",
    answer:
      "Evet. Hazırlık eğitimi alabilir veya İngilizce programlara başvurabilirsiniz.",
  },
  {
    question: "Vize işlemlerini siz mi yapıyorsunuz?",
    answer:
      "Evet. Başvuru evraklarının hazırlanması ve vize sürecinde danışmanlık sağlıyoruz.",
  },
  {
    question: "Konaklama konusunda destek veriyor musunuz?",
    answer:
      "Evet. Üniversite yurtları ve uygun konaklama seçenekleri konusunda destek sağlıyoruz.",
  },
  {
    question: "Danışmanlık süreci ne kadar sürüyor?",
    answer:
      "Üniversiteye göre değişmekle birlikte başvurudan kabul mektubuna kadar süreç genellikle birkaç hafta içinde tamamlanır.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            SIK SORULAN SORULAR
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081321]">
            Merak Ettikleriniz
          </h2>
        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#081321]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 leading-8">
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