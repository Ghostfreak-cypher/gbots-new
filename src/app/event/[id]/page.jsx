"use client";

import React, { useEffect, useRef, useState } from "react";
import { eventsAPI, apiUtils } from "@/lib/apiService";
import { ArrowLeft, Home } from "lucide-react";

const Header = ({ title }) => (
  <header className="reader-header">
    <div className="reader-container py-6 md:py-8">
      <nav className="text-sm text-themed-muted flex items-center gap-2">
        <Home size={16} />
        <span>/</span>
        <a href="/event" className="hover:underline">Events</a>
        <span>/</span>
        <span className="text-foreground/80">{title}</span>
      </nav>
      <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
    </div>
  </header>
);

function EventDoc({ params }) {
  const { id } = params;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    eventsAPI
      .getAll({ id })
      .then((res) => {
        if (!isMounted) return;
        const e = res?.event || null;
        setEvent(e);
      })
      .catch((err) => setError(apiUtils.handleError(err)))
      .finally(() => isMounted && setLoading(false));
    return () => { isMounted = false; };
  }, [id]);

  const title = event?.name || event?.title || "Event";

  return (
    <div className="relative min-h-screen pt-20">
      <Header title={title} />
      <main className="reader-main">
        <div className="reader-container py-10">
          <a href="/event" className="btn-secondary px-3 py-2 rounded-xl inline-flex items-center gap-2 mb-6"><ArrowLeft size={16} />All Events</a>
          {error && <p className="text-sm text-red-400">{error}</p>}
          {loading && <p className="text-sm text-themed-muted">Loading…</p>}
          {!loading && !error && event && (
            <article className="reader-content p-6 md:p-10 prose prose-invert">
              {event.poster && (
                <img src={event.poster} alt={title} />
              )}
              <p className="text-sm text-themed-muted">{event.startDate} • {event.location}</p>
              <p>{event.description}</p>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}

export default EventDoc;


