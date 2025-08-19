import React from "react";

const ProjectCard = ({ projects }) => {
  return (
    <section className="w-full h-20 py-20 md:py-24">
      <div className="mx-6 md:mx-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group card-base card-hover border border-themed rounded-2xl overflow-hidden h-full"
            >
              {project.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-themed-muted">{project.subtitle}</p>
                <div className="mt-4">
                  <button className="cursor-target btn-secondary px-4 py-2 rounded-xl">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
