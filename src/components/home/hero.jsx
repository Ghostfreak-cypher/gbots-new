import React from 'react'
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <div className="relative min-h-screen">
        <div className="absolute inset-0 z-30">
        <Spline
          scene="https://prod.spline.design/gU-KjpRSvoZxGltT/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-start mt-20 justify-center gap-8 pointer-events-none">
        <div className="text-white">
          <span className="text-[15vw] mr-14 font-bold mb-4 opacity-90">GRO</span>
          <span className="text-[15vw] ml-14 font-bold mb-4 opacity-90">BOTS</span>
        </div>
      </div>

    </div>
  )
}

export default Hero