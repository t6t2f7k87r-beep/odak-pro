 "use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../../data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F8FAFC] py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        <div className="text-center">

          <span className="font-bold uppercase tracking-[0.3em] text-[#C9A227]">
            SIK SORULAN SORULAR
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#081321] sm:text-5xl">
            Merak Ettikleriniz
          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {faqItems.map((faq, index) => (

            <div
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >

              <button
                type="button"
                aria-expanded={open === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-5 p-7 text-left"
              >

                <span className="text-lg font-semibold text-[#081321]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div
                  id={`faq-answer-${index}`}
                  className="px-7 pb-7 leading-8 text-slate-600"
                >
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
