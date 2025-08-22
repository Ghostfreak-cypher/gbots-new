// EventsGrid.js
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { eventsAPI, apiUtils } from "@/lib/apiService";
import Card from '../ui/card';

const AchievementGrid = ({ filters }) => {
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
        <EventCard key={c.id} {...c} cursorTarget={true} />
      ))}
    </div>
  );
};

export default AchievementGrid;