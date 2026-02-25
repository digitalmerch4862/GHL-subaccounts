import { motion } from 'motion/react';
import { Rocket, CheckCircle, ArrowRight } from 'lucide-react';

export const GHLPromo = () => {
  return (
    <section className="py-24 bg-cyber-black relative overflow-hidden border-y border-neon-purple/30">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-cyan/10 animate-pulse pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          <span className="bg-neon-purple text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(188,19,254,0.5)]">
            ⚠️ EXCLUSIVE PARTNER OFFER
          </span>
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
          BUILD YOUR OWN <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink text-glow-pink">
            DIGITAL EMPIRE
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Want to know the secret tool we use to run everything? <br />
          Automate your marketing, sales, and fulfillment with the #1 All-In-One Platform.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="text-neon-cyan w-6 h-6" /> <span>CRM & Pipeline Management</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="text-neon-cyan w-6 h-6" /> <span>Website & Funnel Builder</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <CheckCircle className="text-neon-cyan w-6 h-6" /> <span>Email & SMS Marketing</span>
          </div>
        </div>

        <motion.a
          href="https://www.gohighlevel.com/?fp_ref=digitalmerchs"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-black text-2xl md:text-4xl px-12 py-8 rounded-2xl shadow-[0_0_40px_rgba(188,19,254,0.6)] hover:shadow-[0_0_60px_rgba(188,19,254,0.8)] transition-all border-2 border-white/20 group"
        >
          <Rocket className="w-10 h-10 md:w-12 md:h-12 animate-bounce" />
          <span>CLAIM 30-DAY FREE TRIAL</span>
          <ArrowRight className="w-10 h-10 md:w-12 md:h-12 group-hover:translate-x-2 transition-transform" />
        </motion.a>

        <p className="mt-6 text-gray-500 text-sm font-mono">
          *Limited time offer via our partner link. Cancel anytime.
        </p>
      </div>
    </section>
  );
};
