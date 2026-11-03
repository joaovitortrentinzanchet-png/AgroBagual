import { motion } from 'motion/react';
import { Navigation, Crosshair, TrendingDown, Zap } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

export function GPS() {
  return (
    <section id="gps" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Navigation className="w-4 h-4" /> Alta Precisão
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              GPS Agrícola
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-3 sm:mb-4">Mais precisão na palma da sua mão</p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Chega de desperdício de insumos. O GPS Agrícola do AgroBagual oferece precisão real no plantio e na aplicação.
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                { text: 'Mais produtividade', icon: Zap, color: 'text-yellow-400' },
                { text: 'Menos desperdício', icon: TrendingDown, color: 'text-green-400' },
                { text: 'Menor custo', icon: Crosshair, color: 'text-blue-400' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base md:text-lg font-medium">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full glass-panel flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${item.color}`} />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            <AnimatedButton
              textDef="Investir no GPS Agrícola"
              size="lg"
              className="mobile-full shadow-[0_0_20px_rgba(59,130,246,0.4)] w-full sm:w-auto"
              onClick={() => { window.location.href = '#pricing'; }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl bg-black flex items-center justify-center aspect-[9/16] w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] mx-auto"
          >
            <video 
              src="https://i.imgur.com/jML4m0W.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-contain"
            />
            
            {/* UI Overlay */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 glass-panel bg-black/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-mono z-10">
              <div className="text-agro-neon">Precisão: 2,5 cm</div>
              <div className="text-gray-400">Velocidade: 6,5 km/h</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
