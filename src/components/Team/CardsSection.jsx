"use client";
import React, { useState, useEffect } from "react";
import TeamCard from "./Card";

const CardsSection = ({
  title = "OUR TEAM MEMBERS",
  subtitle = "Meet the brilliant minds driving innovation",
  teamMembers = [],
  showFilters = true,
  className = "",
}) => {
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMounted, setIsMounted] = useState(false);

  // Sample data for demonstration (replace with actual API data)
  const sampleMembers = [
    {
      name: "Dr. Sarah Johnson",
      rollNo: "HOD001",
      course: "Ph.D",
      branch: "Robotics Engineering",
      image: "/images/sarah.jpg",
      year: null,
      activity: true,
      Role: "HOD",
      department: "Robotics & AI Department",
      yearOfLeaving: null,
      isMember: true,
    },
    {
      name: "Alex Chen",
      rollNo: "CS21B001",
      course: "B.Tech",
      branch: "Computer Science",
      image: "/images/alex.jpg",
      year: 4,
      activity: true,
      Role: "Coordinator",
      department: "Software Development",
      yearOfLeaving: null,
      isMember: true,
    },
    {
      name: "Maya Patel",
      rollNo: "ME21B015",
      course: "B.Tech",
      branch: "Mechanical Engineering",
      image: "/images/maya.jpg",
      year: 3,
      activity: true,
      Role: "Assistant Coordinator",
      department: "Hardware Design",
      yearOfLeaving: null,
      isMember: true,
    },
    {
      name: "James Wilson",
      rollNo: "EE20B008",
      course: "B.Tech",
      branch: "Electrical Engineering",
      image: "/images/james.jpg",
      year: 4,
      activity: false,
      Role: "Coordinator",
      department: "Electronics & Control",
      yearOfLeaving: 2024,
      isMember: false,
    },
    {
      name: "Priya Sharma",
      rollNo: "CS22B045",
      course: "B.Tech",
      branch: "Computer Science",
      image: "/images/priya.jpg",
      year: 2,
      activity: true,
      Role: "Assistant Coordinator",
      department: "AI Research",
      yearOfLeaving: null,
      isMember: true,
    },
  ];

  // Use sample data if no team members provided
  const displayMembers = teamMembers.length > 0 ? teamMembers : sampleMembers;

  useEffect(() => {
    setIsMounted(true);
    setFilteredMembers(displayMembers);
  }, []);

  // Filter functions
  const filterMembers = (filter) => {
    setActiveFilter(filter);

    switch (filter) {
      case "hod":
        setFilteredMembers(
          displayMembers.filter((member) => member.Role === "HOD")
        );
        break;
      case "coordinators":
        setFilteredMembers(
          displayMembers.filter(
            (member) =>
              member.Role === "Coordinator" ||
              member.Role === "Assistant Coordinator"
          )
        );
        break;
      case "alumni":
        setFilteredMembers(
          displayMembers.filter(
            (member) => !member.isMember || member.yearOfLeaving
          )
        );
        break;
      default:
        setFilteredMembers(displayMembers);
    }
  };

  const filters = [
    { key: "all", label: "All Members", icon: "👥" },
    { key: "hod", label: "HODs", icon: "👑" },
    { key: "coordinators", label: "Coordinators", icon: "🎯" },
    { key: "alumni", label: "Alumni", icon: "🎓" },
  ];

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center">
        <div className="text-slate-400">Loading team members...</div>
      </div>
    );
  }

  return (
    <section className={`py-20 ${className}`}>
      {/* Background Elements - Simplified to match hero theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elegant grid pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="elegant-grid"></div>
        </div>

        {/* Subtle light rays - reduced opacity for consistency */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-slate-500/5 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-400/5 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-slate-400 text-sm tracking-[0.4em] uppercase font-light mb-6">
            — {subtitle} —
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-wide">
            <span className="bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          {/* Elegant divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-slate-500/50"></div>
            <div className="w-2 h-2 bg-slate-400/60 rounded-full"></div>
            <div className="w-32 h-px bg-gradient-to-r from-slate-500/50 to-slate-500/50"></div>
            <div className="w-2 h-2 bg-slate-400/60 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-slate-500/50"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => filterMembers(filter.key)}
                className={`
                  px-6 py-3 rounded-xl font-light tracking-wide transition-all duration-300
                  backdrop-blur-sm border
                  flex items-center gap-2 text-sm
                  ${
                    activeFilter === filter.key
                      ? "bg-slate-800/40 text-slate-200 border-slate-400/40 shadow-lg shadow-slate-500/10"
                      : "bg-slate-900/20 text-slate-400 border-slate-500/20 hover:bg-slate-800/20 hover:text-slate-300 hover:border-slate-400/30"
                  }
                `}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
                <span className="ml-1 text-xs bg-slate-700/40 px-2 py-1 rounded-full">
                  {filter.key === "all"
                    ? displayMembers.length
                    : filter.key === "hod"
                    ? displayMembers.filter((m) => m.Role === "HOD").length
                    : filter.key === "coordinators"
                    ? displayMembers.filter(
                        (m) =>
                          m.Role === "Coordinator" ||
                          m.Role === "Assistant Coordinator"
                      ).length
                    : displayMembers.filter(
                        (m) => !m.isMember || m.yearOfLeaving
                      ).length}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {filteredMembers.map((member, index) => (
            <div
              key={member.rollNo || index}
              className="w-full max-w-sm animate-elegant-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamCard
                {...member}
                Role={
                  !member.isMember || member.yearOfLeaving
                    ? "Alumni"
                    : member.Role
                }
                size="medium"
                onClick={() => console.log("Clicked member:", member.name)}
              />
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-500 text-lg mb-4">
              No team members found
            </div>
            <p className="text-slate-600 text-sm">
              Try adjusting your filter selection
            </p>
          </div>
        )}

        {/* Section Footer */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900/20 backdrop-blur-sm border border-slate-500/15 rounded-xl">
            <div className="w-2 h-2 bg-emerald-400/80 rounded-full animate-gentle-pulse"></div>
            <span className="text-slate-300 text-sm font-light tracking-wide">
              Showing {filteredMembers.length} of {displayMembers.length}{" "}
              members
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .elegant-grid {
          background-image: linear-gradient(
              rgba(148, 163, 184, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.05) 1px,
              transparent 1px
            );
          background-size: 100px 100px;
          animation: elegant-grid-move 60s linear infinite;
        }

        @keyframes elegant-grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 100px);
          }
        }

        @keyframes elegant-fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gentle-pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-elegant-fadeIn {
          animation: elegant-fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gentle-pulse {
          animation: gentle-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CardsSection;
