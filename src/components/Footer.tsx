import Link from "next/link";
import { CONTACT_INFO } from "@/lib/data";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-space-950/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex max-w-sm flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 shrink-0" />
              <span className="text-base font-medium text-foreground">
                Fortiter<span className="text-gradient-nova font-semibold"> Nova</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-foreground/50">
              Right-sized app store optimization for small game studios, with honest testing
              and plain-language reporting.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm font-medium text-foreground/80">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/50">
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-foreground/40 md:text-left">
          <p>&copy; 2026 Fortiter Nova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
