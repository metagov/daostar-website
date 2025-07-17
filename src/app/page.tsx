"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="home-page">
      {/* Mesh Overlay */}
      <div className="mesh-overlay">
        <Image
          src="/img/mesh.png"
          alt="Mesh overlay"
          fill
          className="mesh-image"
          priority
        />
      </div>


      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="main-title">
              We support <br />
              <Typewriter 
                options={{
                  strings: ["standards", "research", "public goods"],
                  autoStart: true,
                  loop: true,
                  changeDeleteSpeed: 2000
                }}
              />for DAOs
            </h1>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <h2>The story so far...</h2>
        <div className="story-content">
          <div className="story-column">
            <p className="story-text">
              It is a period of creative turmoil. DAOs, or decentralized autonomous organizations, represent one possible future for the internet. But that future is fragile. Use-cases are immature. Speculation is rampant. The first DAO exploded, almost taking down Ethereum. DAOs are far, far from disrupting the deathstars of WEB2.
            </p>
          </div>
          <div className="story-column">
            <p className="story-text">
              For years, the ecosystem was fragmented by competition. Now, a new alliance of DAO builders is racing to build standards that will realize the promise of this emerging technology. This is DAOstar - where collaboration meets innovation in the quest to build the infrastructure for decentralized governance.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>OpenGrants</h3>
            <p>Transform your grants data into intelligence with our open source grants stack.</p>
            <a href="/opengrants" className="project-link">Learn More →</a>
          </div>
          
          <div className="project-card">
            <h3>Research</h3>
            <p>Cutting-edge research on DAO governance, security, and ecosystem development.</p>
            <a href="/research" className="project-link">Explore Research →</a>
          </div>
          
          <div className="project-card">
            <h3>DAO Standards</h3>
            <p>Building open standards for the future of decentralized governance.</p>
            <a href="/daoid" className="project-link">View Standards →</a>
          </div>
        </div>
      </div>
    </div>
  );
}