// Community page data
export const communityData = {
  header: {
    title: "Join Our Community",
    subtitle: "Connect, collaborate, and learn together",
    description: "Be part of our vibrant robotics community where ideas flourish and innovations come to life."
  },

  chatRooms: [
    {
      id: 1,
      name: "General Discussion",
      description: "Main community chat for general robotics topics",
      category: "general",
      memberCount: 145,
      online: 45,
      unread: 0,
      isActive: true,
      lastMessage: {
        user: "Alex R.",
        content: "Just finished testing the new navigation algorithm!",
        timestamp: "2 minutes ago"
      },
      tags: ["General", "Open"],
      moderators: ["Dr. Sarah Chen", "Alex Rodriguez"],
      isPublic: true
    },
    {
      id: 2,
      name: "AI & Machine Learning",
      description: "Discuss AI applications in robotics",
      category: "technical",
      memberCount: 67,
      online: 28,
      unread: 5,
      isActive: true,
      lastMessage: {
        user: "Emily Z.",
        content: "Check out this new computer vision library",
        timestamp: "15 minutes ago"
      },
      tags: ["AI", "ML", "Technical"],
      moderators: ["Emily Zhang"],
      isPublic: true
    },
    {
      id: 3,
      name: "Hardware & Electronics",
      description: "PCB design, sensors, and hardware discussions",
      category: "technical",
      memberCount: 89,
      online: 34,
      unread: 0,
      isActive: false,
      lastMessage: {
        user: "James K.",
        content: "New PCB designs are ready for review",
        timestamp: "1 hour ago"
      },
      tags: ["Hardware", "Electronics", "PCB"],
      moderators: ["James Kim"],
      isPublic: true
    },
    {
      id: 4,
      name: "Project Collaboration",
      description: "Find team members and collaborate on projects",
      category: "projects",
      memberCount: 112,
      online: 67,
      unread: 12,
      isActive: true,
      lastMessage: {
        user: "Maya P.",
        content: "Looking for a mechanical engineer for my project",
        timestamp: "30 minutes ago"
      },
      tags: ["Projects", "Collaboration"],
      isPublic: true
    },
    {
      id: 5,
      name: "Competition Team",
      description: "Private channel for competition team members",
      category: "team",
      memberCount: 25,
      online: 8,
      unread: 0,
      isActive: true,
      lastMessage: {
        user: "Team Captain",
        content: "Meeting tomorrow at 3 PM",
        timestamp: "5 minutes ago"
      },
      tags: ["Competition", "Team"],
      isPublic: false,
      requiresApproval: true
    },
    {
      id: 6,
      name: "Beginners Corner",
      description: "Welcoming space for newcomers to ask questions",
      category: "support",
      memberCount: 78,
      online: 23,
      unread: 3,
      isActive: true,
      lastMessage: {
        user: "Sarah C.",
        content: "Welcome to GROBOTS! Feel free to ask any questions",
        timestamp: "10 minutes ago"
      },
      tags: ["Beginners", "Support", "Q&A"],
      isPublic: true
    },
    {
      id: 7,
      name: "Research Papers",
      description: "Share and discuss latest robotics research",
      category: "academic",
      memberCount: 45,
      online: 12,
      unread: 0,
      isActive: false,
      lastMessage: {
        user: "Dr. Chen",
        content: "Interesting paper on swarm robotics",
        timestamp: "2 hours ago"
      },
      tags: ["Research", "Academic", "Papers"],
      isPublic: true
    },
    {
      id: 8,
      name: "Off Topic",
      description: "Casual conversations and non-robotics chat",
      category: "social",
      memberCount: 98,
      online: 19,
      unread: 8,
      isActive: true,
      lastMessage: {
        user: "David P.",
        content: "Anyone up for lunch?",
        timestamp: "8 minutes ago"
      },
      tags: ["Casual", "Social", "Off-topic"],
      isPublic: true
    }
  ],

  categories: [
    { id: 'all', label: 'All Rooms', icon: 'MessageCircle' },
    { id: 'general', label: 'General', icon: 'Users' },
    { id: 'technical', label: 'Technical', icon: 'Code' },
    { id: 'projects', label: 'Projects', icon: 'FolderOpen' },
    { id: 'team', label: 'Team', icon: 'Shield' },
    { id: 'support', label: 'Support', icon: 'HelpCircle' },
    { id: 'academic', label: 'Academic', icon: 'BookOpen' },
    { id: 'social', label: 'Social', icon: 'Coffee' }
  ],

  onlineMembers: [
    { id: 1, name: "Alex Rodriguez", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Alex&size=40", status: "online", role: "Team Captain" },
    { id: 2, name: "Maya Patel", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Maya&size=40", status: "online", role: "Software Lead" },
    { id: 3, name: "James Kim", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=James&size=40", status: "online", role: "Hardware Specialist" },
    { id: 4, name: "Emily Zhang", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Emily&size=40", status: "away", role: "AI Research Lead" },
    { id: 5, name: "David Park", avatar: "https://api.dicebear.com/7.x/personas/svg?seed=David&size=40", status: "online", role: "Mechanical Designer" }
  ],

  guidelines: [
    "Be respectful and inclusive to all community members",
    "Keep discussions relevant to the channel topic",
    "No spam, self-promotion, or off-topic content",
    "Help newcomers and share knowledge freely",
    "Report any inappropriate behavior to moderators"
  ]
};
