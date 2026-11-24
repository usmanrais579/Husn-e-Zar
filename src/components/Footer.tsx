import { MessageCircle, Phone, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { config } from '../config';
import brandLogo from '../assets/images/user_husn_e_zar_logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-[#08080A] text-[#FAF8F5] border-t border-[#D4AF37]/25 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <a 
              href="#home" 
              className="flex items-center space-x-3.5 group mb-4"
            >
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#96721E] via-[#DFB76C] to-[#F5E8C7]">
                <img 
                  src={brandLogo} 
                  alt="Husn-e-Zar Logo" 
                  className="w-full h-full object-cover rounded-full bg-black"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif text-2xl tracking-[0.18em] font-light text-white uppercase">
                Husn <span className="italic text-[#DFB76C]">e</span> Zar
              </span>
            </a>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm mb-4">
              Handcrafted skincare cream formulated with 100% natural ingredients, suitable for all skin types.
            </p>
            <div className="inline-flex items-center space-x-2 text-[11px] text-[#DFB76C] tracking-wider uppercase font-semibold">
              <span>Formulated in Pakistan</span>
              <span>&bull;</span>
              <span>Free Delivery in Sadiqabad</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#DFB76C] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#how-to-use" className="hover:text-[#DFB76C] transition-colors">Daily Beauty Ritual</a>
              </li>
              <li>
                <a href="#ingredients" className="hover:text-[#DFB76C] transition-colors">100% Natural Care</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#DFB76C] transition-colors">Quality Standard</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DFB76C] transition-colors">Client Impressions</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DFB76C] transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a 
                  href={config.externalLinks.officialShowcase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#DFB76C] hover:underline pt-1"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  <span>Official Media Showcase</span>
                  <ExternalLink className="w-2.5 h-2.5 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#DFB76C] mb-4">
              Sadiqabad Concierge
            </h4>
            <p className="text-xs text-white/70 mb-2">
              Direct Phone: <a href={`tel:${config.contact.phoneDisplay}`} className="text-white hover:text-[#DFB76C] font-mono font-bold tracking-wider ml-1">{config.contact.phoneDisplay}</a>
            </p>
            <p className="text-xs text-white/70 mb-5">
              Location: Sadiqabad, Punjab, Pakistan
            </p>
            <a 
              href={`https://wa.me/${config.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 px-4 py-2.5 rounded-full text-xs transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp: {config.contact.phoneDisplay}</span>
            </a>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/40 gap-4">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            Cosmetic notice: Husn e Zar is a gentle botanical beauty formulation intended for external application. Results may vary depending on individual skin condition. Perform a patch test before first use.
          </p>

          <div className="flex items-center space-x-4 shrink-0">
            <span>&copy; {currentYear} {config.product.name}. All rights reserved.</span>
            <button 
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 hover:text-[#DFB76C] text-white/80 transition-colors border border-white/10"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

