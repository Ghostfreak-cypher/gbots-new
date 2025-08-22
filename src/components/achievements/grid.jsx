"use client";
import React, { useEffect, useMemo, useState } from "react";
import { achievementsAPI, apiUtils } from "@/lib/apiService";
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
    achievementsAPI
      .getAll(effectiveFilters)
      .then((res) => {
        if (!isMounted) return;
        const list = Array.isArray(res?.achievements)
          ? res.achievements
          : Array.isArray(res?.data)
          ? res.data
          : [];
        setItems(list);
      })
      .catch((err) => setError(apiUtils.handleError(err)))
      .finally(() => isMounted && setLoading(false));
    return () => {
      isMounted = false;
    };
  }, [effectiveFilters]);

  const cards = useMemo(() => {
    return items.map((a) => ({
      id: a._id || a.id,
      title: a.nameOfEvent || a.title,
      description: a.shortDescription || a.longDescription,
      date: a.dateOfEvent,
      location: a.location,
      image: Array.isArray(a.images) && a.images.length > 0 ? a.images[0] : null,
      status: a.winningPosition || a.prizeWon,
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
        <Card key={c.id} {...c} cursorTarget={true} />
      ))}
    </div>
  );
};

export default AchievementGrid;