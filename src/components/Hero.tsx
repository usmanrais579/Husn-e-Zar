import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, Truck, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { config } from '../config';
import userLogoImg from '../assets/images/user_husn_e_zar_logo.png';
import heroJarImg from '../assets/images/luxury_black_gold_jar_1790502939766.jpg';

export function Hero() {
  const [activeImage, setActiveImage] = useState<'brand' | 'jar'>('brand');
  const whatsappUrl = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(config.contact.whatsappPreFilled)}`;

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 bg-[#0B0B0C] border-b border-[#D4AF37]/20 overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#DFB76C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Conversion */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            {/* Kicker Tag */}
            <div className="inline-flex items-center justify-center lg:justify-start space-x-2.5 mb-5 flex-wrap gap-y-2">
              <span className="text-[#DFB76C] text-[10px] md:text-xs font-sans font-semibold tracking-[0.25em] uppercase border-b border-[#D4AF37]/40 pb-0.5">
                {config.product.offer.badge}
              </span>
              <span className="text-white/30 hidden sm:inline">&bull;</span>
              <span className="text-white/80 text-[11px] font-sans font-medium tracking-wide flex items-center">
                <Truck className="w-3.5 h-3.5 mr-1 inline text-[#DFB76C]" />
                {config.product.offer.delivery}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-[1.12] tracking-tight mb-6 [text-wrap:balance]">
              Natural Care, <br />
              <span className="italic font-normal text-gold-gradient">Beautiful Confidence.</span>
            </h1>

            {/* Description */}
            <p className="text-white/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-sans">
              Handcrafted with a focus on 100% natural ingredients, delivering gentle hydration, supple softness, and everyday nourishment for all skin types.
            </p>

            {/* Pricing Module */}
            <div className="bg-[#141418] rounded-2xl p-5 md:p-6 mb-8 border border-[#D4AF37]/30 max-w-lg mx-auto lg:mx-0 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl md:text-4xl font-light text-white tracking-tight tabular-nums">
                    {config.product.currency} {config.product.salePrice.toLocaleString()}
                  </span>
                  <span className="text-base text-white/40 line-through tabular-nums">
                    {config.product.currency} {config.product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="inline-flex items-center bg-gradient-to-r from-[#DFB76C] to-[#C99738] text-[#0B0B0C] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Save {config.product.currency} {config.product.offer.savings} ({config.product.offer.discountPercentage})
                </div>
              </div>
              <p className="text-xs text-white/60 flex items-center justify-center lg:justify-start space-x-2 pt-2 border-t border-white/10 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFB76C]"></span>
                <span>Includes 50g Luxury Jar &bull; Free Delivery in Sadiqabad &bull; Cash on Delivery</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="#order"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DFB76C] via-[#D4AF37] to-[#C99738] hover:from-[#E8C172] hover:to-[#DFB76C] text-[#0B0B0C] px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_28px_rgba(212,175,55,0.5)] active:scale-[0.98]"
              >
                <span>Order Now ({config.product.currency} {config.product.salePrice.toLocaleString()})</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 border border-[#25D366]/50 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all"
              >
                <MessageCircle className="w-4 h-4 mr-1 fill-current" />
                <span>WhatsApp: {config.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Official Link Badge (Requirement 10) */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <a
                href={config.externalLinks.officialShowcase}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[11px] font-sans text-[#DFB76C] hover:text-white bg-[#15151A] hover:bg-[#1C1C22] border border-[#D4AF37]/35 rounded-full px-4 py-2 transition-all group"
                title="View Official Brand Showcase and Photo URL"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                <span>View Official Photo Showcase & Gallery</span>
                <ExternalLink className="w-3 h-3 ml-1 opacity-70 group-hover:opacity-100" />
              </a>
            </div>

            {/* Proof Points */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-[11px] text-white/60 font-sans">
              <div className="flex items-center space-x-1.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB76C] shrink-0" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center space-x-1.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB76C] shrink-0" />
                <span>All Skin Types</span>
              </div>
              <div className="flex items-center space-x-1.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFB76C] shrink-0" />
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Brand & Product Photography */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Product Frame with Architectural Outline */}
              <div className="relative rounded-2xl overflow-hidden bg-[#16161A] border border-[#D4AF37]/35 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group">
                <img 
                  src={activeImage === 'brand' ? userLogoImg : heroJarImg} 
                  alt={activeImage === 'brand' ? "Husn e Zar official brand emblem" : "Husn e Zar luxury black and gold skincare jar"}
                  className="w-full aspect-[4/3] object-contain sm:object-cover bg-black transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle Luxury Corner Badges */}
                <div className="absolute top-4 left-4 bg-[#0B0B0C]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-md">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFB76C]">
                    {activeImage === 'brand' ? 'Official Brand Image' : '50g • 100% Natural'}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#0B0B0C]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white shadow-md">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-white/90">
                    Husn e Zar Original
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Gold Frame Accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#D4AF37]/30 rounded-2xl -z-10 pointer-events-none hidden sm:block"></div>
            </div>

            {/* Image Selector Thumbnails */}
            <div className="flex items-center space-x-3 mt-4">
              <button
                type="button"
                onClick={() => setActiveImage('brand')}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                  activeImage === 'brand'
                    ? 'bg-[#DFB76C] text-[#0B0B0C] font-bold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#18181E] text-white/70 hover:text-white border border-white/10'
                }`}
              >
                <div className="w-4 h-4 rounded-full overflow-hidden bg-black shrink-0">
                  <img src={userLogoImg} alt="Brand thumbnail" className="w-full h-full object-cover" />
                </div>
                <span>Brand Identity</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveImage('jar')}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                  activeImage === 'jar'
                    ? 'bg-[#DFB76C] text-[#0B0B0C] font-bold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#18181E] text-white/70 hover:text-white border border-white/10'
                }`}
              >
                <div className="w-4 h-4 rounded-full overflow-hidden bg-black shrink-0">
                  <img src={heroJarImg} alt="Packaging thumbnail" className="w-full h-full object-cover" />
                </div>
                <span>Product Jar</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

