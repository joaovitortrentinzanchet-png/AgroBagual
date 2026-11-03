/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Risks } from './components/Risks';
import { Features } from './components/Features';
import { SemeIA } from './components/SemeIA';
import { GPS } from './components/GPS';
import { Benefits } from './components/Benefits';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Guarantee } from './components/Guarantee';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { BlogAndLegal } from './components/BlogAndLegal';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-agro-black text-white font-sans selection:bg-agro-neon selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Risks />
        <Features />
        <SemeIA />
        <GPS />
        <Benefits />
        <Stats />
        <Pricing />
        <FAQ />
        <Guarantee />
        <Testimonials />
        <FinalCTA />
        <BlogAndLegal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
