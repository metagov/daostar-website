"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const TopNavigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-[1000] py-4">
      <div className="w-full px-5 flex justify-between items-start">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80 flex-shrink-0"
        >
          <Image
            src="/img/logo_dao.png"
            alt="DAOstar Logo"
            width={80}
            height={28}
            className="h-6 w-auto min-w-[80px]"
          />
        </Link>

        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-6">
          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger asChild>
              <button className={cn(
                "flex items-center px-4 py-2 text-text-primary bg-transparent border-none text-base font-medium",
                "transition-all duration-200 hover:text-brand-accent hover:bg-brand-accent/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30"
              )}>
                Standards
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenu.Trigger>
            
            <DropdownMenu.Portal>
              <DropdownMenu.Content 
                className={cn(
                  "min-w-[180px] bg-card-bg/95 backdrop-blur-md border border-card-border rounded-md shadow-xl",
                  "animate-slide-up z-[1001] mt-1"
                )}
                align="start"
                sideOffset={4}
              >
                <DropdownMenu.Item asChild>
                  <Link 
                    href="/daoid"
                    className={cn(
                      "block px-5 py-3 text-text-primary text-sm cursor-pointer min-h-[36px] flex items-center",
                      "transition-all duration-200 hover:bg-brand-accent/10 hover:text-brand-accent",
                      "focus-visible:outline-none focus-visible:bg-brand-accent/10 focus-visible:text-brand-accent"
                    )}
                  >
                    DAO ID
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link 
                    href="/opengrants"
                    className={cn(
                      "block px-5 py-3 text-text-primary text-sm cursor-pointer min-h-[36px] flex items-center",
                      "transition-all duration-200 hover:bg-brand-accent/10 hover:text-brand-accent",
                      "focus-visible:outline-none focus-visible:bg-brand-accent/10 focus-visible:text-brand-accent"
                    )}
                  >
                    OpenGrants
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          
          <Link 
            href="/research"
            className={cn(
              "px-4 py-2 text-text-primary bg-transparent text-base font-medium",
              "transition-all duration-200 hover:text-brand-accent hover:bg-brand-accent/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30 rounded"
            )}
          >
            Research
          </Link>

          <Link 
            href="/about"
            className={cn(
              "px-4 py-2 text-text-primary bg-transparent text-base font-medium",
              "transition-all duration-200 hover:text-brand-accent hover:bg-brand-accent/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/30 rounded"
            )}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;