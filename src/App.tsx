import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Positioning } from "./components/Positioning";
import { WhatLendraDoes } from "./components/WhatLendraDoes";
import { HowItWorks } from "./components/HowItWorks";
import { SingleTransfer } from "./components/SingleTransfer";
import { YieldSource } from "./components/YieldSource";
import { VaultParticipation } from "./components/VaultParticipation";
import { FinalCTA } from "./components/Footer";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-midnight text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <WhatLendraDoes />
        <HowItWorks />
        <SingleTransfer />
        <YieldSource />
        <VaultParticipation />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
