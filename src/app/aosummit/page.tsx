import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { speakers } from "./speakers";

const LUMA_URL = "https://luma.com/j1lmnrxk";
const ARIA_SCALING_TRUST_URL =
  "https://aria.org.uk/opportunity-spaces/trust-everything-everywhere/scaling-trust/";

const title = "London AO Summit — November 5–6, 2026";
const description =
  "Co-hosted by DAOstar and ARIA, the London Autonomous Organization (AO) Summit is a workshop for researchers and builders developing the field of autonomous organizations. Dinner November 5, talks November 6.";
const ogImage = {
  url: "https://daostar.org/img/aosummit/london-ao-summit.jpg",
  width: 800,
  height: 800,
  alt: "London AO Summit — DAOstar × ARIA — 05–06 Nov 2026",
};

export const metadata: Metadata = {
  title: `${title} | DAOstar`,
  description,
  alternates: { canonical: "https://daostar.org/aosummit" },
  openGraph: {
    type: "website",
    url: "https://daostar.org/aosummit",
    siteName: "DAOstar",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [ogImage.url],
  },
};

const eyebrow = "font-mono text-xs uppercase tracking-[0.15em] text-text-primary";
const sectionHeading = "text-2xl md:text-3xl font-light text-text-primary font-heading leading-tight";
const bodyText = "text-base md:text-lg leading-relaxed text-text-secondary font-light";
const inlineLink = cn(
  "text-text-primary underline decoration-white/30 underline-offset-4",
  "transition-colors duration-200 hover:text-brand-accent hover:decoration-brand-accent"
);

function Rule() {
  return <div className="h-px w-full bg-white/15 my-12 md:my-16" />;
}

export default function AOSummit() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-[2] max-w-4xl mx-auto px-6 sm:px-8 md:px-16 pt-28 md:pt-36 pb-8">
        {/* Hero */}
        <header className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-center">
          <div>
            {/* Co-host lockup, echoing the event logo */}
            <div className="flex items-center gap-4 mb-10">
              <Link href="/" className="flex items-center transition-opacity hover:opacity-80" aria-label="DAOstar home">
                <Image src="/img/logo_dao.png" alt="DAOstar" width={450} height={160} className="h-6 w-auto" />
              </Link>
              <span className="h-8 w-px bg-white/40" aria-hidden="true" />
              <Link
                href={ARIA_SCALING_TRUST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-opacity hover:opacity-80"
                aria-label="ARIA Scaling Trust programme"
              >
                <Image
                  src="/img/aosummit/aria-logo-white.svg"
                  alt="ARIA — Advanced Research + Invention Agency"
                  width={122}
                  height={48}
                  unoptimized
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-text-primary font-heading leading-none mb-8">
              London AO <span className="text-brand-accent">Summit</span>
            </h1>
            <p className={cn(eyebrow, "leading-relaxed mb-3")}>
              London · November 5–6, 2026 · Dinner November 5, talks November 6
            </p>
            <p className="text-sm md:text-base text-text-secondary font-light">
              Co-hosted by DAOstar and ARIA&apos;s{" "}
              <Link href={ARIA_SCALING_TRUST_URL} target="_blank" rel="noopener noreferrer" className={inlineLink}>
                Scaling Trust
              </Link>{" "}
              programme.
            </p>
          </div>

          <div className="flex justify-center md:justify-end" aria-hidden="true">
            <Image
              src="/img/aosummit/daostar-sphere.png"
              alt=""
              width={556}
              height={555}
              priority
              className="w-44 sm:w-56 md:w-64 h-auto invert opacity-90 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </header>

        <Rule />

        {/* About */}
        <section className="space-y-6 max-w-3xl">
          <p className={bodyText}>
            Building on the momentum of the{" "}
            <Link href="https://www.stanfordao.org/summit" target="_blank" rel="noopener noreferrer" className={inlineLink}>
              Stanford AO Summit
            </Link>
            , we&apos;re excited to keep growing our global community by welcoming all of you to our next event in
            London. Co-hosted by DAOstar and Aria, The London Autonomous Organization (AO) Summit is a workshop that
            will continue to develop the rapidly emerging field of autonomous organizations. Examples of AOs range from
            agent swarms to vending machines to AI villages to DAOs.
          </p>
          <p className={bodyText}>
            Drawing researchers and builders working at the frontiers of AI, agentic automation, and organizational
            design, the London AO Summit will explore the theory, benchmarks, and playbooks for this new class of
            organizations. What management structures and business models actually work? How do you measure
            performance? When does autonomy help, and when does it hurt? What new institutions do we need to create a
            thriving economy of AOs?
          </p>
          <div className="pt-2">
            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center px-6 py-3 bg-transparent text-text-primary font-medium rounded-lg border border-brand-accent",
                "transition-all duration-300 hover:bg-brand-accent/10 hover:text-brand-accent hover:shadow-lg hover:-translate-y-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
            >
              RSVP &amp; event details on Luma →
            </Link>
          </div>
        </section>

        <Rule />

        {/* Speakers */}
        <section id="speakers" aria-labelledby="speakers-heading">
          <h2 id="speakers-heading" className={cn(sectionHeading, "mb-4")}>
            {speakers.length > 0 ? "Confirmed speakers" : "Speakers"}
          </h2>
          {speakers.length === 0 ? (
            <p className={bodyText}>Speakers coming soon.</p>
          ) : (
            <>
              <p className={cn(bodyText, "mb-8")}>
                We&apos;re announcing speakers as the program comes together.
              </p>
              <div className="border-b border-white/10">
                {speakers.map((speaker) => (
                  <article
                    key={speaker.name}
                    className="grid grid-cols-[64px_1fr] sm:grid-cols-[88px_1fr] gap-4 sm:gap-6 py-8 border-t border-white/10"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-brand-accent pt-1">
                      {speaker.announced}
                    </p>
                    <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr] gap-4 sm:gap-5 items-start">
                      <Image
                        src={speaker.photo}
                        alt={speaker.name}
                        width={144}
                        height={144}
                        className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-sm object-cover border border-white/10 bg-white/5"
                      />
                      <div>
                        <h3 className="text-lg md:text-xl font-medium text-text-primary leading-snug">{speaker.name}</h3>
                        <p className="font-mono text-xs uppercase tracking-[0.08em] text-text-muted mt-1 mb-3">
                          {speaker.role}
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-text-secondary font-light [&_a]:text-text-primary [&_a]:underline [&_a]:decoration-white/30 [&_a]:underline-offset-4 [&_a:hover]:text-brand-accent">
                          {speaker.bio}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>

        <Rule />

        {/* Apply to attend */}
        <section id="attend" aria-labelledby="attend-heading" className="max-w-3xl">
          <h2 id="attend-heading" className={cn(sectionHeading, "mb-3")}>
            Apply to attend
          </h2>
          <p className={cn(eyebrow, "mb-8")}>Registration · Limited capacity</p>
          <div className="space-y-6">
            <p className={bodyText}>
              The London AO Summit is a working convening with limited capacity. Request a spot through Luma —
              we&apos;ll confirm attendance as we finalize the program.
            </p>
            <p className={bodyText}>Building, researching, or funding autonomous organizations? Apply as a speaker.</p>
            <p>
              <Link
                href={LUMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center px-6 py-3 bg-brand-accent text-black font-medium rounded-lg",
                  "transition-all duration-300 hover:bg-brand-accent/90 hover:shadow-lg hover:-translate-y-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
                )}
              >
                Apply on Luma →
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
