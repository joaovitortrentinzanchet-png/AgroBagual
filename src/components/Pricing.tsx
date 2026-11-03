import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 sm:mb-4"
          >
            Revolucione a sua lavoura agora
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-agro-neon/20 text-agro-neon px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border border-agro-neon/30 animate-pulse"
          >
            10% de desconto nas primeiras 1.000 assinaturas
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Plano Básico */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Plano Básico</h3>
            <div className="text-3xl sm:text-4xl font-display font-bold mb-4 sm:mb-6">Grátis</div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1 text-sm sm:text-base">
              {['Previsão do tempo', 'Caderneta digital', 'Notícias do agro'].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-gray-300">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-agro-green flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <AnimatedButton
              textDef="Baixar grátis"
              size="md"
              className="w-full mobile-full"
              onClick={() => window.open('https://play.google.com/store', '_blank')}
            />
          </motion.div>

          {/* Plano Completo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="bg-gradient-to-b from-agro-dark to-black p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col border border-agro-neon relative transform lg:-translate-y-4 shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(57,255,20,0.4)] transition-all duration-300 z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-agro-neon text-black px-3 py-1 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-[0_0_15px_rgba(57,255,20,0.5)]">
              MAIS POPULAR
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-agro-neon">Plano Completo</h3>
            <div className="mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl font-display font-bold">R$ 29,99<span className="text-base sm:text-lg text-gray-400 font-normal">/mês</span></div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">ou R$ 299 no plano anual</div>
            </div>
            <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 flex-1 text-sm sm:text-base">
              {['Tudo do plano básico', 'SemeIA (Inteligência Artificial)', 'GPS Agrícola', 'Suporte prioritário'].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-white">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-agro-neon flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="text-center text-xs sm:text-sm text-agro-neon mb-4 font-medium">
              Tudo isso por menos de R$ 0,30 por dia
            </div>
            <AnimatedButton
              textDef="Assinar agora"
              size="md"
              className="w-full mobile-full shadow-[0_0_15px_rgba(57,255,20,0.4)]"
              onClick={() => { window.location.href = '#contato'; }}
            />
          </motion.div>

          {/* Plano GPS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Plano GPS</h3>
            <div className="text-3xl sm:text-4xl font-display font-bold mb-4 sm:mb-6">R$ 11,99<span className="text-base sm:text-lg text-gray-400 font-normal">/mês</span></div>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1 text-sm sm:text-base">
              {['Tudo do plano básico', 'GPS Agrícola'].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-gray-300">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-agro-green flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <AnimatedButton
              textDef="Assinar agora"
              size="md"
              className="w-full mobile-full"
              onClick={() => { window.location.href = '#contato'; }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
