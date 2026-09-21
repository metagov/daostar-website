import type { ReactNode } from "react";

export type Speaker = {
  /** Full name, as it should appear on the card. */
  name: string;
  /** Title and affiliation, e.g. "Programme Director, ARIA". */
  role: string;
  /** One short paragraph. May contain inline <a> links. */
  bio: ReactNode;
  /** Square headshot in /public/img/aosummit/speakers/, e.g. "/img/aosummit/speakers/jane-doe.jpg". */
  photo: string;
  /** Announcement date shown beside the card, e.g. "Oct 1". */
  announced: string;
};

/**
 * Confirmed speakers, in announcement order (oldest first).
 * While this list is empty the page shows "Speakers coming soon".
 *
 * Example entry:
 *
 * {
 *   name: "Jane Doe",
 *   role: "Research Scientist, Example Lab",
 *   bio: (
 *     <>
 *       Studies multi-agent coordination at{" "}
 *       <a href="https://example.org/" target="_blank" rel="noopener noreferrer">Example Lab</a>.
 *     </>
 *   ),
 *   photo: "/img/aosummit/speakers/jane-doe.jpg",
 *   announced: "Oct 1",
 * },
 */
export const speakers: Speaker[] = [];
