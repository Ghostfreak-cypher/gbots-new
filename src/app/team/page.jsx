"use client";
import React from "react";
import TeamHero from "@/components/team/hero";
import CardsSection from "@/components/Team/CardsSection";
function Team() {
  return (
    <div className="Team relative w-full min-h-screen">
      <TeamHero />
      <CardsSection />
    </div>
  );
}

export default Team;

