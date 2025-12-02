import FadeInSection from '../components/FadeInSection';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-purple-200 rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight text-gray-900">
                Seu Negócio Pode Respirar.<br className="hidden sm:block" />
                Ou Pode Continuar Sangrando.
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                Agende uma demonstração. Veja ZENYA funcionando na sua realidade.<br className="hidden sm:block" />
                Calculamos o ROI. Você decide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/5512992196495?text=Oi!%20Gostaria%20de%20falar%20com%20a%20ZENYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
                >
                  💬 Falar com ZENYA Agora
                </a>
                <a
                  href="https://calendly.com/mauro-sparkleai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
                >
                  🚀 Agendar Demonstração
                </a>
              </div>
            </motion.div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
