"use client";

import { useState, useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Gallery } from "@/components/sections/Gallery";
import { Letter } from "@/components/sections/Letter";
import { PresentReveal } from "@/components/sections/PresentReveal";
import { Reflection } from "@/components/sections/Reflection";
import { Proposal } from "@/components/sections/Proposal";
import { PromiseSection } from "@/components/sections/Promise";
import { Closing } from "@/components/sections/Closing";

export default function Home() {
  const [showPromise, setShowPromise] = useState(false);
  const proposalRef = useRef<HTMLDivElement>(null);

  const scrollToProposal = () => {
    proposalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProposalYes = () => {
    setShowPromise(true);
  };

  return (
    <main className="relative min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Gallery />
      <Letter />
      {/* <PresentReveal /> */}
      <Reflection onReady={scrollToProposal} />

      <div ref={proposalRef}>
        <Proposal onYes={handleProposalYes} />
      </div>

      <Closing />

      <PromiseSection
        isOpen={showPromise}
        onClose={() => setShowPromise(false)}
      />
    </main>
  );
}
