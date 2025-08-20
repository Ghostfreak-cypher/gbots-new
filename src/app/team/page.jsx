"use client";

import React, { useMemo, useState } from "react";
import TeamGrid from "@/components/team/TeamGrid";

function Team() {
  // Academic cycle segmented control (e.g., 24-25, 25-26)
  const now = new Date();
  const currentYear = now.getFullYear();
  const baseStart = currentYear ; 
  const cycles = [baseStart - 2 , baseStart - 1, baseStart, baseStart + 1, baseStart + 2];
  const [cycleStartYear, setCycleStartYear] = useState(baseStart);

  const filters = useMemo(() => ({ cycleStartYear }), [cycleStartYear]);

  const formatCycle = (start) => `${String(start).slice(2)}-${String(start + 1).slice(-2)}`;

  return (
    <main className="w-full min-h-screen py-12 md:py-16">
      <div className="mx-6 md:mx-20">
        <header className="mb-8 md:mb-12">
          <h1 className="text-[10vw] md:text-5xl font-bold leading-tight">Our Team</h1>
          <p className="mt-2 text-sm md:text-base text-themed-muted">Meet the people building Grobots.</p>
        </header>

        {/* Cycle segmented control */}
        <section className="mb-8 md:mb-10">
          <div className="rounded-2xl border border-border bg-secondary/30 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base md:text-lg font-semibold">Select Cycle</h2>
              <span className="text-sm text-themed-muted">{formatCycle(cycleStartYear)}</span>
            </div>
            <div className="inline-flex items-center gap-2 p-1 rounded-2xl bg-secondary/50 border border-border">
              {cycles.map((start) => {
                const active = start === cycleStartYear;
                return (
                  <button
                    key={start}
                    type="button"
                    onClick={() => setCycleStartYear(start)}
                    className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap ${
                      active ? "bg-foreground text-background" : "text-themed-muted hover:text-foreground"
                    }`}
                    aria-pressed={active}
                  >
                    {formatCycle(start)}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <TeamGrid filters={filters} />
      </div>
    </main>
  );
}

export default Team