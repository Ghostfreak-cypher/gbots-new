"use client";

import React from 'react'
import ProjectsGrid from "@/components/projects/ProjectsGrid";

function Projects() {
  return (
    <main className="w-full min-h-screen py-12 md:py-16 page-transition">
      <div className="mx-6 md:mx-20">
        <header className="mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-100"></div>
            <div className="w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-200"></div>
          </div>
          <h1 className="text-[10vw] md:text-6xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="mt-4 text-lg md:text-xl text-themed-muted max-w-2xl mx-auto leading-relaxed">
            Explore our cutting-edge robotics innovations and engineering breakthroughs
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-themed-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Active Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>In Development</span>
            </div>
          </div>
        </header>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl"></div>
          <ProjectsGrid />
        </div>
      </div>
    </main>
  )
}

export default Projects