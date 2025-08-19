"use client"
import React from "react";
import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-30">
        <Spline
          scene="https://prod.spline.design/gU-KjpRSvoZxGltT/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-between pointer-events-none px-1 md:px-2 lg:px-4">
        <div className="text-white ml-[180px]">
          <span className="text-[18vw] md:text-[15vw] lg:text-[12vw] font-bold opacity-90">
            GRO
          </span>
        </div>
        <div className="text-white mr-[100px]">
          <span className="text-[18vw] md:text-[15vw] lg:text-[12vw] font-bold opacity-90">
            BOTS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
