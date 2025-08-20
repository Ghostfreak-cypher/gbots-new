import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Award, 
  Cpu, 
  Zap, 
  Target,
  CheckCircle,
  ExternalLink,
  Github
} from 'lucide-react';
import { projectsData } from '@/data/projects/projectsData';

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found - Grobots',
    };
  }

  return {
    title: `${project.name} - Projects - Grobots`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'autonomous systems':
        return Cpu;
      case 'combat robotics':
        return Zap;
      case 'research platform':
        return Award;
      default:
        return Cpu;
    }
  };

  const getStatusColor = (status) => {
    if (!status) return 'bg-primary/10 text-primary border-primary/20'; // Default for undefined status
    
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'completed':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'archived':
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <div className="min-h-screen bg-background py-20 ml-20">
      <div className="max-w-7xl font-mono mx-auto px-6">
        
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Main Content Card */}
        <div className="bg-card rounded-3xl overflow-hidden shadow-lg">
          
          {/* Header Section */}
          <div className="p-8 border-b border-border">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <CategoryIcon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {project.name}
                  </h1>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="bg-secondary/50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className={`px-2 py-1 font-medium rounded-full border ${getStatusColor(project.status)}`}>
                      {project.status || 'Active'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{project.team_size || "6"} members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{project.development_time || "12 months"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground font-medium">{project.achievements ? project.achievements.length : 0} awards</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  {(project.overview || project.description || "").split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Development Story */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Development Story</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  {project.development_story ? (
                    project.development_story.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))
                  ) : project.developmentStory ? (
                    <div className="space-y-4">
                      {Object.entries(project.developmentStory).map(([key, value]) => (
                        <div key={key}>
                          <h3 className="text-lg font-semibold text-foreground mb-2 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{value}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">
                      {project.shortDescription || "Development details for this project are currently being documented."}
                    </p>
                  )}
                </div>
              </div>

              {/* Awards & Recognition */}
              {project.achievements && project.achievements.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Awards & Recognition</h2>
                  <div className="space-y-4">
                    {project.achievements.map((award, index) => (
                      <div key={index} className="bg-secondary/30 rounded-xl p-4 border border-border">
                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-foreground">{award.competition}</h3>
                            <p className="text-sm text-primary font-medium">{award.placement}</p>
                            <p className="text-xs text-muted-foreground">{award.year} • {award.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              
              {/* Key Features */}
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                <div className="space-y-2">
                  {project.key_features ? (
                    project.key_features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{project.category}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{project.weightClass}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{project.shortDescription}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Technical Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground capitalize">
                        {key.replace(/_/g, ' ')}
                      </h4>
                      {typeof value === 'object' && value !== null ? (
                        <div className="ml-4 space-y-1">
                          {Object.entries(value).map(([subKey, subValue]) => (
                            <div key={subKey} className="flex justify-between items-start gap-2">
                              <span className="text-xs text-muted-foreground capitalize">
                                {subKey.replace(/_/g, ' ')}:
                              </span>
                              <span className="text-xs text-foreground font-medium text-right">
                                {subValue}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="ml-4">
                          <span className="text-sm text-foreground font-medium">
                            {value}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies ? (
                    project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        Robotics
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                        Engineering
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Project Links</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-2 p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Source Code</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </button>
                  <button className="w-full flex items-center gap-2 p-2 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Project Documentation</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}