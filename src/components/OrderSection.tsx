import { ProductInfoCard } from './ProductInfoCard';
import { OrderForm } from './OrderForm';

export function OrderSection() {
  return (
    <section id="order" className="py-20 md:py-28 bg-[#0B0B0C] border-b border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#DFB76C] font-sans font-semibold tracking-[0.25em] uppercase text-[10px] md:text-xs">
            Simple Checkout
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mt-3 mb-4 leading-tight">
            Reserve Your Jar of Husn e Zar
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans">
            Free doorstep delivery across Sadiqabad. Pay cash on delivery once you have received your sealed package.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 flex">
            <div className="w-full">
              <ProductInfoCard />
            </div>
          </div>
          <div className="lg:col-span-7 flex">
            <div className="w-full">
              <OrderForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

