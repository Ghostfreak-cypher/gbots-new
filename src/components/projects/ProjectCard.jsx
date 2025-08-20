"use client";
import React from "react";
import Link from "next/link";
import { Cog, Calendar, Users, Award, Tag, ChevronRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const {
    slug,
    name,
    shortDescription,
    year,
    category,
    weightClass,
    achievements = [],
    status,
  } = project;

  const firstAward = achievements?.[0]?.competition;
  const remainingAwardsCount = Math.max((achievements?.length || 0) - 1, 0);
  const statusText = status || "Active";

  return (
    <article
      className="card-base card-hover cursor-target border border-themed rounded-3xl overflow-hidden
                 flex flex-col h-full bg-secondary/20 backdrop-blur-sm
                 transition-all duration-300 hover:shadow-lg hover:shadow-themed/20
                 hover:border-lime-400 hover:border-4"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-2xl bg-secondary/40 flex items-center justify-center border border-border">
            <Cog className="w-6 h-6" />
          </div>
          <div className="px-3 py-1 rounded-full text-xs border bg-secondary/50">
            {statusText}
          </div>
        </div>

        <h3 className="mt-4 text-2xl font-semibold">{name}</h3>

        {shortDescription && (
          <p className="mt-2 text-sm text-themed-muted line-clamp-3">
            {shortDescription}
          </p>
        )}

        <div className="mt-4 flex items-center gap-4 text-sm text-themed-muted">
          <div className="inline-flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>members</span>
          </div>
        </div>

        {category && (
          <div className="mt-4">
            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded border bg-secondary/50">
              <Tag className="w-3.5 h-3.5" />
              {category}
            </span>
          </div>
        )}

        <div className="mt-6">
          <h4 className="text-sm font-semibold">Key Features:</h4>
          <div className="mt-2 space-y-2">
            {category && (
              <div className="flex items-start gap-2 text-sm">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{category}</span>
              </div>
            )}
            {weightClass && (
              <div className="flex items-start gap-2 text-sm">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{weightClass}</span>
              </div>
            )}
          </div>
        </div>


        <div className="mt-6 pt-4 border-t border-border">
          <Link
            href={slug ? `/projects/${slug}` : "#"}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            View Details <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
