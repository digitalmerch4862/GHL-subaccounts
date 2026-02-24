import { motion } from 'motion/react';

export const GlitchText = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        className="absolute top-0 left-0 -ml-[2px] text-neon-pink opacity-70 mix-blend-screen"
        animate={{
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.1, 0.2, 0.3, 1]
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 ml-[2px] text-neon-cyan opacity-70 mix-blend-screen"
        animate={{
          x: [0, 2, -2, 1, 0],
          y: [0, -1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.1, 0.2, 0.3, 1]
        }}
      >
        {text}
      </motion.span>
      <span className="relative z-10">{text}</span>
    </div>
  );
};
