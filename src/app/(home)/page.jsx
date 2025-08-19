"use client";

import React from "react";
import LightRays from "@/components/home/spotlight";
import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Cta from "@/components/home/cta";
import WhatWeDo from "@/components/home/whatWeDo";

function Home() {
  return (
    <div className="home relative w-full min-h-screen">
      <LightRays />
      <Hero/>
      <About />
      <WhatWeDo />
      <Cta/>
    </div>
  );
}

export default Home;
    
