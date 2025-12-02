import FadeInSection from '../components/FadeInSection';
import { motion } from 'framer-motion';

export default function AdvancedFeatures() {
  const features = [
    {
      icon: '🔔',
      title: 'Lembretes Anti No-Show',
      description: 'ZENYA envia lembretes automáticos 24h antes por WhatsApp e SMS. Taxa de no-show cai de 23% para 8%.',
      benefits: [
        'WhatsApp 24h antes',
        'SMS 2h antes',
        'Confirmação automática'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '🗓️',
      title: 'Integração Total',
      description: 'Agenda direto no Google Calendar, Microsoft Outlook ou seu sistema de gestão. Zero duplicidade, zero erro manual.',
      benefits: [
        'Google Calendar',
        'Microsoft Outlook',
        'Seu CRM/Sistema'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '⭐',
      title: 'Avaliações Automáticas',
      description: 'ZENYA pede avaliação no Google apenas para clientes satisfeitos. Sua reputação cresce sem esforço.',
      benefits: [
        'Review no Google',
        'Apenas clientes satisfeitos',
        'Aumenta sua nota'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '📊',
      title: 'Relatórios Inteligentes',
      description: 'Veja horários de pico, taxa de conversão por canal, performance da IA. Tudo exportável em PDF.',
      benefits: [
        'Horários de pico',
        'Conversão por canal',
        'Exportável em PDF'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '👤',
      title: 'Fallback Humano',
      description: 'IA detecta quando não sabe responder e transfere para humano INSTANTANEAMENTE. Com contexto completo.',
      benefits: [
        'Detecção inteligente',
        'Transferência instant',
        'Contexto preservado'
      ],
      color: 'from-cyan-400 to-cyan-600'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-100 border border-cyan-300 rounded-full text-cyan-700 text-sm font-semibold mb-4">
              🚀 Funcionalidades Avançadas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 text-gray-900">
              Recursos Que Você Não Sabia<br className="hidden sm:block" />
              Que Precisava
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              ZENYA vai muito além de responder mensagens. É um sistema completo de gestão de atendimento.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-4xl mb-4 shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Benefits list */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInSection delay={0.6}>
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              <strong className="text-gray-900">E isso é só o começo.</strong> ZENYA aprende com seu negócio e fica mais inteligente a cada dia.
            </p>
            <a
              href="https://calendly.com/mauro-sparkleai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Ver Todas as Funcionalidades
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
