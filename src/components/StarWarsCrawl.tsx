"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StarWarsCrawlProps {
  className?: string;
}

const StarWarsCrawl: React.FC<StarWarsCrawlProps> = ({ className }) => {
  return (
    <section 
      className={cn(
        "relative z-[2] w-full py-12 bg-black flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div 
        className={cn(
          "text-center text-orange-400 font-sans leading-tight w-full px-16",
          "transform-gpu will-change-transform"
        )}
        style={{
          transform: "perspective(600px) rotateX(25deg)"
        }}
      >
        {/* Episode Info */}
        <div className="mb-16 max-w-5xl mx-auto px-4">
          <p className="text-4xl font-medium tracking-[0.3em] mb-6 opacity-80">
            Episode IV
          </p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-[0.2em] mb-16 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]">
            THE STORY SO FAR...
          </h1>
        </div>
        
        {/* Story Content */}
        <div className="space-y-8 max-w-6xl mx-auto px-4">
          <p className="text-2xl md:text-3xl font-light drop-shadow-[0_0_5px_rgba(251,146,60,0.3)]">
            It is a period of creative turmoil. DAOs, or decentralized autonomous 
            organizations, represent one possible future for the internet. But that 
            future is fragile. Use-cases are immature. Speculation is rampant. 
            The first DAO exploded, almost taking down Ethereum.
          </p>
          
          <p className="text-2xl md:text-3xl font-light drop-shadow-[0_0_5px_rgba(251,146,60,0.3)]">
            DAOs are far, far from disrupting the deathstars of WEB2. For years, 
            the ecosystem was fragmented by competition and closed standards.
          </p>
          
          <p className="text-2xl md:text-3xl font-light drop-shadow-[0_0_5px_rgba(251,146,60,0.3)]">
            Now, a new alliance of DAO builders is racing to build the open protocols 
            and shared language that will realize the promise of this emerging technology. 
            This is DAOstar - where collaboration meets innovation in the quest to build 
            the infrastructure for decentralized governance...
          </p>
        </div>
      </div>
    </section>
  );
};

export default StarWarsCrawl;