import React from "react";
import ScrollReveal from "../animations/scrollReveal";

function About() {
  return (
    <div className="relative min-h-[100vh] border-b border-gray-300 pb-14">
      <div className="pt-14 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-tight">
            About Us
          </h1>
          <div className="mt-2 max-w-4xl ml-0 sm:ml-8 md:ml-12 lg:ml-16">
            <p className="text-[3.5vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1vw] tracking-tight">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={0}
                blurStrength={8}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt repellendus eveniet nobis tempora, neque voluptate suscipit officiis? Illo maiores, quisquam eos voluptates laboriosam repellat et, id iste doloremque, nisi quo in. Quibusdam animi rem excepturi consectetur unde exercitationem, voluptatum quisquam officiis et eaque error similique.
              </ScrollReveal>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
