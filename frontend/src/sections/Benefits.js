import FadeInSection from '../components/FadeInSection';
import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <>
      {/* Dashboard Benefit */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <FadeInSection>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
                  Controle Total com Métricas Claras
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  Veja em tempo real tudo que está acontecendo: taxa de conversão, agendamentos de hoje, conversas ativas, taxa de no-show.
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Maioria dos bots são "caixa preta".</strong> ZENYA mostra exatamente o que está rolando, quando e por quê.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="text-3xl mb-2">📊</div>
                    <div className="font-bold text-gray-900">Dashboard Real-Time</div>
                    <div className="text-sm text-gray-600">Métricas atualizadas instantaneamente</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="font-bold text-gray-900">Tendências Visuais</div>
                    <div className="text-sm text-gray-600">Gráficos de conversão semanal</div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="/zenya-dashboard.png"
                    alt="Dashboard ZENYA - Controle Total"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 bg-cyan-500 text-white px-6 py-3 rounded-xl shadow-2xl font-bold"
                >
                  68% Conversão 📈
                </motion.div>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Conversas Benefit */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <FadeInSection className="order-2 lg:order-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src="/zenya-conversas.png"
                    alt="Central de Conversas ZENYA"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-4 -left-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl font-bold"
                >
                  24/7 Online 🌟
                </motion.div>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
                  Atendimento Humanizado, Não Robótico
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
                  Tom empático, profissional, adaptado ao seu negócio. Nada de "Digite 1 para sim".
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">ZENYA conversa.</strong> Entende contexto, faz perguntas inteligentes, agenda direto na sua agenda.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200">
                    <div className="text-3xl mb-2">💬</div>
                    <div className="font-bold text-gray-900">WhatsApp + Voz</div>
                    <div className="text-sm text-gray-600">Mensagens e ligações telefônicas</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-bold text-gray-900">Contextual</div>
                    <div className="text-sm text-gray-600">Entende áudios e intenções</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Portal Benefit */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-4 text-gray-900">
              Transparência Total no Processo
            </h2>
            <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
              Portal exclusivo onde você acompanha cada etapa da implementação em tempo real.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/zenya-portal.png"
                  alt="Portal de Implementação ZENYA"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-16">
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl sm:text-5xl mb-3">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Progresso Visual</h3>
                <p className="text-gray-600">Barra de progresso mostra exatamente onde estamos</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl sm:text-5xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fases Detalhadas</h3>
                <p className="text-gray-600">Cada etapa desmembrada com prazos claros</p>
              </div>
              
              <div className="text-center bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl sm:text-5xl mb-3">🔔</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Notificações</h3>
                <p className="text-gray-600">Você é avisado a cada marco completado</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
