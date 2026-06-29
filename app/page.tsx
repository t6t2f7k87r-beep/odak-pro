 import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import WhyUs from "./components/home/WhyUs";
import Universities from "./components/home/Universities";
import Process from "./components/home/Process";
import Services from "./components/home/Services";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyUs />
        <Universities />
        <Process />
        <Services />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}