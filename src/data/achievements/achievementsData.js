// Achievements data
export const achievementsData = {
  header: {
    title: "Competition Achievements",
    subtitle: "Celebrating Victory in Robotics",
    description: "Explore our proudest moments and victories in robotics competitions. Each achievement represents countless hours of dedication, innovation, and teamwork by our talented GROBOTS community."
  },

  categories: [
    { id: 'all', name: 'All Achievements', icon: 'Trophy' },
    { id: 'competitions', name: 'Competitions', icon: 'Trophy' },
    { id: 'research', name: 'Research', icon: 'Award' },
    { id: 'innovation', name: 'Innovation', icon: 'Zap' },
    { id: 'leadership', name: 'Leadership', icon: 'Crown' },
    { id: 'technical', name: 'Technical', icon: 'Cog' },
    { id: 'community', name: 'Community', icon: 'Users' }
  ],

  achievements: [
    {
      id: 1,
      slug: "international-robochallenge-champion-2024",
      title: "International RoboChallenge Champion 2024",
      description: "First place victory at the prestigious International RoboChallenge 2024, competing against 150+ teams worldwide with our autonomous navigation robot.",
      shortDescription: "First place at International RoboChallenge 2024",
      category: "competitions",
      date: "2024-07-15",
      location: "Tokyo, Japan",
      team: "Team Alpha",
      members: ["Alex Rodriguez", "Maya Patel", "James Kim", "Emily Zhang"],
      images: [
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Victory+Moment",
        "https://api.placeholder.com/800x600/374151/ffffff?text=Robot+Design",
        "https://api.placeholder.com/800x600/4f46e5/ffffff?text=Team+Photo",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Competition+Arena"
      ],
      mainImage: "https://api.placeholder.com/1200x600/1f2937/ffffff?text=International+RoboChallenge+2024",
      content: {
        overview: "Our team achieved first place at the International RoboChallenge 2024, one of the most prestigious robotics competitions in the world. Competing against 150+ teams from over 30 countries, we demonstrated exceptional innovation and technical excellence.",
        challenge: "The competition focused on autonomous navigation and object manipulation in dynamic environments. Teams had to design robots capable of navigating complex obstacle courses, identifying and sorting objects, and completing tasks with minimal human intervention.",
        solution: "We developed an advanced autonomous robot equipped with computer vision, LIDAR sensors, and machine learning algorithms. Our robot successfully completed all challenges with 98% accuracy, setting a new competition record.",
        impact: "This victory has put our robotics program on the international map and opened doors for collaboration with leading tech companies and research institutions worldwide.",
        highlights: [
          "First place out of 150+ international teams",
          "Set new competition record with 98% accuracy",
          "Featured in IEEE Robotics Magazine",
          "Secured $10,000 prize money for future projects",
          "Received job offers from major tech companies"
        ]
      },
      details: {
        duration: "3 days",
        participants: 150,
        prize: "$10,000",
        challenges: ["Autonomous Navigation", "Object Manipulation", "Dynamic Environment Adaptation"],
        technologies: ["Computer Vision", "LIDAR", "Machine Learning", "ROS2"],
        recognition: "IEEE Robotics Magazine Feature"
      }
    },
    {
      id: 2,
      slug: "national-robotics-championship-2024",
      title: "National Robotics Championship 2024 - Gold Medal",
      description: "Secured first place in the National Robotics Championship with our innovative swarm robotics solution, leading a field of 80 competing teams.",
      shortDescription: "Gold Medal at National Robotics Championship",
      category: "competitions",
      date: "2024-05-20",
      location: "San Francisco, CA",
      team: "Team Beta",
      members: ["David Park", "Lisa Wang", "James Kim"],
      images: [
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Gold+Medal",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Swarm+Robots",
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=Award+Ceremony",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Team+Celebration"
      ],
      mainImage: "https://api.placeholder.com/1200x600/dc2626/ffffff?text=National+Championship+Victory",
      content: {
        overview: "Team Beta dominated the National Robotics Championship 2024 with their groundbreaking swarm robotics system, earning the gold medal and national recognition for innovative collaborative robot design.",
        challenge: "The championship required teams to develop multiple robots that could work together to complete complex tasks including search and rescue scenarios, collaborative construction, and coordinated navigation.",
        solution: "Our swarm robotics solution featured 5 interconnected robots with distributed intelligence, real-time communication protocols, and adaptive behavior algorithms that allowed seamless cooperation in unpredictable environments.",
        impact: "This achievement established our program as a leader in swarm robotics research and led to partnerships with NASA and Boston Dynamics for future projects.",
        highlights: [
          "Gold medal in national championship",
          "Innovative swarm robotics system",
          "Partnership opportunities with NASA",
          "Featured in National Geographic documentary",
          "Invited to White House STEM showcase"
        ]
      },
      details: {
        duration: "2 days",
        participants: 80,
        prize: "$7,500",
        challenges: ["Swarm Coordination", "Search and Rescue", "Collaborative Construction"],
        technologies: ["Swarm Intelligence", "Distributed Computing", "Mesh Networking", "AI Coordination"],
        recognition: "White House STEM Showcase Invitation"
      }
    },
    {
      id: 3,
      slug: "robocup-world-championship-2024",
      title: "RoboCup World Championship 2024 - Silver Medal",
      description: "Achieved second place in the prestigious RoboCup World Championship soccer robotics competition, showcasing advanced AI and mechanical engineering skills.",
      shortDescription: "Silver Medal at RoboCup World Championship",
      category: "competitions",
      date: "2024-06-10",
      location: "Bordeaux, France",
      team: "GROBOTS United",
      members: ["Alex Rodriguez", "Emily Zhang", "Maya Patel", "David Park", "James Kim"],
      images: [
        "https://api.placeholder.com/800x600/6b7280/ffffff?text=Silver+Medal",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Soccer+Robots",
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Match+Action",
        "https://api.placeholder.com/800x600/059669/ffffff?text=World+Stage"
      ],
      mainImage: "https://api.placeholder.com/1200x600/6b7280/ffffff?text=RoboCup+World+Championship",
      content: {
        overview: "GROBOTS United secured the silver medal at the RoboCup World Championship 2024, competing in the humanoid robot soccer league against the world's best robotics teams from 40+ countries.",
        challenge: "The RoboCup soccer competition requires autonomous humanoid robots to play soccer with dynamic ball tracking, strategic gameplay, and real-time decision making in a constantly changing environment.",
        solution: "Our team developed humanoid robots with advanced computer vision for ball tracking, dynamic balancing algorithms for stable locomotion, and strategic AI for coordinated team gameplay.",
        impact: "This international recognition has elevated our program's global standing and attracted top-tier research collaborations with universities worldwide.",
        highlights: [
          "Silver medal at world championship",
          "Competed against 120+ international teams",
          "Advanced humanoid robotics development",
          "Featured in ESPN Sports Science",
          "Research collaboration offers from 10+ universities"
        ]
      },
      details: {
        duration: "5 days",
        participants: 120,
        prize: "€5,000",
        challenges: ["Humanoid Soccer", "Dynamic Balance", "Team Strategy", "Real-time AI"],
        technologies: ["Humanoid Robotics", "Computer Vision", "Dynamic Balance", "Game AI"],
        recognition: "ESPN Sports Science Feature"
      }
    },
    {
      id: 4,
      slug: "nasa-space-robotics-challenge-2024",
      title: "NASA Space Robotics Challenge 2024 - Third Place",
      description: "Earned bronze medal in NASA's prestigious Space Robotics Challenge, developing robots for extraterrestrial exploration and construction tasks.",
      shortDescription: "Bronze Medal at NASA Space Robotics Challenge",
      category: "competitions",
      date: "2024-04-15",
      location: "Houston, TX",
      team: "Space Pioneers",
      members: ["Emily Zhang", "Alex Rodriguez", "Lisa Wang"],
      images: [
        "https://api.placeholder.com/800x600/92400e/ffffff?text=NASA+Challenge",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Space+Robot",
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=Mission+Control",
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Award+Ceremony"
      ],
      mainImage: "https://api.placeholder.com/1200x600/92400e/ffffff?text=NASA+Space+Challenge",
      content: {
        overview: "Team Space Pioneers achieved third place in the NASA Space Robotics Challenge 2024, developing cutting-edge robotics solutions for space exploration and construction in extraterrestrial environments.",
        challenge: "The NASA challenge simulated real Mars exploration scenarios where robots must navigate harsh terrain, collect samples, construct habitats, and perform maintenance tasks with complete autonomy.",
        solution: "We created a versatile space robot with advanced manipulation capabilities, radiation-hardened electronics, and AI systems capable of making critical decisions without Earth communication delays.",
        impact: "This achievement opened doors to NASA internship programs and established our team as contributors to future Mars exploration missions.",
        highlights: [
          "Bronze medal in NASA competition",
          "Space exploration robot development",
          "NASA internship program invitations",
          "Mars mission project contributions",
          "Space technology patent applications filed"
        ]
      },
      details: {
        duration: "4 days",
        participants: 60,
        prize: "$5,000",
        challenges: ["Mars Terrain Navigation", "Sample Collection", "Habitat Construction", "Autonomous Operation"],
        technologies: ["Space Robotics", "Radiation Hardening", "Autonomous AI", "Remote Operations"],
        recognition: "NASA Internship Program Invitations"
      }
    },
    {
      id: 5,
      slug: "first-robotics-world-championship-2024",
      title: "FIRST Robotics World Championship 2024 - Regional Winners",
      description: "Dominated the regional competition and advanced to world championship, demonstrating exceptional engineering and teamwork in the FIRST Robotics Competition.",
      shortDescription: "Regional Winners - FIRST Robotics World Championship",
      category: "competitions",
      date: "2024-03-25",
      location: "Detroit, MI",
      team: "Iron Eagles",
      members: ["James Kim", "Maya Patel", "David Park", "Lisa Wang"],
      images: [
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=FIRST+Robotics",
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Competition+Robot",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Alliance+Victory",
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=World+Championship"
      ],
      mainImage: "https://api.placeholder.com/1200x600/1f2937/ffffff?text=FIRST+World+Championship",
      content: {
        overview: "Iron Eagles achieved regional championship status in FIRST Robotics Competition 2024, earning the right to compete at the world championship in Detroit alongside the best high school robotics teams globally.",
        challenge: "The FIRST challenge required building a robot capable of scoring game pieces, climbing platforms, and working in alliance with other teams under intense time pressure and resource constraints.",
        solution: "Our versatile competition robot featured precise mechanical systems, robust programming, and innovative design solutions that maximized scoring potential while maintaining reliability.",
        impact: "This regional victory has inspired younger students to join robotics and established pathways for team members to pursue engineering careers.",
        highlights: [
          "Regional championship victory",
          "Advanced to world championship",
          "Inspired 200+ students to join robotics",
          "Engineering scholarship offers received",
          "Mentorship program establishment"
        ]
      },
      details: {
        duration: "3 days",
        participants: 40,
        prize: "World Championship Qualification",
        challenges: ["Game Piece Manipulation", "Alliance Strategy", "Climbing Challenge", "Time Management"],
        technologies: ["Competition Robotics", "Alliance Strategy", "Mechanical Design", "Programming"],
        recognition: "Engineering Scholarship Offers"
      }
    },
    {
      id: 6,
      slug: "ieee-robotics-automation-competition-2024",
      title: "IEEE Robotics and Automation Competition 2024 - Innovation Award",
      description: "Received the Innovation Award at IEEE's premier robotics competition for developing a breakthrough assistive robotics solution for elderly care.",
      shortDescription: "Innovation Award - IEEE Robotics Competition",
      category: "competitions",
      date: "2024-08-05",
      location: "Boston, MA",
      team: "Care Innovators",
      members: ["Lisa Wang", "Emily Zhang", "David Park"],
      images: [
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=IEEE+Innovation",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Assistive+Robot",
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Elderly+Care",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Award+Ceremony"
      ],
      mainImage: "https://api.placeholder.com/1200x600/7c3aed/ffffff?text=IEEE+Innovation+Award",
      content: {
        overview: "Team Care Innovators won the IEEE Innovation Award for developing a revolutionary assistive robotics system designed to support elderly individuals in daily activities while maintaining their independence and dignity.",
        challenge: "The competition challenged teams to address real-world problems through robotics innovation, with our team focusing on the growing need for elderly care solutions in an aging population.",
        solution: "We developed an intelligent companion robot with natural language processing, fall detection, medication reminders, and emergency response capabilities, designed with user-friendly interfaces for elderly users.",
        impact: "This innovation has attracted healthcare industry partnerships and is being considered for pilot programs in assisted living facilities nationwide.",
        highlights: [
          "IEEE Innovation Award winner",
          "Assistive robotics breakthrough",
          "Healthcare industry partnerships",
          "Assisted living pilot programs",
          "Patent applications in progress"
        ]
      },
      details: {
        duration: "2 days",
        participants: 35,
        prize: "Innovation Recognition + $3,000",
        challenges: ["Elderly Care Solutions", "User Interface Design", "Safety Systems", "Social Robotics"],
        technologies: ["Natural Language Processing", "Fall Detection", "Health Monitoring", "Human-Robot Interaction"],
        recognition: "Healthcare Industry Partnerships"
      }
    }
  ],

  stats: {
    totalAchievements: 6,
    activeCompetitions: 12,
    upcomingEvents: 4,
    teamParticipation: 85
  }
};
