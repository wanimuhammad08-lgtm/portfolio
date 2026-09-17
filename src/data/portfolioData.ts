export interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  points: string[];
  tech: string[];
  link?: string;
  status?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  score: string;
  period: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  duration?: string;
  url?: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  url: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  shortName: string;
  emDashName: string;
  year: string;
  taglines: string[];
  homage: string[];
  bio: string;
  contact: {
    email: string;
    secondaryEmail: string;
    phone: string;
    location: string;
    homeTown: string;
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
    leetcode: string;
    leetcodeHandle: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  publication: {
    title: string;
    status: string;
    summary: string;
    highlights: string[];
  };
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  name: "Muhammad Ahmad",
  shortName: "Muhammad",
  emDashName: "Muhammad — Ahmad",
  year: "2025",
  taglines: [
    "AI & Machine Learning Engineer",
    "Data Scientist • Full-Stack AI Developer",
    "Bengaluru • Sopore, Kashmir"
  ],
  homage: [
    "OPEN TO OPPORTUNITIES",
    "AI • ML • DATA SCIENCE"
  ],
  bio: "Aspiring Data Science & AI Engineer with deep knowledge of Python, SQL, exploratory data analysis, and predictive modeling. Experienced in crafting robust full-stack web applications and interactive algorithm visualizations. Passionate about turning complex real-world data into actionable, high-impact intelligent systems.",
  contact: {
    email: "wanimuhammad08@gmail.com",
    secondaryEmail: "muhammad.aiml24le@cmrit.ac.in",
    phone: "+91 9541618792",
    location: "Bengaluru, Karnataka, India",
    homeTown: "Sopore, Baramulla, Kashmir",
    github: "https://github.com/wanimuhammad08-lgtm",
    githubHandle: "wanimuhammad08-lgtm",
    linkedin: "https://www.linkedin.com/in/muhammad-ahmad-3188952aa",
    linkedinHandle: "muhammad-ahmad-3188952aa",
    leetcode: "https://leetcode.com/u/pCZV5bZzWE",
    leetcodeHandle: "pCZV5bZzWE"
  },
  skills: [
    { category: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "TypeScript"] },
    { category: "Data Science & AI", items: ["Exploratory Data Analysis", "Predictive Modeling", "Algorithm Optimization", "Tableau", "Power BI"] },
    { category: "Web Development", items: ["React", "HTML5", "CSS3 / Tailwind CSS", "Django", "Node.js"] },
    { category: "Databases & Cloud", items: ["MySQL", "PostgreSQL", "Microsoft Azure", "Git / GitHub", "Linux"] }
  ],
  education: [
    {
      degree: "Bachelor of Engineering – Artificial Intelligence & Machine Learning",
      institution: "CMR Institute of Technology",
      location: "Bengaluru, Karnataka",
      score: "CGPA 7.05",
      period: "2024 – 2027 (Pursuing)"
    },
    {
      degree: "Diploma in Engineering – Computer Engineering",
      institution: "Kashmir Government Polytechnic College",
      location: "Srinagar, Kashmir",
      score: "76.6%",
      period: "2021 – 2024"
    },
    {
      degree: "10th Grade (JKBOSE Secondary School)",
      institution: "S.R.M Welkin Higher Secondary School",
      location: "Sopore, Kashmir",
      score: "87.6%",
      period: "2021"
    }
  ],
  projects: [
    {
      title: "Camping Hikers — Trek & Travel Platform",
      category: "Commercial Web Application & Production Deployment",
      period: "2024 – Present",
      description: "Official commercial web platform designed, developed, deployed, and continuously maintained for Camping Hikers — an established travel and alpine trekking agency based in Srinagar, Kashmir.",
      points: [
        "Engineered and launched the official website using React and modern CSS, hosted on Vercel with high-performance responsive architecture.",
        "Configured custom domain routing, DNS records, SSL certificates, and fast content delivery networks.",
        "Maintain and update the website continuously with new travel itineraries, seasonal tour packages, and dynamic features.",
        "Optimized website performance, Core Web Vitals, mobile ergonomics, and search engine discoverability (SEO).",
        "Manage technical operations and troubleshooting, maintaining reliable website uptime and seamless user inquiries."
      ],
      tech: ["React", "Vercel", "Domain & DNS", "SSL/TLS", "SEO Optimization", "Ongoing Maintenance"],
      link: "https://www.campinghikers.com/",
      status: "Live & Maintained"
    },
    {
      title: "Path Finding Visualization System",
      category: "Data Science & React",
      period: "2024",
      description: "Interactive real-time algorithm performance platform showcasing route optimization techniques.",
      points: [
        "Developed and implemented multiple path-finding algorithms including Dijkstra, A*, and BFS to demonstrate optimal routing.",
        "Engineered an interactive React-based web application for real-time visualization of algorithm latency and grid exploration.",
        "Designed and integrated all pathfinding engines independently, ensuring modular scalability and sub-millisecond execution.",
        "Improved user conceptual clarity by providing comparative step-by-step visual simulations."
      ],
      tech: ["React", "JavaScript", "Algorithms", "Graph Theory", "Tailwind CSS"]
    },
    {
      title: "NOC Certificate Management Website",
      category: "Full Stack Web Development",
      period: "2024",
      description: "End-to-end digital portal enabling collegiate students to apply for and verify digital NOC certificates.",
      points: [
        "Designed and developed a web-based platform replacing manual paperwork with structured digital multi-step forms.",
        "Implemented rigorous data validation and verification workflows ensuring authenticity of student submissions.",
        "Engineered a secure system allowing approved applicants to generate and download signed NOC certificates in real time.",
        "Created an intuitive, accessible UI that reduced certificate turnaround time significantly."
      ],
      tech: ["Full Stack", "Authentication", "PDF Generation", "Database Workflows", "Responsive UI"]
    },
    {
      title: "Medical Diagnostic Booking Platform",
      category: "Full Stack Web Development",
      period: "2023 – 2024",
      description: "Healthcare coordination portal connecting patients with clinical specialists and lab diagnostics.",
      points: [
        "Architected an online booking workflow enabling patients to schedule diagnostic tests with specific doctors based on real-time calendar availability.",
        "Streamlined doctor-patient coordination with automated slot scheduling and appointment management.",
        "Built a secure patient vault allowing authorized users to access and download verified medical test reports.",
        "Enforced strict privacy, data validation, and responsive mobile-first interface ergonomics."
      ],
      tech: ["React", "Django/Python", "SQL", "Role-based Access", "Healthcare UX"]
    }
  ],
  experience: [
    {
      role: "Technical Head",
      company: "RARE CLUB (CMRIT)",
      type: "Full-time",
      period: "Jan 2025 – Present",
      duration: "1 yr 9 mos",
      highlights: [
        "Lead technical initiatives, engineering hackathons, and software workshops for the student community.",
        "Mentor student developers in AI/ML architectures, full-stack systems, and competitive problem-solving."
      ]
    },
    {
      role: "Web Developer",
      company: "Camping Hikers",
      type: "Part-time",
      period: "2024 – Present",
      url: "https://www.campinghikers.com/",
      highlights: [
        "Developed and deployed the Camping Hikers website using React and Vercel.",
        "Configured domain, DNS, SSL, and hosting for the production website.",
        "Maintained and updated website content and features.",
        "Improved website performance, responsiveness, and SEO.",
        "Managed technical issues and ensured reliable website availability."
      ]
    },
    {
      role: "Data Scientist Intern",
      company: "Intellipaat Software Solution",
      type: "Internship",
      period: "Feb 2026 – Jul 2026",
      duration: "6 mos",
      highlights: [
        "Developed and implemented Machine Learning models for data analysis, prediction, and business insights.",
        "Performed data cleaning, preprocessing, and Exploratory Data Analysis (EDA) using Python and data science libraries.",
        "Analyzed datasets to identify trends, patterns, correlations, and key performance indicators (KPIs).",
        "Applied statistical and Machine Learning techniques to solve real-world business problems.",
        "Created data visualizations and dashboards to communicate analytical findings effectively.",
        "Collaborated with mentors and team members on AI, Machine Learning, and Data Science projects.",
        "Utilized Python, Pandas, NumPy, Matplotlib, Scikit-learn, and SQL for data-driven solutions.",
        "Presented project outcomes, insights, and data-driven recommendations based on analytical findings."
      ]
    }
  ],
  publication: {
    title: "Navigating Efficiency: Evaluating Routing Algorithms for Real-Time Applications",
    status: "Research Paper — Submitted to IEEE Conference (2025)",
    summary: "A comparative research study evaluating routing algorithms (A*, Dijkstra’s, Greedy Best-First, and Bi-Directional Search) under dynamic edge costs and spatial constraints.",
    highlights: [
      "Designed and developed an interactive route-optimization system with configurable source-destination inputs and spatial buffers.",
      "Benchmarked execution time, path accuracy, and convergence speed across large-scale synthetic graph topographies.",
      "Demonstrated Greedy Best-First achieves fastest convergence, while A* and Dijkstra consistently yield optimal path distance.",
      "Identified critical deployment patterns for next-generation smart vehicle navigation and logistics routing engines."
    ]
  },
  certifications: [
    {
      title: "CS50's Introduction to Artificial Intelligence with Python",
      issuer: "Harvard University",
      issueDate: "Sep 2026",
      credentialId: "2decbf1d-4981-4a88-a8c9-ae81634ba6bc",
      url: "https://certificates.cs50.io/2decbf1d-4981-4a88-a8c9-ae81634ba6bc.pdf?size=letter",
      skills: ["Artificial Intelligence (AI)", "Machine Learning", "Neural Networks", "Python"]
    },
    {
      title: "Google AI Essentials Specialization",
      issuer: "Google",
      issueDate: "Sep 2026",
      credentialId: "Y7NIA28TAX1G",
      url: "https://www.coursera.org/account/accomplishments/specialization/Y7NIA28TAX1G",
      skills: ["Artificial Intelligence (AI)", "Generative AI", "Prompt Engineering", "Large Language Models"]
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      issuer: "Oracle",
      issueDate: "Feb 2026",
      expiryDate: "Feb 2028",
      credentialId: "103418414OCI25FNDCFA",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BFC4045A8EB46968155A113FF817DF412211F72BEF41A1E5D52F002A2A6AEC76",
      skills: ["Cloud Infrastructure", "Oracle Cloud (OCI)", "Cloud Architecture", "Security & Compliance"]
    }
  ]
};
