"use client";

import React from "react";
import EventsGrid from "@/components/events/EventsGrid";

function Events() {
  return (
    <main className="w-full min-h-screen py-12 md:py-16">
      <div className="mx-6 md:mx-20">
        <header className="mb-8 md:mb-12">
          <h1 className="text-[10vw] md:text-5xl font-bold leading-tight">Events</h1>
          <p className="mt-2 text-sm md:text-base text-themed-muted">What’s happening at Grobots.</p>
        </header>
        <EventsGrid />
      </div>
    </main>
  );
}

export default Events;


