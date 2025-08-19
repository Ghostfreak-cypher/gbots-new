import React from 'react'
import FlowingMenu from './flowingMenu'

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];


function WhatWeDo() {
  return (
    <section className='w-full border-y border-gray-300 py-20 md:py-24'>
      <div className="mx-6 md:mx-20">
        <h2 className="text-[10vw] md:text-[6vw] font-bold">WHAT WE DO?</h2>
        <div className="mt-10" style={{ height: '520px', position: 'relative' }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo