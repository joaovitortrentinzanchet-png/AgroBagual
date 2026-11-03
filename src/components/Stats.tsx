import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

function Counter({ end, suffix = '', duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration * 1000) {
        setCount(Math.min(end, Math.floor((progress / (duration * 1000)) * end)));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export function Stats() {
  return (
    <section className="py-12 md:py-20 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6"
          >
            <div className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-agro-neon mb-1 sm:mb-2">
              <Counter end={99} suffix="%" />
            </div>
            <div className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">Avaliações positivas</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-4 sm:p-6"
          >
            <div className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-1 sm:mb-2">
              <Counter end={100} suffix="%" />
            </div>
            <div className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">Custo-benefício</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-4 sm:p-6"
          >
            <div className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-agro-green mb-1 sm:mb-2">
              <Counter end={0} />
            </div>
            <div className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">Problemas reportados</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
