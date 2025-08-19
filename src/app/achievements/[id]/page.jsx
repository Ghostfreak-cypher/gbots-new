"use client";

import React, { useEffect, useState } from "react";
import { achievementsAPI, apiUtils } from "@/lib/apiService";
import { ArrowLeft, Home } from "lucide-react";

const Header = ({ title }) => (
  <header className="reader-header">
    <div className="reader-container py-6 md:py-8">
      <nav className="text-sm text-themed-muted flex items-center gap-2">
        <Home size={16} />
        <span>/</span>
        <a href="/achievements" className="hover:underline">Achievements</a>
        <span>/</span>
        <span className="text-foreground/80">{title}</span>
      </nav>
      <h1 className="mt-3 text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
    </div>
  </header>
);

function AchievementDoc({ params }) {
  const { id } = params;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    achievementsAPI
      .getAll({ id })
      .then((res) => {
        if (!isMounted) return;
        const a = res?.achievement || null;
        setItem(a);
      })
      .catch((err) => setError(apiUtils.handleError(err)))
      .finally(() => isMounted && setLoading(false));
    return () => { isMounted = false; };
  }, [id]);

  const title = item?.title || item?.name || "Achievement";

  return (
    <div className="relative min-h-screen pt-20">
      <Header title={title} />
      <main className="reader-main">
        <div className="reader-container py-10">
          <a href="/achievements" className="btn-secondary px-3 py-2 rounded-xl inline-flex items-center gap-2 mb-6"><ArrowLeft size={16} />All Achievements</a>
          {error && <p className="text-sm text-red-400">{error}</p>}
          {loading && <p className="text-sm text-themed-muted">Loading…</p>}
          {!loading && !error && item && (
            <article className="reader-content p-6 md:p-10 prose prose-invert">
              {item.image && (
                <img src={item.image} alt={title} />
              )}
              <p>{item.description}</p>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}

export default AchievementDoc;


