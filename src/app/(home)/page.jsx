"use client";

import React from "react";
import LightRays from "@/components/home/spotlight";
import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import AchievementsGrid from "@/components/achievements/grid";

function Home() {
  return (
    <div className="home relative w-full min-h-screen">
      <LightRays />
      <Hero/>
      <About />
      <Projects />
      <AchievementsGrid />
    </div>
  );
}

export default Home;
    
