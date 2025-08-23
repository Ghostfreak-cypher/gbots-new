import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronRightCircle, ChevronLeftCircle, ChevronDown, ChevronUp } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Airavat – Semi-Vertical Drum Combat Robot',
      imageUrl: 'https://images.pexels.com/photos/31402214/pexels-photo-31402214.jpeg',
      description:
        'Lightweight yet durable Aluminium T6061 alloy chassis with AR500 paneling. Semi-vertical drum weapon tuned for high-impact energy transfer. Optimized drive with Inginium P2 10 gearbox, H700 motor and Secure 120A ESC for torque–speed balance. Designed for endurance and striking power in combat competitions.',
      materials: {
        Chassis: 'Aluminium T6061 Alloy',
        Panels: 'AR500 Steel',
        Wheels: 'Collson Rubber Wheels',
      },
      weaponSystem: 'Semi-Vertical Drum (high-impact, high-speed configuration)',
      driveSystem: ['Inginium P2 10 Gearbox', 'H700 Motor', 'Secure 120A ESC'],
      highlights: [
        'Aluminium T6061 chassis for structural integrity',
        'AR500 panels resist heavy strikes',
        'Semi-vertical drum ensures high kinetic energy transfer',
        'Balanced torque and speed for competitive endurance',
      ],
      tags: ['Durable', 'High-Impact', 'Competitive'],
    },
    {
      id: 2,
      title: 'Sharang – P219 Turbo Variant',
      imageUrl: 'https://images.pexels.com/photos/31402214/pexels-photo-31402214.jpeg',
      description:
        'Rugged Aluminium T6061 chassis with AR500 paneling for maximum durability. Semi-vertical drum weapon engineered for precision hits and consistent damage. Inginium P219 gearbox with turbo motors provides superior acceleration and control. Collson wheels enhance grip and agility for battlebot tournaments.',
      materials: {
        Chassis: 'Aluminium T6061 Alloy',
        Panels: 'AR500 Steel',
        Wheels: 'Collson Rubber Wheels',
      },
      weaponSystem: 'Semi-Vertical Drum',
      driveSystem: ['Inginium P219 Gearbox', 'Turbo Motors', 'Secure 120A ESC'],
      highlights: [
        'AR500 paneling for high-impact durability',
        'Precision-tuned semi-vertical drum weapon',
        'P219 gearbox + turbo motors for rapid acceleration',
        'Enhanced grip and maneuverability with Collson wheels',
      ],
      tags: ['Rugged', 'Precision', 'Agile'],
    },
  ];

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    adaptiveHeight: false,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 640, // sm
        settings: {
          arrows: false,
          dots: true,
          speed: 350,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-4 sm:mx-6 md:mx-20">
        <header className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-themed-muted">
            A snapshot of what we're building
          </p>
        </header>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-1 sm:px-2 md:px-4">
                <ProjectCard project={project} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

// ProjectCard component with "Read More" functionality
function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="card-base flex rounded-2xl md:rounded-3xl overflow-hidden">
      {/* Image Section - Takes majority of space in mobile view */}
      <div className="relative w-full aspect-[4/3] md:aspect-[3/1] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content Section - Collapsible in mobile view */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium rounded-full border border-primary/20 bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          {project.title}
        </h3>

        {/* Mobile: Collapsible content */}
        <div className="md:hidden flex-col">
          {!isExpanded ? (
            <p className="text-sm text-themed-muted leading-relaxed mb-3 sm:mb-4 line-clamp-3">
              {project.description}
            </p>
          ) : (
            <>
              <p className="text-sm text-themed-muted leading-relaxed mb-3 sm:mb-4">
                {project.description}
              </p>
              {/* Materials, Weapon System, Drive System, Highlights */}
              {project.materials && (
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-sm font-semibold mb-2">Materials Used</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-themed-muted">
                    {Object.entries(project.materials).map(([k, v]) => (
                      <div key={k} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                        <span>
                          <span className="font-medium text-foreground">{k}:</span> {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.weaponSystem && (
                <div className="mb-2 sm:mb-3">
                  <h4 className="text-sm font-semibold mb-1">Weapon System</h4>
                  <p className="text-sm text-themed-muted">{project.weaponSystem}</p>
                </div>
              )}
              {project.driveSystem && project.driveSystem.length > 0 && (
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-sm font-semibold mb-1">Drive System</h4>
                  <ul className="list-disc pl-5 text-sm text-themed-muted space-y-1">
                    {project.driveSystem.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mt-3 sm:mt-4">
                  <h4 className="text-sm font-semibold mb-2">Key Highlights</h4>
                  <ul className="list-disc pl-5 text-sm text-themed-muted space-y-1">
                    {project.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sm font-medium text-primary mt-2"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            {isExpanded ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
          </button>
        </div>

        {/* Desktop: Always show full content */}
        <div className="hidden md:block">
          <p className="text-sm md:text-base text-themed-muted leading-relaxed mb-3 sm:mb-4">
            {project.description}
          </p>
          {project.materials && (
            <div className="mb-3 sm:mb-4">
              <h4 className="text-sm font-semibold mb-2">Materials Used</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-themed-muted">
                {Object.entries(project.materials).map(([k, v]) => (
                  <div key={k} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                    <span>
                      <span className="font-medium text-foreground">{k}:</span> {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {project.weaponSystem && (
            <div className="mb-2 sm:mb-3">
              <h4 className="text-sm font-semibold mb-1">Weapon System</h4>
              <p className="text-sm text-themed-muted">{project.weaponSystem}</p>
            </div>
          )}
          {project.driveSystem && project.driveSystem.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <h4 className="text-sm font-semibold mb-1">Drive System</h4>
              <ul className="list-disc pl-5 text-sm text-themed-muted space-y-1">
                {project.driveSystem.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-3 sm:mt-4">
              <h4 className="text-sm font-semibold mb-2">Key Highlights</h4>
              <ul className="list-disc pl-5 text-sm text-themed-muted space-y-1">
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;
