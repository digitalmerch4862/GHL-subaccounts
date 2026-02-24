import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is this a scam? How is it so cheap?",
    answer: "Not a scam. We utilize enterprise-grade family slots and developer licenses that allow us to bundle these services at a fraction of the individual cost. We purchase in bulk and pass the savings to you. Thousands of Filipino students and freelancers trust us."
  },
  {
    question: "Do I need to change my email?",
    answer: "No! You can use your existing personal Gmail account. We will simply add your account to our premium organization/family group to unlock the features. Your data (photos, emails, drive) remains 100% private to you."
  },
  {
    question: "What happens if I lose access?",
    answer: "We offer a 12-month warranty on connectivity. If you ever get disconnected (which is rare), simply message our support team with your receipt, and we will restore your access or move you to a new slot instantly."
  },
  {
    question: "Is the 2TB storage private?",
    answer: "Yes. Even though you are in a 'family' group for billing purposes, Google's architecture ensures that your files, photos, and emails are completely private and visible ONLY to you. The admin cannot see your files."
  },
  {
    question: "Can I use this for my thesis/coding projects?",
    answer: "Absolutely. This is designed for power users. Gemini Advanced with DeepResearch is perfect for thesis work, and the Jules Coding Agent is a game-changer for developers."
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
