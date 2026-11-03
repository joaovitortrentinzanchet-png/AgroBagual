import React from 'react';

const HoverLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a href={href} className="nav-link-item inline-block">
      <div className="nav-text-container" style={{ textTransform: 'none', fontSize: '14px', color: '#9ca3af' }}>
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

export function Footer() {
  return (
    <footer id="contato" className="bg-black pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 rounded-full bg-white p-1 shadow-[0_0_15px_rgba(245,158,11,0.25)] border border-amber-400/40 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.08.13_f522f888.jpeg"
                  alt="AgroBagual Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                Agro<span className="text-emerald-400">Bagual</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              O futuro do agro na palma da sua mão. Tecnologia desenvolvida para quem vive da terra.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Empresa</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><HoverLink text="Sobre" href="#sobre" /></li>
              <li><HoverLink text="SemeIA" href="#semeia" /></li>
              <li><HoverLink text="GPS Agrícola" href="#gps" /></li>
              <li><HoverLink text="Promoções" href="#pricing" /></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-emerald-400">Suporte</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li><HoverLink text="Perguntas frequentes" href="#faq" /></li>
              <li><HoverLink text="Blog" href="#blog" /></li>
              <li><HoverLink text="Termos de uso" href="#termos" /></li>
              <li><HoverLink text="Política de privacidade" href="#privacidade" /></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              <li><HoverLink text="AgroBagual8.0@gmail.com" href="mailto:AgroBagual8.0@gmail.com" /></li>
              <li className="text-xs sm:text-sm text-gray-400">Endereço: Ponte Preta – RS</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} AgroBagual. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
