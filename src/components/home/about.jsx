import React from "react";
import ScrollReveal from "../animations/scrollReveal";
import CardSwap, { Card } from "../../blocks/Components/CardSwap/CardSwap";
import { useIsMobile } from "@/lib/hooks/useIsMobile";

function About() {
  const { isDesktop } = useIsMobile();
  return (
    <div className="relative min-h-[100vh] border-b border-gray-300 pb-12 sm:pb-14">
      <div className="pt-10 sm:pt-14 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-6 lg:w-5/7 h-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight self-start">
              About Us
            </h1>
            <div className="mt-2 text-[1.8vw] sm:mt-3 md:mt-4 mx-1 sm:mx-4 sm:text-lg md:text-xl leading-relaxed">
                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur={true}
                  baseRotation={0}
                  blurStrength={8}
                  scrub={false}
                  once={true}
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
          <div className="lg:w-4/7 w-full relative h-[360px] sm:h-[420px] md:h-[480px] lg:h-[500px]">
            {isDesktop && (
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
                      <img
                        className="w-full h-full object-cover"
                        src="./innovation.jpg"
                        alt="Innovation"
                      />
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
                      <img
                        className="w-full h-full object-cover"
                        src="./innovation.jpg"
                        alt="Innovation"
                      />
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
                      <img
                        className="w-full h-full object-cover"
                        src="./innovation.jpg"
                        alt="Innovation"
                      />
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
                      <img
                        className="w-full h-full object-cover"
                        src="./innovation.jpg"
                        alt="Innovation"
                      />
                    </div>
                  </div>
                </Card>
              </CardSwap>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
