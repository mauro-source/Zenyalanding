import FadeInSection from '../components/FadeInSection';
import CountUp from '../components/CountUp';

export default function Problem() {
  const problems = [
    {
      icon: '⏰',
      title: 'Demora = Desistência',
      description: (
        <>
          <CountUp end={78} suffix="%" /> dos clientes que esperam mais de 1h por resposta no WhatsApp simplesmente desistem e vão pro concorrente que respondeu primeiro.
        </>
      ),
      cost: 'Você perde antes mesmo de saber que ele existiu',
    },
    {
      icon: '😤',
      title: 'Equipe Presa no Básico',
      description: (
        <>
          Seu time gasta <CountUp end={40} suffix="%" /> do dia respondendo perguntas repetidas. "Qual o preço?" "Tá aberto?" "Onde fica?" Enquanto clientes complexos esperam atendimento especializado.
        </>
      ),
      cost: 'Talento desperdiçado em tarefas mecânicas',
    },
    {
      icon: '🌙',
      title: 'Horário Nobre Perdido',
      description: (
        <>
          <CountUp end={64} suffix="%" /> dos contatos chegam fora do horário comercial. Sábado à noite. Domingo de manhã. Você não atende. Quem atende leva.
        </>
      ),
      cost: 'Oportunidades sumindo enquanto você dorme',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-4 leading-tight text-gray-900">
            Quanto Dinheiro Você Deixa na Mesa<br className="hidden sm:block" />Quando Ninguém Atende?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-600 mb-12 sm:mb-16 max-w-3xl mx-auto">
            Não é sobre ter mais clientes. É sobre não perder os que já chegaram.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="group bg-white border-2 border-red-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-red-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-100/50 transition-all duration-300 h-full relative overflow-hidden">
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{problem.icon}</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-red-600 mb-3 sm:mb-4">
                  {problem.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  {problem.description}
                </p>
                <div className="pt-4 sm:pt-6 border-t-2 border-gray-100">
                  <p className="text-sm sm:text-base font-semibold text-gray-800 italic">
                    {problem.cost}
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
