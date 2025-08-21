import React from "react";
import ScrollReveal from "../animations/scrollReveal";
import CardSwap, { Card } from "../../blocks/Components/CardSwap/CardSwap";

function About() {
  return (
    <div className="relative min-h-[100vh] border-b border-gray-300 pb-14">
      <div className="pt-14 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-tight self-start">
              About Us
            </h1>
            <div className="m-4 text-[1.9vw]">
                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur={true}
                  baseRotation={0}
                  blurStrength={8}
                >
                  We are at the forefront of robotics innovation, creating
                  cutting-edge solutions that bridge the gap between imagination
                  and reality. Our team of passionate engineers and designers
                  work tirelessly to develop robots that enhance human
                  capabilities and solve real-world challenges. From autonomous
                  systems to interactive companions, we're shaping the future of
                  technology one innovation at a time.
                </ScrollReveal>
            </div>
          </div>

          {/* Right side - CardSwap component */}
          <div className="lg:w-1/2 w-full relative" style={{ height: "500px" }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={4000}
              pauseOnHover={true}
              width={600}
              height={450}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-zinc-950 text-white p-6 flex flex-col justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 self-start">
                    Innovation
                  </h3>
                  <p className="text-lg leading-relaxed text-left">
                    Pioneering breakthrough technologies that reshape how we
                    interact with machines and automation.
                  </p>
                </div>
                <div className="w-full flex justify-center mt-4 flex-1">
                  <div className="w-full h-[280px] bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden min-h-[80px]">
                    {/* Add your image here */}
                    <img
                      className="w-full h-full object-contain"
                      src="./Grobotslogo.png"
                      alt="Grobots Logo"
                    />
                    {/* <span className="text-xs text-gray-400">IMG</span> */}
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-slate-800 to-gray-950 text-white p-6 flex flex-col justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 self-start">Design</h3>
                  <p className="text-lg leading-relaxed text-left">
                    Creating intuitive and elegant robotic solutions that
                    seamlessly integrate into daily life.
                  </p>
                </div>
                <div className="w-full flex justify-center mt-4 flex-1">
                  <div className="w-full h-[280px] bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden min-h-[80px]">
                    {/* Add your image here */}
                    <span className="text-xs text-gray-400">IMG</span>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-zinc-800 to-slate-950 text-white p-6 flex flex-col justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 self-start">Future</h3>
                  <p className="text-lg leading-relaxed text-left">
                    Building tomorrow's technology today with sustainable and
                    scalable robotic ecosystems.
                  </p>
                </div>
                <div className="w-full flex justify-center mt-4 flex-1">
                  <div className="w-full h-[280px] bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden min-h-[80px]">
                    {/* Add your image here */}
                    <span className="text-xs text-gray-400">IMG</span>
                  </div>
                </div>
              </Card>
              <Card className="bg-gradient-to-br from-zinc-800 to-slate-950 text-white p-6 flex flex-col justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4 self-start">Future</h3>
                  <p className="text-lg leading-relaxed text-left">
                    Building tomorrow's technology today with sustainable and
                    scalable robotic ecosystems.
                  </p>
                </div>
                <div className="w-full flex justify-center mt-4 flex-1">
                  <div className="w-full h-[280px] bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden min-h-[80px]">
                    {/* Add your image here */}
                    <span className="text-xs text-gray-400">IMG</span>
                  </div>
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
