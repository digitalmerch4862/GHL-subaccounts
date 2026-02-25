import { motion } from 'motion/react';
import { Check, X, ShieldCheck, Clock, Zap } from 'lucide-react';

export const WhyUs = () => {
  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-purple/5 skew-x-12 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left: Comparison */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">
              WHY CHOOSE <span className="text-neon-cyan">DIGITALMERCH?</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-cyber-gray/50 p-6 border border-red-500/30 rounded-lg opacity-70">
                <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" /> THE OLD WAY (Tool Chaos)
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Separate CRM, funnel, and automation apps</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Leads get lost between tabs and tools</li>
                  <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500" /> Slow follow-up and inconsistent tracking</li>
                  <li className="font-mono text-white mt-2 pt-2 border-t border-gray-700">
                    RESULT: HIGH COST + LOW CONTROL
                  </li>
                </ul>
              </div>

              <div className="bg-cyber-gray p-6 border border-neon-cyan box-glow-cyan rounded-lg relative transform scale-105">
                <div className="absolute -top-3 right-4 bg-neon-cyan text-black text-xs font-bold px-2 py-1 uppercase">
                  Best Value
                </div>
                <h3 className="text-neon-cyan font-bold mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> THE DIGITALMERCH WAY
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-cyan" /> 30-day free trial with full core features</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-cyan" /> One dashboard for leads, funnels, and follow-ups</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-cyan" /> Partner guidance to launch your workflow faster</li>
                  <li className="font-mono text-neon-yellow text-lg mt-2 pt-2 border-t border-gray-700 font-bold">
                    RESULT: CLEAN SYSTEM + FASTER SALES
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Trust Indicators */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-neon-pink/20 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-neon-pink" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Legit & Secure</h4>
                <p className="text-gray-400 text-sm">
                  You activate through the official Go High Level partner flow. 
                  Your account setup stays under your business workflow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-neon-yellow/20 p-3 rounded-full">
                <Clock className="w-8 h-8 text-neon-yellow" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Instant Activation</h4>
                <p className="text-gray-400 text-sm">
                  Start your trial now and build your first pipeline, funnel, and automation this week.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-neon-purple/20 p-3 rounded-full">
                <Zap className="w-8 h-8 text-neon-purple" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Future Proof</h4>
                <p className="text-gray-400 text-sm">
                  Scale from freelancer workflows to multi-client operations without switching platforms.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
