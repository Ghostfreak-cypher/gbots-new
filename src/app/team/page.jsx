import React from "react";
import TeamGrid from "@/components/team/TeamGrid";

function Team() {
  return (
    <main className="w-full min-h-screen py-12 md:py-16">
      <div className="mx-6 md:mx-20">
        <header className="mb-8 md:mb-12">
          <h1 className="text-[10vw] md:text-5xl font-bold leading-tight">Our Team</h1>
          <p className="mt-2 text-sm md:text-base text-themed-muted">Meet the people building Grobots.</p>
        </header>
        <TeamGrid />
      </div>
    </main>
  );
}

export default Team