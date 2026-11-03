import { motion } from 'motion/react';
import { Target, Map, ShieldCheck, CloudRain, TrendingUp, ShoppingCart } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export function Problem() {
  const cards = [
    { text: 'Precisão que aumenta sua produção', icon: Target },
    { text: 'GPS Agrícola no celular', icon: Map },
    { text: 'Controle de rebanho', icon: ShieldCheck },
    { text: 'Previsão do tempo confiável', icon: CloudRain },
    { text: 'Cotações e mercado agro', icon: TrendingUp },
    { text: 'Marketplace rural', icon: ShoppingCart },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 sm:mb-6"
          >
            Por que milhares de produtores já estão escolhendo o <span className="text-agro-neon">AgroBagual?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            O produtor rural sabe: a vida no campo não espera. Chuva, sol, pragas, mercado… tudo muda de uma hora para outra. 
            Quem não se adapta, fica para trás. É por isso que o AgroBagual nasceu: para colocar a tecnologia mais avançada do agro diretamente na palma da sua mão.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-4 sm:p-6 rounded-2xl glow-effect transition-all duration-300 flex items-start gap-3.5 sm:gap-4 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-agro-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-agro-neon/20 transition-colors">
                <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-agro-green group-hover:text-agro-neon transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-white group-hover:text-agro-neon transition-colors">{card.text}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center"
        >
          <AnimatedButton
            textDef="Baixe agora"
            textHov="Comprove a diferença"
            size="lg"
            className="mobile-full shadow-[0_0_20px_rgba(57,255,20,0.3)]"
            onClick={() => window.open('https://play.google.com/store', '_blank')}
          />
        </motion.div>
      </div>
    </section>
  );
}
