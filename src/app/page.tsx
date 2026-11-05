import Link from "next/link";
import { Sparkle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SERVICES, VALUE_PROPS, PROCESS_STEPS } from "@/lib/data";
import { ICON_MAP } from "@/components/icon-map";
import GalaxySpiral from "@/components/GalaxySpiral";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <GalaxySpiral className="absolute left-1/2 top-[30%] z-0 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 opacity-25 md:left-auto md:top-auto md:-right-56 md:-top-44 md:h-[880px] md:w-[880px] md:translate-x-0 md:translate-y-0 md:opacity-45 lg:-right-64 lg:-top-56 lg:h-[1100px] lg:w-[1100px] lg:opacity-50" />

        <div className="animate-fade-up relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
            <Sparkle className="h-3.5 w-3.5 text-nova-gold" />
            App Store Optimization
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Your fair share of <span className="text-nova-gold">organic</span>.
          </h1>

          <h2 className="mt-3 max-w-xl text-lg font-medium text-foreground/70 sm:text-xl">
            Right-sized <span className="text-nova-gold">ASO</span> for small studios
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/60 sm:text-lg">
            Most small studios can&apos;t outspend the big publishers, and they shouldn&apos;t
            have to. We help you make the most of the organic traffic already available,
            with honest, right-sized packages built around your game, not a one-size template.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Get In Touch</Button>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-20 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((item) => (
            <div key={item.label}>
              <div className="flex items-center gap-2 text-sm font-semibold text-nova-gold">
                <Sparkle className="h-4 w-4" strokeWidth={2} />
                {item.label}
              </div>
              <p className="mt-2 text-xs leading-5 text-foreground/55">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission teaser */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
        <p className="text-xl font-medium leading-snug tracking-tight sm:text-2xl">
          &ldquo;We build right-sized <span className="text-nova-gold">ASO</span> packages for
          small studios: test carefully, report plainly, and tell you when ASO isn&apos;t what&apos;s
          holding you back.&rdquo;
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-nova-blue-light transition-colors hover:text-nova-cyan"
        >
          Learn more about us →
        </Link>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            What We <span className="text-gradient-nova font-bold">Do</span>
          </h2>
          <p className="mt-4 text-foreground/60">
            A right-sized set of ASO services, scoped to your studio&apos;s budget and stage.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-nova-purple-light/40 hover:bg-white/[0.04]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-nova-blue/20 to-nova-purple/20 text-nova-blue-light transition-colors group-hover:text-nova-cyan">
                  <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-medium">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-foreground/55">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            How We <span className="text-gradient-nova font-bold">Work</span>
          </h2>
          <p className="mt-4 text-foreground/60">
            A short diagnostic, a right-sized package, and honest reporting at every step.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-5">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-nova-cyan via-nova-blue to-nova-purple sm:block" />
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-space-900 text-sm font-semibold text-nova-blue-light">
                {i + 1}
              </div>
              <h3 className="mt-4 text-sm font-medium">{step.title}</h3>
              <p className="mt-2 text-xs leading-5 text-foreground/50">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="border-glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-space-800 via-space-700 to-space-800 px-8 py-14 text-center sm:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(99,102,241,0.25),_transparent_55%)]" />
          <div className="relative">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Ready for a fair shot at being found?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-foreground/60">
              Tell us about your game and where you&apos;re at, and we&apos;ll start with a
              short, honest diagnostic.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Start the Conversation</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
