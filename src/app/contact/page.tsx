import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Fortiter Nova",
  description:
    "Get in touch with Fortiter Nova to scope a right-sized ASO package for your game.",
};

const INFO_CARDS = [
  { icon: Mail, label: "Email", value: CONTACT_INFO.email },
  { icon: Phone, label: "Phone", value: CONTACT_INFO.phone },
  { icon: MapPin, label: "Location", value: CONTACT_INFO.location },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
          Let&apos;s Talk
        </span>
        <h1 className="mt-6 text-4xl font-medium tracking-tight sm:text-5xl">
          Get in <span className="text-gradient-nova font-bold">touch</span>
        </h1>
        <p className="mt-5 text-foreground/60">
          Tell us about your game and where you&apos;re at, and we&apos;ll get back to you
          within one business day with next steps.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
        <ContactForm />

        <div className="flex flex-col gap-4">
          {INFO_CARDS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-nova-blue/20 to-nova-purple/20 text-nova-blue-light">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs text-foreground/45">{label}</p>
                <p className="mt-0.5 text-sm font-medium text-foreground/90">{value}</p>
              </div>
            </div>
          ))}

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-space-800 via-space-700 to-space-800 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,_rgba(99,102,241,0.25),_transparent_60%)]" />
            <p className="relative text-sm leading-6 text-foreground/60">
              Prefer async? Send a message with your game&apos;s store page and current stage,
              and we&apos;ll follow up with a short, honest diagnostic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
