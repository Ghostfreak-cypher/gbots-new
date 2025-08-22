"use client";

import React, { useMemo } from "react";
import ChromaGrid from "@/components/Team/TeamGrid";
import { teamAPI } from "@/lib/apiService";
import { useApiData } from "@/lib/hooks/useApi";

function Team() {
  const { data, loading, error } = useApiData(
    async () => {
      const res = await teamAPI.getAll({ activity: true });
      if (Array.isArray(res?.teamMembers)) return res.teamMembers;
      if (Array.isArray(res)) return res;
      return [];
    },
    [],
    { initialData: [], autoFetch: true }
  );

  const gridItems = useMemo(() => {
    return (data || []).map((m) => ({
      image: m.image || m.photo,
      title: m.name || m.fullName || "Team Member",
      subtitle: m.department || m.branch || m.course || "",
      handle: m.rollNo ? `#${m.rollNo}` : "",
      location: m.Role || "",
      url: m.profileUrl || m.linkedin || m.github || "",
      borderColor:
        m.Role === "HOD"
          ? "#F59E0B"
          : m.Role === "Coordinator"
          ? "#3B82F6"
          : "#64748B",
      gradient:
        m.Role === "HOD"
          ? "linear-gradient(145deg,#F59E0B,#000)"
          : m.Role === "Coordinator"
          ? "linear-gradient(210deg,#3B82F6,#000)"
          : "linear-gradient(165deg,#334155,#000)",
    }));
  }, [data]);

  return (
    <main className="w-full min-h-screen py-12 md:py-16 page-transition">
      <div className="mx-6 md:mx-20">
        <header className="mb-12 md:mb-16 text-center">
          <h1 className="text-[10vw] md:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="mt-4 text-lg md:text-xl text-themed-muted max-w-2xl mx-auto leading-relaxed">
            Meet the brilliant minds and passionate engineers building the future of robotics
          </p>
        </header>

        <div className="relative">
          <div className="absolute inset-0 bg-background rounded-3xl"></div>
          {error && (
            <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm">
              {String(error)}
            </div>
          )}
          <ChromaGrid items={gridItems} />
        </div>
      </div>
    </main>
  );
}

export default Team