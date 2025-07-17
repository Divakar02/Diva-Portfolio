import {
  flutter, full_stack_django, full_stack_mern, nptel_java_dsa,
  nptel_python, ocean_logo, nptel_logo, 

  T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11,T12,
  C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11,C12,
  I11, I12, I13, I21, I22, I23, I31, I32, I33, I41, I42, I43, I51, I52, I53, I61, I62, I63, I71, I72, I73, I81, I82, I83, I91, I92, I93, I101, I102, I103, I111, I112, I113, I121, I122, I123

} from "../assets";

const projects = [
  {
    id: 1,
    name: "AI & Blockchain Empowered CCTV Surveillance for Public Safety",
    description: "An AI-powered smart surveillance system with tamper-proof evidence storage and natural language footage search.",
    detailedDescription: "This project enhances public safety by integrating AI for real-time crime detection through CCTV analysis, drastically reducing response time. It ensures tamper-proof digital evidence using blockchain smart contracts and dual-layer hashing. Investigators can retrieve critical footage using natural language queries, while a tactical monitoring grid auto-fetches nearby feeds, geotags incidents, and alerts authorities for immediate action.",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "Node.js", color: "text-green-400" },
      { name: "TensorFlow", color: "text-orange-400" },
      { name: "Blockchain", color: "text-purple-400" }
    ],
    images: [
      "/projects/zensafe/1.png",
      "/projects/zensafe/2.png",
      "/projects/zensafe/3.png",
      "/projects/zensafe/4.png",
      "/projects/zensafe/5.png",
      "/projects/zensafe/6.png",
      "/projects/zensafe/7.png",
      "/projects/zensafe/8.png",
       
    ],
    github_link: "https://github.com/Divakar02/Hackverse_2025-Team_Matrix",
    date: "2024-01-15",
    status: "Working Prototype",
    features: [
      "Real-time crime detection through AI-based CCTV analysis",
      "Tamper-proof evidence storage using blockchain hashing",
      "Natural language querying for CCTV footage retrieval",
      "Tactical monitoring grid with geotagged incident alerts"
    ]
  },
  {
  id: 2,
  name: "Local Product Locator (LPL)",
  description: "A smart geolocation-based platform for comparing local product prices, stock availability, and shop details in real-time.",
  detailedDescription: "Local Product Locator (LPL) transforms the shopping experience by providing real-time updates on stock availability, dynamic price comparisons across local stores, and virtual shop insights. It leverages Firebase and Flutter to offer seamless access via web and mobile platforms. With integrated Google Maps, buyers can geolocate nearby sellers, analyze product ratings, and communicate through a two-way interface. Inspired by a real-life challenge, LPL bridges the gap between customers and local vendors, ensuring smarter and quicker purchasing decisions.",
  tags: [
    { name: "Flutter", color: "text-blue-400" },
    { name: "Firebase", color: "text-amber-400" },
    { name: "Dart", color: "text-cyan-400" },
    { name: "Google Maps", color: "text-green-400" }
  ],
  images: [
    "/projects/LPL/1.jpg",
    "/projects/LPL/2.jpg",
    "/projects/LPL/3.jpg",
    "/projects/LPL/4.jpg",
    "/projects/LPL/5.jpg"
  ],
  github_link: "https://github.com/Divakar02/", // Add actual repo link if available
  date: "2024-08-01",
  status: "Conceptual Prototype",
  features: [
    "Real-time stock availability and price updates from local stores",
    "Product comparison algorithm with ratings, reviews, and seller details",
    "Buyer-seller two-way communication and virtual shop insights",
    "Google Maps integration for geolocation and shop discovery",
    "Secure Firebase-based user authentication and cloud storage",
    "Dual interface for sellers and buyers with personalized dashboards",
    "Multi-platform support for mobile and web"
  ]
},
{
  id: 3,
  name: "Infinite Health: AI-Powered Virtual Medical Assistant",
  description: "A comprehensive digital twin of a healthcare system offering rapid rescue, wound analysis, virtual treatment, and mental health support.",
  detailedDescription: "Infinite Health is an intelligent healthcare assistant combining Flutter, AI, and cloud technologies to provide instant medical insights, emergency response, medicine tracking, and mental health care. Core features include Wound Analyzer (text/image-based diagnostics), Virtual Treatment modules, real-time ambulance tracking, and Neighborhood Medico with a two-way interface for medicine availability, price, and location. Integrated with AI mental health bots and GraphQL for virtual doctor services, this app empowers users with reliable, futuristic healthcare access from the palm of their hand.",
  tags: [
    { name: "Flutter", color: "text-blue-400" },
    { name: "Firebase", color: "text-yellow-400" },
    { name: "Python", color: "text-green-400" },
    { name: "Dart", color: "text-cyan-400" },
    { name: "AI", color: "text-pink-400" },
    { name: "VR", color: "text-purple-400" }
  ],
  images: [
    "/projects/infinitehealth/1.jpg",
    "/projects/infinitehealth/2.jpg",
    "/projects/infinitehealth/3.jpg",
    "/projects/infinitehealth/4.jpg",
    "/projects/infinitehealth/5.jpg",
    "/projects/infinitehealth/6.jpg"
  ],
  github_link: "https://github.com/Divakar02/", // Replace with actual if exists
  date: "2025-01-15",
  status: "Working Prototype",
  features: [
    "Wound Analyzer: Submit medical symptoms via text/image and receive AI-based diagnostic suggestions",
    "Virtual Medical Treatment: Auto-treatment suggestion and medicine recommendation via 3D modeling",
    "Neighborhood Medico: Track nearby medicine availability, prices, and shop locations",
    "Rapid Rescue: Book verified ambulances, live-track them, and confirm emergency situations",
    "Health Record Management: Store, access, and track medical reports securely",
    "Mental Health AI: Emotional support and self-awareness via Kore.ai-powered chatbot",
    "Doctor Appointment & Vaccination: Book appointments and locate vaccine centers easily"
  ]
},


];


const certifications = [
  {
    name: "MERN Stack Web Developer",
    provider: "Ocean Academy",
    provider_logo: ocean_logo,
    image: full_stack_mern,
    course_start: "November 2024",
    course_end: "March 2025",
    status: "Completed",
    description:
      "Hands-on diploma covering full stack development with MongoDB, Express.js, React.js, and Node.js. Built scalable applications with REST APIs, authentication, and deployment techniques.",
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
    ],
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "fullstack", color: "green-text-gradient" },
      { name: "webdev", color: "pink-text-gradient" },
    ],
    credential_id: "OCNST10870",
    credential_url: "https://oceanacademy.in/verify",
    linkedin_url: "https://www.linkedin.com/posts/divakar-ejilan-803658289_mernstack-fullstackdeveloper-oceanacademy-activity-7340706034535079938-91fj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYKp4MBzIoqY8rLZDAQA0V5IBGQ3a83KdQ",
    github_url: "https://www.github.com/divakar02",
    additional_images: [],
  },
  {
    name: "Flutter Mobile App Developer",
    provider: "Ocean Academy",
    provider_logo: ocean_logo,
    image: flutter,
    course_start: "June 2023",
    course_end: "September 2023",
    status: "Completed",
    description:
      "A comprehensive diploma focused on cross-platform mobile app development using Flutter and Dart. Covered UI/UX design, Firebase integration, state management, and performance tuning.",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "State Management",
      "Material Design",
      "Cross-Platform UI",
    ],
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "mobile", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    credential_id: "OCNST10498",
    credential_url: "https://oceanacademy.in/verify/OCNST10498",
    linkedin_url: "https://www.linkedin.com/posts/divakar-ejilan-803658289_flutter-mobileappdevelopment-dart-activity-7296207434170122240-9ukh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYKp4MBzIoqY8rLZDAQA0V5IBGQ3a83KdQ",
    github_url: "https://www.github.com/divakar02",
    additional_images: [],
  },
  {
    name: "Python + Full Stack Developer",
    provider: "Ocean Academy",
    provider_logo: ocean_logo,
    image: full_stack_django,
    course_start: "September 2021",
    course_end: "February 2022",
    status: "Completed",
    description:
      "Focused on backend web development using Python and Django, combined with frontend technologies like HTML, CSS, JavaScript. Built secure, data-driven websites and dashboards.",
    skills: [
      "Python",
      "Django",
      "HTML/CSS",
      "JavaScript",
      "Bootstrap",
      "MySQL",
    ],
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "fullstack", color: "pink-text-gradient" },
    ],
    credential_id: "OCNST-PYFULL-2022",
    credential_url: "",
    linkedin_url: "https://www.linkedin.com/posts/divakar-ejilan-803658289_webdevelopment-python-django-activity-7292849186486525952-JKAv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYKp4MBzIoqY8rLZDAQA0V5IBGQ3a83KdQ",
    github_url: "https://www.https://www.github.com/divakar02",
    additional_images: [],
  },
  {
    name: "Data Structures & Algorithms - Java",
    provider: "IIT Madras - NPTEL",
    provider_logo: nptel_logo,
    image: nptel_java_dsa,
    course_start: "July 2024",
    course_end: "October 2024",
    status: "Completed",
    description:
      "12-week NPTEL course on advanced data structures, algorithms, and Java implementation strategies. Focused on performance analysis, trees, graphs, recursion, and sorting algorithms.",
    skills: [
      "Java Programming",
      "Recursion",
      "Sorting Algorithms",
      "Graphs & Trees",
      "DSA Concepts",
      "Big-O Analysis",
    ],
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "dsa", color: "green-text-gradient" },
      { name: "nptel", color: "pink-text-gradient" },
    ],
    credential_id: "NPTEL24CS96S457400445",
    credential_url: "https://nptel.ac.in/noc/E-Certificate",
    linkedin_url: "",
    github_url: "https://www.https://www.github.com/divakar02",
    additional_images: [],
  },
  {
    name: "Joy of Computing - Python",
    provider: "IIT Ropar - NPTEL",
    provider_logo: nptel_logo,
    image: nptel_python,
    course_start: "July 2024",
    course_end: "October 2024",
    status: "Completed",
    description:
      "Introductory Python course focusing on the fun side of coding. Covered logic building, problem solving, simple automation, and real-world projects using Python.",
    skills: [
      "Python Programming",
      "Logic Building",
      "Basic Algorithms",
      "Control Structures",
      "Loops & Functions",
      "File Handling",
    ],
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "nptel", color: "green-text-gradient" },
      { name: "beginner", color: "pink-text-gradient" },
    ],
    credential_id: "NPTEL24CS113S857400820",
    credential_url: "https://nptel.ac.in/noc/E-Certificate",
    linkedin_url: "",
    github_url: "https://www.https://www.github.com/divakar02",
    additional_images: [],
  },
];

const achievements = [
  {
    id: 1,
    title: "HACKVERSE 2.0 | Web3 Hackathon",
    position: "2nd Runner",
    venue: "SRM University, Chennai",
    category: "Hackathon",
    date: "23 March 2025",
    thumbnail: T1,
    certificate: C1,
    description: "Developed a GenAI-based decentralized crime records system on Educhain Testnet using Web3 and AI.",
    detailedDescription: "The system leveraged blockchain for immutable crime data storage and GenAI for automated classification and prediction of crime patterns, ensuring transparency and tamper-proof records.",
    images: [I11, I12, I13],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["Web3", "GenAI", "Blockchain", "Educhain"]
  },
  {
    id: 2,
    title: "TECHATHON | 24-Hour Hackathon",
    position: "Winner",
    venue: "Takshashila University & XEBIA, TN-305",
    category: "Hackathon",
    date: "14 March 2025",
    thumbnail: T2,
    certificate: C2,
    description: "Engineered a GenAI-based intelligent video monitoring solution for urban security enhancement.",
    detailedDescription: "The system utilized GenAI to analyze real-time video feeds, detect anomalies, and send proactive alerts for crime prevention and city-wide safety monitoring.",
    images: [I21, I22, I23],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["GenAI", "Security", "Urban Surveillance"]
  },
  {
    id: 3,
    title: "HACKZION v2.0 | 24-Hour Hackathon",
    position: "Winner",
    venue: "AMC Engineering College, Bengaluru-083",
    category: "Hackathon",
    date: "25 February 2025",
    thumbnail: T3,
    certificate: C3,
    description: "Built an end-to-end secured smart city surveillance system for women safety.",
    detailedDescription: "This project used deep learning and blockchain to enable secure video surveillance integrated into a MERN-based dashboard for real-time monitoring and alerting.",
    images: [I31, I32, I33],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["Smart City", "Deep Learning", "Blockchain", "Women Safety"]
  },
  {
    id: 4,
    title: "HACKERRUPT 24 | 24-Hour Hackathon",
    position: "Runner",
    venue: "SVCE, IITM Research Park, Chennai - 113",
    category: "Hackathon",
    date: "29 April 2024",
    thumbnail: T4,
    certificate: C4,
    description: "Built an AI-powered Smart Home Automation using embedded systems.",
    detailedDescription: "Implemented a prototype using voice and sensor integration that controlled home devices intelligently, optimized power, and enhanced security.",
    images: [I41, I42, I43],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["Smart Home", "Embedded", "AI"]
  },
  {
    id: 5,
    title: "TETRONX 24 | Ideathon",
    position: "Winner",
    venue: "Puducherry Technological University, Puducherry -014",
    category: "Ideathon",
    date: "16 April 2024",
    thumbnail: T5,
    certificate: C5,
    description: "Pitched a startup idea to boost local retailers through an E-commerce model.",
    detailedDescription: "The idea was focused on decentralizing product listings with AI-backed seller verification, empowering local sellers and ensuring sustainable logistics.",
    images: [I51, I52, I53],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["Startup", "E-commerce", "Retail Tech"]
  },
  {
    id: 6,
    title: "PI Event | PPT Presentation",
    position: "Winner",
    venue: "SMVEC, Madagadipet, Puducherry",
    category: "Paper Presentation",
    date: "14 March 2024",
    thumbnail: T6,
    certificate: C6,
    description: "Presented an insightful talk on mathematical ‘pi’ and its real-world applications.",
    detailedDescription: "Covered the evolution of pi, mathematical derivations, and practical usage across engineering domains with real-time simulations.",
    images: [I61, I62, I63],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["Mathematics", "Presentation", "Pi Day"]
  },
  {
    id: 7,
    title: "MECHNIUM 24 | Paper Presentation",
    position: "Winner",
    venue: "Puducherry Technological University, Puducherry -014",
    category: "Paper Presentation",
    date: "12 March 2024",
    thumbnail: T7,
    certificate: C7,
    description: "Presented an AI-Based Medical Assistant mimicking doctor functionalities.",
    detailedDescription: "Demonstrated AI modules performing patient intake, diagnosis assistance, and medication tracking through an interactive interface.",
    images: [I71, I72, I73],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["AI", "Medical", "Healthcare Tech"]
  },
  {
    id: 8,
    title: "TECHOASIS 24 | Project Expo",
    position: "Winner",
    venue: "SMVEC, Madagadipet, Puducherry",
    category: "Project Expo",
    date: "28 March 2024",
    thumbnail: T8,
    certificate: C8,
    description: "Exhibited an AI-Based Medical Assistant for replicating doctor roles.",
    detailedDescription: "An interactive web+mobile solution for AI diagnosis and treatment prediction based on patient history and symptoms.",
    images: [I81, I82, I83],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["AI", "Expo", "Medical"]
  },
  {
    id: 9,
    title: "ICONZ EVENT | Idea Ignition",
    position: "Winner",
    venue: "Puducherry Technological University, Puducherry -014",
    category: "Ideathon",
    date: "27 October 2023",
    thumbnail: T9,
    certificate: C9,
    description: "Conceptualized a startup idea to boost local retail via E-commerce.",
    detailedDescription: "Designed a scalable B2B2C platform to onboard local retailers with simplified logistics, payment support, and real-time inventory monitoring.",
    images: [I91, I92, I93],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["E-commerce", "Startup", "Retail"]
  },
  {
    id: 10,
    title: "CYGNUS 23 | Project Expo",
    position: "Winner",
    venue: "Crescent Institute of Science & Technology, Chennai",
    category: "Project Expo",
    date: "8 May 2023",
    thumbnail: T10,
    certificate: C10,
    description: "Presented an AI-integrated mobile platform for Mental Health Assistance.",
    detailedDescription: "The app analyzed sentiment via voice & text, connected with therapists, and ensured privacy with end-to-end encrypted communication.",
    images: [I101, I102, I103],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["Mental Health", "AI", "Mobile App"]
  },
  {
    id: 11,
    title: "CRYPTOCON 23 | Paper Presentation",
    position: "Winner",
    venue: "Puducherry Technological University, Puducherry -014",
    category: "Paper Presentation",
    date: "24 February 2023",
    thumbnail: T11,
    certificate: C11,
    description: "Enhanced CCTV surveillance system for women safety using deep learning.",
    detailedDescription: "Introduced a blockchain-backed alert system for real-time surveillance and threat detection using object recognition in public areas.",
    images: [I111, I112, I113],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["CCTV", "Blockchain", "Safety"]
  },
  {
    id: 12,
    title: "Unisys Innovation Program 16",
    position: "Pre Finalist",
    venue: "UNISYS, Banglore",
    category: "Corporate Innovation Program",
    date: "30 May 2025",
    thumbnail: T12,
    certificate: C12,
    description: "AI-Driven Blockchain-Secured CCTV System for Women’s Safety.",
    detailedDescription: "Recognized as a Pre Finalist at Unisys Innovation Program Year 16 for developing an AI-powered Blockchain-Secured CCTV surveillance system aimed at improving women’s safety through intelligent threat detection and real-time monitoring.",
    images: [I121, I122, I123],
    linkedinUrl: "https://www.linkedin.com/in/divakar-ejilan-803658289",
    githubUrl: "https://github.com/divakar02",
    tags: ["Machine Learning", "Gen-AI", "Blockchain", "Women Safety", ""]
  }

];

// Social media links
const socialLinks = [
  {
    name: 'Gmail',
    icon: '📧',
    url: 'mailto:ejilandivakar@gmail.com',  
    color: '#EA4335'
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/divakar-ejilan-803658289/',  
    color: '#0077B5'
  },
  {
    name: 'GitHub',
    icon: '🐱',
    url: 'https://github.com/divakar02',  
    color: '#333333'
  }
];



export { socialLinks,certifications, achievements,projects };
