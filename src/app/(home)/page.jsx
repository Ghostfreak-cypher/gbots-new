"use client";

import React from "react";
import Spline from '@splinetool/react-spline';
import LightRays from "@/components/home/spotlight";

function Home() {
  return (
    <div className="home relative w-full h-screen bg-black overflow-hidden">
      <LightRays />

      {/* 3D Scene Container */}
      <div className="absolute inset-0 z-10">
        <Spline
          scene="https://prod.spline.design/gU-KjpRSvoZxGltT/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 opacity-90">GROBOTS</h1>
          <p className="text-xl opacity-70">Building Tomorrow's Innovators</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
