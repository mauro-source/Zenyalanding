import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Features from './sections/Features';
import AdvancedFeatures from './sections/AdvancedFeatures';
import Benefits from './sections/Benefits';
import Comparison from './sections/Comparison';
import CaseStudy from './sections/CaseStudy';
import Timeline from './sections/Timeline';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Google Tag Manager (placeholder - user will add their ID)
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'GTM-XXXXXXX'); // User replaces with their GTM ID
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Problem Section */}
      <Problem />
      
      {/* Features */}
      <Features />
      
      {/* Benefits with Real Screenshots */}
      <Benefits />
      
      {/* Case Study with ROI Calculator */}
      <CaseStudy />
      
      {/* Timeline */}
      <Timeline />
      
      {/* FAQ */}
      <FAQ />
      
      {/* Final CTA */}
      <CTA />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
