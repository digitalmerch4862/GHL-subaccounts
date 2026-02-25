import { motion } from 'motion/react';
import { Rocket, CheckCircle, ArrowRight, Shield, Clock3, Layers } from 'lucide-react';

export const GHLPromo = () => {
  return (
    <section id="trial-writeup" className="py-24 bg-cyber-black relative overflow-hidden border-y border-neon-purple/30">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-cyan/10 animate-pulse pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-6 mx-auto"
        >
          <span className="bg-neon-purple text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(188,19,254,0.5)]">
            Exclusive Partner Trial
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
              Upsell with a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                Go High Level Subaccount
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Get a <span className="text-white font-semibold">30-day free trial account</span> and test the full engine that powers client acquisition,
              follow-up, and fulfillment. This is ideal for agencies, freelancers, coaches, and service businesses who want one system
              for leads, pipelines, and automation.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-gray-200">
                <Shield className="w-5 h-5 text-neon-cyan mt-1" />
                <p>White-labeled subaccount setup with guided onboarding from our team.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-200">
                <Clock3 className="w-5 h-5 text-neon-cyan mt-1" />
                <p>Launch your first funnel and automation in days, not months.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-200">
                <Layers className="w-5 h-5 text-neon-cyan mt-1" />
                <p>CRM, calendar, forms, messaging, and campaigns in one dashboard.</p>
              </div>
            </div>

            <motion.a
              href="https://dmerch-portal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-black text-xl md:text-2xl px-10 py-5 rounded-xl shadow-[0_0_35px_rgba(188,19,254,0.4)] hover:shadow-[0_0_50px_rgba(188,19,254,0.6)] transition-all group"
            >
              <Rocket className="w-7 h-7" />
              <span>BEST VALUE: ₱4,999/YEAR</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <p className="mt-5 text-gray-500 text-sm font-mono">No lock-in. Cancel anytime during trial.</p>
          </div>

          <div className="bg-cyber-gray/70 border border-neon-cyan/20 rounded-2xl p-7">
            <h3 className="text-2xl font-bold text-white mb-5">What your trial account includes</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="w-5 h-5 text-neon-cyan mt-1" />
                <p><span className="text-white font-semibold">CRM & Pipeline:</span> Track leads, deals, and every stage of your sales process.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="w-5 h-5 text-neon-cyan mt-1" />
                <p><span className="text-white font-semibold">Funnel + Website Builder:</span> Build landing pages and booking flows without coding.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="w-5 h-5 text-neon-cyan mt-1" />
                <p><span className="text-white font-semibold">Automation + Campaigns:</span> Send email/SMS follow-ups based on user behavior.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-200">
                <CheckCircle className="w-5 h-5 text-neon-cyan mt-1" />
                <p><span className="text-white font-semibold">Calendar + Booking:</span> Let prospects schedule calls directly from your funnel.</p>
              </div>
            </div>

            <div className="mt-6 space-y-1 font-mono">
              <p className="text-base text-gray-300">Starting at ₱599/month</p>
              <p className="text-2xl font-bold text-neon-cyan">Best Value: ₱4,999/year</p>
              <p className="text-xs text-gray-500">Cancel anytime. Upgrade only when ready.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
