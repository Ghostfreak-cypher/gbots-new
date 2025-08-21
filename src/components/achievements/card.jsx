"use client";

import React from 'react';

function AchievementCard({ achievement }) {
  if (!achievement) {
    return (
      <div className='flex flex-col items-center justify-center m-2 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700'>
        <div className='w-full h-48 bg-gray-700 rounded-lg animate-pulse'></div>
        <div className='flex flex-col items-center justify-center mt-4 w-full'>
          <div className='h-6 bg-gray-700 rounded w-3/4 animate-pulse mb-2'></div>
          <div className='h-4 bg-gray-700 rounded w-full animate-pulse'></div>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center m-2 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700 min-h-[400px]'>
      <div className='image-container w-full h-48 rounded-lg overflow-hidden relative group'>
        <img
          src={achievement.image}
          alt={achievement.title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        <div className='absolute bottom-2 left-2 right-2'>
          <span className='inline-block px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full'>
            {achievement.category}
          </span>
          <span className='inline-block ml-2 px-2 py-1 bg-gray-600 text-white text-xs font-medium rounded-full'>
            {achievement.year}
          </span>
        </div>
      </div>
      
      <div className='flex flex-col items-center justify-center mt-4 w-full flex-grow'>
        <h3 className='text-xl font-bold text-center text-white mb-2 leading-tight'>
          {achievement.title}
        </h3>
        <p className='text-sm text-gray-300 text-center leading-relaxed'>
          {achievement.description}
        </p>
        
        {achievement.team && achievement.team.length > 0 && (
          <div className='mt-3 w-full'>
            <p className='text-xs text-gray-400 text-center mb-1'>Team Members:</p>
            <div className='flex flex-wrap justify-center gap-1'>
              {achievement.team.map((member, index) => (
                <span 
                  key={index}
                  className='inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full'
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AchievementCard;
