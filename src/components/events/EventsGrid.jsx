"use client";

import React, { useEffect, useMemo, useState } from "react";
import { eventsAPI, apiUtils } from "@/lib/apiService";

const EventsGrid = ({ filters }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const defaultFilters = useMemo(() => ({}), []);
  const effectiveFilters = filters ?? defaultFilters;

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    eventsAPI
      .getAll(effectiveFilters)
      .then((res) => {
        if (!isMounted) return;
        const list = Array.isArray(res?.events) ? res.events : [];
        setItems(list);
      })
      .catch((err) => setError(apiUtils.handleError(err)))
      .finally(() => isMounted && setLoading(false));
    return () => {
      isMounted = false;
    };
  }, [effectiveFilters]);

  const cards = useMemo(() => {
    return items.map((e) => ({
      id: e.id,
      title: e.name || e.title,
      description: e.description,
      date: e.startDate,
      location: e.location,
      image: e.poster,
      status: e.status,
    }));
  }, [items]);

  if (error) {
    return (
      <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm">{error}</div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[260px] rounded-2xl border border-gray-800 bg-gray-900/40 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {cards.map((c) => (
        <article key={c.id} className="card-base card-hover border border-themed rounded-2xl overflow-hidden">
          {c.image && (
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-xs">{c.status}</div>
            </div>
          )}
          <div className="p-5">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-themed-muted">{c.date} • {c.location}</p>
            <p className="mt-2 text-sm text-themed-muted">{c.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default EventsGrid;


