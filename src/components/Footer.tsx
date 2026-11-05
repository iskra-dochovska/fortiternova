import Link from "next/link";
import { Orbit } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/data";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-space-950/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-nova-blue to-nova-purple">
                <Orbit className="h-4.5 w-4.5 text-white" strokeWidth={2.25} />
              </span>
              <span className="text-base font-medium text-foreground">
                Fortiter<span className="text-gradient-nova font-semibold"> Nova</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-foreground/50">
              Mobile app store testing built for teams who ship fast and can&apos;t afford
              surprises in review.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-sm font-medium text-foreground/80">Navigate</p>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/50 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground/80">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/50">
                <li>{CONTACT_INFO.email}</li>
                <li>{CONTACT_INFO.phone}</li>
                <li>{CONTACT_INFO.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-foreground/40 sm:flex-row">
          <p>&copy; 2026 Fortiter Nova. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="GitHub" className="transition-colors hover:text-foreground">
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href="#" aria-label="X" className="transition-colors hover:text-foreground">
              <XIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
