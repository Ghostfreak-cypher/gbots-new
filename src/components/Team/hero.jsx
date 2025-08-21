"use client";
import React, { useEffect, useState } from "react";

function TeamHero() {
  const [glitchActive, setGlitchActive] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Only generate particles after mount to avoid hydration mismatch
    setParticles(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4,
      }))
    );

    setIsMounted(true);

    const entryTimer = setTimeout(() => {
      setGlitchActive(false);
      setPageLoaded(true);
    }, 1200);

    return () => clearTimeout(entryTimer);
  }, []);

  // Show elegant loading state during SSR
  if (!isMounted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black"></div>
        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-20">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw] font-light leading-tight text-white mb-6 tracking-wide">
            <span className="block font-extralight">
              <span className="bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent">
                MEET
              </span>
              <span className="text-slate-300"> OUR</span>
            </span>
            <span className="block mt-4">
              <span className="bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 bg-clip-text text-transparent font-thin">
                CORE TEAM
              </span>
            </span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black font-sans">
      {/* Background Elements - Match CardsSection exactly */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black"></div>

        {/* Elegant grid pattern - exact match */}
        <div className="absolute inset-0 opacity-3">
          <div className="elegant-grid"></div>
        </div>

        {/* Floating elegant particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-gradient-to-r from-slate-300 to-slate-500 rounded-full animate-elegant-float opacity-60"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Subtle light rays - exact match */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-slate-500/5 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-400/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="mb-12">
          <div
            className={`text-slate-400 text-sm tracking-[0.4em] uppercase font-light mb-8 transition-all duration-2000 ${
              pageLoaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
          >
            — EXCELLENCE IN ROBOTICS —
          </div>

          <h1
            className={`text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw] font-light leading-tight text-white mb-6 transform transition-all duration-1000 tracking-wide ${
              glitchActive
                ? "animate-elegant-glitch"
                : pageLoaded
                ? "animate-elegant-fadeIn"
                : ""
            }`}
          >
            <span className="block font-extralight">
              <span className="bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent">
                MEET
              </span>
              <span className="text-slate-300"> OUR</span>
            </span>
            <span className="block mt-4">
              <span className="bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 bg-clip-text text-transparent font-thin tracking-widest">
                CORE TEAM
              </span>
            </span>
          </h1>
        </div>

        <div className="relative">
          <p
            className={`text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-2000 delay-700 ${
              pageLoaded
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <span className="text-slate-200 font-normal">
              Elite robotics engineers
            </span>
            <span className="text-slate-400"> • </span>
            <span className="text-slate-200 font-normal">
              Advanced AI specialists
            </span>
            <span className="text-slate-400"> • </span>
            <span className="text-slate-200 font-normal">
              Future technology architects
            </span>
          </p>
        </div>

        {/* Elegant status indicators */}
        <div
          className={`flex justify-center gap-12 mt-16 transition-all duration-2000 delay-1200 ${
            pageLoaded
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400/80 rounded-full animate-gentle-pulse"></div>
            <span className="text-xs font-light text-slate-400 tracking-wider">
              SYSTEM ACTIVE
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 bg-sky-400 rounded-full animate-gentle-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <span className="text-xs font-light text-slate-400 tracking-wider">
              AI ENGAGED
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 bg-violet-400 rounded-full animate-gentle-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <span className="text-xs font-light text-slate-400 tracking-wider">
              NEURAL SYNC
            </span>
          </div>
        </div>
      </div>

      {/* Elegant decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-slate-500/5 rounded-full blur-3xl animate-elegant-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-slate-400/5 rounded-full blur-3xl animate-elegant-float-reverse"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-slate-300/5 rounded-full blur-2xl animate-gentle-pulse"></div>

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

        @keyframes elegant-float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(4px);
          }
          50% {
            transform: translateY(-16px) translateX(-4px);
          }
          75% {
            transform: translateY(-8px) translateX(4px);
          }
        }

        @keyframes elegant-float-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(8px) translateX(-4px);
          }
          50% {
            transform: translateY(16px) translateX(4px);
          }
          75% {
            transform: translateY(8px) translateX(-4px);
          }
        }

        @keyframes elegant-glitch {
          0%,
          95% {
            transform: translate(0);
          }
          96% {
            transform: translate(-1px, 1px);
          }
          97% {
            transform: translate(1px, -1px);
          }
          98% {
            transform: translate(-1px, -1px);
          }
          99% {
            transform: translate(1px, 1px);
          }
          100% {
            transform: translate(0);
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

        .animate-elegant-float {
          animation: elegant-float 12s ease-in-out infinite;
        }

        .animate-elegant-float-reverse {
          animation: elegant-float-reverse 15s ease-in-out infinite;
        }

        .animate-elegant-glitch {
          animation: elegant-glitch 0.6s ease-in-out;
        }

        .animate-elegant-fadeIn {
          animation: elegant-fadeIn 1.5s ease-out;
        }

        .animate-gentle-pulse {
          animation: gentle-pulse 3s ease-in-out infinite;
        }
      `}</style>
      
    </div>
  );
}

export default TeamHero;
