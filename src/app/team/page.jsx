"use client";
import React from "react";
import TeamHero from "@/components/team/hero";
import CardsSection from "@/components/Team/CardsSection";

function Team() {
  return (
    <div className="Team relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <TeamHero />
      <CardsSection className="bg-transparent" showFilters={true} />
    </div>
  );
}

export default Team;
