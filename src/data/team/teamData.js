// Team page data
export const teamData = {
  header: {
    title: "Meet Our Team",
    subtitle: "The brilliant minds behind GROBOTS",
    description: "Our diverse team of engineers, researchers, and innovators work together to push the boundaries of robotics technology."
  },

  stats: [
    { label: "MEMBERS", value: "150+", icon: "Users" },
    { label: "PROJECTS", value: "50+", icon: "Code" },
    { label: "AWARDS", value: "25+", icon: "Trophy" },
    { label: "EVENTS", value: "30+", icon: "Calendar" },
    { label: "WORKSHOPS", value: "40+", icon: "Zap" },
    { label: "YEARS", value: "8+", icon: "Star" }
  ],

  achievements: [
    {
      title: "National Champions",
      description: "Won the National Robotics Competition for autonomous navigation systems.",
      detail: "2024 Achievement",
      icon: "Trophy"
    },
    {
      title: "Innovation Award",
      description: "Recognized for breakthrough research in AI-powered robotic systems.",
      detail: "IEEE Recognition", 
      icon: "Award"
    },
    {
      title: "Community Impact",
      description: "Organized 40+ workshops reaching over 2000 students across the region.",
      detail: "Educational Outreach",
      icon: "Users"
    }
  ],

  members: [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Faculty Advisor",
      category: "leadership",
      department: "Computer Science",
      bio: "Leading AI and robotics research with 15+ years of experience in autonomous systems.",
      skills: ["AI/ML", "Robotics", "Research", "Mentoring"],
      achievements: ["PhD in Robotics", "50+ Publications", "Industry Expert"],
      social: {
        email: "sarah.chen@university.edu",
        linkedin: "https://linkedin.com/in/sarahchen",
        github: "https://github.com/sarahchen"
      },
      isHighlighted: true
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      role: "Team Captain",
      category: "leadership",
      department: "Mechanical Engineering",
      bio: "Passionate about building robots that solve real-world problems. Leading our competition team.",
      skills: ["Leadership", "Mechanical Design", "Project Management", "CAD"],
      achievements: ["3x Competition Winner", "Team Leader", "Innovation Award"],
      social: {
        email: "alex.rodriguez@student.edu",
        linkedin: "https://linkedin.com/in/alexrodriguez",
        github: "https://github.com/alexr"
      },
      isHighlighted: true
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Software Lead",
      category: "software",
      department: "Computer Science",
      bio: "Full-stack developer specializing in robotics software and AI integration.",
      skills: ["Python", "ROS", "AI/ML", "Web Development"],
      achievements: ["Google Intern", "Open Source Contributor", "Hackathon Winner"],
      social: {
        email: "maya.patel@student.edu",
        linkedin: "https://linkedin.com/in/mayapatel",
        github: "https://github.com/mayap"
      }
    },
    {
      id: 4,
      name: "James Kim",
      role: "Hardware Specialist",
      category: "hardware",
      department: "Electrical Engineering",
      bio: "Electronics enthusiast with expertise in PCB design and embedded systems.",
      skills: ["PCB Design", "Arduino", "Embedded Systems", "Circuit Analysis"],
      achievements: ["PCB Design Expert", "Electronics Wizard", "Hardware Hacker"],
      social: {
        email: "james.kim@student.edu",
        linkedin: "https://linkedin.com/in/jameskim",
        github: "https://github.com/jamesk"
      }
    },
    {
      id: 5,
      name: "Emily Zhang",
      role: "AI Research Lead",
      category: "software",
      department: "Computer Science",
      bio: "Researching computer vision and machine learning applications in robotics.",
      skills: ["Computer Vision", "TensorFlow", "OpenCV", "Research"],
      achievements: ["Research Paper Author", "ML Expert", "Vision Systems"],
      social: {
        email: "emily.zhang@student.edu",
        linkedin: "https://linkedin.com/in/emilyzhang",
        github: "https://github.com/emilyzhang"
      }
    },
    {
      id: 6,
      name: "David Park",
      role: "Mechanical Designer",
      category: "hardware",
      department: "Mechanical Engineering",
      bio: "CAD expert and 3D printing enthusiast. Designs custom robot chassis and components.",
      skills: ["SolidWorks", "3D Printing", "Manufacturing", "Prototyping"],
      achievements: ["CAD Master", "3D Print Expert", "Design Innovator"],
      social: {
        email: "david.park@student.edu",
        linkedin: "https://linkedin.com/in/davidpark"
      }
    },
    {
      id: 7,
      name: "Prof. Michael Johnson",
      role: "Mentor",
      category: "mentors",
      department: "Electrical Engineering",
      bio: "Industry veteran with 20+ years in robotics and automation systems.",
      skills: ["Industry Experience", "Automation", "Mentoring", "Systems Design"],
      achievements: ["Industry Expert", "20+ Years Experience", "Automation Specialist"],
      social: {
        email: "michael.johnson@university.edu",
        linkedin: "https://linkedin.com/in/michaeljohnson"
      },
      isHighlighted: true
    },
    {
      id: 8,
      name: "Lisa Wang",
      role: "Frontend Developer",
      category: "software",
      department: "Computer Science",
      bio: "Creating beautiful and functional interfaces for our robotics control systems.",
      skills: ["React", "UI/UX", "TypeScript", "Design Systems"],
      achievements: ["Design Award", "Frontend Expert", "UX Specialist"],
      social: {
        email: "lisa.wang@student.edu",
        github: "https://github.com/lisawang"
      }
    }
  ],

  categories: [
    { 
      id: 'leadership', 
      name: 'Leadership', 
      description: 'Strategic direction and vision',
      count: 4,
      icon: 'Crown' 
    },
    { 
      id: 'software', 
      name: 'Software', 
      description: 'Code that powers innovation',
      count: 8,
      icon: 'Code' 
    },
    { 
      id: 'hardware', 
      name: 'Hardware', 
      description: 'Building the physical future',
      count: 6,
      icon: 'Wrench' 
    },
    { 
      id: 'mentors', 
      name: 'Mentors', 
      description: 'Guiding the next generation',
      count: 5,
      icon: 'Shield' 
    }
  ],

  filters: [
    { id: 'all', label: 'All Members', icon: 'Award' },
    { id: 'leadership', label: 'Leadership', icon: 'Crown' },
    { id: 'software', label: 'Software', icon: 'Code' },
    { id: 'hardware', label: 'Hardware', icon: 'Wrench' },
    { id: 'mentors', label: 'Mentors', icon: 'Shield' }
  ]
};
