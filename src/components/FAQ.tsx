import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How does the 30-day trial work?',
    answer: 'You get trial access through our official partner link so you can explore the core Go High Level features: CRM, funnels, automation, and messaging. You can cancel anytime during the trial period.'
  },
  {
    question: 'What is included in the trial account?',
    answer: 'Your trial includes the tools most teams need to launch quickly: pipeline CRM, website and funnel builder, calendar booking, and email/SMS automations.'
  },
  {
    question: 'Can I use my own domain and branding?',
    answer: 'Yes. You can connect your own domain, branding, and business assets. This is designed for agencies, freelancers, and business owners who want a professional client-ready setup.'
  },
  {
    question: 'Do you provide onboarding support?',
    answer: 'Yes. We provide guidance so you can set up your first pipeline, forms, and follow-up workflows faster. This helps you avoid common setup mistakes and launch quickly.'
  },
  {
    question: 'What happens after the trial ends?',
    answer: 'If the platform fits your workflow, you can continue with a paid plan through the same ecosystem. If not, you can cancel before renewal.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          FREQUENTLY ASKED <span className="text-neon-yellow">QUESTIONS</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-800 bg-cyber-gray rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-neon-pink" />
                ) : (
                  <Plus className="text-neon-cyan" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
