"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import * as Separator from "@radix-ui/react-separator"; 
import { cn, buttonVariants, cardVariants } from "@/lib/utils";

// ===============================
// Data
// ===============================

// Research Programs Data
const researchPrograms = [
  {
    title: "Research Collaborator",
    description: "Join our inclusive community of researchers working on DAO-related topics",
    bulletPoints: [
      "Join our Slack community",
      "Participate in regular research collaboration calls",
      "Share ideas and collaborate with other researchers"
    ],
    buttonText: "Join DAOstar Slack",
    buttonLink: "https://join.slack.com/t/daostar/shared_invite/zt-33cyohbj4-Tk0COtKWTl7I3pu~YmHepw",
    disabled: false
  },
  {
    title: "Research Contributor",
    description: "Earn recognition for your research by publishing with DAOstar",
    bulletPoints: [
      "Submit and publish research papers",
      "Get recognized as a DAOstar Research Contributor",
      "Join a network of DAO researchers and practitioners"
    ],
    buttonText: "Submit Contributor Application",
    buttonLink: "https://forms.gle/cLZXbWKkufRKJEMX7",
    disabled: false
  },
  {
    title: "Research Fellow",
    description: "Our intensive fellowship program for researchers who want to shape the future of DAO research",
    bulletPoints: [
      "Participate in a dedicated fellowship program",
      "Collaborate with other fellows on research",
      "Publish research with DAOstar"
    ],
    buttonText: "Next Season Coming Soon!",
    buttonLink: "#",
    disabled: true
  }
];

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
    pdfUrl: "/reports/daoid.pdf",
    date: "April 2025",
  },
  {
    title: "The DAO Policy Trilemma",
    description: "An exploration of the policy challenges faced by DAOs, proposing potential solutions.",
    pdfUrl: "/reports/trilemma.pdf",
    date: "April 2024",
  },
  {
    title: "The State of DAOs in Japan",
    description: "Exploring the unique aspects of DAOs in Japan, including cultural and regulatory impacts.",
    pdfUrl: "/reports/japan.pdf",
    date: "April 2024",
  },
  {
    title: "The State of DAOs in Singapore",
    description: "An analysis of the DAO ecosystem in Singapore, highlighting regulatory and innovation trends.",
    pdfUrl: "/reports/singapore.pdf",
    date: "Aug 2024",
  },
  {
    title: "The State of DAOs in Taiwan",
    description: "An in-depth analysis of the DAO landscape in Taiwan, focusing on local governance.",
    pdfUrl: {
      Mandarin: "/reports/taiwan_mandarin.pdf",
      English: "/reports/taiwan_english.pdf",
    },
    date: "Nov 2024",
  },
  {
    title: "The State of DAOs in Korea",
    description: "A comprehensive report on the development and challenges of DAOs in Korea.",
    pdfUrl: {
      Korean: "/reports/korea_korean.pdf",
      English: "/reports/korea_english.pdf",
    },
    date: "Oct 2024",
  },
  {
    title: "The State of DAO Security",
    description: "An analysis of DAO security vulnerabilities and introducing a security standard.",
    pdfUrl: "/reports/security.pdf",
    date: "Dec 2024",
  },
  {
    title: "State of DAO M&A",
    description: "An in-depth analysis of mergers and acquisitions in the DAO space.",
    pdfUrl: "/reports/mna.pdf",
    date: "Feb 2025",
  },
  {
    title: "Delegate Incentives Report",
    description: "A comprehensive analysis of incentive mechanisms for DAO delegates and their impact on governance.",
    pdfUrl: "/reports/delegate.pdf",
    date: "Feb 2025",
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
  languageOptions?: { current: string } | null;
  setLanguage?: (language: string) => void;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ 
  title, 
  description, 
  pdfUrl, 
  date, 
  languageOptions, 
  setLanguage 
}) => {
  const handlePdfClick = useCallback(() => {
    const currentLanguage = languageOptions ? languageOptions.current : 'default';
    trackPdfInteraction(title, currentLanguage);
    const url = typeof pdfUrl === 'string' ? pdfUrl : pdfUrl[languageOptions?.current || 'English'];
    window.open(url, '_blank');
  }, [title, pdfUrl, languageOptions]);

  return (
    <div className={cn(cardVariants({ variant: "interactive" }), "w-80 h-auto flex flex-col justify-between p-4 relative")}>
      <div 
        className="cursor-pointer transition-all duration-300 relative rounded"
        onClick={handlePdfClick}
      >
        <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>
        <Separator.Root className="border-b border-card-border my-2" />
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col text-left">
            <p className="text-sm text-left my-0 mb-2 overflow-hidden text-ellipsis line-clamp-4 max-h-20">
              {description}
            </p>
            <p className="text-xs text-text-placeholder m-0">
              <span className="text-text-placeholder">Published: </span>{date}
            </p>
          </div>
        </div>
        {/* Arrow indicator */}
        <div className="absolute bottom-2 right-2 text-text-secondary text-lg transition-all duration-300 group-hover:text-brand-secondary group-hover:translate-x-1">
          →
        </div>
      </div>
      
      <Separator.Root className="border-b border-card-border my-2" />
      
      <div className="flex justify-center items-center mt-4 relative">
        {languageOptions && typeof pdfUrl === 'object' && (
          <div className="flex gap-2 z-10 relative">
            {Object.keys(pdfUrl).map((lang) => (
              <button
                key={lang}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  languageOptions.current === lang && "bg-brand-secondary text-white border-brand-secondary shadow-md"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage?.(lang);
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ReportsSection: React.FC = () => {
  const [taiwanLanguage, setTaiwanLanguage] = useState("Mandarin");
  const [koreaLanguage, setKoreanLanguage] = useState("Korean");

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-5">
        {sortedPapers.map((paper, index) => (
          <ResearchCard
            key={index}
            title={paper.title}
            description={paper.description}
            pdfUrl={paper.pdfUrl}
            date={paper.date}
            languageOptions={
              typeof paper.pdfUrl === 'object' && 'Mandarin' in paper.pdfUrl
                ? { current: taiwanLanguage }
                : typeof paper.pdfUrl === 'object' && 'Korean' in paper.pdfUrl
                ? { current: koreaLanguage }
                : null
            }
            setLanguage={
              typeof paper.pdfUrl === 'object' && 'Mandarin' in paper.pdfUrl
                ? setTaiwanLanguage
                : typeof paper.pdfUrl === 'object' && 'Korean' in paper.pdfUrl
                ? setKoreanLanguage
                : undefined
            }
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
    <div className={cn(cardVariants(), "h-full flex flex-col p-4")}>
      <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>
      <Separator.Root className="border-b border-card-border my-2" />
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col text-left">
          <p className="text-sm text-left my-0 mb-2">{description}</p>
          <ul className="list-disc pl-5 my-3">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-sm mb-2 leading-tight">{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <Separator.Root className="border-b border-card-border my-2" />
      <div className="flex justify-center items-center mt-4">
        {disabled ? (
          <div className="text-base font-medium text-gray-500 text-center py-2 px-4">
            Coming Soon
          </div>
        ) : (
          <button
            className={cn(buttonVariants({ variant: "default" }), "py-2 px-4")}
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

const ProgramsSection: React.FC = () => {
  return (
    <section className="w-full mt-10">
      <h1 className="text-section leading-10 font-normal text-center mb-4">Research Programs</h1>
      <p className="text-xl leading-8 text-center mb-8 text-text-primary">
        Join our research community and contribute to the advancement of DAO knowledge and practices.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-5">
        {researchPrograms.map((program, index) => (
          <ProgramCard
            key={index}
            title={program.title}
            description={program.description}
            bulletPoints={program.bulletPoints}
            buttonText={program.buttonText}
            buttonLink={program.buttonLink}
            disabled={program.disabled}
          />
        ))}
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
    <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg transition-transform duration-200 hover:-translate-y-1">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-white/10 flex items-center justify-center">
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
            parent.classList.add("text-4xl", "font-bold", "text-white/50");
            parent.innerText = name.split(' ').map(n => n[0]).join('');
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
      <h1 className="text-section leading-10 font-normal text-center mb-4">Our Researchers</h1>
      <p className="text-xl leading-8 text-center mb-8 text-text-primary">
        Meet our talented Researchers who are driving innovation in DAO governance and decentralized systems.
      </p>

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
    <div className="mx-auto max-w-4xl px-5 py-12">
      <ReportsSection />
      <div className="my-10 border-b border-white/20 w-full relative">
        <div className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-15 h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
      </div>
      <ProgramsSection />
      <div className="my-10 border-b border-white/20 w-full relative">
        <div className="absolute bottom-[-1px] left-1/2 transform -translate-x-1/2 w-15 h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent"></div>
      </div>
      <FellowsSection />
    </div>
  );
}