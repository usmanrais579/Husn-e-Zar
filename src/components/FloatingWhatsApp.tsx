import { MessageCircle } from 'lucide-react';
import { config } from '../config';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(config.contact.whatsappPreFilled)}`;

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-200 group flex items-center justify-center cursor-pointer border border-white/20"
        aria-label={`Order Husn e Zar on WhatsApp ${config.contact.phoneDisplay}`}
        title={`WhatsApp ${config.contact.phoneDisplay}`}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        
        {/* Desktop Tooltip */}
        <span className="hidden sm:inline-block absolute right-full mr-3.5 bg-[#141418] text-white text-[11px] font-sans font-medium uppercase tracking-wider py-1.5 px-3.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#D4AF37]/40">
          WhatsApp: {config.contact.phoneDisplay}
        </span>
        
        {/* Subtle glow ring */}
        <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-25 pointer-events-none"></span>
      </a>
    </aside>
  );
}

