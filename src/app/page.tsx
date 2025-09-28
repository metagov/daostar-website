"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Eye from "@/components/Eye";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative z-[2] min-h-[60vh] flex items-center justify-center px-4 sm:px-8 md:px-16 max-w-6xl mx-auto pt-72 md:pt-80">
        <div className="flex justify-center items-center w-full">
          <div className="text-center max-w-5xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none font-light mb-6 text-text-primary font-heading">
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

      {/* Eye/Protocols Section */}
      <section className="relative z-[2] max-w-6xl mx-auto px-4 sm:px-8 md:px-16 py-20" id="eye-section">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Interactive Eye - Left Side */}
          <div className="flex justify-center items-center min-h-0 w-full overflow-hidden">
            <div className="w-full max-w-lg aspect-square">
              <Eye size="lg" className="!w-full !h-full max-w-full max-h-full" />
            </div>
          </div>
          
          {/* Content - Right Side */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-light text-text-primary font-heading leading-tight">
              The Protocols Strike Back
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-text-secondary">
              <p>
                Centralized platforms and fragmented standards are the Death Stars of Web3. 
                DAOstar is building the open protocols that let scrappy rebel DAOs coordinate, interoperate, and win.
              </p>
              <p>
                Join fellow builders, researchers, and DAO enthusiasts building the future of decentralized governance.
              </p>
            </div>
            <Link
              href="https://metagov.typeform.com/to/rnv3Uk3X?typeform-source=daostar.org"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg border border-brand-accent",
                "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
            >
              Join the Community →
            </Link>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="relative z-[2] max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-8">
        <div className={cn(
          "bg-white/5 p-6 sm:p-8 md:p-12 rounded-lg backdrop-blur-sm border border-white/10 text-center",
          "transition-all duration-300 hover:bg-white/10"
        )}>
          <h2 className="text-2xl md:text-3xl mb-6 text-text-primary font-heading font-light">
            Standards
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Standards enable collaboration, not competition. DAOstar began as an alliance of all the major players in the DAO ecosystem—from infrastructure providers to governance platforms—coming together to figure out how DAOs can work better together through shared protocols and common language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/daoid"
              className={cn(
                "inline-flex items-center px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg",
                "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
            >
              DAO ID→
            </Link>
            <Link 
              href="/opengrants"
              className={cn(
                "inline-flex items-center px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg",
                "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
            >
              OpenGrants→
            </Link>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="relative z-[2] max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-8">
        <div className={cn(
          "bg-white/5 p-6 sm:p-8 md:p-12 rounded-lg backdrop-blur-sm border border-white/10 text-center",
          "transition-all duration-300 hover:bg-white/10"
        )}>
          <h2 className="text-2xl md:text-3xl mb-6 text-text-primary font-heading font-light">
            Research
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge research on DAO governance, security, and ecosystem development. We investigate the fundamental challenges facing decentralized organizations and publish our findings to advance the entire ecosystem.
          </p>
          <Link 
            href="/research"
            className={cn(
              "inline-flex items-center px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg border-brand-accent",
              "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
            )}
          >
            View Research →
          </Link>
        </div>
      </section>

      {/* Public Goods Section */}
      <section className="relative z-[2] max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-8">
        <div className={cn(
          "bg-white/5 p-6 sm:p-8 md:p-12 rounded-lg backdrop-blur-sm border border-white/10 text-center",
          "transition-all duration-300 hover:bg-white/10"
        )}>
          <h2 className="text-2xl md:text-3xl mb-6 text-text-primary font-heading font-light">
            Public Goods
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            We support the broader DAO ecosystem as a public good. By creating open resources, research platforms, and educational initiatives, we strengthen the entire decentralized governance community for everyone&apos;s benefit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://daoscience.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg",
                "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
            >
              DAO Science →
            </Link>
            <Link 
              href="https://cryptoeconomicsystems.pubpub.org/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg",
                "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
            >
              Cryptoeconomic Systems →
            </Link>
          </div>
        </div>
      </section>

      

      {/* Upcoming Events Section */}
      <section className="relative z-[2] max-w-4xl mx-auto px-4 sm:px-8 md:px-16 py-16">
        <div className="text-center mb-12">
          <h2 className="text-section text-text-primary font-heading font-light mb-6">
            Upcoming Events
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-text-secondary font-light max-w-3xl mx-auto leading-relaxed mb-6">
            We regularly host community calls to create a space to zoom out and explore how we can make DAOs work, scale, and matter. 
            Building or researching something cool in DAOs, digital governance, or organizational behavior? We&apos;d love to learn from you.
          </p>
          <Link 
            href="https://forms.gle/7KA8xPBrdrtQWnYD8"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg border-2 border-brand-accent mb-8",
              "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
            )}
          >
            Apply to Present →
          </Link>
        </div>
        <div className="flex justify-center w-full">
          <div className={cn(
            "bg-black/10 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden w-full max-w-[600px]",
            "transition-all duration-300 hover:bg-black/20 hover:border-white/10",
            "shadow-2xl shadow-black/20"
          )}>
            <iframe
              src="https://lu.ma/embed/calendar/cal-fo0eYOBKemGE7Y2/events"
              width="100%"
              height="450"
              frameBorder="0"
              style={{
                border: "none",
                borderRadius: "0px",
                background: "transparent",
                maxWidth: "600px"
              }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              className="w-full block"
            />
          </div>
        </div>
      </section>
    </div>
  );
}