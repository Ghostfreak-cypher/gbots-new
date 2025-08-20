"use client";
import React, { useState } from "react";

const TeamCard = ({
  // Backend schema fields
  name = "Team Member",
  Role = "Member",
  department = "",
  image = null,

  // Additional display props
  size = "medium", // small, medium, large
  className = "",
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Role-based styling
  const getRoleStyles = (role) => {
    switch (role) {
      case "HOD":
        return {
          gradient: "from-amber-950 via-yellow-900 to-amber-950",
          border: "border-amber-400/40",
          shadow: "shadow-amber-500/30",
          roleColor: "text-amber-200",
          accent: "bg-amber-400/20",
        };
      case "Coordinator":
        return {
          gradient: "from-blue-950 via-indigo-900 to-blue-950",
          border: "border-blue-400/40",
          shadow: "shadow-blue-500/30",
          roleColor: "text-blue-200",
          accent: "bg-blue-400/20",
        };
      case "Assistant Coordinator":
        return {
          gradient: "from-purple-950 via-violet-900 to-purple-950",
          border: "border-purple-400/40",
          shadow: "shadow-purple-500/30",
          roleColor: "text-purple-200",
          accent: "bg-purple-400/20",
        };
      default:
        return {
          gradient: "from-slate-950 via-gray-900 to-slate-900",
          border: "border-slate-500/30",
          shadow: "shadow-slate-500/20",
          roleColor: "text-slate-200",
          accent: "bg-slate-400/20",
        };
    }
  };

  // Size configurations
  const sizeStyles = {
    small: {
      container: "w-64 h-80",
      imageContainer: "h-60 p-3", // Image takes most space
      imageHeight: "h-full",
      content: "p-4 h-20 text-center", // Compact centered content
      title: "text-lg",
      subtitle: "text-xs",
      department: "text-xs",
    },
    medium: {
      container: "w-72 h-96",
      imageContainer: "h-72 p-4", // Image takes most space
      imageHeight: "h-full",
      content: "p-5 h-24 text-center", // Compact centered content
      title: "text-xl",
      subtitle: "text-xs",
      department: "text-sm",
    },
    large: {
      container: "w-80 h-[28rem]",
      imageContainer: "h-80 p-5", // Image takes most space
      imageHeight: "h-full",
      content: "p-6 h-28 text-center", // Compact centered content
      title: "text-2xl",
      subtitle: "text-sm",
      department: "text-base",
    },
  };

  const roleStyles = getRoleStyles(Role);
  const currentSize = sizeStyles[size];

  return (
    <div
      className={`
        relative group cursor-pointer transition-all duration-500 ease-out
        bg-gradient-to-br ${roleStyles.gradient}
        ${roleStyles.border} ${roleStyles.shadow}
        ${currentSize.container}
        rounded-xl shadow-2xl backdrop-blur-sm overflow-hidden
        hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-1
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {/* Image Section - Takes up ~60% of card with padding */}
      <div className={`relative ${currentSize.imageContainer} flex flex-col`}>
        <div
          className={`relative ${currentSize.imageHeight} overflow-hidden rounded-lg`}
        >
          {image && !imageError ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-slate-700/50 flex items-center justify-center rounded-lg border border-slate-600/30">
              <div className="text-4xl text-slate-400 font-light">
                {name.charAt(0).toUpperCase()}
              </div>
            </div>
          )}

          {/* Role badge on image */}
          <div className="absolute top-2 right-2">
            <span
              className={`${currentSize.subtitle} ${roleStyles.roleColor} font-light tracking-wider uppercase px-2 py-1 rounded-md ${roleStyles.accent} backdrop-blur-sm border ${roleStyles.border}`}
            >
              {Role}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section - Centralized at bottom */}
      <div
        className={`relative ${currentSize.content} flex flex-col justify-center items-center`}
      >
        {/* Name */}
        <h3
          className={`${currentSize.title} text-slate-100 font-bold tracking-wide mb-1 leading-tight text-center`}
        >
          {name}
        </h3>
       

        {/* Department */}
        <p
          className={`${currentSize.department} text-slate-400 font-light leading-relaxed opacity-80 text-center`}
        >
          {department}
        </p>

        {/* Minimal aesthetic accent */}
        <div className="flex items-center justify-center mt-2">
          <div
            className={`w-8 h-0.5 ${roleStyles.accent
              .replace("bg-", "bg-")
              .replace("/20", "/60")} rounded-full`}
          ></div>
        </div>
      </div>

      {/* Elegant background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Subtle animated border on hover */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-slate-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      ></div>
    </div>
  );
};

export default TeamCard;
