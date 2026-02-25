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
import { Facebook, Instagram, Youtube } from 'lucide-react';

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
          <a
            href="https://dmerch-portal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-4 py-2 text-sm clip-path-slant hover:bg-neon-cyan transition-colors"
          >
            AVAIL NOW
          </a>
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

      <section className="py-8 border-t border-neon-cyan/20 bg-cyber-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-sm text-gray-300 tracking-wide">FOLLOW DIGITALMERCH OFFICIAL</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/digitalmerch4862/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigitalMerch Facebook"
                className="p-3 rounded-full border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@digitalmerch-sy7yt?si=c8VCo5afd47Rf5Df"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigitalMerch YouTube"
                className="p-3 rounded-full border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/digitalmerch4862/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigitalMerch Instagram"
                className="p-3 rounded-full border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
