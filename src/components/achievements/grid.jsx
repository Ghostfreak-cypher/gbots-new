"use client";

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AchievementCard from './card';
import { achievementsData } from '../../data/achievements/achievementsData';
import { useIsMobile } from '../../lib/hooks/useIsMobile';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function AchievementGrid() {
  const gridRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const { isMobile, isTablet, isDesktop } = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Get unique categories and years for filters
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(achievementsData.map(item => item.category))];
    return cats;
  }, []);

  const years = useMemo(() => {
    const yrs = ['All', ...new Set(achievementsData.map(item => item.year).sort((a, b) => b - a))];
    return yrs;
  }, []);

  // Filter achievements based on selected filters
  const filteredAchievements = useMemo(() => {
    return achievementsData.filter(achievement => {
      const categoryMatch = selectedCategory === 'All' || achievement.category === selectedCategory;
      const yearMatch = selectedYear === 'All' || achievement.year === selectedYear;
      return categoryMatch && yearMatch;
    });
  }, [selectedCategory, selectedYear]);

  useEffect(() => {
    if (!isMounted || !gridRef.current) return;

    const grid = gridRef.current;
    const cards = grid.querySelectorAll('.achievement-card');
    
    // Reset any existing animations
    gsap.set(cards, { opacity: 0, y: 50 });
    
    // Stagger animation for cards appearing
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

    // Horizontal scroll animation only on desktop
    if (!isMobile && grid.scrollWidth > window.innerWidth) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${grid.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Add parallax effect to cards
            cards.forEach((card, index) => {
              gsap.to(card, {
                y: self.progress * -20 * (index % 2 === 0 ? 1 : -1),
                duration: 0.1
              });
            });
          }
        }
      });

      tl.to(grid, {
        x: () => -(grid.scrollWidth - window.innerWidth),
        ease: "none"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMounted, isMobile, filteredAchievements]);

  // Don't render until mounted to avoid SSR issues
  if (!isMounted) {
    return (
      <div className='w-full h-96 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-400'>Loading achievements...</p>
        </div>
      </div>
    );
  }

  // Handle case when no achievements data
  if (!achievementsData || achievementsData.length === 0) {
    return (
      <div className='w-full h-96 flex items-center justify-center'>
        <div className='text-center'>
          <div className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
          <h3 className='text-xl font-semibold text-white mb-2'>No Achievements Found</h3>
          <p className='text-gray-400'>Check back later for updates!</p>
        </div>
      </div>
    );
  }

  const displayAchievements = isMobile ? filteredAchievements.slice(0, 4) : filteredAchievements;

  return (
    <div className='w-full'>
      {/* Header Section */}
      <div className='text-center mb-8'>
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
          Our Achievements
        </h2>
        <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
          Celebrating the milestones and successes that define our journey in innovation and technology.
        </p>
      </div>

      {/* Filter Section */}
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
        <div className='flex flex-wrap gap-3 justify-center'>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className='px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        
        {filteredAchievements.length !== achievementsData.length && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedYear('All');
            }}
            className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200'
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className='text-center mb-6'>
        <p className='text-gray-400'>
          Showing {filteredAchievements.length} of {achievementsData.length} achievements
        </p>
      </div>

      {/* Grid Container */}
      <div className='w-full overflow-x-auto scrollbar-hide'>
        <div 
          ref={gridRef} 
          className='w-full h-full flex flex-nowrap gap-6 pb-4'
          role="region"
          aria-label="Achievements showcase"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              gridRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
            } else if (e.key === 'ArrowRight') {
              e.preventDefault();
              gridRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
            }
          }}
        >
          {displayAchievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className='achievement-card w-80 md:w-96 lg:w-[420px] flex-shrink-0'
              tabIndex="0"
              role="article"
              aria-label={`Achievement: ${achievement.title}`}
            >
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>

      {/* No Results Message */}
      {filteredAchievements.length === 0 && (
        <div className='text-center mt-12'>
          <div className='w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>
          <h3 className='text-xl font-semibold text-white mb-2'>No Achievements Found</h3>
          <p className='text-gray-400'>Try adjusting your filters or check back later!</p>
        </div>
      )}

      {/* Scroll Indicator */}
      {!isMobile && filteredAchievements.length > 4 && (
        <div className='text-center mt-6'>
          <div className='flex items-center justify-center gap-4 text-sm text-gray-400'>
            <span className='flex items-center gap-2'>
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clipRule='evenodd' />
              </svg>
              Scroll left
            </span>
            <span className='px-3 py-1 bg-gray-800 rounded-full text-xs'>
              {filteredAchievements.length} achievements
            </span>
            <span className='flex items-center gap-2'>
              Scroll right
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
              </svg>
            </span>
          </div>
        </div>
      )}

      {/* Mobile Pagination Dots */}
      {isMobile && filteredAchievements.length > 4 && (
        <div className='flex justify-center mt-6 gap-2'>
          {Array.from({ length: Math.ceil(filteredAchievements.length / 4) }).map((_, index) => (
            <button
              key={index}
              className='w-2 h-2 rounded-full bg-gray-600 hover:bg-blue-500 transition-colors'
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AchievementGrid;
