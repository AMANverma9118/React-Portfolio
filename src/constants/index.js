import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  shopify,
  carrent,
  mythicaJewels,
  mythicaJewels2,
  mythicaJewels3,
  mythicaJewels4,
  mythicaJewels5,
  interviewDesk,
  interviewDesk2,
  interviewDesk3,
  interviewDesk4,
  aws,
} from "../assets";

export const socialLinks = {
  github: "https://github.com/AMANverma9118",
  linkedin: "https://www.linkedin.com/in/aman-verma-527537272/",
  email: "aman.verma3497924@gmail.com",
  leetcode: "https://leetcode.com/u/A_V_/",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "tech", title: "Skills" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact" },
];

/** Focus areas shown in About (engineering identity) */
const services = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "React & Frontend",
    icon: mobile,
  },
  {
    title: "APIs & Backend",
    icon: backend,
  },
  {
    title: "Databases & Cloud",
    icon: creator,
  },
];

/** Freelance capability section — secondary to engineering identity */
const freelanceServices = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web applications from UI through API, database, and deployment.",
  },
  {
    title: "React Development",
    description:
      "Responsive product interfaces with clear UX and maintainable component architecture.",
  },
  {
    title: "Node.js & REST APIs",
    description:
      "Secure, documented REST services designed for real traffic and integrations.",
  },
  {
    title: "Backend Development",
    description:
      "Server-side logic with Node.js, Express, or Flask—auth, workflows, and data access.",
  },
  {
    title: "Database Design",
    description:
      "MongoDB, MySQL, PostgreSQL, and Firestore modeled for reliability and query performance.",
  },
  {
    title: "API Integrations",
    description:
      "Third-party services—Google Docs, calendars, messaging, AI/ML, and cloud media pipelines.",
  },
  {
    title: "Admin Dashboards",
    description:
      "Internal tools for products, inventory, users, and operational workflows.",
  },
  {
    title: "Bug Fixing & Performance",
    description:
      "Latency, query, and frontend–backend bottlenecks measured and improved in production.",
  },
];

const si = (slug, color = "94a3b8") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const technologies = [
  // Languages
  { name: "C / C++", icon: si("cplusplus", "00599C"), category: "Languages" },
  { name: "Python", icon: si("python", "3776AB"), category: "Languages" },
  { name: "JavaScript", icon: javascript, category: "Languages" },
  { name: "TypeScript", icon: si("typescript", "3178C6"), category: "Languages" },
  { name: "SQL", icon: si("mysql", "4479A1"), category: "Languages" },

  // Frontend
  { name: "HTML 5", icon: html, category: "Frontend" },
  { name: "CSS 3", icon: css, category: "Frontend" },
  { name: "Bootstrap", icon: si("bootstrap", "7952B3"), category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  { name: "React JS", icon: reactjs, category: "Frontend" },
  { name: "Next.js", icon: si("nextdotjs", "ffffff"), iconLight: si("nextdotjs", "000000"), category: "Frontend" },
  { name: "Redux Toolkit", icon: redux, category: "Frontend" },
  { name: "React Native", icon: si("react", "61DAFB"), category: "Frontend" },

  // Backend
  { name: "Node JS", icon: nodejs, category: "Backend" },
  {
    name: "Express.js",
    icon: si("express", "ffffff"),
    iconLight: si("express", "000000"),
    category: "Backend",
  },
  {
    name: "Flask",
    icon: si("flask", "e2e8f0"),
    iconLight: si("flask", "000000"),
    category: "Backend",
  },
  { name: "REST APIs", icon: si("fastapi", "009688"), category: "Backend" },
  {
    name: "JWT",
    icon: si("jsonwebtokens", "ffffff"),
    iconLight: si("jsonwebtokens", "000000"),
    category: "Backend",
  },
  { name: "Firebase", icon: si("firebase", "FFCA28"), category: "Backend" },
  {
    name: "Google Docs API",
    icon: si("googledocs", "4285F4"),
    category: "Backend",
  },

  // Databases
  { name: "MongoDB", icon: mongodb, category: "Databases" },
  { name: "MySQL", icon: si("mysql", "4479A1"), category: "Databases" },
  { name: "PostgreSQL", icon: si("postgresql", "4169E1"), category: "Databases" },
  { name: "SQLite", icon: si("sqlite", "003B57"), category: "Databases" },
  { name: "Firestore", icon: si("googlecloud", "4285F4"), category: "Databases" },
  { name: "Redis", icon: si("redis", "DC382D"), category: "Databases" },

  // Tools & Cloud
  { name: "Git", icon: git, category: "Tools" },
  { name: "AWS", icon: aws, category: "Tools" },
  { name: "NGINX", icon: si("nginx", "009639"), category: "Tools" },
  {
    name: "Vercel",
    icon: si("vercel", "ffffff"),
    iconLight: si("vercel", "000000"),
    category: "Tools",
  },
  {
    name: "Render",
    icon: si("render", "46E3B7"),
    iconLight: si("render", "0A0A0A"),
    category: "Tools",
  },
  {
    name: "Coolify",
    icon: si("docker", "2496ED"),
    category: "Tools",
  },
  {
    name: "VPS",
    icon: si("linux", "FCC624"),
    category: "Tools",
  },
  { name: "Postman", icon: si("postman", "FF6C37"), category: "Tools" },
  { name: "Cloudinary", icon: si("cloudinary", "3448C5"), category: "Tools" },
  { name: "Cloudflare", icon: si("cloudflare", "F38020"), category: "Tools" },
  { name: "Figma", icon: figma, category: "Tools" },
];

const techCategories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "React Native",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "JWT",
      "Firebase",
      "Google Docs API",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firestore", "SQLite", "Redis"],
  },
  {
    title: "Infrastructure & Tools",
    items: [
      "Git",
      "AWS",
      "VPS",
      "Coolify",
      "NGINX",
      "Cloudflare",
      "Vercel",
      "Render",
      "Cloudinary",
      "Postman",
    ],
  },
];

/** Only roles verified in Aman Verma Resume.pdf */
const experiences = [
  {
    title: "Software Development Engineer (SDE)",
    company_name: "RapidFacto",
    location: "Remote",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2026 – Present",
    tech: ["React.js", "Node.js", "Flask", "MySQL", "REST APIs", "OnlyOffice"],
    points: [
      "Built and maintained 10+ full-stack web applications using React.js, Node.js, Flask, and MySQL.",
      "Integrated OnlyOffice for real-time document viewing and editing, improving collaboration efficiency by 40%.",
      "Developed 25+ secure RESTful APIs and backend services for scalable application workflows.",
      "Optimized frontend–backend integration, reducing response time and improving data-flow efficiency by 35%.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "First500days",
    location: "Remote",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2026 – May 2026",
    tech: ["React.js", "Node.js", "MongoDB", "REST APIs", "AI/ML APIs"],
    points: [
      "Built and scaled full-stack web applications serving 5,000+ active users with reliable performance.",
      "Built production-grade RESTful APIs and microservices with a focus on high scalability.",
      "Optimized MongoDB queries and API performance, reducing latency by 40%.",
      "Integrated AI/ML APIs to enable intelligent features, automation, and richer user interactions.",
    ],
  },
  {
    title: "Domain Incharge — Technical Society",
    company_name: "AKGEC (Ajay Kumar Garg Engineering College)",
    location: "Ghaziabad",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022 – 2026",
    tech: ["Mentorship", "Events", "Web development"],
    points: [
      "Organized workshops, hackathons, and coding contests for the college technical society.",
      "Mentored peers on web development practices and collaborative project delivery.",
      "Supported campus tech initiatives used by thousands of students.",
    ],
  },
];

const projects = [
  {
    name: "Voice-Driven Interview Scheduler",
    purpose:
      "Reduce manual interview coordination by letting candidates schedule through voice interaction.",
    contribution:
      "Designed and built the voice pipeline, REST APIs, MySQL data layer, calendar sync, and call integration end to end.",
    features: [
      "Voice-driven scheduling covering ~60% of the coordination workflow",
      "Vosk + Mozilla TTS + node-nlp with 85%+ interaction accuracy",
      "Google Calendar sync and Twilio-enabled calls",
      "MySQL-backed REST APIs with ~40% faster response times",
    ],
    challenge:
      "Combining real-time speech recognition, NLP intent parsing, and reliable calendar/call side effects without fragile UX.",
    description:
      "Automated interview scheduling with voice interaction—coordinating ~60% of the workflow. Integrated Vosk, Mozilla TTS, and node-nlp (85%+ accuracy), Google Calendar sync, Twilio calls, and scalable MySQL-backed REST APIs with ~40% faster responses.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Vosk", color: "pink-text-gradient" },
    ],
    image: interviewDesk,
    images: [interviewDesk, interviewDesk2, interviewDesk3, interviewDesk4],
    imageFit: "contain",
    source_code_link:
      "https://github.com/AMANverma9118/Voice-Driven-Interview-Scheduling",
    live_demo_link: "https://voice-driven-interview-scheduling.vercel.app/",
  },
  {
    name: "Mythica Jewels",
    purpose:
      "Give a luxury jewelry brand a full e-commerce stack—catalog, cart, orders, and admin operations.",
    contribution:
      "Built the MERN application including auth, product/cart/order APIs, responsive storefront, and admin tooling.",
    features: [
      "Secure REST APIs for auth, catalog, cart, and orders",
      "Responsive storefront focused on product presentation",
      "Admin tools for products, inventory, and users",
      "Deployed production frontend on Vercel",
    ],
    challenge:
      "Keeping auth, inventory, and order flows consistent across a visually rich storefront and a practical admin backend.",
    description:
      "Full-stack luxury jewelry e-commerce platform on the MERN stack. Secure REST APIs for auth, catalog, cart, and orders; responsive, visually rich UI; admin tools for products, inventory, and users.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: mythicaJewels,
    images: [
      mythicaJewels,
      mythicaJewels2,
      mythicaJewels3,
      mythicaJewels4,
      mythicaJewels5,
    ],
    imageFit: "contain",
    source_code_link: "https://github.com/AMANverma9118/Mythica-Jewels",
    live_demo_link: "https://mythica-jewels.vercel.app/",
  },
  {
    name: "Conatus Website",
    purpose:
      "Give a college technical society a platform for coordinator profiles and member/admin workflows.",
    contribution:
      "Built the full-stack society site with role-based APIs, pagination, lazy-loading, and coordinator information views.",
    features: [
      "Used by 4K+ students on campus",
      "Coordinator profiles and society information",
      "Pagination and lazy-loading (~45% UX improvement)",
      "Role-based access for admins and members via secure REST APIs",
    ],
    challenge:
      "Serving a large student audience with clear navigation while keeping member vs admin permissions secure.",
    description:
      "Full-stack society platform used by 4K+ students—coordinator profiles, pagination, lazy-loading (UX improved ~45%), and role-based access with secure REST APIs for admins and members.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Figma", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/AMANverma9118/Conatus-Website",
  },
];

const credibility = [
  { label: "Full-stack apps", value: "10+" },
  { label: "REST APIs", value: "25+" },
  { label: "Active users served", value: "5,000+" },
  { label: "Production experience", value: "SDE" },
];

const overview = {
  headline:
    "Full-Stack Developer building production-ready web applications for teams and products.",
  paragraphs: [
    "I'm Aman Verma, a Software Development Engineer at RapidFacto and a B.Tech CSE student at Ajay Kumar Garg Engineering College (CGPA 8.35/10). I work across the stack—React frontends, Node.js and Flask backends, REST APIs, authentication, databases, third-party integrations, and deployment.",
    "In production I've shipped 10+ full-stack applications, built 25+ secure REST APIs, integrated OnlyOffice for real-time collaboration, and improved response/latency metrics by 35–40%. At First500days I helped scale applications serving 5,000+ active users and integrated AI/ML APIs into real product workflows.",
    "I can own features independently from UI to data layer, and I collaborate well in engineering teams—writing clear APIs, measuring performance, and shipping work that holds up under real traffic.",
  ],
  highlights: [
    { label: "Apps shipped", value: "10+" },
    { label: "REST APIs", value: "25+" },
    { label: "Active users served", value: "5K+" },
    { label: "LeetCode solved", value: "250+" },
  ],
};

export {
  services,
  freelanceServices,
  technologies,
  techCategories,
  skillGroups,
  experiences,
  projects,
  overview,
  credibility,
};
