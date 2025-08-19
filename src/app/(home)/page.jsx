"use client";

import React from "react";
import LightRays from "@/components/home/spotlight";
import About from "@/components/home/about";
import Hero from "@/components/home/hero"
import TargetCursor from "@/components/ui/tragetCursor";
import Cta from "@/components/home/cta"
import WhatWeDo from "@/components/home/whatWeDo"

function Home() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);
  return (
    <div className="home relative w-full min-h-screen">
      <LightRays />
      {isDesktop && <TargetCursor targetSelector=".cursor-target" />}
      <Hero/>
      <About />
      <WhatWeDo />
      <Cta/>
    </div>
  );
}

export default Home;
