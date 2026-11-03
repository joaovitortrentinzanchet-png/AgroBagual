import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

const NavLink = ({ text, href }: { text: string; href: string; key?: string }) => {
  return (
    <a href={href} className="nav-link-item">
      <div className="nav-text-container">
        {text.split('').map((char, i) => (
          <span key={i} className="char-wrapper">
            <span className="char char-default" style={{ transitionDelay: `${i * 0.03}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
            <span className="char char-hover" style={{ transitionDelay: `${i * 0.03}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </div>
      <div className="nav-underline"></div>
    </a>
  );
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'SemeIA', href: '#semeia' },
    { name: 'GPS Agrícola', href: '#gps' },
    { name: 'Promoções', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header id="main-nav" className={`glass-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          {/* Logo with clean emblem & brand name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white p-1 shadow-[0_0_15px_rgba(245,158,11,0.25)] border border-amber-400/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.08.13_f522f888.jpeg"
                alt="AgroBagual Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white flex items-center">
              Agro<span className="text-gradient">Bagual</span>
            </span>
          </a>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} text={link.name} href={link.href} />
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <AnimatedButton
              textDef="Começar"
              textHov="Entrar"
              size="sm"
              onClick={() => { window.location.href = '#pricing'; }}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white p-2.5 bg-black/50 rounded-xl backdrop-blur-md border border-white/10 shadow-lg"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-agro-black/98 backdrop-blur-xl pt-24 px-6 overflow-y-auto max-h-screen pb-12 md:hidden">
          <div className="flex flex-col gap-2 max-w-sm mx-auto">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-2">
              <div className="w-10 h-10 rounded-full bg-white p-1 shadow-[0_0_15px_rgba(245,158,11,0.25)] border border-amber-400/40 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.08.13_f522f888.jpeg"
                  alt="AgroBagual Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white block">
                  Agro<span className="text-gradient">Bagual</span>
                </span>
                <span className="text-xs text-gray-400">O futuro do campo</span>
              </div>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-200 hover:text-agro-neon transition-colors border-b border-white/5 py-3.5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-agro-neon/40 text-xs">→</span>
              </a>
            ))}
            <div className="mt-6 flex justify-center w-full">
              <AnimatedButton
                textDef="Começar"
                textHov="Entrar"
                size="md"
                className="w-full mobile-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '#pricing';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
