import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Component variants using class-variance-authority
import { cva, type VariantProps } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-brand-secondary text-white hover:bg-brand-secondary/90",
        secondary: "border-2 border-brand-secondary/70 text-text-primary hover:bg-brand-secondary/20",
        ghost: "text-text-primary hover:bg-brand-accent/10 hover:text-brand-accent",
        link: "underline-offset-4 hover:underline text-brand-secondary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export const cardVariants = cva(
  "rounded-lg border transition-colors",
  {
    variants: {
      variant: {
        default: "bg-card-bg border-card-border hover:bg-card-bg-hover hover:border-card-border-hover",
        interactive: "bg-card-bg border-card-border hover:bg-card-bg-hover hover:border-card-border-hover hover:-translate-y-1 cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type ButtonProps = VariantProps<typeof buttonVariants>
export type CardProps = VariantProps<typeof cardVariants>