"use client";

import React, { useMemo, useState } from "react";
import TeamGrid from "@/components/team/TeamGrid";

function Team() {
  // Academic cycle segmented control (e.g., 24-25, 25-26)
  const now = new Date();
  const currentYear = now.getFullYear();
  const baseStart = currentYear; 
  const cycles = [baseStart - 2 , baseStart - 1, baseStart, baseStart + 1, baseStart + 2];
  const [cycleStartYear, setCycleStartYear] = useState(baseStart);

  const filters = useMemo(() => ({ cycleStartYear }), [cycleStartYear]);

  const formatCycle = (start) => `${String(start).slice(2)}-${String(start + 1).slice(-2)}`;

  return (
    <main className="w-full min-h-screen py-12 md:py-16 page-transition">
      <div className="mx-6 md:mx-20">
        <header className="mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-100"></div>
            <div className="w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-200"></div>
          </div>
          <h1 className="text-[10vw] md:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl text-themed-muted max-w-2xl mx-auto leading-relaxed">
            Meet the brilliant minds and passionate engineers building the future of robotics
          </p>
        </header>

        {/* Enhanced Cycle Segmented Control */}
        <section className="mb-12 md:mb-16">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/30 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Select Academic Cycle
              </h2>
              <div className="px-4 py-2 rounded-2xl bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">{formatCycle(cycleStartYear)}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="inline-flex items-center gap-1 p-1 rounded-3xl bg-secondary/50 border border-border backdrop-blur-sm">
                {cycles.map((start) => {
                  const active = start === cycleStartYear;
                  return (
                    <button
                      key={start}
                      type="button"
                      onClick={() => setCycleStartYear(start)}
                      className={`px-6 py-3 rounded-2xl text-sm font-medium whitespace-nowrap transition-all duration-300 focus-ring ${
                        active
                          ? "bg-background text-foreground shadow-lg scale-105"
                          : "text-themed-muted hover:text-foreground hover:bg-secondary/30"
                      }`}
                      aria-pressed={active}
                    >
                      {formatCycle(start)}
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-themed-muted">
                Showing team members for the {formatCycle(cycleStartYear)} academic cycle
              </p>
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl"></div>
          <TeamGrid filters={filters} />
        </div>
      </div>
    </main>
  );
}

export default Team