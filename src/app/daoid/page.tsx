"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function DaoId() {
  return (
    <div className="relative min-h-screen">
      {/* DAO ID - Identity for Digital Organizations */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20 pt-32 md:pt-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-text-primary font-heading leading-tight mb-6">
            DAO ID: Identity for Digital Organizations
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-light max-w-4xl mx-auto leading-relaxed">
            DAO ID provides the missing identity infrastructure that enables decentralized organizations to operate as recognized entities in economic and social systems.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Unique Identifiers</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Standardized, verifiable identifiers that create a consistent way to reference organizations across platforms.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Standardized Metadata</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Consistent organizational information that enables proper due diligence and business relationships.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Governance Documentation</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Clear governance structures that provide transparency and accountability to stakeholders.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Verifiable Claims</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Cryptographically verifiable claims that build trust without relying on centralized authorities.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Business Relationships</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Enables partnership agreements, compliance frameworks, and institutional integration.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">API for your DAO</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                A common interface for DAOs, akin to tokenURI for NFTs, making DAOs easier to discover and more compatible with future tooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why Organizations Need Identity */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual - Left Side */}
          <div className="flex justify-center items-center min-h-0">
            <div className={cn(
              "w-full max-w-lg p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
              "transition-all duration-300 hover:bg-white/10"
            )}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Business Relationships</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Legal Agreements</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Regulatory Compliance</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Public Accountability</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Stakeholder Trust</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content - Right Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary font-heading leading-tight">
              Why Organizations Need Identity
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                Traditional systems like corporate registrars give organizations a verifiable identitythrough standardized registration, 
                public records, government backing, and legal frameworks. This enables organizations to 
                enter contracts, build reputation, and operate transparently.
              </p>
              <p>
                Without a source of clear identity,  organizations cannot establish the trust infrastructure necessary 
                for economic and social participation. Identity is the foundation of institutional credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Internet Business Problem */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary font-heading leading-tight">
              The Internet Business Problem
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                Many internet-native businesses operate across multiple jurisdictions simultaneously, 
                with global, distributed teams that don&apos;t fit neatly into single-jurisdiction corporate structures.
              </p>
              <p>
                DAOs and protocol teams often lack clear legal entities or have complex multi-entity structures 
                that create regulatory uncertainty and compliance complexity.
              </p>
              <p>
                Current incorporation options force artificial geographic constraints on naturally 
                borderless organizations, making it difficult to establish business relationships 
                and raise capital in the global digital economy.
              </p>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="flex justify-center items-center min-h-0">
            <div className={cn(
              "w-full max-w-lg p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
              "transition-all duration-300 hover:bg-white/10"
            )}>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-lg font-medium text-text-primary mb-2">Current Challenges</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">Regulatory uncertainty across jurisdictions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">Complex multi-entity compliance requirements</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">Difficulty establishing business relationships</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">Challenges in raising capital globally</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">Forced geographic constraints on borderless operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* EIP-4824 Section */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary font-heading leading-tight mb-6">
              EIP-4824: A Standard for DAO Identity
            </h2>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
              EIP-4824 is a standard that defines a common interface for DAOs via daoURI, similar to tokenURI for NFTs. 
              This standard enhances DAO discoverability, legibility, and interoperability between tools.
            </p>
          </div>

          {/* Features and Adoption */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">Making DAOs Discoverable</h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  EIP-4824 provides a standardized way for DAOs to publish metadata about their governance structure, 
                  membership, proposals, and activities. Just as tokenURI makes NFTs legible to applications, 
                  daoURI makes DAOs compatible with tooling and services.
                </p>
                <p>
                  The standard was developed through DAOstar One roundtables with representatives from major 
                  DAO frameworks including Aragon, Compound, and others, ensuring broad ecosystem compatibility.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-medium text-text-primary">Standard Components:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-sm text-text-secondary">Members URI - standardized membership data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-sm text-text-secondary">Proposals URI - governance proposal information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-sm text-text-secondary">Activity Log URI - organizational activity records</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-sm text-text-secondary">Governance URI - constitutional documents</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
              "transition-all duration-300 hover:bg-white/10"
            )}>
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Widespread Adoption</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-accent mb-2">200+</div>
                  <p className="text-sm text-text-secondary">DAOs have adopted EIP-4824</p>
                </div>
                
                <div>
                  <p className="text-sm text-text-secondary text-center mb-4">Examples include:</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Snapshot</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Aragon</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Optimism Collective</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>1inch DAO</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Treasure DAO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
              <Link 
                href="https://daoip2.daostar.org/register"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-black font-medium rounded-lg",
                  "transition-all duration-300 hover:bg-brand-accent/90 hover:shadow-lg hover:-translate-y-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
                )}
              >
                Register Your DAO →
              </Link>
              <Link 
                href="https://daoip2.daostar.org/explore"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center px-8 py-4 bg-transparent text-text-primary font-medium rounded-lg border border-brand-accent",
                  "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
                )}
              >
                Explore EIP-4824 DAOs →
              </Link>
              <Link 
                href="https://eips.ethereum.org/EIPS/eip-4824"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center px-8 py-4 bg-transparent text-text-primary font-medium rounded-lg border border-brand-accent",
                  "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
                )}
              >
                Read the Standard →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}