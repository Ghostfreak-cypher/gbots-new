"use client";
import React from "react";

const TeamMemberCard = ({ member }) => {
  if (!member) return null;

  const { name, title, avatarUrl, socialLinks = [], yearOfLeaving, Role } = member;

  const cycleLabel = typeof yearOfLeaving === "number"
    ? `${String(yearOfLeaving).slice(2)}-${String(yearOfLeaving + 1).slice(-2)}`
    : null;

  return (
    <article
      className="card-base card-hover cursor-target rounded-[28px] overflow-hidden bg-[#0b0b0b] border border-border
                 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:ring-1 hover:ring-lime-400/40"
      aria-label={`Team member: ${name}, ${title}`}
    >
      <div className="relative w-full aspect-[16/10] bg-black group">
        <img
          src={avatarUrl}
          alt={`Portrait of ${name}`}
          className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
          onError={(e) => { e.currentTarget.src = "/Grobotslogo.png"; }}
        />
        {/* Image gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/20 opacity-70 group-hover:opacity-60 transition-opacity" />

        {/* Overlays: role and cycle */}
        {Role && (
          <span className="absolute top-3 left-3 text-[10px] md:text-xs px-2 py-1 rounded-full border bg-black/50 backdrop-blur text-white">
            {Role}
          </span>
        )}
        {cycleLabel && (
          <span className="absolute top-3 right-3 text-[10px] md:text-xs px-2 py-1 rounded-full border border-lime-400/40 bg-black/50 text-lime-400">
            {cycleLabel}
          </span>
        )}
      </div>

      <div className="px-6 pb-6 pt-4 text-center select-none">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-widest uppercase text-white">
          {name}
        </h3>
        <p className="mt-1 text-sm md:text-base font-semibold uppercase tracking-wider text-lime-400">
          {title}
        </p>

        {/* Social Media Links */}
        {socialLinks.length > 0 && (
          <div className="mt-4 flex justify-center gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="text-gray-400 hover:text-lime-400 transition-colors"
              >
                {React.createElement(link.icon, { size: 20 })}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default TeamMemberCard;
