"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-[2] bg-black/20 backdrop-blur-sm border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-light text-text-primary mb-2">
              DAOstar
            </h3>
            <p className="text-text-secondary text-sm max-w-md">
              Standards, Research and Public Goods for DAOs
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://daostar.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full bg-white/5 border border-white/10 text-text-primary",
                "transition-all duration-300 hover:bg-brand-accent/20 hover:border-brand-accent hover:text-brand-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
              aria-label="Substack"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
            </Link>

            <Link
              href="https://x.com/DAOstar_One"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full bg-white/5 border border-white/10 text-text-primary",
                "transition-all duration-300 hover:bg-brand-accent/20 hover:border-brand-accent hover:text-brand-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
              aria-label="X (Twitter)"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/daostar/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full bg-white/5 border border-white/10 text-text-primary",
                "transition-all duration-300 hover:bg-brand-accent/20 hover:border-brand-accent hover:text-brand-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>

            <Link
              href="https://lu.ma/daostar"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full bg-white/5 border border-white/10 text-text-primary",
                "transition-all duration-300 hover:bg-brand-accent/20 hover:border-brand-accent hover:text-brand-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}
              aria-label="Luma Events"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} DAOstar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;