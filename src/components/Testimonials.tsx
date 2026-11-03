import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      // Check if we reached the end of the scrollable area
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll by approximately one card width
        slider.scrollBy({ left: slider.clientWidth * 0.85, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'João Santos',
      text: 'Economia de sementes e aumento de produtividade. O GPS mudou minha forma de plantar.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Jorge da Silva',
      text: 'Controle completo do rebanho na palma da mão. Não perco mais nenhuma anotação.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Pedro Machado',
      text: 'Compra segura no marketplace e previsão do tempo que realmente acerta. Recomendo!',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Carlos Mendes',
      text: 'A SemeIA salvou minha lavoura de soja. Identificou a praga no início e me deu a solução.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Antônio Costa',
      text: 'Nunca foi tão fácil gerenciar as finanças da fazenda. O app é muito intuitivo.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Marcos Oliveira',
      text: 'Os alertas climáticos me ajudaram a evitar perdas na aplicação de defensivos.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Roberto Nunes',
      text: 'A caderneta digital substituiu todos os meus cadernos velhos. Tudo organizado e na nuvem.',
      image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&q=80&w=200'
    }
  ];

  // Duplicate the array to create an infinite loop effect for desktop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">O que dizem os produtores</h2>
        </div>
      </div>

      {/* Desktop Marquee */}
      <div className="hidden md:flex relative w-full overflow-hidden">
        {/* Gradient Masks for smooth edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-agro-black to-transparent z-10"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-agro-black to-transparent z-10"></div>

        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: [0, -1036 * 2] }} // Adjust based on card width + gap
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedTestimonials.map((t, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-3xl relative w-[400px] flex-shrink-0 hover:border-agro-neon/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-lg text-gray-300 mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-agro-green" referrerPolicy="no-referrer" />
                <div className="font-bold text-base">{t.name}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Swipeable Slider */}
      <div 
        ref={sliderRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-3.5 px-4 pb-4 hide-scrollbar scroll-smooth"
      >
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="glass-panel p-5 sm:p-6 rounded-2xl relative w-[82vw] max-w-[320px] flex-shrink-0 snap-center border border-white/10"
          >
            <Quote className="absolute top-4 right-4 w-7 h-7 text-white/10" />
            <p className="text-sm sm:text-base text-gray-300 mb-5 relative z-10 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-agro-green" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold text-sm text-white">{t.name}</div>
                <div className="text-[11px] text-agro-green font-medium">Produtor Verificado</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex items-center justify-center gap-1.5 mt-3 text-xs text-white/40">
        <span>← Deslize para ver mais depoimentos →</span>
      </div>
    </section>
  );
}
