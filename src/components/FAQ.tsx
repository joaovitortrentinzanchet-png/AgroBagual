import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "O que é o AgroBagual?",
    answer: "O AgroBagual é uma plataforma completa de inteligência agrícola que une tecnologia de ponta, como IA e GPS de alta precisão, com a tradição e o conhecimento do campo para maximizar a produtividade da sua lavoura.",
    icon: "🚜",
    iconPosition: "left"
  },
  {
    id: 2,
    question: "Como a SemeIA ajuda no plantio?",
    answer: "A SemeIA utiliza algoritmos avançados para analisar o solo, o clima e o histórico da área, recomendando a densidade ideal de sementes e fertilizantes em tempo real, evitando desperdícios e garantindo o melhor estande de plantas."
  },
  {
    id: 3,
    question: "O GPS Agrícola funciona em áreas sem sinal de internet?",
    answer: "Sim! Nosso sistema de GPS utiliza tecnologia via satélite de banda dupla que garante precisão centimétrica mesmo nas regiões mais remotas, com mapas offline integrados para que você nunca perca o rastro.",
    icon: "🛰️",
    iconPosition: "right"
  },
  {
    id: 4,
    question: "Quais são os planos disponíveis?",
    answer: "Oferecemos desde o plano 'Semente' para pequenos produtores até o plano 'Colheita Farta' para grandes operações. Todos incluem suporte 24/7 e atualizações constantes do software."
  },
  {
    id: 5,
    question: "É difícil instalar os equipamentos?",
    answer: "Não. Nossos kits são 'plug-and-play' e compatíveis com a maioria das máquinas do mercado. Além disso, nossa equipe técnica realiza a instalação e o treinamento inicial para você começar com tudo.",
    icon: "🛠️",
    iconPosition: "left"
  }
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-700 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-mono text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 sm:mb-4 block"
          >
            Dúvidas Frequentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
          >
            Perguntas <span className="italic font-serif text-emerald-400">Bagual</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2"
          >
            Tudo o que você precisa saber para levar sua produção ao próximo nível com a tecnologia AgroBagual.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto p-2 sm:p-4">
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-white/10 pb-3 sm:pb-4 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="flex w-full items-center justify-between group py-2 text-left focus:outline-none"
                  >
                    <div
                      className={`relative flex items-center space-x-2 rounded-xl p-1 sm:p-2 transition-all duration-300 ${
                        isOpen ? 'text-emerald-400' : 'text-white group-hover:text-emerald-300'
                      }`}
                    >
                      {item.icon && (
                        <span
                          className={`text-base sm:text-xl inline-block mr-1 sm:mr-0 sm:absolute sm:-top-4 ${
                            item.iconPosition === 'right' ? 'order-last sm:order-none sm:-right-4 sm:rotate-[7deg]' : 'sm:-left-4 sm:-rotate-[4deg]'
                          }`}
                        >
                          {item.icon}
                        </span>
                      )}
                      <span className="text-base sm:text-lg md:text-xl font-medium text-left pr-2">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`text-white/50 transition-transform duration-300 flex-shrink-0 ml-2 sm:ml-4 ${
                        isOpen ? 'text-emerald-400 rotate-180' : ''
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5 sm:h-6 sm:w-6" />
                      ) : (
                        <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: 'auto', marginTop: 12 },
                          collapsed: { opacity: 0, height: 0, marginTop: 0 }
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 sm:pl-4 border-l-2 border-emerald-500/30">
                          <div className="text-white/70 leading-relaxed text-sm sm:text-base md:text-lg">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
