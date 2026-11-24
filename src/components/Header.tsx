import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Phone, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';
import brandLogo from '../assets/images/user_husn_e_zar_logo.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyPhone = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(config.contact.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Ritual', href: '#how-to-use' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(config.contact.whatsappPreFilled)}`;

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0B0C]/95 backdrop-blur-md shadow-2xl border-b border-[#D4AF37]/25' 
          : 'bg-[#0B0B0C]/85 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-22">
          
          {/* Brand Logo & Wordmark Zone */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              className="flex items-center space-x-3.5 group cursor-pointer"
              aria-label="Husn-e-Zar Luxury Skincare Home"
            >
              {/* Prominent Circular Luxury Logo */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#96721E] via-[#DFB76C] to-[#F5E8C7] shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_22px_rgba(212,175,55,0.5)] transition-all">
                <img 
                  src={brandLogo} 
                  alt="Husn-e-Zar Luxury Brand Emblem" 
                  className="w-full h-full object-cover rounded-full bg-black"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Wordmark */}
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-light text-white group-hover:text-[#DFB76C] transition-colors uppercase">
                  Husn <span className="italic text-[#D4AF37] font-normal">e</span> Zar
                </span>
                <span className="text-[9px] uppercase tracking-[0.28em] font-sans text-[#D4AF37]/80 font-medium">
                  Haute Skincare &bull; 100% Natural
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-[11px] uppercase tracking-[0.22em] font-sans font-medium text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#DFB76C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Contact & Action Zone */}
          <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
            {/* Clickable & Copyable Phone Badge */}
            <div className="flex items-center bg-[#151518] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 rounded-full px-3.5 py-1.5 transition-all text-xs">
              <Phone className="w-3 h-3 text-[#D4AF37] mr-2 shrink-0" />
              <a 
                href={`tel:${config.contact.phoneDisplay}`}
                className="text-white hover:text-[#DFB76C] font-mono tracking-wider text-[11px] font-semibold"
                title={`Click to Call ${config.contact.phoneDisplay}`}
              >
                {config.contact.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="ml-2 pl-2 border-l border-white/15 text-[#D4AF37] hover:text-white transition-colors cursor-pointer flex items-center"
                title="Copy phone number"
                aria-label={`Copy phone number ${config.contact.phoneDisplay}`}
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>

            {/* WhatsApp Direct Header Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 px-3.5 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all"
              title={`Chat on WhatsApp ${config.contact.phoneDisplay}`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* Primary Order CTA in Metallic Gold */}
            <a
              href="#order"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#DFB76C] via-[#D4AF37] to-[#C99738] hover:from-[#E8C172] hover:to-[#DFB76C] text-[#0B0B0C] px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.16em] font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_20px_rgba(212,175,55,0.45)] cursor-pointer"
            >
              <span>Order Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center sm:hidden space-x-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] bg-[#25D366]/10 rounded-full border border-[#25D366]/30"
              aria-label={`WhatsApp ${config.contact.phoneDisplay}`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#DFB76C] transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-[#DFB76C]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#111114] border-b border-[#D4AF37]/30 shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              {/* Clickable & Copyable Phone in Mobile Drawer */}
              <div className="flex items-center justify-between bg-[#19191D] p-3 rounded-xl border border-[#D4AF37]/30 text-xs">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <a href={`tel:${config.contact.phoneDisplay}`} className="font-mono text-white text-sm font-semibold tracking-wider">
                    {config.contact.phoneDisplay}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 bg-[#D4AF37]/15 text-[#DFB76C] rounded text-[10px] uppercase font-bold tracking-wider hover:bg-[#D4AF37]/30 transition-colors flex items-center space-x-1"
                >
                  {copied ? <span>Copied!</span> : <span>Copy</span>}
                </button>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xs uppercase tracking-[0.2em] font-medium text-white/80 hover:text-[#DFB76C] py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 space-y-2">
                <a
                  href="#order"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#DFB76C] via-[#D4AF37] to-[#C99738] text-[#0B0B0C] py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-bold shadow-md"
                >
                  <span>Order Husn e Zar (Rs. 1,299)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3 rounded-full text-xs uppercase tracking-[0.15em] font-semibold shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp: {config.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

