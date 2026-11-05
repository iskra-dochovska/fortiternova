"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-nova-cyan" />
        <h3 className="mt-5 text-xl font-medium">Thanks, {form.name.split(" ")[0] || "there"}.</h3>
        <p className="mt-2 max-w-sm text-sm text-foreground/55">
          We&apos;ve received your message and will get back to you within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          id="name"
          value={form.name}
          onChange={(v) => setForm((f) => ({ ...f, name: v }))}
          placeholder="Ada Lovelace"
          required
        />
        <Field
          label="Email"
          id="email"
          type="email"
          value={form.email}
          onChange={(v) => setForm((f) => ({ ...f, email: v }))}
          placeholder="ada@company.com"
          required
        />
      </div>

      <div className="mt-5">
        <Field
          label="Company"
          id="company"
          value={form.company}
          onChange={(v) => setForm((f) => ({ ...f, company: v }))}
          placeholder="Your company (optional)"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground/80">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Tell us about your app and what you need tested."
          className="w-full resize-none rounded-xl border border-white/10 bg-space-950/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-nova-blue-light/50"
        />
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-nova-blue to-nova-purple px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_-4px_rgba(139,92,246,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(139,92,246,0.85)]"
      >
        Send Message
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
};

function Field({ label, id, value, onChange, placeholder, type = "text", required }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground/80">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-space-950/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 outline-none transition-colors focus:border-nova-blue-light/50"
      />
    </div>
  );
}
