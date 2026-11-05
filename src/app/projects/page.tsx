import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects — Fortiter Nova",
  description:
    "A look at the mobile app testing engagements Fortiter Nova has delivered across compliance, compatibility, performance, and security.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
          Selected Work
        </span>
        <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
          Projects we&apos;ve put <span className="text-gradient-nova font-bold">to the test</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-foreground/60">
          A sample of the apps we&apos;ve helped ship — placeholder detail for now, full
          case studies coming soon.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ProjectsGrid />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="border-glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-space-800 via-space-700 to-space-800 px-8 py-14 text-center sm:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(192,38,211,0.2),_transparent_55%)]" />
          <div className="relative">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Have an app that needs testing?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/60">
              Let&apos;s talk through your release timeline and where Fortiter Nova can
              help.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
