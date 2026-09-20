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
  jobit,
  tripguide,
  mythicaJewels,
  aws,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "tech", title: "Tech" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

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

const si = (slug, color = "94a3b8") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const technologies = [
  // Languages
  { name: "C / C++", icon: si("cplusplus", "00599C"), category: "Languages" },
  { name: "Python", icon: si("python", "3776AB"), category: "Languages" },
  { name: "JavaScript", icon: javascript, category: "Languages" },
  { name: "SQL", icon: si("mysql", "4479A1"), category: "Languages" },

  // Frontend
  { name: "HTML 5", icon: html, category: "Frontend" },
  { name: "CSS 3", icon: css, category: "Frontend" },
  { name: "Bootstrap", icon: si("bootstrap", "7952B3"), category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  { name: "React JS", icon: reactjs, category: "Frontend" },
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
  { name: "Render", icon: si("render", "46E3B7"), iconLight: si("render", "0A0A0A"), category: "Tools" },
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

const experiences = [
  {
    title: "Software Development Engineer (SDE)",
    company_name: "RapidFacto",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2026 – Present",
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
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2026 – May 2026",
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
    icon: starbucks,
    iconBg: "#383E56",
    date: "2022 – 2026",
    points: [
      "Organized workshops, hackathons, and coding contests for the college technical society.",
      "Mentored peers on web development practices and collaborative project delivery.",
      "Supported campus tech initiatives used by thousands of students.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Voice-Driven Interview Scheduler",
    description:
      "Automated interview scheduling with voice interaction—coordinating ~60% of the workflow. Integrated Vosk, Mozilla TTS, and node-nlp (85%+ accuracy), Google Calendar sync, Twilio calls, and scalable MySQL-backed REST APIs with ~40% faster responses.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Vosk", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AMANverma9118",
  },
  {
    name: "Mythica Jewels",
    description:
      "Full-stack luxury jewelry e-commerce platform on the MERN stack. Secure REST APIs for auth, catalog, cart, and orders; responsive, visually rich UI; admin tools for products, inventory, and users.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: mythicaJewels,
    source_code_link: "https://github.com/AMANverma9118",
    live_demo_link: "https://mythica-jewels.vercel.app/",
  },
  {
    name: "Conatus Website",
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

const overview = {
  headline: "Software Development Engineer building scalable full-stack products.",
  paragraphs: [
    "I'm Aman Verma, an SDE at RapidFacto and a B.Tech CSE student at Ajay Kumar Garg Engineering College (CGPA 8.35/10). I design and ship production web apps end to end—React frontends, Node/Flask backends, and SQL/NoSQL data layers.",
    "Recently I've delivered 10+ full-stack applications, 25+ secure REST APIs, OnlyOffice real-time collaboration, and performance wins of 35–40% on response time and latency. Previously at First500days I helped scale products to 5,000+ active users and integrated AI/ML APIs into real workflows.",
    "I care about clean APIs, measurable UX improvements, and shipping features that hold up under real traffic—whether that's voice-driven automation, e-commerce, or campus platforms used by thousands of students.",
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
  technologies,
  techCategories,
  experiences,
  testimonials,
  projects,
  overview,
};
