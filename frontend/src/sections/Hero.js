import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50/50 via-purple-50/30 to-white relative overflow-hidden pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-200/40 to-purple-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200/40 to-cyan-200/40 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-cyan-100/80 border border-cyan-300/50 rounded-full text-cyan-700 text-sm sm:text-base font-semibold mb-4 sm:mb-6">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-gray-900"
          >
            {t('hero.title1')}{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed"
          >
            <strong className="text-gray-800">{t('hero.subtitle1')}</strong>
            <br className="hidden sm:block" />
            {t('hero.subtitle2')}
          </motion.h2>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 py-4"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl sm:text-4xl mb-2">🧠</div>
              <div className="text-sm sm:text-base font-semibold text-gray-700">Contextual</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl sm:text-4xl mb-2">📊</div>
              <div className="text-sm sm:text-base font-semibold text-gray-700">Dashboard</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl sm:text-4xl mb-2">⚡</div>
              <div className="text-sm sm:text-base font-semibold text-gray-700">&lt;5min</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <a
              href="https://wa.me/5512992196495?text=Oi!%20Gostaria%20de%20falar%20com%20a%20ZENYA"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-xl shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 text-center text-base sm:text-lg"
            >
              <span className="flex items-center justify-center gap-2">
                💬 Falar com ZENYA
              </span>
            </a>
            <a
              href="https://calendly.com/mauro-sparkleai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center text-base sm:text-lg"
            >
              📅 Agendar Reunião
            </a>
          </motion.div>
        </div>

        {/* Right Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-2xl">
            {/* Dashboard image - full width, maintains aspect ratio */}
            <div className="relative rounded-3xl border-2 border-cyan-200/50 shadow-2xl overflow-hidden bg-white">
              <img
                src="/zenya-dashboard.png"
                alt="Dashboard ZENYA"
                className="w-full h-auto"
                loading="eager"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center text-3xl sm:text-4xl text-gray-400 p-20">
                📊 Dashboard + 💬 WhatsApp
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
            >
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-xs font-bold text-gray-700">24/7 Online</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
            >
              <div className="text-2xl mb-1">⭐</div>
              <div className="text-xs font-bold text-gray-700">ROI 17,8x</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hidden lg:block"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
