import { motion } from 'motion/react';
import { AnimatedButton } from './AnimatedButton';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-agro-dark/40 via-agro-black to-agro-black"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-agro-green/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-agro-neon/10 rounded-full blur-[120px]"></div>

      {/* Digital Lines Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 sm:mb-8 flex items-center gap-3.5 sm:gap-4">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white p-1.5 sm:p-2 shadow-[0_0_30px_rgba(245,158,11,0.3)] border border-amber-400/40 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-01_at_21.08.13_f522f888.jpeg"
                  alt="AgroBagual Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight block text-white">
                  Agro<span className="text-gradient">Bagual</span>
                </span>
                <span className="text-xs sm:text-sm text-gray-400 tracking-wide uppercase font-medium">
                  Tecnologia Agro Inteligente
                </span>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-agro-neon text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agro-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agro-neon"></span>
              </span>
              Tecnologia de ponta para o campo
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.12] mb-4 sm:mb-6">
              O futuro do Agro na <span className="text-gradient">palma da sua mão</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              Do campo à tecnologia, o AgroBagual nasceu para simplificar a vida de quem vive da terra. 
              Previsão do tempo, caderneta digital, gestão de rebanho, GPS Agrícola, mercado e muito mais: 
              tudo no celular, fácil de usar e feito sob medida para o produtor rural que não para de evoluir.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto">
              <AnimatedButton
                textDef="Baixar agora"
                size="lg"
                className="mobile-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)]"
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              />
              <AnimatedButton
                textDef="Conhecer funções"
                size="lg"
                className="mobile-full"
                onClick={() => { window.location.href = '#funcoes'; }}
              />
            </div>

            {/* Mobile App Visual Preview */}
            <div className="mt-8 max-w-[240px] sm:max-w-[280px] mx-auto block lg:hidden">
              <div className="relative rounded-[2.5rem] border-[6px] border-gray-800 bg-black shadow-2xl overflow-hidden ring-1 ring-white/10 aspect-[9/18]">
                <div className="absolute top-0 inset-x-0 h-4 bg-gray-800 rounded-b-2xl w-1/3 mx-auto z-20"></div>
                <img src="https://i.imgur.com/QWhX6Ct.jpg" alt="AgroBagual App" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* 3D Mockup Container */}
            <div className="relative w-full max-w-md mx-auto aspect-[1/2] perspective-1000">
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [-5, 5, -5],
                  rotateX: [5, -5, 5]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="w-full h-full relative preserve-3d"
              >
                {/* Phone Frame */}
                <div className="absolute inset-0 rounded-[3rem] border-[8px] border-gray-800 bg-black shadow-2xl overflow-hidden ring-1 ring-white/10">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl w-1/2 mx-auto z-20"></div>
                  
                  {/* App UI Mockup */}
                  <div className="absolute inset-0 bg-agro-dark">
                    <img src="https://i.imgur.com/QWhX6Ct.jpg" alt="AgroBagual App" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
