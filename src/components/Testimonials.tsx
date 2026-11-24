import { Star, CheckCircle } from 'lucide-react';
import { config } from '../config';

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#0E0E10] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#DFB76C] font-sans font-semibold tracking-[0.25em] uppercase text-[10px] md:text-xs">
            Client Impressions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mt-3 mb-4 leading-tight">
            Voices of Radiance
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
            Community feedback from customers in Sadiqabad who have made Husn e Zar their daily natural skincare routine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-xl mx-auto">
          {config.product.testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-[#141418] p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/30 flex flex-col justify-between hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 mb-5 text-[#DFB76C]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-mono font-medium text-white ml-2">5.0</span>
                </div>

                {/* Quote */}
                <p className="text-white/80 text-sm leading-relaxed font-sans italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-white/50 font-sans">
                    {review.location}
                  </p>
                </div>

                <div className="flex items-center space-x-1 text-[10px] uppercase tracking-wider text-[#DFB76C] font-sans font-semibold bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-0.5 rounded-full">
                  <span>Community Feedback</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Community Notice */}
        <div className="mt-12 text-center text-xs text-white/50 font-sans">
          <span>Proudly serving customers in Sadiqabad with 100% natural herbal care.</span>
        </div>

      </div>
    </section>
  );
}

