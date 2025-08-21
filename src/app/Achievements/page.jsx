import React from 'react';
import AchievementGrid from '../../components/achievements/grid';

export const metadata = {
  title: 'Our Achievements | Grobots',
  description: 'Explore the milestones and successes that define our journey in innovation and technology.',
};

export default function AchievementsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <div className='container mx-auto px-4 py-16'>
        <AchievementGrid />
      </div>
    </div>
  );
}
