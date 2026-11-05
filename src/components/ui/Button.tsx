import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  showArrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-nova-blue to-nova-purple text-white shadow-[0_0_24px_-4px_rgba(139,92,246,0.6)] hover:shadow-[0_0_32px_-2px_rgba(139,92,246,0.85)] hover:-translate-y-0.5",
    secondary:
      "border border-white/15 bg-white/[0.03] text-foreground backdrop-blur hover:border-nova-blue-light/50 hover:bg-white/[0.06]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
