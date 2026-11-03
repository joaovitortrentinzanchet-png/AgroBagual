import { motion } from 'motion/react';
import { Shield, Calendar, RefreshCcw } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-8 sm:py-12 relative bg-agro-green/10 border-y border-agro-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-3.5 p-3.5 sm:p-0 bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-transparent rounded-xl sm:rounded-none text-left sm:text-center"
          >
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-agro-neon shrink-0" />
            <span className="font-semibold text-sm sm:text-lg text-white">Teste grátis de 15 dias</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-3.5 p-3.5 sm:p-0 bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-transparent rounded-xl sm:rounded-none text-left sm:text-center"
          >
            <RefreshCcw className="w-6 h-6 sm:w-8 sm:h-8 text-agro-neon shrink-0" />
            <span className="font-semibold text-sm sm:text-lg text-white">Cancelamento sem burocracia</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-3.5 p-3.5 sm:p-0 bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-transparent rounded-xl sm:rounded-none text-left sm:text-center"
          >
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-agro-neon shrink-0" />
            <span className="font-semibold text-sm sm:text-lg text-white">Assinatura anual com 2 meses grátis</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
