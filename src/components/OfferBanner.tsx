import { Sparkles, Truck, Phone } from 'lucide-react';
import { config } from '../config';

export function OfferBanner() {
  return (
    <div className="bg-[#141418] border-b border-[#D4AF37]/25 py-2 px-4 text-xs font-sans text-white/90">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-center">
        <div className="inline-flex items-center space-x-1.5 text-[#DFB76C] font-semibold tracking-wider uppercase text-[10px]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{config.product.offer.badge}</span>
        </div>

        <span className="hidden sm:inline text-white/20">|</span>

        <div className="inline-flex items-center space-x-2 text-[11px] tracking-wide">
          <span className="text-white/50 line-through tabular-nums">
            {config.product.currency} {config.product.originalPrice.toLocaleString()}
          </span>
          <span className="font-bold text-[#DFB76C] tabular-nums">
            {config.product.currency} {config.product.salePrice.toLocaleString()}
          </span>
          <span className="bg-[#D4AF37]/20 text-[#F5E8C7] border border-[#D4AF37]/30 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
            Save {config.product.currency} {config.product.offer.savings}
          </span>
        </div>

        <span className="hidden sm:inline text-white/20">|</span>

        <div className="inline-flex items-center space-x-1.5 text-[11px] text-white/80 font-medium tracking-wide">
          <Truck className="w-3.5 h-3.5 text-[#DFB76C]" />
          <span>Free Delivery in Sadiqabad</span>
        </div>

        <span className="hidden md:inline text-white/20">|</span>

        <div className="hidden md:inline-flex items-center space-x-1 text-[11px] text-white/80">
          <Phone className="w-3 h-3 text-[#DFB76C]" />
          <a href={`tel:${config.contact.phoneDisplay}`} className="hover:text-[#DFB76C] font-mono tracking-wider">
            {config.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

