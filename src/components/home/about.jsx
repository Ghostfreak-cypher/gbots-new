import React from 'react'
import ScrollReveal from '../animations/scrollReveal'

function About() {
  return (
    <div className="relative min-h-[100vh] border-b border-gray-300 pb-14">
      <div className="pt-14 mx-20">
        <div className="flex flex-col gap-6">
          <div className="pt-14 mx-20">
            <div className="flex flex-col gap-6">
              <h1 className="text-[6vw] font-bold">About Us</h1>
              <p className="mt-2 text-[1vw] max-w-4xl tracking-tighter ml-12">
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
    </div>
  )
}

export default About