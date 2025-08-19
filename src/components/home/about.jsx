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
            <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-tight">
              About Us
            </h1>
            <div className="mt-2 max-w-4xl ml-0 sm:ml-8 md:ml-12 lg:ml-0">
              <p className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.2vw] tracking-tight leading-relaxed">
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
              </p>
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
              height={500}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-zinc-950 text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                <p className="text-lg leading-relaxed">
                  Pioneering breakthrough technologies that reshape how we
                  interact with machines and automation.
                </p>
              </Card>
              <Card className="bg-gradient-to-br from-slate-800 to-gray-950 text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Design</h3>
                <p className="text-lg leading-relaxed">
                  Creating intuitive and elegant robotic solutions that
                  seamlessly integrate into daily life.
                </p>
              </Card>
              <Card className="bg-gradient-to-br from-zinc-800 to-slate-950 text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Future</h3>
                <p className="text-lg leading-relaxed">
                  Building tomorrow's technology today with sustainable and
                  scalable robotic ecosystems.
                </p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
