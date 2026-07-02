import {
  GraduationCap,
  ShieldCheck,
  Globe2,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "40+ Üniversite",
    text: "Rusya'nın önde gelen devlet üniversitelerine doğrudan başvuru desteği.",
  },
  {
    icon: ShieldCheck,
    title: "%98 Vize Başarısı",
    text: "Vize ve resmi evrak süreçlerinde profesyonel danışmanlık.",
  },
  {
    icon: Globe2,
    title: "Türkiye & Rusya",
    text: "Her iki ülkede de öğrencilerimize kesintisiz destek sunuyoruz.",
  },
  {
    icon: BadgeCheck,
    title: "Güvenilir Hizmet",
    text: "Başvurudan mezuniyete kadar yanınızda olan danışmanlık.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A227]/40 hover:shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A227]/10">
              <item.icon className="h-8 w-8 text-[#C9A227]" />
            </div>

            <h3 className="text-xl font-black text-[#081321]">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
