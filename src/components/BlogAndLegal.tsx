import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, ExternalLink, User, Calendar, ChevronRight, FileText, Shield } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Administração no braço e no papel? 🤔🌾",
    date: "05 Mar 2026",
    category: "Gestão",
    image: "https://i.imgur.com/4zMpfYw.png",
    excerpt: "Você ainda administra a propriedade no braço e no papel? Talvez esteja deixando dinheiro, tempo e decisões escaparem todo dia — sem perceber 👀💸",
    url: "https://www.instagram.com/p/DUEoKjqiV85/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 2,
    title: "A Identidade AgroBagual 🤠",
    date: "04 Mar 2026",
    category: "Raiz",
    image: "https://i.imgur.com/eq1OhUh.png",
    excerpt: "Você já parou para pensar por que o AgroBagual tem esse nome e essa identidade? Cada detalhe carrega força, raiz e propósito — o mesmo que move quem vive do campo.",
    url: "https://www.instagram.com/p/DSdp_kVidew/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 3,
    title: "A Revolução Digital no Campo 🚜🌱",
    date: "03 Mar 2026",
    category: "Inovação",
    image: "https://i.imgur.com/zPBsRkI.png",
    excerpt: "O campo evoluiu, e o AgroBagual chegou para liderar essa revolução. Somos a força digital do produtor rural, unindo tecnologia e tradição.",
    url: "https://www.instagram.com/p/DPaEBF5iR0x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
];

export function BlogAndLegal() {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#termos') setActiveTab('terms');
      if (hash === '#privacidade') setActiveTab('privacy');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="bg-black">
      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4"
              >
                Blog <span className="text-emerald-400">AgroBagual</span>
              </motion.h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl">
                Acompanhe as últimas novidades do agronegócio e aprenda a extrair o máximo da tecnologia no campo.
              </p>
            </div>

            <motion.a
              href="https://www.instagram.com/agrobagual_oficial"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 py-3 rounded-full font-bold text-white shadow-lg shadow-pink-500/20 group w-full sm:w-fit text-sm sm:text-base"
            >
              <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Siga no Instagram
              <ExternalLink className="w-4 h-4 opacity-70" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer border border-white/5 hover:border-emerald-400/30 transition-all duration-500 flex flex-col no-underline text-white"
              >
                <div className="h-48 sm:h-56 bg-gray-900 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-400 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-gray-500 text-xs mb-3 sm:mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        Equipe AgroBagual
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center text-emerald-400 font-bold text-xs sm:text-sm group-hover:gap-2 transition-all">
                    Ver no Instagram <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Docs Section */}
      <section id="legal-docs" className="py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
        {/* URL Anchor Targets */}
        <div id="termos" className="absolute top-0 left-0" />
        <div id="privacidade" className="absolute top-0 left-0" />

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-6">
              Documentação <span className="text-emerald-400">Legal</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Transparência e segurança para você e sua propriedade.
            </p>
          </div>

          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="w-full sm:w-auto max-w-sm sm:max-w-none bg-white/5 p-1 sm:p-1.5 rounded-2xl border border-white/10 flex gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('terms')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'terms'
                    ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-400/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <FileText className="w-4 h-4 shrink-0" />
                Termos de Uso
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('privacy')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'privacy'
                    ? 'bg-emerald-400 text-black shadow-lg shadow-emerald-400/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Shield className="w-4 h-4 shrink-0" />
                Privacidade
              </button>
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] border border-white/10 min-h-[350px]">
            <AnimatePresence mode="wait">
              {activeTab === 'terms' ? (
                <motion.div
                  key="terms"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-invert max-w-none"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3">
                    <FileText className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                    Termos de Serviço
                  </h3>
                  <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                    <p className="text-sm sm:text-base md:text-lg">
                      Ao acessar o AgroBagual, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis, responsabilizando-se pelo cumprimento integral de todas as normas locais vigentes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
                      <div className="bg-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5">
                        <h4 className="text-emerald-400 font-bold mb-2 sm:mb-3 text-base">Uso de Licença</h4>
                        <p className="text-xs sm:text-sm">
                          É concedida permissão para baixar temporariamente uma cópia dos materiais no aplicativo AgroBagual, exclusivamente para visualização pessoal, transitória e não comercial.
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5">
                        <h4 className="text-emerald-400 font-bold mb-2 sm:mb-3 text-base">Isenção de Responsabilidade</h4>
                        <p className="text-xs sm:text-sm">
                          Os materiais no aplicativo AgroBagual são fornecidos &apos;como estão&apos;. O AgroBagual não oferece garantias expressas ou implícitas.
                        </p>
                      </div>
                    </div>

                    <p className="pt-4 sm:pt-6 border-t border-white/10 text-xs sm:text-sm">
                      O uso do aplicativo é destinado a produtores rurais e profissionais do setor. Reservamo-nos o direito de atualizar estes termos a qualquer momento para refletir melhorias em nossos serviços ou na legislação vigente.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="privacy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="prose prose-invert max-w-none"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3">
                    <Shield className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                    Política de Privacidade
                  </h3>
                  <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                    <p className="text-sm sm:text-base md:text-lg">
                      A sua privacidade é fundamental para nós. É compromisso do AgroBagual respeitar e proteger a sua privacidade em relação a qualquer informação ou dado coletado no aplicativo.
                    </p>

                    <div className="bg-emerald-400/5 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-emerald-400/10">
                      <h4 className="text-emerald-400 font-bold mb-3 sm:mb-4 text-base">Como usamos os seus dados:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                        {[
                          'Melhoria das recomendações da SemeIA',
                          'Sincronização do seu GPS Agrícola',
                          'Segurança da sua conta e dos seus dados',
                          'Suporte técnico personalizado',
                          'Atualizações de mercado e cotações agrícolas',
                          'Gestão eficiente do seu rebanho'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="pt-4 sm:pt-6 border-t border-white/10 text-xs sm:text-sm">
                      Solicitamos informações pessoais apenas quando estritamente necessárias para a prestação dos nossos serviços. Fazemo-lo por meios justos e legais, com o seu pleno conhecimento e consentimento.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
