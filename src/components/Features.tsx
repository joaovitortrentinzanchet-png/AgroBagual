import { motion } from 'motion/react';
import { Cloud, Notebook, LineChart, Store, Beef, Bell, Syringe, Tractor, Receipt, Wallet, Cpu, Map, Calculator, Wrench } from 'lucide-react';

export function Features() {
  const features = [
    { title: 'Previsão do tempo', icon: Cloud, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { title: 'Alertas climáticos', icon: Bell, color: 'text-red-400', bg: 'bg-red-400/10' },
    { title: 'Lembretes diários', icon: Notebook, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { title: 'Notícias do agro', icon: LineChart, color: 'text-green-400', bg: 'bg-green-400/10' },
    { title: 'Gestão de rebanho', icon: Beef, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { title: 'Histórico de vacinação', icon: Syringe, color: 'text-pink-400', bg: 'bg-pink-400/10' },
    { title: 'Gestão de maquinário', icon: Tractor, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { title: 'Nota fiscal eletrônica', icon: Receipt, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { title: 'Caderneta de anotações', icon: Notebook, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { title: 'Gestão financeira', icon: Wallet, color: 'text-teal-400', bg: 'bg-teal-400/10' },
    { title: 'SemeIA', icon: Cpu, color: 'text-agro-neon', bg: 'bg-agro-neon/10' },
    { title: 'GPS Agrícola', icon: Map, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Calculadora prática', icon: Calculator, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    { title: 'Marketplace e cotações', icon: Store, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { title: 'Manutenção de veículos', icon: Wrench, color: 'text-gray-400', bg: 'bg-gray-400/10' },
  ];

  return (
    <section id="funcoes" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 sm:mb-6"
          >
            Conheça o nosso aplicativo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Tudo o que você precisa em um só lugar. Turbine a sua produção com recursos exclusivos como a <strong className="text-agro-neon">SemeIA</strong> e o <strong className="text-agro-neon">GPS Agrícola</strong>.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel p-3.5 sm:p-4 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center gap-2 sm:gap-3 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:border-agro-neon/30 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm leading-tight line-clamp-2">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
