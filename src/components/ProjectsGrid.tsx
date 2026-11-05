"use client";

import { useState } from "react";
import { Smartphone, ArrowUpRight } from "lucide-react";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/data";

export default function ProjectsGrid() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {PROJECT_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "border-transparent bg-gradient-to-r from-nova-blue to-nova-purple text-white"
                : "border-white/10 bg-white/[0.02] text-foreground/60 hover:border-nova-blue-light/40 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <div
            key={project.name}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-nova-purple-light/40 hover:bg-white/[0.04]"
          >
            <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-space-700 via-space-800 to-space-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(168,85,247,0.25),_transparent_60%)]" />
              <span className="text-gradient-nova relative text-4xl font-bold">
                {project.name.charAt(0)}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium">{project.name}</h3>
                <ArrowUpRight className="h-4 w-4 text-foreground/30 transition-colors group-hover:text-nova-cyan" />
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-xs text-foreground/45">
                <Smartphone className="h-3.5 w-3.5" />
                {project.platform}
              </div>

              <p className="mt-4 flex-1 text-sm leading-6 text-foreground/55">
                {project.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/60">
                  {project.category}
                </span>
                <span className="text-xs text-foreground/35">Case study coming soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
