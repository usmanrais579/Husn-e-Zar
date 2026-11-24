import { motion } from 'motion/react';
import { config } from '../config';
import textureImg from '../assets/images/skincare_texture_macro_1790498926553.jpg';
import { Sun, Moon, Info, Sparkles } from 'lucide-react';

export function HowToUse() {
  return (
    <section id="how-to-use" className="py-20 md:py-28 bg-[#0E0E10] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#DFB76C] font-sans font-semibold tracking-[0.25em] uppercase text-[10px] md:text-xs">
            Daily Beauty Ritual
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mt-3 mb-4 leading-tight">
            How to Use Husn e Zar
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
            A simple 3-step ritual designed to maximize absorption and hydrate your skin naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3 Ritual Steps */}
          <div className="lg:col-span-7 space-y-6">
            {config.product.ritualSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-[#141418] p-6 sm:p-7 rounded-xl border border-[#D4AF37]/20 flex items-start space-x-5 sm:space-x-6 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-md"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#1C1C22] border border-[#D4AF37]/40 flex items-center justify-center font-serif text-lg text-[#DFB76C]">
                  {step.step}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg text-white font-medium">
                      {step.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest text-[#DFB76C] font-semibold bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-0.5 rounded-full">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Morning vs Evening Guidance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#141418] border border-white/10 flex items-center space-x-3">
                <Sun className="w-5 h-5 text-[#DFB76C] shrink-0" />
                <div className="text-xs font-sans text-white">
                  <span className="font-semibold block">Morning Ritual</span>
                  <span className="text-white/60 text-[11px]">Protects & hydrates under daily weather.</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#141418] border border-white/10 flex items-center space-x-3">
                <Moon className="w-5 h-5 text-[#DFB76C] shrink-0" />
                <div className="text-xs font-sans text-white">
                  <span className="font-semibold block">Evening Ritual</span>
                  <span className="text-white/60 text-[11px]">Replenishes gentle hydration overnight.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skincare Texture Editorial Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden bg-[#141418] border border-[#D4AF37]/30 shadow-2xl group">
                <img 
                  src={textureImg} 
                  alt="Rich velvety cream texture swirl" 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                <div className="p-6 bg-[#16161A] border-t border-white/10">
                  <div className="flex items-center space-x-2 text-[10px] font-sans font-bold uppercase tracking-widest text-[#DFB76C] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Silky Texture Profile</span>
                  </div>
                  <h4 className="font-serif text-base text-white font-normal mb-2">
                    Weightless Botanical Absorption
                  </h4>
                  <p className="text-xs text-white/65 font-sans leading-relaxed">
                    Melts effortlessly upon application. Never leaves a heavy white cast or uncomfortable greasy residue.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Advisory Notice */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-white/60 inline-flex items-center space-x-2 bg-[#141418] px-4 py-2 rounded-full border border-white/10">
            <Info className="w-3.5 h-3.5 text-[#DFB76C] shrink-0" />
            <span>Formulated for external cosmetic application only. Individual results may naturally vary. Patch test recommended.</span>
          </p>
        </div>

      </div>
    </section>
  );
}

