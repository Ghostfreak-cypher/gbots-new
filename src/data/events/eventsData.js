// Events page data
export const eventsData = {
  header: {
    title: "Upcoming Events",
    subtitle: "Join us for workshops, competitions, and networking",
    description: "Stay updated with our latest events, from technical workshops to exciting competitions."
  },

  filters: [
    { id: 'all', label: 'All Events', icon: 'Calendar' },
    { id: 'workshop', label: 'Workshops', icon: 'BookOpen' },
    { id: 'competition', label: 'Competitions', icon: 'Trophy' },
    { id: 'meetup', label: 'Meetups', icon: 'Users' },
    { id: 'conference', label: 'Conferences', icon: 'Mic' }
  ],

  events: [
    {
      id: 1,
      slug: "autonomous-robotics-workshop",
      title: "Autonomous Robotics Workshop",
      description: "Learn the fundamentals of autonomous navigation and sensor integration in this hands-on workshop.",
      fullDescription: "Join us for an intensive 3-day workshop covering the fundamentals of autonomous robotics. You'll learn about sensor integration, path planning algorithms, and real-time decision making. Perfect for beginners and intermediate participants.",
      date: "2025-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "Engineering Lab, Room 305",
      category: "workshop",
      difficulty: "Beginner",
      capacity: 25,
      registered: 18,
      price: "Free",
      instructor: "Dr. Sarah Chen",
      tags: ["ROS", "Python", "Sensors", "Navigation"],
      image: "/api/placeholder/400/300",
      agenda: [
        { time: "10:00 AM", topic: "Introduction to Autonomous Systems" },
        { time: "11:30 AM", topic: "Sensor Integration Workshop" },
        { time: "1:00 PM", topic: "Lunch Break" },
        { time: "2:00 PM", topic: "Path Planning Algorithms" },
        { time: "3:30 PM", topic: "Hands-on Robot Programming" }
      ],
      requirements: [
        "Basic programming knowledge",
        "Laptop with Ubuntu/ROS installed",
        "No prior robotics experience required"
      ]
    },
    {
      id: 2,
      slug: "roborace-2025",
      title: "RoboRace 2025",
      description: "Annual autonomous racing competition where robots navigate complex tracks.",
      fullDescription: "Our flagship annual competition featuring autonomous robot racing. Teams will design and build robots that can navigate complex tracks with obstacles, ramps, and challenging terrain.",
      date: "2025-03-20",
      time: "9:00 AM - 6:00 PM",
      location: "Main Campus Arena",
      category: "competition",
      difficulty: "Advanced",
      capacity: 50,
      registered: 35,
      price: "$25 per team",
      instructor: "Competition Committee",
      tags: ["Competition", "Autonomous", "Racing", "Design"],
      image: "/api/placeholder/400/300",
      agenda: [
        { time: "9:00 AM", topic: "Team Registration & Setup" },
        { time: "10:00 AM", topic: "Practice Rounds" },
        { time: "12:00 PM", topic: "Lunch & Technical Inspection" },
        { time: "2:00 PM", topic: "Qualifying Rounds" },
        { time: "4:00 PM", topic: "Final Championship" },
        { time: "5:30 PM", topic: "Awards Ceremony" }
      ],
      requirements: [
        "Team of 2-4 members",
        "Pre-built autonomous robot",
        "Competition registration fee"
      ]
    },
    {
      id: 3,
      slug: "ai-in-robotics-seminar",
      title: "AI in Robotics Seminar",
      description: "Explore cutting-edge AI applications in modern robotics systems.",
      fullDescription: "A comprehensive seminar covering the latest developments in AI-powered robotics, including machine learning, computer vision, and neural network applications.",
      date: "2025-02-28",
      time: "2:00 PM - 5:00 PM", 
      location: "Virtual Event",
      category: "conference",
      difficulty: "Intermediate",
      capacity: 100,
      registered: 67,
      price: "Free",
      instructor: "Industry Experts",
      tags: ["AI", "Machine Learning", "Computer Vision", "Neural Networks"],
      image: "/api/placeholder/400/300",
      agenda: [
        { time: "2:00 PM", topic: "Welcome & Opening Remarks" },
        { time: "2:15 PM", topic: "AI Fundamentals in Robotics" },
        { time: "3:00 PM", topic: "Computer Vision Applications" },
        { time: "3:45 PM", topic: "Break" },
        { time: "4:00 PM", topic: "Neural Networks for Control" },
        { time: "4:45 PM", topic: "Q&A and Networking" }
      ],
      requirements: [
        "Basic understanding of AI concepts",
        "Stable internet connection",
        "Zoom application installed"
      ]
    },
    {
      id: 4,
      slug: "pcb-design-bootcamp",
      title: "PCB Design Bootcamp",
      description: "Learn professional PCB design techniques for robotics applications.",
      fullDescription: "Master the art of PCB design with this intensive bootcamp covering everything from schematic design to manufacturing considerations for robotics projects.",
      date: "2025-03-05",
      time: "9:00 AM - 5:00 PM",
      location: "Electronics Lab, Room 201",
      category: "workshop",
      difficulty: "Intermediate",
      capacity: 20,
      registered: 15,
      price: "$15",
      instructor: "James Kim",
      tags: ["PCB", "Electronics", "Design", "Manufacturing"],
      image: "/api/placeholder/400/300",
      agenda: [
        { time: "9:00 AM", topic: "PCB Design Fundamentals" },
        { time: "10:30 AM", topic: "Schematic Design Workshop" },
        { time: "12:00 PM", topic: "Lunch Break" },
        { time: "1:00 PM", topic: "Layout and Routing" },
        { time: "3:00 PM", topic: "Manufacturing Considerations" },
        { time: "4:00 PM", topic: "Project Work & Review" }
      ],
      requirements: [
        "Basic electronics knowledge",
        "Laptop with KiCad installed",
        "Lab fee for materials"
      ]
    },
    {
      id: 5,
      slug: "monthly-robotics-meetup",
      title: "Monthly Robotics Meetup",
      description: "Casual networking event for robotics enthusiasts and professionals.",
      fullDescription: "Join fellow robotics enthusiasts for our monthly meetup featuring project showcases, technical discussions, and networking opportunities.",
      date: "2025-02-10",
      time: "6:00 PM - 8:00 PM",
      location: "Student Center, Room 150",
      category: "meetup",
      difficulty: "All Levels",
      capacity: 75,
      registered: 42,
      price: "Free",
      instructor: "Community Members",
      tags: ["Networking", "Projects", "Community", "Showcase"],
      image: "/api/placeholder/400/300",
      agenda: [
        { time: "6:00 PM", topic: "Welcome & Introductions" },
        { time: "6:20 PM", topic: "Project Showcases" },
        { time: "7:00 PM", topic: "Technical Discussion" },
        { time: "7:30 PM", topic: "Networking & Refreshments" }
      ],
      requirements: [
        "No technical requirements",
        "Bring your projects to showcase",
        "Open to all skill levels"
      ]
    }
  ]
};
