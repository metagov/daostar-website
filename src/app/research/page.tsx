"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// ===============================
// Data
// ===============================


// Research Fellowship Data
const researchFellowship = {
  title: "Research Fellowship",
  description: "Shape the future of DAO research through our intensive fellowship program",
  bulletPoints: [
    "Participate in a cohort-based fellowship program",
    "Receive guided mentorship from experts in the DAO ecosystem",
    "Collaborate with other fellows on cutting-edge research",
    "Publish research with DAOstar and contribute to the DAO ecosystem"
  ],
  buttonText: "Next Season Coming Soon!",
  buttonLink: "#",
  disabled: true
};

// Research Papers Data
const researchPapers: Array<{
  title: string;
  description: string;
  pdfUrl: string | Record<string, string>;
  date: string;
}> = [
  {
    title: "Towards a DAO ID",
    description: "An exploration of extending the daoURI identity model to a more robust model based on daoID.",
    pdfUrl: "/research/daoid.pdf",
    date: "April 2025",
  },
  {
    title: "The DAO Policy Trilemma",
    description: "An exploration of the policy challenges faced by DAOs, proposing potential solutions.",
    pdfUrl: "/research/trilemma.pdf",
    date: "April 2024",
  },
  {
    title: "The State of DAOs in Japan",
    description: "Exploring the unique aspects of DAOs in Japan, including cultural and regulatory impacts.",
    pdfUrl: "/research/japan.pdf",
    date: "April 2024",
  },
  {
    title: "The State of DAOs in Singapore",
    description: "An analysis of the DAO ecosystem in Singapore, highlighting regulatory and innovation trends.",
    pdfUrl: "/research/singapore.pdf",
    date: "Aug 2024",
  },
  {
    title: "The State of DAOs in Taiwan",
    description: "An in-depth analysis of the DAO landscape in Taiwan, focusing on local governance.",
    pdfUrl: {
      Mandarin: "/research/taiwan_mandarin.pdf",
      English: "/research/taiwan_english.pdf",
    },
    date: "Nov 2024",
  },
  {
    title: "The State of DAOs in Korea",
    description: "A comprehensive report on the development and challenges of DAOs in Korea.",
    pdfUrl: {
      Korean: "/research/korea_korean.pdf",
      English: "/research/korea_english.pdf",
    },
    date: "Oct 2024",
  },
  {
    title: "The State of DAO Security",
    description: "An analysis of DAO security vulnerabilities and introducing a security standard.",
    pdfUrl: "/research/security.pdf",
    date: "Dec 2024",
  },
  {
    title: "State of DAO M&A",
    description: "An in-depth analysis of mergers and acquisitions in the DAO space.",
    pdfUrl: "/research/mna.pdf",
    date: "Feb 2025",
  },
  {
    title: "Delegate Incentives Report",
    description: "A comprehensive analysis of incentive mechanisms for DAO delegates and their impact on governance.",
    pdfUrl: "/research/delegate.pdf",
    date: "Feb 2025",
  },
  {
    title: "The Social Dynamics of DAOs",
    description: "Towards more inclusive and culturally conscious decentralised systems.",
    pdfUrl: "/research/social_dynamics.pdf",
    date: "July 2025",
  }
];

// Season 0 Fellows Data
const season0Fellows = [
  { name: "Joseph Low", imagePath: "/researchers/joseph.jpg" },
  { name: "Frank Hu", imagePath: "/researchers/placeholder.png" },
  { name: "Twinfin", imagePath: "/researchers/placeholder.png" },
  { name: "Yvonne Cho", imagePath: "/researchers/yvonne.jpeg" },
  { name: "Hisashi Oki", imagePath: "/researchers/placeholder.png" }
];

// Season 1 Fellows Data
const season1Fellows = [
  { name: "Victoria Kozlova", imagePath: "/researchers/victoria.jpg" },
  { name: "Ben Biedermann", imagePath: "/researchers/ben.jpg" },
  { name: "Jillian Grennan", imagePath: "/researchers/jillian.png" },
  { name: "Ryan Peters", imagePath: "/researchers/ryan.png" },
  { name: "Teije Hidde Donker", imagePath: "/researchers/teije.jpg" },
  { name: "Marcus Khoo", imagePath: "/researchers/marcus.jpg" },
  { name: "Sneha Vijayan", imagePath: "/researchers/sneha.jpg" }
];

// ===============================
// Utility Functions
// ===============================

const trackPdfInteraction = (title: string, language?: string) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as { gtag: (command: string, action: string, parameters?: Record<string, string>) => void }).gtag;
    gtag('event', 'pdf_open', {
      pdf_title: title,
      pdf_language: language || 'default'
    });
  }
};

// ===============================
// Research Reports Section
// ===============================

interface ResearchCardProps {
  title: string;
  description: string;
  pdfUrl: string | Record<string, string>;
  date: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ 
  title, 
  description, 
  pdfUrl, 
  date
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
    if (typeof pdfUrl === 'object') {
      return Object.keys(pdfUrl)[0];
    }
    return 'default';
  });

  const handlePdfClick = useCallback(() => {
    trackPdfInteraction(title, selectedLanguage);
    const url = typeof pdfUrl === 'string' ? pdfUrl : pdfUrl[selectedLanguage];
    window.open(url, '_blank');
  }, [title, pdfUrl, selectedLanguage]);

  return (
    <div className="flex flex-col p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:bg-white/10 cursor-pointer w-full h-auto">
      <div 
        className="cursor-pointer flex-1 flex flex-col"
        onClick={handlePdfClick}
      >
        <h3 className="text-lg font-medium mb-3 text-center">{title}</h3>
        <p className="text-sm text-text-secondary text-center mb-3 leading-relaxed flex-1">
          {description}
        </p>
        <p className="text-xs text-text-muted text-center mb-4">
          <span className="text-text-muted">Published: </span>{date}
        </p>
      </div>
      {typeof pdfUrl === 'object' && (
        <div className="flex justify-center items-center gap-2">
          {Object.keys(pdfUrl).map((lang) => (
            <button
              key={lang}
              className={cn(
                "px-3 py-1 text-xs rounded-md border transition-all duration-200",
                selectedLanguage === lang 
                  ? "bg-brand-accent text-brand-dark border-brand-accent font-medium" 
                  : "bg-transparent text-text-secondary border-white/10 hover:border-white/20 hover:bg-white/10"
              )}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLanguage(lang);
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ReportsSection: React.FC = () => {
  // Sort research papers by date (most recent first)
  const sortedPapers = [...researchPapers].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className="w-full mt-10">
      <h1 className="text-section leading-10 font-normal text-center mb-4">Research Reports</h1>
      <p className="text-xl leading-8 text-center mb-8 text-text-primary">
        Explore our latest research and insights on DAOs and decentralized governance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-5 auto-rows-fr">
        {sortedPapers.map((paper, index) => (
          <ResearchCard
            key={index}
            title={paper.title}
            description={paper.description}
            pdfUrl={paper.pdfUrl}
            date={paper.date}
          />
        ))}
      </div>
    </section>
  );
};

// ===============================
// Research Programs Section
// ===============================

interface ProgramCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  buttonText: string;
  buttonLink: string;
  disabled: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  description, 
  bulletPoints, 
  buttonText, 
  buttonLink, 
  disabled 
}) => {
  const handleButtonClick = useCallback(() => {
    if (!disabled && buttonLink) {
      window.open(buttonLink, '_blank');
    }
  }, [buttonLink, disabled]);

  return (
    <div className="flex flex-col p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:bg-white/10 h-full">
      <h3 className="text-lg font-medium mb-3 text-center">{title}</h3>
      <div className="flex-1 flex flex-col">
        <p className="text-sm text-text-secondary text-center mb-4 leading-relaxed">{description}</p>
        <ul className="list-disc pl-5 mb-6 space-y-2 flex-1">
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-sm text-text-secondary leading-relaxed">{point}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        {disabled ? (
          <div className="text-sm font-medium text-text-muted text-center py-2 px-4">
            Coming Soon
          </div>
        ) : (
          <button
            className="px-3 py-1.5 bg-brand-accent text-brand-dark font-medium rounded-md border-2 border-brand-accent text-sm transition-all duration-200 hover:bg-brand-accent/90 hover:border-brand-accent/90 hover:shadow-lg hover:scale-105 cursor-pointer"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

const ContributorSection: React.FC = () => {
  return (
    <section className="w-full mt-10">
      <h1 className="text-section leading-10 font-normal text-center mb-6">Become a Research Contributor</h1>
      <div className="max-w-4xl mx-auto">
        
        {/* Who is this for */}
        <div className="mb-8">
          <p className="text-text-secondary leading-relaxed text-center">
            We are looking for anyone exploring meaningful questions about DAOs. If you are an independent researcher, builder, student, writer, or just curious about the DAO space, this is for you. 
            You don&apos;t need to be affiliated with an institution or have published before. All you need is a desire to contribute to thoughtful conversations in the DAO ecosystem.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4 text-brand-accent">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center text-sm font-bold mt-0.5">1</div>
              <div>
                <h3 className="font-medium text-text-primary mb-1">Join the Community</h3>
                <p className="text-text-secondary text-sm leading-relaxed">Join our community and biweekly research collaboration calls. Share ideas, ask questions, or co-work on research with others.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center text-sm font-bold mt-0.5">2</div>
              <div>
                <h3 className="font-medium text-text-primary mb-1">Submit Your Work</h3>
                <p className="text-text-secondary text-sm leading-relaxed">When you&apos;re ready, submit a research piece for consideration. If accepted, you&apos;ll be recognized as a DAOstar Research Contributor.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center text-sm font-bold mt-0.5">3</div>
              <div>
                <h3 className="font-medium text-text-primary mb-1">Get Published</h3>
                <p className="text-text-secondary text-sm leading-relaxed">We&apos;ll publish your work on our site and include it in our research directory. You&apos;ll be part of a growing network of DAO researchers and practitioners.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What you&apos;ll get */}
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4 text-brand-accent">What You&apos;ll Get</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
              <h3 className="font-medium text-text-primary mb-2">Platform for Impact</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Your research will contribute to advancing thought leadership on DAOs, shaping the future of decentralized governance.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
              <h3 className="font-medium text-text-primary mb-2">Supportive Community</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Join a network of peers, researchers, and DAO professionals eager to collaborate and support your work.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg">
              <h3 className="font-medium text-text-primary mb-2">Professional Growth</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Hone your research, writing, and communication skills while working on meaningful, real-world topics.</p>
            </div>
          </div>
        </div>


        {/* Call to action */}
        <div className="text-center">
          <p className="text-text-secondary mb-6 leading-relaxed">
            Ready to contribute to the future of DAOs? We review submissions within 2-3 weeks and provide feedback to help you succeed.
          </p>
          <button
            className="px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg border border-brand-accent transition-all duration-200 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            onClick={() => window.open("https://forms.gle/cLZXbWKkufRKJEMX7", "_blank")}
          >
            Submit Contributor Application →
          </button>
        </div>
      </div>
    </section>
  );
};

// ===============================
// Fellows Section
// ===============================

interface SeasonDescriptionProps {
  season: string;
  dateRange: string;
  theme: string;
  description: string;
}

const SeasonDescription: React.FC<SeasonDescriptionProps> = ({ 
  season, 
  dateRange, 
  theme, 
  description 
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl leading-8 font-medium uppercase my-2 text-left">{season}</h3>
      <div className="flex mb-3">
        <p className="text-base font-medium m-0 mr-4">{dateRange}</p>
        <p className="text-base font-medium m-0 text-text-primary">{theme}</p>
      </div>
      <p className="text-sm leading-6 my-0 mb-4 text-text-primary max-w-[90%]">{description}</p>
    </div>
  );
};

interface FellowCardProps {
  name: string;
  imagePath: string;
}

const FellowCard: React.FC<FellowCardProps> = ({ name, imagePath }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:bg-white/10">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-white/5 border border-white/10 flex items-center justify-center">
        <Image 
          src={imagePath} 
          alt={`${name}`} 
          className="w-full h-full object-cover"
          width={160}
          height={160}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.style.display = "none";
            const parent = target.parentNode as HTMLElement;
            if (parent) {
              parent.classList.add("text-4xl", "font-bold", "text-white/50");
              parent.innerText = name.split(' ').map(n => n[0]).join('');
            }
          }}
        />
      </div>
      <h3 className="text-base font-medium text-center m-0">{name}</h3>
    </div>
  );
};

const FellowsSection: React.FC = () => {
  return (
    <section className="w-full mt-10">
      <h1 className="text-section leading-10 font-normal text-center mb-4">Research Fellowship</h1>
      <p className="text-xl leading-8 text-center mb-8 text-text-primary">
        Our intensive fellowship program for researchers shaping the future of DAO research.
      </p>
      
      {/* Fellowship Program Info */}
      <div className="flex justify-center w-full mb-12">
        <div className="max-w-md">
          <ProgramCard
            title={researchFellowship.title}
            description={researchFellowship.description}
            bulletPoints={researchFellowship.bulletPoints}
            buttonText={researchFellowship.buttonText}
            buttonLink={researchFellowship.buttonLink}
            disabled={researchFellowship.disabled}
          />
        </div>
      </div>
      
      <h2 className="text-xl leading-8 text-center mb-8 text-text-primary">
        Meet our talented Fellows who are driving innovation in DAO governance and decentralized systems.
      </h2>

      <SeasonDescription 
        season="DAOstar Fellowship Season 1"
        dateRange="April – July 2025"
        theme="DAO Governance and Social Dynamics"
        description="This fellowship supported a cohort of researchers exploring the evolving nature of DAOs — from token unlock mechanisms and contributor stratification to legal recognition and regional DAO developments. The program highlighted DAOs as social, legal, and economic experiments, with fellows contributing original research to inform the future of digital governance."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {season1Fellows.map((fellow, index) => (
          <FellowCard 
            key={index}
            name={fellow.name}
            imagePath={fellow.imagePath}
          />
        ))}
      </div>
      
      <SeasonDescription 
        season="DAOstar Fellowship Season 0"
        dateRange="April – December 2024"
        theme="The State of DAOs in Asia"
        description="This inaugural research fellowship focused on understanding the unique cultural, regulatory, and social dynamics shaping DAO ecosystems across Asia. The series featured region-specific reports authored by local experts and aimed to deepen global insight into decentralized governance in countries like Japan, Singapore, Taiwan, and Korea."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {season0Fellows.map((fellow, index) => (
          <FellowCard 
            key={index}
            name={fellow.name}
            imagePath={fellow.imagePath}
          />
        ))}
      </div>
    </section>
  );
};

// ===============================
// Main Research Page Component
// ===============================

export default function Research() {
  return (
    <div className="relative z-[2] mx-auto max-w-4xl px-5 py-12">
      <ReportsSection />
      <div className="my-10 border-b border-white/20 w-full relative">
        <div className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-15 h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
      </div>
      <ContributorSection />
      <div className="my-10 border-b border-white/20 w-full relative">
        <div className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-15 h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
      </div>
      <FellowsSection />
    </div>
  );
}