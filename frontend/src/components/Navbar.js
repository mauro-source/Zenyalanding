import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              SPARKLE
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.howItWorks')}
              </button>
              <button
                onClick={() => scrollToSection('resultados')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.results')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.faq')}
              </button>
            </div>

            {/* Language Selector + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="https://calendly.com/mauro-sparkleai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t('nav.scheduleDemo')}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 sm:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-40 md:hidden"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('resultados')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              FAQ
            </button>
            <a
              href="https://calendly.com/mauro-sparkleai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Agendar Demo
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
