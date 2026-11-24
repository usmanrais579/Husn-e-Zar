import { motion } from 'motion/react';
import { config } from '../config';
import ingredientsFlatlayImg from '../assets/images/botanical_ingredients_flatlay_1790498915841.jpg';
import { Sparkles, Info } from 'lucide-react';

export function Ingredients() {
  return (
    <section id="ingredients" className="py-20 md:py-28 bg-[#0B0B0C] text-[#FAF8F5] relative overflow-hidden border-b border-[#D4AF37]/20">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#DFB76C] font-sans font-semibold tracking-[0.25em] uppercase text-[10px] md:text-xs">
            Pure & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mt-3 mb-4 leading-tight">
            100% Natural Ingredients
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
            Every batch of Husn e Zar is handcrafted using selected natural components to deliver gentle hydration and daily care.
          </p>
        </div>

        {/* Feature Split: Visual Imagery + Ingredients List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Ingredients Visual Editorial Frame */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-black/60 group">
              <img 
                src={ingredientsFlatlayImg} 
                alt="Natural botanical extracts and herbal ingredients"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFB76C] block mb-1">
                  Nature-Inspired Formulation
                </span>
                <h4 className="font-serif text-lg text-white font-normal mb-1">
                  100% Natural Care
                </h4>
                <p className="text-white/70 text-xs font-sans">
                  Specially formulated to be gentle on all skin types.
                </p>
              </div>
            </div>

            {/* Natural Formulation Notice Box */}
            <div className="mt-6 p-5 rounded-xl border border-[#D4AF37]/30 bg-[#141418] flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#DFB76C]" />
              </div>
              <div className="text-xs font-sans">
                <p className="font-medium text-white">Gentle & Skin-Friendly</p>
                <p className="text-white/60 text-[11px] mt-0.5">Please check the product packaging for the complete ingredient list.</p>
              </div>
            </div>
          </div>

          {/* Right: Detailed Ingredients Catalog */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {config.product.ingredients.map((item) => (
                <div 
                  key={item.id}
                  className="p-5 md:p-6 rounded-xl border border-[#D4AF37]/20 bg-[#141418] hover:bg-[#1A1A20] hover:border-[#D4AF37]/50 transition-all duration-300 shadow-md"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-mono tabular-nums text-[#DFB76C] tracking-wider font-semibold">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-base text-white font-medium mb-1">
                    {item.name}
                  </h3>

                  <div className="text-[11px] uppercase tracking-wider text-[#DFB76C] font-sans font-medium mb-2.5">
                    {item.role}
                  </div>

                  <p className="text-xs text-white/65 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Note bar */}
            <div className="mt-6 p-4 rounded-xl bg-[#141418] border border-white/10 flex items-center space-x-3 text-xs text-white/70">
              <Info className="w-4 h-4 text-[#DFB76C] shrink-0" />
              <span>Please check the product packaging for the complete ingredient list. Suitable for all skin types.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

