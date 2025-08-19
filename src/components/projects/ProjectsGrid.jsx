"use client";

import React, { useEffect, useMemo, useState } from "react";
import { projectsAPI, apiUtils } from "@/lib/apiService";
import ProjectCard from "@/components/projects/card";

const ProjectsGrid = ({ filters }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const defaultFilters = useMemo(() => ({ limit: 12, page: 1 }), []);
  const effectiveFilters = filters ?? defaultFilters;

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    projectsAPI
      .getAll(effectiveFilters)
      .then((res) => {
        if (!isMounted) return;
        const list = Array.isArray(res?.data?.projects)
          ? res.data.projects
          : Array.isArray(res?.projects)
          ? res.projects
          : [];
        setProjects(list);
      })
      .catch((err) => setError(apiUtils.handleError(err)))
      .finally(() => isMounted && setLoading(false));
    return () => {
      isMounted = false;
    };
  }, [effectiveFilters]);

  const items = useMemo(() => {
    return projects.map((p, idx) => ({
      name: p.name || p.title || `Project ${idx + 1}`,
      subtitle: p.shortDescription || p.description || "",
      image: p.image || p.poster || p.cover || null,
    }));
  }, [projects]);

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

  return <ProjectCard projects={items} />;
};

export default ProjectsGrid;


