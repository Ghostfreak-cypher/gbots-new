// Users page data
export const usersData = {
  header: {
    title: "Community Members",
    subtitle: "Connect with talented robotics enthusiasts",
    description: "Discover and connect with our diverse community of engineers, researchers, and innovators."
  },

  users: [
    {
      id: 1,
      name: "Alex Rodriguez",
      username: "alexr_robotics",
      role: "Team Captain",
      department: "Mechanical Engineering",
      year: "Senior",
      location: "California, USA",
      joinDate: "2022-09-15",
      bio: "Passionate about building robots that solve real-world problems. Leading our competition team to victory!",
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=Alex&backgroundColor=f8f9fa&size=150`,
      skills: ["Leadership", "Mechanical Design", "CAD", "Project Management"],
      achievements: ["3x Competition Winner", "Team Leader", "Innovation Award"],
      projects: 15,
      contributions: 120,
      level: "Expert",
      social: {
        email: "alex.rodriguez@student.edu",
        github: "https://github.com/alexr",
        linkedin: "https://linkedin.com/in/alexrodriguez"
      },
      isOnline: true,
      lastSeen: "2 minutes ago"
    },
    {
      id: 2,
      name: "Maya Patel",
      username: "maya_codes",
      role: "Software Lead",
      department: "Computer Science",
      year: "Junior",
      location: "New York, USA",
      joinDate: "2023-01-20",
      bio: "Full-stack developer specializing in robotics software and AI integration. Love creating elegant solutions!",
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=Maya&backgroundColor=f8f9fa&size=150`,
      skills: ["Python", "ROS", "AI/ML", "Web Development"],
      achievements: ["Google Intern", "Open Source Contributor", "Hackathon Winner"],
      projects: 12,
      contributions: 95,
      level: "Advanced",
      social: {
        email: "maya.patel@student.edu",
        github: "https://github.com/mayap",
        linkedin: "https://linkedin.com/in/mayapatel"
      },
      isOnline: false,
      lastSeen: "1 hour ago"
    },
    {
      id: 3,
      name: "James Kim",
      username: "hardware_wizard",
      role: "Hardware Specialist",
      department: "Electrical Engineering",
      year: "Sophomore",
      location: "Texas, USA",
      joinDate: "2023-08-30",
      bio: "Electronics enthusiast with expertise in PCB design and embedded systems. Always ready to debug!",
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=James&backgroundColor=f8f9fa&size=150`,
      skills: ["PCB Design", "Arduino", "Embedded Systems", "Circuit Analysis"],
      achievements: ["PCB Design Expert", "Electronics Wizard", "Hardware Hacker"],
      projects: 8,
      contributions: 67,
      level: "Intermediate",
      social: {
        email: "james.kim@student.edu",
        github: "https://github.com/jamesk",
        linkedin: "https://linkedin.com/in/jameskim"
      },
      isOnline: true,
      lastSeen: "5 minutes ago"
    },
    {
      id: 4,
      name: "Emily Zhang",
      username: "ai_researcher",
      role: "AI Research Lead",
      department: "Computer Science",
      year: "Graduate",
      location: "Washington, USA",
      joinDate: "2022-02-10",
      bio: "Researching computer vision and machine learning applications in robotics. Published researcher and mentor.",
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=Emily&backgroundColor=f8f9fa&size=150`,
      skills: ["Computer Vision", "TensorFlow", "OpenCV", "Research"],
      achievements: ["Research Paper Author", "ML Expert", "Mentor Award"],
      projects: 20,
      contributions: 150,
      level: "Expert",
      social: {
        email: "emily.zhang@student.edu",
        github: "https://github.com/emilyzhang",
        linkedin: "https://linkedin.com/in/emilyzhang"
      },
      isOnline: false,
      lastSeen: "3 hours ago"
    },
    {
      id: 5,
      name: "David Park",
      username: "design_guru",
      role: "Mechanical Designer",
      department: "Mechanical Engineering",
      year: "Junior",
      location: "Oregon, USA",
      joinDate: "2023-03-15",
      bio: "CAD expert and 3D printing enthusiast. Designs custom robot chassis and components that actually work!",
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=David&backgroundColor=f8f9fa&size=150`,
      skills: ["SolidWorks", "3D Printing", "Manufacturing", "Prototyping"],
      achievements: ["CAD Master", "3D Print Expert", "Design Innovator"],
      projects: 10,
      contributions: 78,
      level: "Advanced",
      social: {
        email: "david.park@student.edu",
        linkedin: "https://linkedin.com/in/davidpark"
      },
      isOnline: true,
      lastSeen: "just now"
    },
    {
      id: 6,
      name: "Lisa Wang",
      username: "frontend_dev",
      role: "Frontend Developer",
      department: "Computer Science",
      year: "Sophomore",
      location: "California, USA",
      joinDate: "2023-09-01",
      bio: "Creating beautiful and functional interfaces for our robotics control systems. UI/UX enthusiast!",
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=Lisa&backgroundColor=f8f9fa&size=150`,
      skills: ["React", "UI/UX", "TypeScript", "Design Systems"],
      achievements: ["Design Award", "Frontend Expert", "UX Specialist"],
      projects: 6,
      contributions: 45,
      level: "Intermediate",
      social: {
        email: "lisa.wang@student.edu",
        github: "https://github.com/lisawang"
      },
      isOnline: false,
      lastSeen: "30 minutes ago"
    }
  ],

  roles: [
    { value: 'all', label: 'All Roles' },
    { value: 'Team Captain', label: 'Team Captain' },
    { value: 'Software Lead', label: 'Software Lead' },
    { value: 'Hardware Specialist', label: 'Hardware Specialist' },
    { value: 'AI Research Lead', label: 'AI Research Lead' },
    { value: 'Mechanical Designer', label: 'Mechanical Designer' },
    { value: 'Frontend Developer', label: 'Frontend Developer' }
  ],

  levels: [
    { value: 'all', label: 'All Levels' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Expert', label: 'Expert' }
  ]
};
