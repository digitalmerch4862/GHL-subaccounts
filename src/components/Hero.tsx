import { motion } from 'motion/react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { DigitalRain } from './DigitalRain';

export const Hero = () => {
  const trialFeatures = [
    'CRM & Pipeline Management',
    'Website & Funnel Builder',
    'Email & SMS Automation',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Digital Rain Background */}
      <DigitalRain />
      
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{
              backgroundImage: 'linear-gradient(var(--color-neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-cyan) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
            }}>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block border border-neon-purple/40 bg-neon-purple/10 px-5 py-2 mb-6 rounded-full">
            <span className="text-white font-mono text-xs md:text-sm tracking-widest uppercase">
              Exclusive Partner Offer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight text-white">
            Build Your Own
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              Digital Empire
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Launch your <span className="text-white font-semibold">Go High Level subaccount</span> with a
            <span className="text-neon-cyan font-semibold"> 30-day free trial</span>.
            Build funnels, automate follow-ups, and close more clients from one dashboard.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-10">
            {trialFeatures.map((feature) => (
              <div key={feature} className="inline-flex items-center gap-2 text-gray-200 text-sm md:text-base">
                <CheckCircle className="w-4 h-4 text-neon-cyan" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="https://www.gohighlevel.com/?fp_ref=digitalmerchs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold text-xl px-12 py-4 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(188,19,254,0.35)]"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span className="flex items-center gap-2">
                CLAIM 30-DAY FREE TRIAL <ChevronRight className="w-6 h-6" />
              </span>
            </motion.a>
            
            <div className="text-left">
              <div className="text-sm text-gray-400 font-mono">No setup fee today</div>
              <div className="text-3xl font-bold text-neon-cyan font-mono">Start Free for 30 Days</div>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500 font-mono">
            Limited-time partner trial access. Cancel anytime.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-black to-transparent"></div>
    </section>
  );
};
