import { Leaf, Users, Sparkles, Droplets, Sun, Truck, ShieldCheck, CheckCircle } from 'lucide-react';
import { config } from '../config';

export function Benefits() {
  const benefitIcons = [
    <Leaf className="w-5 h-5 text-[#DFB76C]" />,
    <Users className="w-5 h-5 text-[#DFB76C]" />,
    <Droplets className="w-5 h-5 text-[#DFB76C]" />,
    <Sun className="w-5 h-5 text-[#DFB76C]" />,
    <Truck className="w-5 h-5 text-[#DFB76C]" />,
    <ShieldCheck className="w-5 h-5 text-[#DFB76C]" />,
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-[#0E0E10] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#DFB76C] font-sans font-semibold tracking-[0.25em] uppercase text-[10px] md:text-xs">
            The Botanical Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mt-3 mb-4 leading-tight">
            Formulated with Pure Intention
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
            Husn e Zar is created to respect your skin's natural balance. Formulated with 100% natural ingredients, suitable for all skin types.
          </p>
        </div>

        {/* Architectural 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {config.product.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#141418] p-8 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1C1C22] border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {benefitIcons[index]}
                </div>
                <h3 className="text-base font-serif font-medium text-white mb-3 tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DFB76C] font-sans font-medium tracking-wider uppercase">
                <span>0{index + 1} &bull; Quality Standard</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Facts Strip */}
        <div className="mt-16 bg-[#141418] rounded-xl p-6 border border-[#D4AF37]/30 flex flex-wrap items-center justify-around gap-6 text-center shadow-lg">
          <div>
            <div className="font-serif text-2xl md:text-3xl text-gold-gradient font-light">100%</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Natural Ingredients</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/15"></div>
          <div>
            <div className="font-serif text-2xl md:text-3xl text-white font-light">All Types</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Skin Compatibility</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/15"></div>
          <div>
            <div className="font-serif text-2xl md:text-3xl text-white font-light">Free</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Delivery in Sadiqabad</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/15"></div>
          <div>
            <div className="font-serif text-2xl md:text-3xl text-[#DFB76C] font-light">50g</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 mt-1">Sealed Glass Jar</div>
          </div>
        </div>

      </div>
    </section>
  );
}

