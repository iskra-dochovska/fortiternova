"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Mail, Menu, Orbit, X } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const headerEl = (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-space-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-nova-blue to-nova-purple shadow-[0_0_20px_-2px_rgba(99,102,241,0.8)]">
            <Orbit className="h-5 w-5 text-white" strokeWidth={2.25} />
          </span>
          <span className="text-lg font-medium tracking-tight text-foreground">
            Fortiter<span className="text-gradient-nova font-semibold"> Nova</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-nova-cyan to-nova-purple" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-nova-blue to-nova-purple px-5 py-2 text-sm font-medium text-white shadow-[0_0_20px_-4px_rgba(139,92,246,0.7)] transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-foreground md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );

  const drawer = (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[100] bg-space-950/90 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Side drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-y-0 right-0 z-[101] flex h-dvh w-[80%] max-w-xs flex-col border-l border-white/10 bg-space-950 shadow-[-24px_0_60px_-30px_rgba(99,102,241,0.5)] transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-nova-blue to-nova-purple">
              <Orbit className="h-4.5 w-4.5 text-white" strokeWidth={2.25} />
            </span>
            <span className="text-base font-medium text-foreground">
              Fortiter<span className="text-gradient-nova font-semibold"> Nova</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-foreground/70 transition-colors hover:text-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-3 py-6">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                  active
                    ? "bg-white/[0.06] text-foreground"
                    : "text-foreground/60 hover:bg-white/[0.03] hover:text-foreground"
                }`}
              >
                {link.label}
                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-nova-cyan to-nova-purple" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-5 py-5">
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 text-xs text-foreground/45"
          >
            <Mail className="h-3.5 w-3.5" />
            {CONTACT_INFO.email}
          </a>
          <Link
            href="/contact"
            className="group mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-nova-blue to-nova-purple px-5 py-3 text-sm font-medium text-white shadow-[0_0_20px_-4px_rgba(139,92,246,0.7)]"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      {headerEl}
      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
