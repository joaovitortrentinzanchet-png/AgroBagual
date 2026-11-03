import { motion } from 'motion/react';
import { AnimatedButton } from './AnimatedButton';

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-agro-green/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-agro-neon/20 via-transparent to-transparent animate-pulse"></div>
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-6 sm:mb-10 text-white drop-shadow-lg px-2"
        >
          Revolucione a sua lavoura agora
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center w-full max-w-sm sm:max-w-none mx-auto"
        >
          <AnimatedButton
            textDef="Baixar o aplicativo"
            size="lg"
            className="mobile-full shadow-[0_0_40px_rgba(57,255,20,0.6)] hover:scale-105 transition-transform"
            onClick={() => {
              const el = document.getElementById('precos') || document.getElementById('pricing');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
