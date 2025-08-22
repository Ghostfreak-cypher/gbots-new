"use client";

import React from 'react'
import AchievementGrid from "@/components/achievements/grid";

function Achievements() {
  return (
    <main className="w-full min-h-screen py-12 md:py-16 page-transition">
      <div className="mx-6 md:mx-20">
        <header className="mb-12 md:mb-16 text-center">
          <h1 className="text-[10vw] md:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Achievements
          </h1>
          <p className="mt-4 text-lg md:text-xl text-themed-muted max-w-2xl mx-auto leading-relaxed">
            Our achievements in robotics, innovation, and competition
          </p>
        </header>
        
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl"></div>
          <AchievementGrid />
        </div>
      </div>
    </main>
  )
}

export default Achievements

