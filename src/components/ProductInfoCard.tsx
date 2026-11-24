import { ShieldCheck, Truck, Sparkles, Clock, Lock } from 'lucide-react';
import { config } from '../config';
import brandLogo from '../assets/images/user_husn_e_zar_logo.png';

export function ProductInfoCard() {
  return (
    <div className="bg-[#141418] rounded-2xl border border-[#D4AF37]/30 shadow-xl p-6 sm:p-8 flex flex-col justify-between h-full text-white">
      <div>
        {/* Top Product Header */}
        <div className="flex items-center space-x-4 pb-6 border-b border-white/10">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-black border border-[#D4AF37]/40 shrink-0 shadow-md p-1">
            <img 
              src={brandLogo} 
              alt="Husn e Zar official brand" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFB76C] block">
              {config.product.offer.badge}
            </span>
            <h3 className="font-serif text-2xl text-white font-light">
              {config.product.name}
            </h3>
            <p className="text-xs text-white/60 font-sans mt-0.5">
              {config.product.netWeight} &bull; 100% Natural Formulation
            </p>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="py-6 border-b border-white/10">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs text-white/60 uppercase tracking-wider font-sans">Promotional Price</span>
            <div className="text-right">
              <span className="text-sm text-white/40 line-through mr-2 tabular-nums">
                {config.product.currency} {config.product.originalPrice.toLocaleString()}
              </span>
              <span className="text-3xl font-light text-white tabular-nums">
                {config.product.currency} {config.product.salePrice.toLocaleString()}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs pt-1">
            <span className="text-[#DFB76C] font-medium">Azadi Celebration Savings</span>
            <span className="bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#F5E8C7] font-bold px-2 py-0.5 rounded-full text-[11px]">
              - {config.product.currency} {config.product.offer.savings} (35% OFF)
            </span>
          </div>
        </div>

        {/* Value Points */}
        <div className="py-6 space-y-3.5 border-b border-white/10 text-xs font-sans text-white/90">
          <div className="flex items-start space-x-3">
            <Truck className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-white">Free Doorstep Delivery in Sadiqabad</span>
              <span className="text-white/60 text-[11px]">No courier fee or hidden delivery charges.</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <ShieldCheck className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-white">Cash on Delivery (COD)</span>
              <span className="text-white/60 text-[11px]">Pay upon physical parcel receipt.</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block text-white">Prompt Local Delivery</span>
              <span className="text-white/60 text-[11px]">Direct courier service across Sadiqabad.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Seal Footer */}
      <div className="pt-6">
        <div className="bg-[#1A1A20] p-4 rounded-xl border border-white/10 flex items-center justify-between text-[11px] text-white/70">
          <span className="flex items-center space-x-1.5 font-medium text-white">
            <Sparkles className="w-3.5 h-3.5 text-[#DFB76C]" />
            <span>100% Natural Formula</span>
          </span>
          <span className="text-[#DFB76C] font-semibold">Sealed Product</span>
        </div>
      </div>
    </div>
  );
}

