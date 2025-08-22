"use client";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Calendar, MapPin, Trophy, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { achievementsAPI, apiUtils } from "@/lib/apiService";

const AchievementsTimeline = ({ filters }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const autoScrollRef = useRef(null);

  const defaultFilters = useMemo(() => ({ limit: 12, page: 1 }), []);

  // Fetch from achievements API (limit 12)
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    achievementsAPI
      .getAll({ limit: 12, page: 1 })
      .then((res) => {
        if (!isMounted) return;
        const list = Array.isArray(res?.achievements)
          ? res.achievements
          : Array.isArray(res?.data)
          ? res.data
          : [];
        setItems(list.slice(0, 12));
      })
      .catch((err) => setError(apiUtils.handleError(err)))
      .finally(() => isMounted && setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [defaultFilters]);

  // Normalize items
  const timelineItems = useMemo(() => {
    return items.map((a, idx) => ({
      title: a.nameOfEvent || a.title || `Achievement ${idx + 1}`,
      position: a.winningPosition || a.prizeWon || "Participant",
      competition: a.nameOfEvent || "",
      location: a.location || "Unknown Location",
      year: a.year || new Date(a.dateOfEvent || Date.now()).getFullYear(),
      date: a.dateOfEvent || a.date || new Date().toISOString(),
      description: a.shortDescription || a.longDescription || a.description || "",
      status: a.prizeWon || a.winningPosition || "",
      image: Array.isArray(a.images) && a.images.length > 0 ? a.images[0] : a.image || null,
    }));
  }, [items]);

  // Get status color and icon
  const getStatusStyle = (status) => {
    const styles = {
      'Gold Medal': { bg: 'bg-yellow-500/20', text: 'text-yellow-300', border: 'border-yellow-500/50', icon: Trophy },
      'Winner': { bg: 'bg-green-500/20', text: 'text-green-300', border: 'border-green-500/50', icon: Trophy },
      'Award': { bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/50', icon: Star },
      'Recognition': { bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/50', icon: Star },
      'Published': { bg: 'bg-indigo-500/20', text: 'text-indigo-300', border: 'border-indigo-500/50', icon: Star },
      'Finalist': { bg: 'bg-orange-500/20', text: 'text-orange-300', border: 'border-orange-500/50', icon: Star },
    };
    return styles[status] || { bg: 'bg-gray-500/20', text: 'text-gray-300', border: 'border-gray-500/50', icon: Star };
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (timelineItems.length === 0) return;
    
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % timelineItems.length);
    }, 5000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [timelineItems.length]);

  // Scroll to specific item
  const scrollToItem = (index) => {
    setCurrentIndex(index);
    if (timelineRef.current) {
      const card = timelineRef.current.children?.[index];
      const cardWidth = card?.getBoundingClientRect()?.width || 320;
      // Attempt to read CSS gap; fallback to 24px
      const computed = getComputedStyle(timelineRef.current);
      const gapStr = computed.gap || computed.columnGap || "24px";
      const gap = parseFloat(gapStr) || 24;
      const scrollPosition = index * (cardWidth + gap);
      timelineRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Navigation handlers
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? timelineItems.length - 1 : currentIndex - 1;
    scrollToItem(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % timelineItems.length;
    scrollToItem(newIndex);
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.pageX - timelineRef.current.offsetLeft);
    setScrollLeft(timelineRef.current.scrollLeft);
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - dragStart) * 2;
    timelineRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Error state
  if (error) {
    return (
      <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm">
        {error}
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="relative w-full">
        <div className="flex gap-6 overflow-hidden px-4 py-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex-none w-96 h-[28rem] rounded-2xl border border-gray-700/50 bg-gray-800/40 animate-pulse backdrop-blur-sm"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 pointer-events-none" />
      </div>
    );
  }

  // Empty state
  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400">
        <div className="text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No achievements found.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full py-8 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-3 sm:mb-8 sm:px-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Achievements Timeline</h2>
          <p className="text-themed-muted">Journey through my accomplishments and milestones</p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevious}
            className="p-2 rounded-full bg-muted/50 border border-border text-foreground hover:bg-muted/60 transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-muted/50 border border-border text-foreground hover:bg-muted/60 transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        <div
          ref={timelineRef}
          className={`flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-3 sm:px-4 pb-3 sm:pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {timelineItems.map((item, i) => {
            const statusStyle = getStatusStyle(item.status);
            const StatusIcon = statusStyle.icon;
            
            return (
              <div
                key={i}
                className={`flex-none w-[85vw] sm:w-80 md:w-96 rounded-2xl border border-border p-4 sm:p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-3xl select-none ${
                  i === currentIndex 
                    ? 'bg-gradient-to-br from-background/80 to-muted/80 border-primary/40' 
                    : 'bg-gradient-to-br from-background/40 to-muted/40'
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-40 sm:h-48 rounded-xl mb-3 sm:mb-4 overflow-hidden group">
                  {item.image ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        draggable="false"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted/70 rounded-xl flex items-center justify-center">
                      <Trophy className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className={`absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-1 rounded-full border backdrop-blur-sm ${statusStyle.bg} ${statusStyle.border}`}>
                    <div className="flex items-center gap-1">
                      <StatusIcon className={`w-3 h-3 ${statusStyle.text}`} />
                      <span className={`text-xs font-semibold ${statusStyle.text}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-border/60">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">{item.position}</span>
                      {' at '}
                      <span className="text-foreground/80">{item.competition}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {timelineItems.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToItem(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              i === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-muted-foreground/50 hover:bg-muted-foreground/70'
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AchievementsTimeline;