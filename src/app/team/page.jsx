"use client";

import React, { useMemo } from "react";
import ChromaGrid from "@/components/Team/TeamGrid";
import { teamAPI } from "@/lib/apiService";
import { useApiData } from "@/lib/hooks/useApi";

function Team() {
  const { data, loading, error } = useApiData(
    async () => {
      const res = await teamAPI.getAll({ isActive: true });
      if (Array.isArray(res?.teamMembers)) return res.teamMembers;
      if (Array.isArray(res)) return res;
      return [];
    },
    [],
    { initialData: [], autoFetch: true }
  );

  const gridItems = useMemo(() => {
    // Sort team members by batch (year) first, then by ID
    const sortedData = [...(data || [])].sort((a, b) => {
      // First sort by batch (year) - descending order (newest first)
      const batchA = parseInt(a.batch) || 0;
      const batchB = parseInt(b.batch) || 0;
      if (batchA !== batchB) {
        return batchB - batchA;
      }
      
      // If same batch, sort by ID (ascending)
      return (a.id || 0) - (b.id || 0);
    });

    return sortedData.map((m) => ({
      image: m.image || "",
      title: m.name || "Team Member",
      subtitle: m.department || "",
      handle: m.role || "",
      location: m.isAlumni ? `Alumni (${m.batch})` : `Current (${m.batch})`,
      url: m.social?.linkedin || m.social?.github || "",
      borderColor:
        m.role === "Ex HOD / Mentor"
          ? "#F59E0B"
          : m.role === "Club Lead"
          ? "#3B82F6"
          : "#64748B",
      gradient:
        m.role === "Ex HOD / Mentor"
          ? "linear-gradient(145deg,#F59E0B,#000)"
          : m.role === "Club Lead"
          ? "linear-gradient(210deg,#3B82F6,#000)"
          : "linear-gradient(165deg,#334155,#000)",
    }));
  }, [data]);

  // Debug information
  console.log("Raw data received:", data);
  console.log("Processed grid items:", gridItems);

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
          {loading && (
            <div className="mb-6 p-4 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
              Loading team members...
            </div>
          )}
          
          {/* Debug info */}
          {!loading && !error && (
            <div className="mb-6 p-4 rounded-xl border border-green-500/30 bg-green-500/10 text-green-300 text-sm">
              Loaded {gridItems.length} team members. Check console for debug info.
            </div>
          )}
          
          <ChromaGrid items={gridItems} />
        </div>
      </div>
    </main>
  );
}

export default Team