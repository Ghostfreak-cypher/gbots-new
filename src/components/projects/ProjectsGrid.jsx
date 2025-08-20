"use client";

import React, { useEffect, useMemo, useState } from "react";
import { projectsAPI, apiUtils } from "@/lib/apiService";
import ProjectCard from "@/components/projects/ProjectCard";

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
        // The API can return either { data: { projects: [...] }} or { projects: [...] }
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

  if (error) {
    return (
      <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm">{error}</div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[320px] rounded-3xl border border-border bg-secondary/20 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project._id || project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;


