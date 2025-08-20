"use client";

import React from 'react'
import EventsGrid from "@/components/events/EventsGrid";

function Events() {
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
            Events
          </h1>
          <p className="mt-4 text-lg md:text-xl text-themed-muted max-w-2xl mx-auto leading-relaxed">
            Join us for exciting robotics competitions, workshops, and innovation showcases
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-themed-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Upcoming</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Ongoing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span>Past</span>
            </div>
          </div>
        </header>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl"></div>
          <EventsGrid />
        </div>
      </div>
    </main>
  )
}

export default Events


