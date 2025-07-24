"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Eye from "@/components/Eye";
import StarWarsCrawl from "@/components/StarWarsCrawl";
import { cn } from "@/lib/utils";

export default function Home() {
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


      {/* Hero Section */}
      <section className="relative z-[2] min-h-[60vh] flex items-center justify-center px-8 md:px-16 max-w-6xl mx-auto pt-72 md:pt-80">
        <div className="flex justify-center items-center w-full">
          <div className="text-center max-w-5xl">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-none font-light mb-6 text-text-primary font-heading">
              We support<br />
              <span className="inline">
                <Typewriter 
                  options={{
                    strings: ["standards", "research", "public goods"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50
                  }}
                />
              </span>
              for DAOs
            </h1>
          </div>
        </div>
      </section>

      <StarWarsCrawl />

      {/* Eye/Protocols Section */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20" id="eye-section">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Interactive Eye - Left Side */}
          <div className="flex justify-center">
            <Eye size="lg" className="max-w-full" />
          </div>
          
          {/* Content - Right Side */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-2xl font-light text-text-primary font-heading leading-tight">
              The Protocols Strike Back
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                Centralized platforms and fragmented standards are the Death Stars of Web3. 
                Monolithic, closed, and designed to concentrate power.
              </p>
              <p>
                DAOstar is building the open protocols and shared language that let scrappy 
                rebel DAOs coordinate, interoperate, and win.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-[2] max-w-4xl mx-auto px-16 py-16">
        <h2 className="text-center mb-12 text-section text-text-primary font-heading font-light">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={cn(
            "bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-brand-accent"
          )}>
            <h3 className="text-2xl mb-4 text-text-primary font-heading font-light">
              OpenGrants
            </h3>
            <p className="text-text-primary opacity-80 mb-6 leading-relaxed font-light">
              Transform your grants data into intelligence with our open source grants stack.
            </p>
            <Link 
              href="/opengrants"
              className={cn(
                "text-brand-accent font-medium transition-all duration-300 inline-block",
                "hover:text-text-primary hover:translate-x-1"
              )}
            >
              Learn More →
            </Link>
          </div>
          
          <div className={cn(
            "bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-brand-accent"
          )}>
            <h3 className="text-2xl mb-4 text-text-primary font-heading font-light">
              Research
            </h3>
            <p className="text-text-primary opacity-80 mb-6 leading-relaxed font-light">
              Cutting-edge research on DAO governance, security, and ecosystem development.
            </p>
            <Link 
              href="/research"
              className={cn(
                "text-brand-accent font-medium transition-all duration-300 inline-block",
                "hover:text-text-primary hover:translate-x-1"
              )}
            >
              Explore Research →
            </Link>
          </div>
          
          <div className={cn(
            "bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-brand-accent",
            "md:col-span-2 lg:col-span-1"
          )}>
            <h3 className="text-2xl mb-4 text-text-primary font-heading font-light">
              DAO Standards
            </h3>
            <p className="text-text-primary opacity-80 mb-6 leading-relaxed font-light">
              Building open standards for the future of decentralized governance.
            </p>
            <Link 
              href="/daoid"
              className={cn(
                "text-brand-accent font-medium transition-all duration-300 inline-block",
                "hover:text-text-primary hover:translate-x-1"
              )}
            >
              View Standards →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}