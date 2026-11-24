import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OfferBanner } from './components/OfferBanner';
import { Benefits } from './components/Benefits';
import { Ingredients } from './components/Ingredients';
import { HowToUse } from './components/HowToUse';
import { OrderSection } from './components/OrderSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0B0B0C] text-[#FAF8F5] selection:bg-[#D4AF37] selection:text-[#0B0B0C]">
      <OfferBanner />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Ingredients />
        <HowToUse />
        <OrderSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

