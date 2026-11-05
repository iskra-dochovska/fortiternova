import type { Metadata } from "next";
import { Sparkle } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About | Fortiter Nova",
  description:
    "Fortiter Nova is an app store optimization agency built for small game studios: right-sized packages, honest reporting, no overpromising.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-6 text-center sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
          About
        </span>
        <h1 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl">
          Fortiter<span className="text-gradient-nova font-bold"> Nova</span>
        </h1>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-nova-gold/30 bg-nova-gold/5 p-7 sm:p-9">
          <Sparkle className="h-5 w-5 text-nova-gold" />
          <p className="mt-4 text-base leading-7 text-foreground/75 sm:text-lg">
            &ldquo;<span className="text-nova-gold font-semibold">Fortiter</span>&rdquo; is
            Latin for <span className="text-nova-gold font-semibold">boldly</span>. A
            &ldquo;<span className="text-nova-gold font-semibold">nova</span>&rdquo; is a{" "}
            <span className="text-nova-gold font-semibold">new star being born</span>.
            Together they describe what we want for the studios we work with: to start with
            confidence, and to be seen.
          </p>
        </div>

        <p className="mt-8 text-base leading-7 text-foreground/60 sm:text-lg">
          Fortiter Nova is an app store optimization agency built for small development teams.
          We offer customizable packages scaled to your needs and budget, so you pay for the
          work your game needs and nothing more. We don&apos;t promise rankings or overnight
          growth; we do careful work on your store presence and report honestly on what it
          achieves.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Vision</h2>
        <p className="mt-4 text-lg font-medium leading-snug text-foreground/85">
          Every new game gets a realistic chance to be found.
        </p>
        <p className="mt-4 text-base leading-7 text-foreground/60">
          Most small studios can&apos;t outspend the big publishers, and they shouldn&apos;t
          have to. We help them make the most of the{" "}
          <span className="text-nova-gold">organic</span> traffic already available to them,
          focusing on what is achievable rather than what sounds impressive. A well-prepared
          store page won&apos;t fix everything, but it gives a good game a fair shot at being
          discovered.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Our Ongoing Mission
        </h2>
        <p className="mt-4 text-lg font-medium leading-snug text-foreground/85">
          We build right-sized <span className="text-nova-gold">ASO</span> packages for small
          studios: test carefully, report plainly, and tell you when ASO isn&apos;t what&apos;s
          holding you back.
        </p>
        <p className="mt-4 text-base leading-7 text-foreground/60">
          Every studio has a different budget, store page, and stage of development, so we
          start with a short diagnostic and build a package around what you actually need. We
          test changes with a clear hypothesis, share results in plain language, including
          the tests that didn&apos;t work, and say so honestly when the bottleneck is
          elsewhere, like retention or the core loop.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <div className="border-glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-space-800 via-space-700 to-space-800 px-8 py-12 sm:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(227,179,65,0.12),_transparent_55%)]" />
          <div className="relative">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Let&apos;s talk about your store page.
            </h2>
            <div className="mt-7 flex justify-center">
              <Button href="/contact">Get In Touch</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
