// Home page data
export const homeData = {
  hero: {
    badge: "Building Tomorrow's Innovators",
    title: "Futuristic",
    subtitle: "technologies",
    description: "This is the latest technology that allows you to make tattoos using artificial intelligence.",
    timeline: [
      {
        id: 1,
        title: "OS - LAUNCH",
        subtitle: "Global beta project",
        isActive: true
      },
      {
        id: 2,
        title: "OS - BETA TEST", 
        subtitle: "Coming soon end Q1",
        isActive: false
      }
    ],
    technologies: [
      "ARTIFICIAL INTELLIGENCE",
      "TKTD", 
      "ART",
      "TECHNOLOGIES",
      "CYBER"
    ],
    bottomText: "TECHNOLOGIES THAT WILL ALLOW US TO DO THE IMPOSSIBLE IN THE NEAR FUTURE",
    images: {
      techIllustration: "/api/placeholder/80/120",
      mainImage: "/api/placeholder/600/800"
    }
  },
  
  about: {
    title: "About GROBOTS",
    subtitle: "Building Tomorrow's Innovators",
    description: "We are a passionate community of robotics enthusiasts, engineers, and innovators working together to push the boundaries of what's possible with autonomous systems and artificial intelligence.",
    mission: {
      title: "Our Mission",
      description: "To foster innovation, collaboration, and learning in the field of robotics while building solutions that make a positive impact on society."
    },
    stats: [
      { label: "Active Members", value: "150", suffix: "+" },
      { label: "Projects Completed", value: "50", suffix: "+" },
      { label: "Awards Won", value: "25", suffix: "+" },
      { label: "Years of Excellence", value: "8", suffix: "+" }
    ],
    highlights: [
      {
        title: "Innovation Lab",
        description: "State-of-the-art facilities for prototyping and testing",
        icon: "Lightbulb"
      },
      {
        title: "Expert Mentorship", 
        description: "Learn from industry professionals and academic leaders",
        icon: "Users"
      },
      {
        title: "Real Projects",
        description: "Work on meaningful projects that solve real-world problems",
        icon: "Target"
      },
      {
        title: "Competition Teams",
        description: "Participate in robotics competitions and showcase your skills",
        icon: "Trophy"
      }
    ]
  },

  values: [
    {
      title: "Innovation",
      description: "We push boundaries and explore new possibilities in robotics and AI.",
      icon: "Lightbulb"
    },
    {
      title: "Collaboration", 
      description: "We believe in the power of teamwork and knowledge sharing.",
      icon: "Users"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we create.",
      icon: "Award"
    },
    {
      title: "Impact",
      description: "We build solutions that make a positive difference in the world.",
      icon: "Target"
    }
  ],

  contact: {
    title: "Get In Touch",
    subtitle: "Ready to join our robotics community?",
    description: "Whether you're a complete beginner or an experienced engineer, we welcome everyone who shares our passion for robotics and innovation.",
    contactMethods: [
      {
        type: "email",
        label: "Email Us",
        value: "hello@grobots.org",
        icon: "Mail"
      },
      {
        type: "discord", 
        label: "Join Discord",
        value: "discord.gg/grobots",
        icon: "MessageCircle"
      },
      {
        type: "location",
        label: "Visit Us", 
        value: "Engineering Building, Room 204",
        icon: "MapPin"
      }
    ],
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/grobots", icon: "Github" },
      { platform: "Instagram", url: "https://instagram.com/grobots", icon: "Instagram" },
      { platform: "LinkedIn", url: "https://linkedin.com/company/grobots", icon: "Linkedin" },
      { platform: "YouTube", url: "https://youtube.com/grobots", icon: "Youtube" }
    ]
  }
};
