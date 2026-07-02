import { faqItems } from "./data/faq";

export const siteConfig = {
  name: "Odak Danışmanlık",
  title: "Rusya Üniversite Danışmanlığı | Odak Danışmanlık",
  description:
    "Rusya'da üniversite eğitimi için üniversite seçimi, başvuru, kabul mektubu, vize, konaklama ve kayıt süreçlerinde profesyonel danışmanlık.",
  url: "https://odakdanismanlik.org",
  locale: "tr_TR",
  language: "tr-TR",
  themeColor: "#081321",
  email: "berk04314@gmail.com",
  phone: "+905459554223",
  displayPhone: "+90 545 955 42 23",
  whatsappUrl: "https://wa.me/905459554223",
  instagramHandle: "@odakrusyadaegitim",
  instagramUrl: "https://instagram.com/odakrusyadaegitim",
  logo: "/logo.png",
  logoMark: "/logo-mark.png",
  logoWidth: 620,
  logoHeight: 534,
  ogImage: "/logo-og.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  keywords: [
    "Rusya üniversite danışmanlığı",
    "Rusya'da üniversite okumak",
    "Rusya eğitim danışmanlığı",
    "Rusya üniversite başvurusu",
    "Rusya vize danışmanlığı",
    "Rusya tıp eğitimi",
    "Rusya mühendislik eğitimi",
    "Odak Danışmanlık",
  ],
};

const serviceItems = [
  {
    name: "Üniversite Yerleştirme",
    description: "Öğrenci hedeflerine uygun Rus üniversitesini belirleme.",
  },
  {
    name: "Başvuru ve Vize",
    description: "Başvuru evrakları, kabul mektubu ve vize süreci desteği.",
  },
  {
    name: "Konaklama",
    description: "Yurt ve alternatif konaklama seçenekleri için danışmanlık.",
  },
  {
    name: "Hazırlık Eğitimi",
    description: "Rusça hazırlık ve dil eğitimi süreci için yönlendirme.",
  },
  {
    name: "Havalimanı Karşılama",
    description: "Rusya'ya varış sonrasında karşılama ve kayıt desteği.",
  },
  {
    name: "7/24 Destek",
    description: "Eğitim süreci boyunca kesintisiz öğrenci desteği.",
  },
];

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl(siteConfig.logo),
      image: absoluteUrl(siteConfig.ogImage),
      email: siteConfig.email,
      telephone: siteConfig.phone,
      sameAs: [siteConfig.instagramUrl],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: "customer support",
          areaServed: ["TR", "RU"],
          availableLanguage: ["Turkish"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.ogImage),
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
      },
    },
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service`,
      name: "Rusya Üniversite Danışmanlığı",
      serviceType: "Yurt dışı eğitim danışmanlığı",
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Türkiye",
        },
        {
          "@type": "Country",
          name: "Rusya",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Rusya eğitim danışmanlığı hizmetleri",
        itemListElement: serviceItems.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
