import FadeInSection from '../components/FadeInSection';
import { motion } from 'framer-motion';

export default function Comparison() {
  const comparisons = [
    {
      others: 'Apenas mensagens no WhatsApp',
      zenya: 'Mensagens + Ligações de voz',
      icon: '📞'
    },
    {
      others: 'Respostas básicas e repetitivas',
      zenya: 'Agenda, confirma, lembra, vende',
      icon: '🎯'
    },
    {
      others: 'Caixa preta - sem visibilidade',
      zenya: 'Dashboard completo com métricas',
      icon: '📊'
    },
    {
      others: 'Implementação complexa (semanas)',
      zenya: '7-10 dias, 100% gerenciado',
      icon: '⚡'
    },
    {
      others: 'Atendimento robótico e frio',
      zenya: 'Tom humanizado e empático',
      icon: '💬'
    },
    {
      others: 'Sem integração com agenda',
      zenya: 'Agenda direto - zero duplicidade',
      icon: '🗓️'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-semibold mb-4">
              ⚔️ Comparação
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-gray-900">
              Por Que ZENYA vs.<br className="hidden sm:block" />
              Chatbots Tradicionais
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Nem todos os assistentes de IA são iguais. Veja a diferença.
            </p>
          </div>
        </FadeInSection>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <FadeInSection>
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 mb-4 text-center">
              <div></div>
              <div className="bg-gray-100 rounded-t-2xl p-4">
                <div className="text-2xl mb-2">😕</div>
                <div className="font-bold text-gray-900">Outros</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-t-2xl p-4">
                <div className="text-2xl mb-2">✨</div>
                <div className="font-bold text-white">ZENYA</div>
              </div>
            </div>
          </FadeInSection>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="grid grid-cols-[1fr_1fr_1fr] gap-4 mb-4 items-center"
              >
                {/* Icon/Feature */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                </div>

                {/* Others */}
                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 text-center relative">
                  <div className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ✕
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{item.others}</p>
                </div>

                {/* ZENYA */}
                <div className="bg-gradient-to-br from-cyan-50 to-purple-50 border-2 border-cyan-300 rounded-xl p-4 text-center relative shadow-lg">
                  <div className="absolute -top-2 -left-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold">{item.zenya}</p>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom highlight */}
        <FadeInSection delay={0.8}>
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
              A Diferença é Clara
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              ZENYA não é apenas um chatbot. É sua equipe de atendimento completa, trabalhando 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5512992196495?text=Oi!%20Quero%20ver%20a%20diferenca%20da%20ZENYA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                💬 Falar com ZENYA
              </a>
              <a
                href="https://calendly.com/mauro-sparkleai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                📅 Agendar Demo
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
