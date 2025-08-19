"use client";

import React, { useEffect, useMemo, useState } from "react";
import { achievementsAPI, apiUtils } from "@/lib/apiService";

const AchievementsGrid = ({ filters }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const defaultFilters = useMemo(() => ({ limit: 12, page: 1 }), []);
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
    return items.map((a, idx) => ({
      title: a.title || a.name || `Achievement ${idx + 1}`,
      description: a.description || a.summary || "",
      image: a.image || a.poster || null,
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
          <div key={i} className="h-[240px] rounded-2xl border border-gray-800 bg-gray-900/40 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {cards.map((c, i) => (
        <article key={i} className="card-base card-hover border border-themed rounded-2xl overflow-hidden">
          {c.image && (
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="p-5">
            <h3 className="text-xl font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-themed-muted">{c.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default AchievementsGrid;


