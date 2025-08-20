// Projects data for GROBOTS
export const projectsData = {
  header: {
    title: "Our Robotics Projects",
    subtitle: "A Decade of Innovation",
    description:
      "Explore our collection of cutting-edge robotics projects spanning over 10 years of engineering excellence, from lightweight competitors to heavyweight champions.",
  },

  projects: [
    {
      id: 1,
      slug: "thunderbolt-mk5",
      name: "Thunderbolt MK-V",
      year: 2024,
      category: "Combat Robot",
      weightClass: "Heavyweight (54kg)",
      mainImage:
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Thunderbolt+MK-V",
      images: [
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Thunderbolt+Front",
        "https://api.placeholder.com/800x600/374151/ffffff?text=Thunderbolt+Side",
        "https://api.placeholder.com/800x600/4f46e5/ffffff?text=Thunderbolt+Internals",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Thunderbolt+Action",
      ],
      shortDescription:
        "Our most advanced heavyweight combat robot featuring titanium armor and brushless drive system.",
      description:
        "Thunderbolt MK-V represents the pinnacle of our combat robotics engineering, combining years of experience with cutting-edge technology to create an unbeatable heavyweight competitor.",

      specifications: {
        dimensions: {
          length: "120cm",
          width: "90cm",
          height: "40cm",
          weight: "54kg",
        },
        materials: {
          chassis: "6061-T6 Aluminum",
          armor: "Grade 2 Titanium",
          wheels: "Custom Polyurethane",
          fasteners: "Grade 8 Steel Bolts",
        },
        components: {
          motors: "4x Ampflow A28-400 Motors",
          controllers: "2x Sabertooth 2x60 Motor Controllers",
          battery: "4S 10000mAh LiPo Battery Pack",
          weapon: "Hardox Steel Spinning Disk",
          electronics: "Custom PCB Control System",
        },
        performance: {
          topSpeed: "25 mph",
          weaponSpeed: "8000 RPM",
          batteryLife: "15 minutes",
          pushingForce: "2000 lbs",
        },
      },

      achievements: [
        {
          year: 2024,
          competition: "RoboGames World Championship",
          placement: "1st Place",
          location: "San Francisco, CA",
        },
        {
          year: 2024,
          competition: "BattleBots Season 12",
          placement: "Quarter-Finals",
          location: "Las Vegas, NV",
        },
        {
          year: 2023,
          competition: "Combat Robot Hall of Fame",
          placement: "Inducted",
          location: "Detroit, MI",
        },
      ],

      developmentStory: {
        concept:
          "After years of competition experience, we set out to create the ultimate heavyweight combat robot that could dominate any arena while showcasing the latest in robotics technology.",
        challenges:
          "The main challenges were weight distribution, armor optimization, and creating a reliable drive system that could withstand massive impacts while maintaining precise control.",
        innovations:
          "We pioneered several new techniques including our custom shock-mounting system, titanium-aluminum hybrid armor design, and AI-assisted weapon targeting system.",
        timeline:
          "Development took 18 months from initial concept to competition-ready robot, with over 500 hours of design work and 200 hours of machining.",
      },

      technicalDetails: {
        weaponSystem:
          "The primary weapon is a 40kg spinning disk made from Hardox steel, capable of delivering kinetic energy equivalent to a small car impact. The weapon motor can accelerate the disk from 0 to 8000 RPM in under 3 seconds.",
        driveSystem:
          "Four-wheel drive system with independent motor control allows for precise maneuvering and tank-style turning. Each wheel is powered by a 400-watt brushless motor with custom gear reduction.",
        armorDesign:
          "Modular armor system allows for quick repairs between matches. The front plow is designed to deflect opponent weapons while protecting the drive system.",
        controlSystem:
          "Custom-designed control PCB integrates all systems with failsafe mechanisms. Wireless control system operates on secure 2.4GHz frequency with 1ms response time.",
      },
    },

    {
      id: 2,
      slug: "phoenix-autonomous",
      name: "Phoenix Autonomous",
      year: 2023,
      category: "Autonomous Navigation",
      weightClass: "Middleweight (12kg)",
      mainImage:
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Phoenix+Autonomous",
      images: [
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Phoenix+Main",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Phoenix+Sensors",
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=Phoenix+Navigation",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Phoenix+Testing",
      ],
      shortDescription:
        "Advanced autonomous navigation robot with LIDAR, computer vision, and machine learning capabilities.",
      description:
        "Phoenix Autonomous is our flagship autonomous navigation robot, designed for complex indoor and outdoor environments with real-time obstacle avoidance and path planning.",

      specifications: {
        dimensions: {
          length: "60cm",
          width: "45cm",
          height: "30cm",
          weight: "12kg",
        },
        materials: {
          chassis: "Carbon Fiber Monocoque",
          panels: "3D Printed ABS",
          wheels: "Mecanum Wheels",
          sensors: "Weather-Resistant Housing",
        },
        components: {
          computer: "NVIDIA Jetson Xavier NX",
          lidar: "Velodyne VLP-16",
          cameras: "4x Intel RealSense D435i",
          imu: "VectorNav VN-100",
          gps: "u-blox ZED-F9P RTK",
        },
        performance: {
          topSpeed: "15 mph",
          batteryLife: "4 hours",
          range: "10 km autonomous",
          accuracy: "±5cm positioning",
        },
      },

      achievements: [
        {
          year: 2023,
          competition: "DARPA SubT Challenge",
          placement: "3rd Place",
          location: "Colorado Springs, CO",
        },
        {
          year: 2023,
          competition: "IEEE/RSJ IROS Competition",
          placement: "1st Place Navigation",
          location: "Detroit, MI",
        },
        {
          year: 2022,
          competition: "RoboCup Rescue League",
          placement: "2nd Place",
          location: "Bangkok, Thailand",
        },
      ],

      developmentStory: {
        concept:
          "Developed to push the boundaries of autonomous navigation in unknown environments, combining multiple sensor modalities with advanced AI algorithms.",
        challenges:
          "Sensor fusion, real-time processing, and reliable operation in GPS-denied environments were the primary technical challenges.",
        innovations:
          "Our breakthrough came with the development of a hybrid SLAM algorithm that combines visual and LIDAR data for superior mapping accuracy.",
        timeline:
          "24 months of development including 6 months of field testing in various terrains and weather conditions.",
      },

      technicalDetails: {
        navigationStack:
          "Custom ROS2-based navigation stack with advanced path planning algorithms and dynamic obstacle avoidance using model predictive control.",
        sensorFusion:
          "Multi-modal sensor fusion combines LIDAR point clouds, stereo vision, IMU data, and GPS coordinates for robust localization in any environment.",
        aiSystem:
          "Deep learning models for object detection and classification run on the onboard NVIDIA Jetson, enabling real-time decision making.",
        communication:
          "5G cellular and WiFi mesh networking enables remote monitoring and collaborative multi-robot operations.",
      },
    },

    {
      id: 3,
      slug: "titan-lifter",
      name: "Titan Lifter",
      year: 2022,
      category: "Industrial Automation",
      weightClass: "Super Heavyweight (120kg)",
      mainImage:
        "https://api.placeholder.com/800x600/059669/ffffff?text=Titan+Lifter",
      images: [
        "https://api.placeholder.com/800x600/059669/ffffff?text=Titan+Main",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Titan+Lift",
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=Titan+Control",
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Titan+Demo",
      ],
      shortDescription:
        "Heavy-duty industrial robot capable of lifting 500kg payloads with precision positioning.",
      description:
        "Titan Lifter is our industrial automation solution designed for heavy manufacturing applications, featuring precision control and safety systems.",

      specifications: {
        dimensions: {
          length: "150cm",
          width: "120cm",
          height: "200cm (extended)",
          weight: "120kg",
        },
        materials: {
          frame: "Structural Steel",
          actuators: "Hardened Steel",
          panels: "Aluminum Sheet",
          cables: "Industrial Grade",
        },
        components: {
          actuators: "4x Linear Servo Actuators",
          controller: "Siemens S7-1500 PLC",
          sensors: "Load Cells & Encoders",
          safety: "Emergency Stop Systems",
          hmi: "15-inch Industrial Touchscreen",
        },
        performance: {
          liftCapacity: "500kg",
          precision: "±1mm",
          cycleTime: "30 seconds",
          uptime: "99.9%",
        },
      },

      achievements: [
        {
          year: 2022,
          competition: "Industrial Automation Awards",
          placement: "Innovation Award",
          location: "Chicago, IL",
        },
        {
          year: 2022,
          competition: "Manufacturing Technology Expo",
          placement: "Best in Show",
          location: "Detroit, MI",
        },
      ],

      developmentStory: {
        concept:
          "Created in partnership with local manufacturing companies to address the need for heavy-duty automation in assembly line operations.",
        challenges:
          "Safety certification, load distribution, and integration with existing manufacturing systems required extensive engineering.",
        innovations:
          "Developed proprietary safety algorithms and load balancing systems that exceed industry standards.",
        timeline:
          "12 months from concept to production deployment, including 3 months of safety testing and certification.",
      },

      technicalDetails: {
        safetySystem:
          "Triple-redundant safety systems with immediate emergency stops, load monitoring, and operator presence detection ensure zero-accident operation.",
        controlAlgorithm:
          "Advanced PID control with adaptive load compensation ensures precise positioning even with varying payloads up to maximum capacity.",
        integration:
          "Modbus TCP/IP and Ethernet/IP connectivity allows seamless integration with existing factory automation systems and SCADA networks.",
        maintenance:
          "Predictive maintenance algorithms monitor component health and schedule maintenance before failures occur.",
      },
    },

    {
      id: 4,
      slug: "velocity-racer",
      name: "Velocity Racer",
      year: 2021,
      category: "Racing Robot",
      weightClass: "Lightweight (1.5kg)",
      mainImage:
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=Velocity+Racer",
      images: [
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=Velocity+Main",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Velocity+Speed",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Velocity+Track",
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Velocity+Victory",
      ],
      shortDescription:
        "Ultra-lightweight racing robot optimized for maximum speed and agility on competition tracks.",
      description:
        "Velocity Racer represents our expertise in lightweight robotics, achieving incredible speed-to-weight ratios through advanced materials and aerodynamic design.",

      specifications: {
        dimensions: {
          length: "30cm",
          width: "20cm",
          height: "10cm",
          weight: "1.5kg",
        },
        materials: {
          chassis: "Carbon Fiber",
          body: "Kevlar Composite",
          wheels: "Custom Urethane",
          electronics: "PCB Integration",
        },
        components: {
          motors: "2x Brushless Outrunner",
          esc: "Dual 30A ESC",
          battery: "3S 2200mAh LiPo",
          controller: "STM32 Microcontroller",
          sensors: "Gyroscope & Accelerometer",
        },
        performance: {
          topSpeed: "80 mph",
          acceleration: "0-60 in 1.2s",
          batteryLife: "8 minutes racing",
          corneringG: "3.5G lateral",
        },
      },

      achievements: [
        {
          year: 2021,
          competition: "National Bot Racing Championship",
          placement: "1st Place",
          location: "Indianapolis, IN",
        },
        {
          year: 2021,
          competition: "Speed Trials Championship",
          placement: "Speed Record - 80 mph",
          location: "Bonneville, UT",
        },
      ],

      developmentStory: {
        concept:
          "Built to dominate high-speed racing competitions by maximizing power-to-weight ratio while maintaining precise control at extreme speeds.",
        challenges:
          "Aerodynamic stability, heat dissipation, and maintaining control authority at high speeds required innovative engineering solutions.",
        innovations:
          "Our custom-designed active aerodynamics package and thermal management system set new standards for lightweight racing robots.",
        timeline:
          "6 months of intensive development with extensive wind tunnel testing and track validation.",
      },

      technicalDetails: {
        aerodynamics:
          "Active wing system with servo-controlled angle adjustment provides optimal downforce for different track sections while minimizing drag.",
        powerTrain:
          "Twin brushless motors with custom gear ratios deliver maximum torque while maintaining high RPM capability for sustained high-speed operation.",
        controlSystem:
          "Advanced stability control system uses IMU data to prevent loss of traction and maintain optimal racing line through corners.",
        thermalMgmt:
          "Integrated cooling channels and heat sinks keep electronics and motors within operating temperature during extended racing sessions.",
      },
    },

    {
      id: 5,
      slug: "sentinel-security",
      name: "Sentinel Security",
      year: 2020,
      category: "Security & Surveillance",
      weightClass: "Middleweight (25kg)",
      mainImage:
        "https://api.placeholder.com/800x600/374151/ffffff?text=Sentinel+Security",
      images: [
        "https://api.placeholder.com/800x600/374151/ffffff?text=Sentinel+Main",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Sentinel+Patrol",
        "https://api.placeholder.com/800x600/dc2626/ffffff?text=Sentinel+Surveillance",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Sentinel+Control",
      ],
      shortDescription:
        "Autonomous security patrol robot with advanced surveillance and threat detection capabilities.",
      description:
        "Sentinel Security is our autonomous security solution, featuring 360-degree surveillance, facial recognition, and autonomous patrol capabilities for modern security applications.",

      specifications: {
        dimensions: {
          length: "80cm",
          width: "60cm",
          height: "120cm",
          weight: "25kg",
        },
        materials: {
          chassis: "Aluminum Extrusion",
          panels: "Polycarbonate",
          sensors: "Weather-Proof Housing",
          base: "Steel Reinforced",
        },
        components: {
          cameras: "6x 4K Security Cameras",
          computer: "Industrial PC",
          storage: "2TB SSD RAID Array",
          networking: "WiFi 6 & 5G Cellular",
          power: "Hot-Swappable Battery",
        },
        performance: {
          patrolTime: "24 hours",
          detectionRange: "50 meters",
          storageCapacity: "30 days footage",
          responseTime: "< 5 seconds",
        },
      },

      achievements: [
        {
          year: 2020,
          competition: "Security Technology Awards",
          placement: "Innovation in Robotics",
          location: "Las Vegas, NV",
        },
        {
          year: 2020,
          competition: "Campus Security Pilot Program",
          placement: "Successfully Deployed",
          location: "University Campus",
        },
      ],

      developmentStory: {
        concept:
          "Developed to address growing security needs with intelligent autonomous systems that can patrol areas 24/7 without human intervention.",
        challenges:
          "Privacy compliance, reliable object detection in various lighting conditions, and seamless integration with existing security systems.",
        innovations:
          "Pioneered edge-computing facial recognition with privacy-preserving algorithms and advanced threat assessment AI.",
        timeline:
          "15 months of development including 6 months of real-world pilot testing on university campus.",
      },

      technicalDetails: {
        aiVision:
          "Deep learning models for person detection, facial recognition, and behavioral analysis run locally to ensure privacy and reduce latency.",
        patrolSystem:
          "Autonomous navigation with learned patrol routes, obstacle avoidance, and automatic return to charging stations.",
        alertSystem:
          "Real-time alerts with image/video evidence sent to security personnel via secure cloud connection or local network.",
        privacy:
          "All facial recognition data is processed locally with encrypted storage and automatic deletion policies to ensure privacy compliance.",
      },
    },

    {
      id: 6,
      slug: "gripper-pro",
      name: "Gripper Pro",
      year: 2019,
      category: "Manipulation Robot",
      weightClass: "Lightweight (3kg)",
      mainImage:
        "https://api.placeholder.com/800x600/92400e/ffffff?text=Gripper+Pro",
      images: [
        "https://api.placeholder.com/800x600/92400e/ffffff?text=Gripper+Main",
        "https://api.placeholder.com/800x600/1f2937/ffffff?text=Gripper+Action",
        "https://api.placeholder.com/800x600/7c3aed/ffffff?text=Gripper+Precision",
        "https://api.placeholder.com/800x600/059669/ffffff?text=Gripper+Demo",
      ],
      shortDescription:
        "Precision manipulation robot with advanced gripper technology for delicate object handling.",
      description:
        "Gripper Pro showcases our expertise in precision robotics, featuring advanced end-effector technology and force feedback for delicate manipulation tasks.",

      specifications: {
        dimensions: {
          length: "45cm",
          width: "25cm",
          height: "35cm",
          weight: "3kg",
        },
        materials: {
          arm: "Aluminum Extrusion",
          joints: "Steel Bearings",
          gripper: "3D Printed Nylon",
          sensors: "Force-Sensitive Resistors",
        },
        components: {
          servos: "6x High-Torque Digital Servos",
          controller: "Arduino Mega 2560",
          sensors: "Force & Pressure Sensors",
          endEffector: "Adaptive Gripper",
          power: "12V Li-Ion Battery",
        },
        performance: {
          payload: "2kg",
          precision: "±0.5mm",
          gripForce: "0.1-50N variable",
          batteryLife: "6 hours operation",
        },
      },

      achievements: [
        {
          year: 2019,
          competition: "IEEE Robotics Competition",
          placement: "1st Place Manipulation",
          location: "Boston, MA",
        },
        {
          year: 2019,
          competition: "Robotic Manipulation Challenge",
          placement: "Precision Award",
          location: "Pittsburgh, PA",
        },
      ],

      developmentStory: {
        concept:
          "Created to demonstrate precision manipulation capabilities for educational and research applications in robotics laboratories.",
        challenges:
          "Achieving precise force control while maintaining mechanical robustness and developing intuitive control interfaces.",
        innovations:
          "Our adaptive gripper design automatically adjusts to object geometry while providing precise force feedback.",
        timeline:
          "8 months of development with extensive testing on various object types and manipulation tasks.",
      },

      technicalDetails: {
        forceControl:
          "Closed-loop force control system with real-time feedback allows precise manipulation of fragile objects from eggs to electronic components.",
        adaptiveGripper:
          "Underactuated gripper design automatically conforms to object shape while maintaining secure grasp with minimal force.",
        kinematics:
          "6-DOF arm design provides full workspace coverage with singularity avoidance algorithms for smooth motion planning.",
        programming:
          "High-level API allows easy programming of complex manipulation sequences with visual programming interface.",
      },
    },
  ],

  stats: {
    totalProjects: 50,
    activeProjects: 12,
    yearsOfExperience: 10,
    competitionsWon: 25,
    studentsInvolved: 150,
    industryPartnerships: 8,
  },

  categories: [
    {
      name: "Combat Robots",
      count: 15,
      description: "High-energy competitive robots",
    },
    {
      name: "Autonomous Systems",
      count: 12,
      description: "Self-navigating intelligent robots",
    },
    {
      name: "Industrial Automation",
      count: 8,
      description: "Manufacturing and production robots",
    },
    {
      name: "Racing Robots",
      count: 6,
      description: "Speed-optimized competition robots",
    },
    {
      name: "Security Systems",
      count: 4,
      description: "Surveillance and patrol robots",
    },
    {
      name: "Manipulation",
      count: 5,
      description: "Precision handling and assembly robots",
    },
  ],
};
