import { motion } from 'motion/react';
import { GlitchText } from './GlitchText';
import { ChevronRight, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
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
          <div className="inline-block border border-neon-yellow/50 bg-neon-yellow/10 px-4 py-1 mb-6 rounded-none clip-path-button">
            <span className="text-neon-yellow font-mono text-sm tracking-widest uppercase">
              ⚠ Limited Slots Available: 14/50 Remaining
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 leading-none tracking-tighter text-white">
            <GlitchText text="UPGRADE" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              YOUR REALITY
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light">
            The Ultimate Productivity Hack. <span className="text-white font-bold">Lifetime Access.</span> Zero Monthly Fees.
            <br />
            <span className="text-neon-pink">Gemini Advanced + 2TB Storage + YouTube Premium.</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-neon-cyan text-black font-bold text-xl px-12 py-4 clip-path-button overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
              <span className="flex items-center gap-2">
                SECURE MY SLOT NOW <ChevronRight className="w-6 h-6" />
              </span>
            </motion.button>
            
            <div className="text-left">
              <div className="text-sm text-gray-500 line-through font-mono">ORIGINAL: ₱1,999</div>
              <div className="text-3xl font-bold text-neon-yellow font-mono">₱999 ONLY</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-black to-transparent"></div>
    </section>
  );
};
