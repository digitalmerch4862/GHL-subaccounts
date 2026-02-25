import { motion } from 'motion/react';
import { 
  Users,
  Target,
  MessageSquare,
  Mail,
  Calendar,
  Bot,
  BarChart3,
  ShieldCheck
} from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-neon-cyan" />,
    title: 'Smart CRM',
    desc: 'Store every lead, conversation, and pipeline stage in one place.',
    color: "border-neon-cyan"
  },
  {
    icon: <Target className="w-8 h-8 text-neon-pink" />,
    title: 'Funnel Builder',
    desc: 'Launch pages, forms, and offers that convert visitors into booked calls.',
    color: "border-neon-pink"
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-red-500" />,
    title: 'Two-Way Inbox',
    desc: 'Reply to leads from SMS, email, social, and chat from one unified inbox.',
    color: "border-red-500"
  },
  {
    icon: <Mail className="w-8 h-8 text-neon-yellow" />,
    title: 'Email & SMS Flows',
    desc: 'Automate follow-ups, reminders, and nurture campaigns without manual work.',
    color: "border-neon-yellow"
  },
  {
    icon: <Calendar className="w-8 h-8 text-blue-400" />,
    title: 'Booking Calendar',
    desc: 'Let prospects self-book calls and route them to the right offer instantly.',
    color: "border-blue-400"
  },
  {
    icon: <Bot className="w-8 h-8 text-purple-500" />,
    title: 'Workflow Automation',
    desc: 'Trigger actions based on behavior to save hours and increase response speed.',
    color: "border-purple-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    title: 'Attribution & Reporting',
    desc: 'Track where leads come from and which campaigns actually produce revenue.',
    color: "border-green-400"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-400" />,
    title: 'Client-Ready Subaccount',
    desc: 'Start with a guided setup so you can onboard clients with confidence.',
    color: "border-orange-400"
  }
];

export const ValueStack = () => {
  return (
    <section className="py-20 bg-cyber-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            GO HIGH LEVEL <span className="text-neon-pink">TRIAL STACK</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to sell, follow up, and fulfill from one dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)"
              }}
              className={`bg-cyber-gray p-6 border-l-4 ${feature.color} relative overflow-hidden group perspective-1000 transform-gpu transition-all duration-300`}
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <div className="mb-4 group-hover:text-white transition-colors duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white font-display tracking-wide group-hover:text-neon-cyan transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.desc}</p>
              
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
