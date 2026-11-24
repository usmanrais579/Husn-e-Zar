import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { config } from '../config';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0B0B0C] border-b border-[#D4AF37]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#DFB76C] font-sans font-semibold tracking-[0.25em] uppercase text-[10px] md:text-xs">
            Clarity & Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mt-3 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
            Clear information about ingredients, delivery terms, and ordering Husn e Zar.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {config.product.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#D4AF37]/50 bg-[#141418] shadow-lg' 
                    : 'border-white/10 bg-[#121215] hover:border-[#D4AF37]/30'
                }`}
              >
                <button
                  type="button"
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-hidden cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-white font-normal pr-6">
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#D4AF37] text-[#0B0B0C] rotate-180' 
                      : 'bg-[#1C1C22] border border-white/10 text-white/70'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-white/70 leading-relaxed font-sans border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Help Kicker */}
        <div className="mt-12 p-6 rounded-xl bg-[#141418] border border-[#D4AF37]/30 text-center text-xs font-sans text-white/70 flex flex-col sm:flex-row items-center justify-center gap-3">
          <span>Need direct assistance? Contact us on WhatsApp or Call:</span>
          <a 
            href={`https://wa.me/${config.contact.whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center space-x-1.5 text-[#DFB76C] font-mono font-semibold tracking-wider hover:underline"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
            <span>{config.contact.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

