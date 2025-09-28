"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function OpenGrants() {
  return (
    <div className="relative min-h-screen">
      {/* OpenGrants - Intelligence Layer for Web3 Grants */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20 pt-32 md:pt-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-text-primary font-heading leading-tight mb-6">
            OpenGrants: An Intelligence Layer for Web3 Grants
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-light max-w-4xl mx-auto leading-relaxed">
            The open source Web3 grants data stack that helps grant programs unlock real-time analytics, streamline reporting, and reduce risk—while improving decision making and coordination across the broader funding ecosystem.
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
              <h3 className="text-lg font-medium text-text-primary mb-2">Unified Data</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Common metadata fields across leading platforms, creating structured, interoperable records that can be trusted and consumed anywhere.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Real-time Analytics</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Dashboards and benchmarks that reveal funding patterns, flag potential risks, and highlight impact across the ecosystem.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Open Data Warehouse</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                A continually updated, open source data warehouse of grant activity across Web3, accessible to researchers, funders, and builders.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Streamlined Reporting</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Automated reporting capabilities that reduce administrative burden and improve transparency for grant programs.
              </p>
            </div>
          </div>

          <div className={cn(
            "p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
            "transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
          )}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-accent/20 rounded-lg mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Risk Management</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Advanced analytics that help identify potential risks and improve due diligence across funding decisions.
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
              <h3 className="text-lg font-medium text-text-primary mb-2">Gateway API</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                A gateway API that offers access to aggregated grant data, enabling developers to build innovative funding tools and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why Grant Programs Need Intelligence */}
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
                  <span className="text-sm font-medium text-text-primary">Cross-Program Visibility</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Impact Measurement</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Risk Assessment</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Data-Driven Decisions</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/10 rounded-lg">
                  <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  <span className="text-sm font-medium text-text-primary">Ecosystem Coordination</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary font-heading leading-tight">
              Why Grant Programs Need Intelligence
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                Web3 grant programs operate in isolation, lacking visibility into broader funding flows and ecosystem dynamics.
                Without structured data and analytics, programs struggle to measure impact, identify risks, and coordinate effectively.
              </p>
              <p>
                Intelligence is the foundation of effective grant making. It enables programs to move beyond spray-and-pray
                experimentation towards more impactful funding driven by data and structured innovation informed by experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Web3 Grants Problem */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary font-heading leading-tight">
              The Web3 Grants Problem
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-text-secondary">
              <p>
                Grant programs across Web3 operate in silos, using different platforms, formats, and standards.
                This fragmentation makes it impossible to see funding patterns, measure ecosystem-wide impact, or coordinate effectively.
              </p>
              <p>
                Traditional grant management lacks the transparency and composability that Web3 demands.
                Programs need shared infrastructure that enables interoperability while preserving autonomy.
              </p>
              <p>
                Without structured data and common standards, the ecosystem misses opportunities for collaboration,
                wastes resources on duplicate efforts, and struggles to demonstrate collective impact to stakeholders.
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
                    <span className="text-sm text-text-secondary">Fragmented data across platforms</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">No visibility into ecosystem-wide funding</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">Difficulty measuring collective impact</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">Limited coordination between programs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-text-secondary">Inefficient resource allocation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAOIP-5 Section */}
      <section className="relative z-[2] max-w-6xl mx-auto px-8 md:px-16 py-20">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary font-heading leading-tight mb-6">
              DAOIP-5: A Standard for Web3 Grants Data
            </h2>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
              DAOIP-5 is a metadata schema that creates a shared language for grant programs across Web3.
              This standard makes funding data more transparent, interoperable, and effective at serving the ecosystem.
            </p>
          </div>

          {/* Features and Adoption */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">Making Grants Data Composable</h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  DAOIP-5 provides a standardized way for grant programs to publish metadata about their funding activities,
                  recipients, and outcomes. This creates the foundation for cross-program analytics and coordination.
                </p>
                <p>
                  The standard enables three types of integration: direct API connections for real-time data,
                  static file translations for existing datasets, and pre-built compliant endpoints for seamless compatibility.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-medium text-text-primary">Integration Types:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-sm text-text-secondary">Type 1 - Real-time API integration (Giveth, Octant)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-sm text-text-secondary">Type 2 - Static file translation (Stellar, Celo, Optimism, Arbitrum)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    <span className="text-sm text-text-secondary">Type 3 - Pre-built compliant endpoints (Questbook)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10",
              "transition-all duration-300 hover:bg-white/10"
            )}>
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Growing Adoption</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-accent mb-2">8+</div>
                  <p className="text-sm text-text-secondary">Major grant programs integrated</p>
                </div>

                <div>
                  <p className="text-sm text-text-secondary text-center mb-4">Current integrations include:</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Giveth</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Octant</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Stellar Community Fund</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Optimism Collective</span>
                    </div>
                    <div className="flex items-center justify-center p-2 bg-brand-accent/10 rounded-lg">
                      <span>Arbitrum</span>
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
                href="mailto:sam@daostar.org"
                className={cn(
                  "inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-black font-medium rounded-lg",
                  "transition-all duration-300 hover:bg-brand-accent/90 hover:shadow-lg hover:-translate-y-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
                )}
              >
                Integrate Your Program →
              </Link>
              <Link
                href="https://grants.daostar.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center px-8 py-4 bg-transparent text-text-primary font-medium rounded-lg border border-brand-accent",
                  "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
                )}
              >
                Explore the API →
              </Link>
              <Link
                href="https://github.com/metagov/daostar/blob/main/DAOIPs/x-daoip-5.md"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center px-8 py-4 bg-transparent text-text-primary font-medium rounded-lg border border-brand-accent",
                  "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
                )}
              >
                Read DAOIP-5 →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}