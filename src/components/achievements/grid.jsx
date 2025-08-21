import React from 'react'
import AchievementCard from './card'

function AchievementGrid() {
  return (
    <div className='w-full h-full grid grid-cols-3 gap-4'>
        <div className='w-full h-full bg-gray-900 rounded-lg'>
            <AchievementCard />
        </div>
    </div>
  )
}

export default AchievementGrid