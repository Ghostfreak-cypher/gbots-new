import React from 'react'
import ProjectCard from "@/components/projects/card"

const projects = [
    {
      name: "Robotic Arm Controller",
      subtitle: "A PID-controlled robotic arm for industrial automation.",
      image: "/path/to/robotic-arm.jpg", // Optional
    },
    {
      name: "Autonomous Drone",
      subtitle: "AI-powered drone for surveillance and mapping.",
      image: "/path/to/drone.jpg", // Optional
    },
    // Add more projects as needed
  ];

  
function Projects() {
  return (
    <div>
        <ProjectCard projects={projects} />
    </div>
  )
}

export default Projects