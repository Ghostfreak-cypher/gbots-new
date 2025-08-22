import React from 'react';
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
      <div className="absolute inset-0 z-10 flex items-start justify-center pointer-events-none">
        <div className="text-white mt-12 md:mt-20">
          <div className="flex flex-row items-center justify-center">
            <span className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold mr-2 md:mr-4 opacity-90">GRO</span>
            <span className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold ml-2 md:ml-4 opacity-90">BOTS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;