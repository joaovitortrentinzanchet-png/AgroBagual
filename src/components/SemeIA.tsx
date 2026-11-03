import { motion } from 'motion/react';
import { Scan, Cpu, Leaf } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export function SemeIA() {
  return (
    <section id="semeia" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-agro-green/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-agro-neon/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Scanner Animation Mockup */}
            <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://i.imgur.com/nLKbdDF.jpg" alt="Plantação" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              
              {/* Scanning Line */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-agro-neon shadow-[0_0_15px_#39ff14] z-10"
              ></motion.div>

              {/* UI Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex justify-between items-center">
                <div className="glass-panel px-2.5 py-1 sm:px-3 rounded-full flex items-center gap-2 text-[11px] sm:text-xs font-medium">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  Analisando...
                </div>
                <Scan className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              {/* Result Popup */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass-panel bg-black/85 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-agro-neon/30"
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-agro-neon/20 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-agro-neon" />
                  </div>
                  <div>
                    <h4 className="font-bold text-agro-neon text-xs sm:text-sm">Ferrugem Asiática Detectada</h4>
                    <p className="text-[11px] sm:text-xs text-gray-300 mt-0.5 sm:mt-1 leading-snug">Recomendação: Aplicação de fungicida sistêmico nas próximas 48h.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-agro-neon text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Cpu className="w-4 h-4" /> Inteligência Artificial
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6">
              Seme<span className="text-agro-neon">IA</span>
            </h2>
            <p className="text-xl sm:text-2xl text-white font-medium mb-3 sm:mb-4">A inteligência do agro</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Quantas vezes uma praga atacou sem você perceber a tempo? A SemeIA resolve isso. 
              Basta apontar a câmera do celular e, em segundos, você tem uma identificação confiável com recomendações práticas para proteger a sua lavoura.
            </p>
            <AnimatedButton
              textDef="Adquirir SemeIA"
              size="lg"
              className="mobile-full shadow-[0_0_20px_rgba(57,255,20,0.4)]"
              onClick={() => { window.location.href = '#pricing'; }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
