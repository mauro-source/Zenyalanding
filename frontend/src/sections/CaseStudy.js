import FadeInSection from '../components/FadeInSection';
import CountUp from '../components/CountUp';

export default function CaseStudy() {
  return (
    <section id="resultados" className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-3 sm:mb-4">
            Caso Real: Clínica de Exames em SP
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-300 mb-12 sm:mb-16">
            Números concretos de um cliente que implementou ZENYA. Seu caso pode ser parecido.
          </p>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Before */}
          <FadeInSection delay={0.2}>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                <span className="text-3xl sm:text-4xl">📊</span>
                Situação Antes da ZENYA
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Leads/mês (WhatsApp)</div>
                  <div className="text-2xl sm:text-3xl font-bold">1.026 contatos</div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-1">Equipe dedicada</div>
                  <div className="text-2xl sm:text-3xl font-bold">3 atendentes full-time</div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-1">No-shows por mês</div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-400">
                    <CountUp end={119} /> faltas (<CountUp end={23} suffix="%" />)
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-1">Ticket médio</div>
                  <div className="text-2xl sm:text-3xl font-bold">R$ 150/exame</div>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-gray-700">
                  <div className="text-sm text-gray-400 mb-2">Problema principal</div>
                  <div className="text-base sm:text-lg text-red-400 leading-relaxed">
                    "Equipe presa em tarefas repetitivas. Clientes complexos esperando. No-shows comendo margem."
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* After */}
          <FadeInSection delay={0.4}>
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
                🚀 Resultados com ZENYA
              </h3>

              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6">
                  <div className="text-sm text-cyan-400 uppercase tracking-wide mb-2">Equipe Liberta do Operacional</div>
                  <div className="text-xs sm:text-sm text-gray-300 mb-3">Time focado em casos complexos e estratégia</div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-400">
                    R$ <CountUp end={156} />.000/ano
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">em produtividade</div>
                </div>

                <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6">
                  <div className="text-sm text-cyan-400 uppercase tracking-wide mb-2">Redução de No-Shows</div>
                  <div className="text-xs sm:text-sm text-gray-300 mb-3">
                    <CountUp end={119} /> faltas/mês → <CountUp end={36} /> faltas/mês (-<CountUp end={70} suffix="%" />)
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-400">
                    R$ <CountUp end={148.8} decimals={1} />.800/ano
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">recuperado</div>
                </div>

                <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6">
                  <div className="text-sm text-cyan-400 uppercase tracking-wide mb-2">Aumento de Conversão</div>
                  <div className="text-xs sm:text-sm text-gray-300 mb-3">
                    Resposta 24/7 → +<CountUp end={127} /> agendamentos/mês
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-400">
                    R$ <CountUp end={228.6} decimals={1} />.600/ano
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-2 border-green-500/50 rounded-2xl p-5 sm:p-6 lg:p-8 text-center">
                  <div className="text-sm text-green-400 uppercase tracking-wide mb-2">💎 IMPACTO TOTAL ANUAL</div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-green-400 mb-3">
                    R$ <CountUp end={533.4} decimals={1} />k
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-green-400">
                    ROI: <CountUp end={17.8} decimals={1} />x no primeiro ano
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.6}>
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              <strong className="text-white">Sua situação é parecida?</strong><br />
              Agende uma demo. Calculamos o impacto específico do seu negócio.
            </p>
            <a
              href="https://calendly.com/mauro-sparkleai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
            >
              📊 Calcular Meu ROI Agora
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
