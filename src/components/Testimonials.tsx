import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Miguel Santos',
    role: 'Agency Owner',
    content: 'After switching to the trial subaccount, we moved our lead capture and follow-up into one place. Our response speed improved and we closed more discovery calls in week one.',
    rating: 5,
    image: 'https://picsum.photos/seed/miguel/100/100'
  },
  {
    name: 'Sarah L.',
    role: 'Freelance Consultant',
    content: 'The funnel builder plus calendar booking helped me automate my client intake. I stopped chasing leads manually and focused on closing projects.',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Jayson D.',
    role: 'Local Service Business',
    content: 'The automation flows are the best part. New leads now get instant SMS + email follow-up and reminders, so our no-show rate went down fast.',
    rating: 5,
    image: 'https://picsum.photos/seed/jayson/100/100'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(var(--color-neon-purple) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-purple) 1px, transparent 1px)',
             backgroundSize: '30px 30px',
             maskImage: 'radial-gradient(circle at center, black 30%, transparent 100%)'
           }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            USER <span className="text-neon-purple">FEEDBACK</span>
          </h2>
          <p className="text-gray-400">Feedback from users launching with our GHL trial flow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-cyber-gray border border-gray-800 p-8 rounded-xl relative group hover:border-neon-purple transition-colors"
            >
              <Quote className="absolute top-4 right-4 text-gray-700 w-10 h-10 group-hover:text-neon-purple/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-neon-purple"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-white font-display">{t.name}</div>
                  <div className="text-xs text-neon-cyan font-mono">{t.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, starI) => (
                  <Star key={starI} className="w-4 h-4 text-neon-yellow fill-neon-yellow" />
                ))}
              </div>

              <p className="text-gray-300 italic leading-relaxed">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
