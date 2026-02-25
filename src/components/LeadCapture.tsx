import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Gift, Download } from 'lucide-react';

export const LeadCapture = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary, though usually these scripts just add global listeners
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden border-t border-neon-cyan/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-neon-pink/10 border border-neon-pink text-neon-pink px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse"
          >
            <Gift className="w-4 h-4" /> FREE BONUS UNLOCKED
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            WAIT! DON'T LEAVE <span className="text-neon-cyan">EMPTY HANDED</span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get our <span className="text-white font-bold">Exclusive Productivity App</span> (Worth ₱500) for <span className="text-neon-yellow font-bold">FREE</span> just for checking us out.
            <br />
            <span className="text-sm text-gray-500 mt-2 block">
              Simply fill out the form below to receive the instant download link. No purchase required.
            </span>
          </p>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-xl mx-auto"
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/RPC7wOI9WgRNNPFRbXSz"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '4px',
              minHeight: '400px' 
            }}
            id="inline-RPC7wOI9WgRNNPFRbXSz"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Claim Form"
            data-height="460"
            data-layout-iframe-id="inline-RPC7wOI9WgRNNPFRbXSz"
            data-form-id="RPC7wOI9WgRNNPFRbXSz"
            title="Claim Form"
          ></iframe>
        </motion.div>
        
        <div className="mt-6 text-center text-gray-500 text-xs flex items-center justify-center gap-2">
          <Download className="w-3 h-3" />
          <span>Instant delivery via email/SMS. 100% Secure.</span>
        </div>
      </div>
    </section>
  );
};
