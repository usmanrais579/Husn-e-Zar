import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageCircle, Truck, ShieldCheck, ArrowRight, RotateCcw } from 'lucide-react';
import { config } from '../config';

export function OrderForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: 'Sadiqabad',
    address: '',
    quantity: 1,
    notes: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const totalPrice = config.product.salePrice * formData.quantity;
  const totalSavings = config.product.offer.savings * formData.quantity;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value, 10) || 1 : value,
    }));
  };

  const generateOrderId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `HZ-PK-${randomNum}`;
  };

  const getWhatsAppOrderText = (customOrderId?: string) => {
    return `*New Order: ${config.product.name}*\n` +
      (customOrderId ? `*Order Reference:* ${customOrderId}\n` : '') +
      `*Quantity:* ${formData.quantity} Jar(s) (50g each)\n` +
      `*Total Price:* ${config.product.currency} ${totalPrice.toLocaleString()} (Cash on Delivery)\n` +
      `*Delivery:* Free Delivery in Sadiqabad\n\n` +
      `*Customer Information:*\n` +
      `*Name:* ${formData.fullName || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*City:* ${formData.city || 'Sadiqabad'}\n` +
      `*Delivery Address:* ${formData.address || 'Not provided'}\n` +
      (formData.notes ? `*Special Notes:* ${formData.notes}\n` : '') +
      `\nPlease confirm my order. Thank you!`;
  };

  const getWhatsAppUrl = (customOrderId?: string) => {
    return `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(getWhatsAppOrderText(customOrderId))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const newId = generateOrderId();
      setOrderId(newId);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  if (isSuccess) {
    return (
      <div className="bg-[#141418] rounded-2xl border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-10 text-left text-white">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#DFB76C]/15 border border-[#DFB76C]/40 text-[#DFB76C] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFB76C] block">
              Order Recorded
            </span>
            <h3 className="font-serif text-2xl text-white font-light">
              Thank You, {formData.fullName}!
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-sans">
          Your order has been recorded. Our team will verify your address at <strong className="text-white font-mono">{formData.phone}</strong> before courier dispatch.
        </p>

        {/* Receipt Box */}
        <div className="bg-[#191920] rounded-xl p-5 border border-white/10 mb-6 space-y-3 text-xs font-sans">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="text-white/60">Order Reference</span>
            <span className="font-mono font-bold text-[#DFB76C] tracking-wider">{orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60">Product & Qty</span>
            <span className="font-medium text-white">{config.product.name} &times; {formData.quantity}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60">Delivery City</span>
            <span className="font-medium text-white">{formData.city}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/60">Delivery Fee</span>
            <span className="font-bold text-[#DFB76C]">FREE (Azadi Sale)</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-white/10 text-sm">
            <span className="font-bold text-white">Payable (Cash on Delivery)</span>
            <span className="font-serif text-lg font-bold text-gold-gradient tabular-nums">
              {config.product.currency} {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={getWhatsAppUrl(orderId)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-semibold shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Confirm on WhatsApp ({config.contact.phoneDisplay})</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({ fullName: '', phone: '', city: 'Sadiqabad', address: '', quantity: 1, notes: '' });
            }}
            className="inline-flex items-center justify-center space-x-2 border border-white/20 text-white/80 hover:text-white hover:bg-white/5 py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" />
            <span>New Order</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#141418] rounded-2xl border border-[#D4AF37]/30 shadow-2xl p-6 sm:p-8 text-white">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-white/10">
        <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#DFB76C] block mb-1">
          Direct Doorstep Delivery
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
          Order {config.product.name}
        </h3>
        <p className="text-xs text-white/60 font-sans mt-1">
          Pay in cash upon doorstep delivery. Delivery is completely free in Sadiqabad.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-white/90 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
            Full Name <span className="text-[#DFB76C]">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Muhammad Usman"
            className="w-full bg-[#1A1A20] border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-hidden focus:border-[#D4AF37] transition-all"
          />
        </div>

        {/* Phone & City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-white/90 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
              WhatsApp / Mobile Number <span className="text-[#DFB76C]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="0300 1234567"
              className="w-full bg-[#1A1A20] border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-hidden focus:border-[#D4AF37] transition-all"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-white/90 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
              City <span className="text-[#DFB76C]">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Sadiqabad"
              className="w-full bg-[#1A1A20] border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-hidden focus:border-[#D4AF37] transition-all"
            />
          </div>
        </div>

        {/* Complete Address */}
        <div>
          <label htmlFor="address" className="block text-white/90 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
            Delivery Address (House / Street / Area) <span className="text-[#DFB76C]">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="e.g. House #14, Street 2, Model Town, near Central Park"
            className="w-full bg-[#1A1A20] border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-hidden focus:border-[#D4AF37] transition-all"
          />
        </div>

        {/* Quantity Selector */}
        <div>
          <label htmlFor="quantity" className="block text-white/90 font-medium mb-1.5 uppercase tracking-wider text-[10px]">
            Select Quantity
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((qty) => {
              const isSelected = formData.quantity === qty;
              return (
                <button
                  type="button"
                  key={qty}
                  onClick={() => setFormData(prev => ({ ...prev, quantity: qty }))}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-[#D4AF37] bg-[#222228] shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                      : 'border-white/15 bg-[#18181E] hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div className="font-medium text-xs text-white">
                    {qty} {qty === 1 ? 'Jar' : 'Jars'}
                  </div>
                  <div className="font-serif text-sm font-semibold text-[#DFB76C] mt-0.5 tabular-nums">
                    {config.product.currency} {(config.product.salePrice * qty).toLocaleString()}
                  </div>
                  {qty > 1 && (
                    <div className="text-[9px] text-[#DFB76C] font-bold mt-0.5">
                      Save {config.product.currency} {(config.product.offer.savings * qty).toLocaleString()}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Special Notes (Optional) */}
        <div>
          <label htmlFor="notes" className="block text-white/70 font-medium mb-1 uppercase tracking-wider text-[10px]">
            Delivery Notes (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={2}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Special delivery instructions or preferred timing..."
            className="w-full bg-[#1A1A20] border border-white/15 rounded-lg px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-hidden focus:border-[#D4AF37] transition-all resize-none"
          ></textarea>
        </div>

        {/* Summary Row */}
        <div className="bg-[#1A1A20] p-4 rounded-xl border border-white/10 space-y-1.5 text-xs">
          <div className="flex justify-between text-white/70">
            <span>Subtotal ({formData.quantity} Jar{formData.quantity > 1 ? 's' : ''})</span>
            <span className="tabular-nums text-white">{config.product.currency} {totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-[#DFB76C]">
            <span>Doorstep Shipping (Sadiqabad)</span>
            <span className="font-semibold uppercase text-[10px]">FREE</span>
          </div>
          <div className="flex justify-between font-medium text-white pt-2 border-t border-white/10 text-sm">
            <span>Total (Cash on Delivery)</span>
            <span className="font-serif text-base font-bold text-gold-gradient tabular-nums">
              {config.product.currency} {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#DFB76C] via-[#D4AF37] to-[#C99738] hover:from-[#E8C172] hover:to-[#DFB76C] text-[#0B0B0C] py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_28px_rgba(212,175,55,0.5)] disabled:opacity-60 flex items-center justify-center space-x-2 cursor-pointer"
          >
            {isSubmitting ? (
              <span>Confirming Order...</span>
            ) : (
              <>
                <span>Confirm Cash on Delivery Order</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>

          <div className="relative flex py-1 items-center">
            <div className="grow border-t border-white/10"></div>
            <span className="shrink mx-3 text-[10px] uppercase tracking-widest text-white/40 font-semibold">Or Order Directly Via WhatsApp</span>
            <div className="grow border-t border-white/10"></div>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-2 border border-[#25D366]/50 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Instant WhatsApp Order ({config.contact.phoneDisplay})</span>
          </a>
        </div>
      </form>
    </div>
  );
}

