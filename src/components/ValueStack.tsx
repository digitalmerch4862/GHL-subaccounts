import { motion } from 'motion/react';
import { 
  Database, 
  Brain, 
  Youtube, 
  Code, 
  FileText, 
  Video, 
  Music, 
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: <Database className="w-8 h-8 text-neon-cyan" />,
    title: "2TB Cloud Storage",
    desc: "Massive storage for Gdrive, Gmail, and Photos. Never see 'Storage Full' again.",
    color: "border-neon-cyan"
  },
  {
    icon: <Brain className="w-8 h-8 text-neon-pink" />,
    title: "Gemini DeepResearch",
    desc: "Your AI research assistant. Summarize theses, analyze data, and write reports in seconds.",
    color: "border-neon-pink"
  },
  {
    icon: <Youtube className="w-8 h-8 text-red-500" />,
    title: "YouTube Premium",
    desc: "Ad-free streaming. Background play. Offline downloads. Pure focus.",
    color: "border-red-500"
  },
  {
    icon: <Code className="w-8 h-8 text-neon-yellow" />,
    title: "Jules Coding Agent",
    desc: "Your personal senior dev partner. Debug, refactor, and write code 10x faster.",
    color: "border-neon-yellow"
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-400" />,
    title: "AI in Workspace",
    desc: "Draft emails, organize sheets, and create slides automatically in Google Docs/Gmail.",
    color: "border-blue-400"
  },
  {
    icon: <Video className="w-8 h-8 text-purple-500" />,
    title: "Veo3 Video Gen",
    desc: "Create cinematic AI videos from text prompts. The future of content creation.",
    color: "border-purple-500"
  },
  {
    icon: <Music className="w-8 h-8 text-green-400" />,
    title: "YT Music Premium",
    desc: "Unlimited music streaming. No interruptions. Perfect for deep work sessions.",
    color: "border-green-400"
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-400" />,
    title: "Nano Banana & Flow",
    desc: "Next-gen lightweight models for instant on-device processing and workflow automation.",
    color: "border-orange-400"
  }
];

export const ValueStack = () => {
  return (
    <section className="py-20 bg-cyber-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            THE <span className="text-neon-pink">VALUE STACK</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to dominate your studies or career. All in one dashboard.
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
              whileHover={{ y: -5 }}
              className={`bg-cyber-gray p-6 border-l-4 ${feature.color} relative overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                {feature.icon}
              </div>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white font-display tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
