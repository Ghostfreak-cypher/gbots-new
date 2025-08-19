"use client";

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import LightRays from '@/components/home/spotlight'
import Scene from '@/components/home/Scene'

// Loading component for 3D scene
function SceneLoader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-white text-lg">Loading 3D Scene...</div>
    </div>
  )
}

function Home() {
  return (
    <div className="home relative w-full h-screen bg-black overflow-hidden">
      <LightRays />
      
      {/* 3D Scene Container */}
      <div className="absolute inset-0 z-10">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 5], fov: 75 }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 opacity-90">GROBOTS</h1>
          <p className="text-xl opacity-70">Building Tomorrow's Innovators</p>
        </div>
      </div>
    </div>
  )
}

export default Home