import { useState } from 'react';
import FadeInSection from '../components/FadeInSection';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '❌ Chatbot vai afastar meus clientes?',
      answer: 'Pelo contrário. Clientes PREFEREM resposta rápida (mesmo que automática) do que esperar horas sem retorno. ZENYA tem tom humanizado, empático, profissional. Conversa, não robotiza. Além disso, atende tanto mensagens quanto ligações de voz, oferecendo uma experiência completa.',
    },
    {
      question: '💰 Quanto custa e qual o retorno?',
      answer: 'Investimento personalizado conforme suas necessidades. ROI médio: 10x no primeiro ano. Na demo, calculamos quanto você economiza + quanto ganha com conversão maior.',
    },
    {
      question: '⏱️ É difícil de implementar?',
      answer: 'Implementação em 7-10 dias. Nós fazemos TUDO: integrações, treinamento, testes. Você acompanha pelo Portal e só aprova quando estiver perfeito. Zero trabalho técnico da sua parte.',
    },
    {
      question: '🤔 E se ZENYA não souber responder?',
      answer: 'ZENYA detecta automaticamente quando não sabe responder algo e transfere INSTANTANEAMENTE para um humano da sua equipe, com todo o contexto da conversa preservado. Zero frustração para o cliente.',
    },
    {
      question: '📞 ZENYA também atende ligações?',
      answer: 'Sim! ZENYA não apenas responde mensagens de WhatsApp, mas também atende ligações telefônicas com voz natural. Isso significa cobertura completa: seu cliente pode escolher como quer se comunicar.',
    },
    {
      question: '🗓️ Como funciona a integração com minha agenda?',
      answer: 'ZENYA se conecta ao Google Calendar, Microsoft Outlook ou seu sistema de gestão. Agenda direto, sem duplicidade, sem erro. Você vê todos os compromissos em um só lugar.',
    },
    {
      question: '🔒 Meus dados estão seguros?',
      answer: 'Totalmente. ZENYA é 100% LGPD compliant. Todos os dados são criptografados, armazenados de forma segura e você tem controle total sobre eles. Conformidade com legislação brasileira garantida.',
    },
    {
      question: '📊 Vou ter controle do que está acontecendo?',
      answer: 'SIM! Dashboard completo mostra em tempo real: conversas ativas, agendamentos, taxa de conversão, horários de pico, performance da IA. Nada de "caixa preta". Controle total.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-4 text-gray-900">
            Perguntas Que Todo Mundo Faz
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-600 mb-12 sm:mb-16">
            Resposta direta. Sem enrolação.
          </p>
        </FadeInSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-cyan-500 hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-8 py-5 sm:py-6 flex justify-between items-center text-left gap-4"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-8 pb-5 sm:pb-6">
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
