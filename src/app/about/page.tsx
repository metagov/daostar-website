"use client";

import Image from "next/image";
import StarWarsCrawl from "@/components/StarWarsCrawl";
import MemberLogos from "@/components/MemberLogos";

export default function About() {
  return (
    <div className="relative min-h-screen">
      {/* Mesh Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1] opacity-10">
        <Image
          src="/img/mesh.png"
          alt="Mesh overlay"
          fill
          className="object-cover mix-blend-multiply"
          priority
        />
      </div>

      {/* Header Section */}
      <section className="relative z-[2] min-h-[40vh] flex items-center justify-center px-8 md:px-16 max-w-6xl mx-auto pt-72 md:pt-80">
        <div className="flex justify-center items-center w-full">
          <div className="text-center max-w-5xl">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-none font-light mb-6 text-text-primary font-heading">
              About DAOstar
            </h1>
            <p className="text-xl text-text-secondary font-light max-w-3xl mx-auto">
              The story of how we&apos;re building the future of decentralized governance
            </p>
          </div>
        </div>
      </section>

      <StarWarsCrawl />

      {/* History Section */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl mb-6 text-text-primary font-heading font-light">
              Our History
            </h2>
            <p className="text-xl text-text-secondary font-light max-w-4xl mx-auto leading-relaxed">
              DAOstar began as an alliance of all the major players in the DAO ecosystem—from infrastructure providers to governance platforms—coming together to figure out how DAOs can work better together through shared protocols and common language.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
            <blockquote className="text-center mb-8">
              <p className="text-2xl text-brand-accent font-light italic mb-4">
                &quot;Let&apos;s challenge each other not to build empires.&quot;
              </p>
              <cite className="text-text-secondary">
                — Spencer Graham @ Roundtable #1
              </cite>
            </blockquote>

            <div className="grid md:grid-cols-2 gap-8 text-text-secondary">
              <div className="space-y-4">
                <p className="leading-relaxed">
                  DAOstar One was a roundtable of key organizations in the DAO ecosystem. Each roundtable meeting included representatives from major organizations, with each organization able to send up to two representatives per meeting.
                </p>
                <p className="leading-relaxed">
                  The private roundtable was regularly attended by DAO leaders, founders, and CEOs, with discussions professionally moderated and summarized. The roundtable met monthly to advance standards and collaboration.
                </p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Through DAOstar One, we built interoperable standards and other public infrastructure for DAOs and DAO tooling, fostering collaboration over competition in the ecosystem.
                </p>
                <p className="leading-relaxed">
                  This collaborative foundation evolved into what DAOstar is today—continuing our mission to support standards, research, and public goods for the broader DAO ecosystem.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl mb-8 text-text-primary font-heading font-light">
              Governed by DAOstar One
            </h3>
            <p className="text-lg text-text-secondary font-light mb-12 max-w-3xl mx-auto">
              DAOstar One brought together representatives from across the DAO ecosystem:
            </p>
            <MemberLogos />
          </div>
        </div>
      </section>
    </div>
  );
}