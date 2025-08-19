"use client";

import React, { useEffect, useMemo, useState } from 'react'
import ProjectCard from "@/components/projects/card"
import ProjectsGrid from "@/components/projects/ProjectsGrid";

function Projects() {
  return (
    <main className="w-full min-h-screen py-12 md:py-16">
      <div className="mx-6 md:mx-20">
        <header className="mb-8 md:mb-12">
          <h1 className="text-[10vw] md:text-5xl font-bold leading-tight">Projects</h1>
          <p className="mt-2 text-sm md:text-base text-themed-muted">Explore what we build.</p>
        </header>
        <ProjectsGrid />
      </div>
    </main>
  )
}

export default Projects