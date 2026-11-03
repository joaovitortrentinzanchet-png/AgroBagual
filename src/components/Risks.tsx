import { motion } from 'motion/react';
import { AlertTriangle, BookX, CalendarX } from 'lucide-react';

export function Risks() {
  const risks = [
    { title: 'Falta de conhecimento', icon: BookX, desc: 'Decisões baseadas em achismos podem custar a safra inteira.' },
    { title: 'Falta de organização', icon: CalendarX, desc: 'Perder o controle de insumos e do rebanho significa perder dinheiro.' },
    { title: 'Riscos e incertezas', icon: AlertTriangle, desc: 'O clima e o mercado não perdoam quem não está preparado.' },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-agro-dark/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold leading-tight"
          >
            Veja o que você <span className="text-red-500 animate-pulse drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">coloca em risco</span> ao não usar o AgroBagual
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-8">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-4 sm:p-8 rounded-xl sm:rounded-3xl border border-red-500/20 hover:border-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] transition-all duration-500 relative overflow-hidden group hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/40 group-hover:scale-150 transition-all duration-500"></div>
              <risk.icon className="w-6 h-6 sm:w-12 sm:h-12 text-red-500 mb-2 sm:mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3 text-white group-hover:text-red-400 transition-colors duration-300">{risk.title}</h3>
              <p className="text-gray-400 text-xs sm:text-base group-hover:text-gray-200 transition-colors duration-300 leading-snug sm:leading-relaxed">{risk.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
