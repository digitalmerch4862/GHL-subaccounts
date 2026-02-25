/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Hero } from './components/Hero';
import { ValueStack } from './components/ValueStack';
import { WhyUs } from './components/WhyUs';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { LeadCapture } from './components/LeadCapture';
import { CustomCursor } from './components/CustomCursor';
import { GHLPromo } from './components/GHLPromo';
import { LiveNotifications } from './components/LiveNotifications';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-white selection:bg-neon-pink selection:text-white cursor-none">
      <CustomCursor />
      <LiveNotifications />
      <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-tighter">
            DIGITAL<span className="text-neon-cyan">MERCH</span>
          </div>
          <button className="bg-white text-black font-bold px-4 py-2 text-sm clip-path-slant hover:bg-neon-cyan transition-colors">
            GET ACCESS
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <ValueStack />
        <WhyUs />
        <Testimonials />
        <GHLPromo />
        <FAQ />
        <LeadCapture />
      </main>

      <footer className="py-10 bg-black border-t border-gray-900 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-sm font-mono">
            © 2026 DigitalMerch PH. All rights reserved. <br />
            Not affiliated with Google or YouTube.
          </p>
        </div>
      </footer>
    </div>
  );
}
