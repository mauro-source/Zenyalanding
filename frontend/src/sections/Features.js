import FadeInSection from '../components/FadeInSection';

export default function Features() {
  const features = [
    {
      icon: '🧠',
      title: 'Atendimento Contextual',
      description: 'Entende áudios, gírias e intenções. Conversa como gente, não como FAQ robótico.',
    },
    {
      icon: '📊',
      title: 'Dashboard Exclusivo',
      description: 'Métricas em tempo real: conversões, no-shows, horários de pico. Controle total.',
    },
    {
      icon: '⚡',
      title: 'Resposta em <5min',
      description: 'Nunca mais perca cliente por demora. ZENYA responde instantaneamente, 24/7.',
    },
    {
      icon: '🔒',
      title: 'LGPD Compliant',
      description: 'Seus dados protegidos e seguros. Total conformidade com legislação brasileira.',
    },
    {
      icon: '📞',
      title: 'Entende Áudios + Voz',
      description: 'Responde mensagens E atende ligações naturalmente, como uma pessoa real.',
    },
    {
      icon: '🎯',
      title: 'Setup Transparente',
      description: 'Portal de acompanhamento mostra progresso em tempo real. Zero no escuro.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-4 text-gray-900">
            Por Que ZENYA É Diferente
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
            Não é sobre automatizar. É sobre escalar com inteligência.
          </p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-100/50 transition-all duration-300 h-full">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-100 to-purple-100 rounded-xl flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
