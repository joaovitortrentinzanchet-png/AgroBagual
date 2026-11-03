import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export function Benefits() {
  const benefits = [
    'Previsão do tempo atualizada',
    'Gestão de rebanho com histórico',
    'Caderneta com lembretes',
    'Cotações agrícolas em tempo real'
  ];

  return (
    <section className="py-16 md:py-24 relative bg-agro-dark/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-8 sm:mb-12 leading-tight"
        >
          O que torna o AgroBagual o <span className="text-agro-neon">melhor app</span> do agronegócio
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-12 text-left">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center gap-3.5 sm:gap-4 hover:border-agro-neon hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300 group cursor-pointer"
            >
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-agro-neon flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-base sm:text-lg font-medium group-hover:text-agro-neon transition-colors duration-300">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <AnimatedButton
            textDef="Testar gratuitamente"
            size="lg"
            className="mobile-full"
            onClick={() => { window.location.href = '#pricing'; }}
          />
        </motion.div>
      </div>
    </section>
  );
}
