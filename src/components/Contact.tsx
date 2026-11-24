import { useState } from 'react';
import { MessageCircle, Phone, MapPin, Copy, Check, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { config } from '../config';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(config.contact.whatsappPreFilled)}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(config.contact.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#0B0B0C] text-[#FAF8F5] relative overflow-hidden border-b border-[#D4AF37]/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#DFB76C] font-sans font-semibold tracking-[0.25em] uppercase text-[10px] md:text-xs">
            Personal Concierge
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mt-3 mb-4 leading-tight">
            Connect with Husn e Zar
          </h2>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-sans">
            Have a question about delivery in Sadiqabad or placing an order? Our customer service is directly available via phone and WhatsApp.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Direct Call & Copy Card */}
          <div className="p-6 rounded-2xl border border-[#D4AF37]/30 bg-[#141418] text-center flex flex-col items-center shadow-lg">
            <div className="w-12 h-12 rounded-full bg-[#DFB76C]/15 border border-[#DFB76C]/40 text-[#DFB76C] flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-white/50 font-sans block mb-1">
              Direct Phone Call
            </span>
            <a 
              href={`tel:${config.contact.phoneDisplay}`}
              className="font-mono text-xl text-white hover:text-[#DFB76C] transition-colors font-bold tracking-wider mb-2 block"
              title={`Click to Call ${config.contact.phoneDisplay}`}
            >
              {config.contact.phoneDisplay}
            </a>

            {/* Copyable Action Button */}
            <button
              type="button"
              onClick={handleCopyPhone}
              className="inline-flex items-center space-x-1.5 bg-[#1F1F26] hover:bg-[#282832] border border-[#D4AF37]/30 text-[#DFB76C] text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
              aria-label={`Copy phone number ${config.contact.phoneDisplay}`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied {config.contact.phoneDisplay}!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Number</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Direct Chat Card */}
          <div className="p-6 rounded-2xl border border-[#25D366]/40 bg-[#141418] text-center flex flex-col items-center shadow-lg">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center mb-3">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-white/50 font-sans block mb-1">
              Official WhatsApp Helpline
            </span>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xl text-white hover:text-[#25D366] transition-colors font-bold tracking-wider mb-2 block"
            >
              {config.contact.phoneDisplay}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/50 text-[#25D366] hover:text-white text-xs px-3.5 py-1.5 rounded-full transition-all font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>

          {/* Distribution Center Card */}
          <div className="p-6 rounded-2xl border border-[#D4AF37]/30 bg-[#141418] text-center flex flex-col items-center shadow-lg">
            <div className="w-12 h-12 rounded-full bg-[#DFB76C]/15 border border-[#DFB76C]/40 text-[#DFB76C] flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-white/50 font-sans block mb-1">
              Delivery Center
            </span>
            <span className="font-serif text-lg text-white mb-2">
              {config.contact.locationText}
            </span>
            <span className="text-[11px] text-white/60 bg-[#1F1F26] px-3 py-1 rounded-full border border-white/10">
              Free Delivery Across Sadiqabad
            </span>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp: {config.contact.phoneDisplay}</span>
          </a>

          <a
            href="#order"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DFB76C] via-[#D4AF37] to-[#C99738] text-[#0B0B0C] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.16em] font-bold transition-all shadow-lg"
          >
            <span>Order Now (Rs. 1,299)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* External Link Section (Requirement 10) */}
        <div className="mt-10 p-5 rounded-2xl bg-[#141418] border border-[#D4AF37]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFB76C] block">
              Official Media & Asset Verification
            </span>
            <p className="text-xs text-white/70 mt-0.5">
              Access the high-resolution photo archive, digital assets, and brand showcase.
            </p>
          </div>
          <a
            href={config.externalLinks.officialShowcase}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#1C1C22] hover:bg-[#252530] text-[#DFB76C] hover:text-white border border-[#D4AF37]/40 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Brand Showcase</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
}

