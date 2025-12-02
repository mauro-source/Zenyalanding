import FadeInSection from '../components/FadeInSection';

export default function Timeline() {
  const steps = [
    {
      number: '1',
      title: 'Demo Personalizada (30min)',
      description: 'Mostramos ZENYA funcionando na sua realidade. Calculamos ROI específico do seu negócio.',
    },
    {
      number: '2',
      title: 'Configuração e Treinamento (2-5 dias)',
      description: 'Integramos com sua agenda, treinamos ZENYA no seu negócio. Portal mostra progresso visual.',
    },
    {
      number: '3',
      title: 'Testes e Ajustes (2 dias)',
      description: 'Simulamos conversas, ajustamos tom, validamos fluxos. Você aprova antes de ir ao ar.',
    },
    {
      number: '4',
      title: 'ZENYA No Ar! 🚀',
      description: 'Sistema funcionando 24/7. Dashboard mostra tudo em tempo real. Suporte contínuo.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-4 text-gray-900">
            Como Funciona na Prática
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
            Do primeiro contato até ZENYA no ar, atendendo 24/7.
          </p>
        </FadeInSection>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="grid sm:grid-cols-[100px_1fr] gap-4 sm:gap-8 relative">
                {/* Connecting Line - Hidden on mobile, shown on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-[50px] top-[100px] w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-cyan-500 to-purple-600 opacity-30"></div>
                )}

                {/* Number Badge */}
                <div className="flex justify-center sm:justify-start">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl font-black text-white shadow-xl shadow-cyan-500/30 relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
