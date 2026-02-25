import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Users } from 'lucide-react';

const NAMES = [
  "Miguel S.", "Bea D.", "Ryan C.", "Sarah L.", "Jasmine P.", 
  "Mark J.", "Angelo R.", "Kyla M.", "Paulo G.", "Trish A.",
  "Kevin T.", "Rica B.", "Gino V.", "Carla S.", "Nico D."
];

const LOCATIONS = [
  "Quezon City", "Makati", "Cebu City", "Davao", "Manila", 
  "Taguig", "Pasig", "Mandaluyong", "Laguna", "Cavite"
];

const ACTIONS = [
  'started the 30-day trial',
  'booked a setup call',
  'launched a new funnel',
  'activated a GHL subaccount'
];

export const LiveNotifications = () => {
  const [notification, setNotification] = useState<{name: string, location: string, action: string} | null>(null);
  const [viewerCount, setViewerCount] = useState(124);

  // Randomize viewer count
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(80, prev + change);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle purchase notifications
  useEffect(() => {
    const showNotification = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
      const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
      
      setNotification({ name, location, action });

      // Hide after 4 seconds
      setTimeout(() => {
        setNotification(null);
      }, 4000);
    };

    // Initial delay
    const initialTimeout = setTimeout(showNotification, 2000);

    // Loop every 6-10 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 4000 + 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Live Viewer Count (Fixed Top Left or Bottom Left) */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:flex items-center gap-2 bg-black/60 backdrop-blur-md border border-neon-cyan/30 px-3 py-1.5 rounded-full text-xs font-mono text-neon-cyan pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
        </span>
        {viewerCount} people viewing this offer
      </div>

      {/* Purchase Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            className="fixed bottom-16 left-4 md:bottom-16 md:left-4 z-50 max-w-[300px] w-full"
          >
            <div className="bg-cyber-gray/90 backdrop-blur-md border border-neon-cyan/50 p-4 rounded-lg shadow-lg shadow-neon-cyan/10 flex items-start gap-3">
              <div className="bg-neon-cyan/20 p-2 rounded-full shrink-0">
                <CheckCircle className="w-5 h-5 text-neon-cyan" />
              </div>
              <div>
                <p className="text-sm text-white font-bold">
                  {notification.name} <span className="text-gray-400 font-normal">from {notification.location}</span>
                </p>
                <p className="text-xs text-neon-cyan mt-1">
                  {notification.action}
                </p>
                <p className="text-[10px] text-gray-500 mt-1 font-mono">
                  Just now
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
