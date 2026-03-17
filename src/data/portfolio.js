// ─────────────────────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Satyam Narayan",
  initials: "SN",
  role: "React Native Developer",
  tagline: "Building scalable mobile apps for Android & iOS with real impact.",
  resumeUrl: "/resume.pdf",
  resumeFilename: "Satyam_Narayan_Resume.pdf",
};

// ─────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────
export const navItems = [
  { label: "About", id: "about" },
  { label: "Work Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
];

// ─────────────────────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/itssatyamnarayan",
  linkedin: "https://www.linkedin.com/in/satyam-narayan/",
  twitter: "https://twitter.com/",
  email: "iamsatyamnarayan@gmail.com",
};

// ─────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────
export const stats = [
  { number: "1.5+", label: "Years of Experience" },
  { number: "15+", label: "Projects Delivered" },
  { number: "3", label: "Platforms (iOS, Android & Web)" },
];

// ─────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────
export const skills = [
  { label: "React Native", icon: "📱" },
  { label: "React.js", icon: "⚛️" },
  { label: "TypeScript", icon: "🔷" },
  { label: "JavaScript", icon: "🟨" },
  { label: "Redux", icon: "⚡" },
  { label: "TanStack Query", icon: "🔄" },
  { label: "Firebase", icon: "🔥" },
  { label: "REST APIs", icon: "🔗" },
  { label: "RevenueCat", icon: "💰" },
  { label: "Push Notifications", icon: "🔔" },
  { label: "Google Fitness", icon: "🏃" },
  { label: "AWS Cognito", icon: "☁️" },
  { label: "Play Store", icon: "▶️" },
  { label: "App Store", icon: "🍎" },
  { label: "Git", icon: "🌿" },
];

// ─────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────
export const experience = [
  {
    role: "React Native Developer",
    company: "SilverSky Technology",
    period: "Oct 2023 – Present",
    duration: "1.5+ Years",
    description:
      "Developing cross-platform mobile and web applications across multiple domains including productivity, education, fitness, and social platforms.",
    responsibilities: [
      "Built cross-platform mobile apps using React Native (Android & iOS)",
      "Developed web applications using React.js",
      "Implemented complex UI animations and user-facing product features",
      "Integrated REST APIs and third-party SDKs into mobile applications",
      "Implemented real-time chat and push notifications using Firebase",
      "Built subscription systems using RevenueCat",
      "Worked with Google Fitness SDK for health data tracking",
      "Managed production releases, code signing, and app store submissions",
    ],
    tags: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux",
      "RevenueCat",
      "REST APIs",
    ],
  },
];

// ─────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────
export const education = [
  {
    period: "2021 – 2023",
    degree: "Master of Computer Applications (MCA)",
    institution: "LNCT Bhopal",
  },
  {
    period: "2018 – 2021",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "L.N. Mishra College of Business Management",
  },
];

// ─────────────────────────────────────────────────────────
// FEATURED PROJECTS
// ─────────────────────────────────────────────────────────
export const featuredProjects = [
  {
    id: 1,
    name: "FamilyFeed",
    tagline: "Smart Family Organizer",
    description:
      "Collaborative family management app for tasks, groceries, appointments, and events with smart AI bots.",
    features: [
      "Shared lists, tasks & events",
      "Calendar & appointment management",
      "Smart bots — GroceryBot, HealthBot",
      "Real-time sync via Firebase",
    ],
    tech: ["React Native", "Firebase", "REST APIs"],
    type: "Mobile App",
    emoji: "👨‍👩‍👧‍👦",
    coverImage: null,
    screenshots: [],
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: 2,
    name: "Tydlig",
    tagline: "School Management System",
    description:
      "Multi-role school management system for coordinators, teachers, and admins with real-time messaging.",
    features: [
      "Coordinator & admin dashboard",
      "Teacher leave management",
      "Schedule management",
      "Real-time messaging via FCM",
    ],
    tech: ["React Native", "Firebase", "API Integration"],
    type: "Mobile App",
    emoji: "🏫",
    coverImage: null,
    screenshots: [],
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: 3,
    name: "Sunrise",
    tagline: "Morning Routine Tracker",
    description:
      "Habit-building app for consistent morning routines with streaks, reminders, and social sharing.",
    features: [
      "Habit tracking with streaks",
      "Push notification reminders",
      "Achievement sharing",
      "Progress charts",
    ],
    tech: ["React Native", "Push Notifications", "REST APIs"],
    type: "Mobile App",
    emoji: "🌅",
    coverImage: null,
    screenshots: [],
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: 4,
    name: "EaziQuote",
    tagline: "Quote & Invoice Management",
    description:
      "Quoting and invoicing app for tradespeople with premium subscriptions via RevenueCat.",
    features: [
      "Quote and invoice creation",
      "Job tracking dashboard",
      "Premium tier via RevenueCat",
      "Published on App Store & Play Store",
    ],
    tech: ["React Native", "RevenueCat", "TypeScript"],
    type: "Mobile App",
    emoji: "📋",
    coverImage: null,
    screenshots: [],
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: 5,
    name: "Tuck",
    tagline: "B2B Gift Card Platform",
    description:
      "B2B platform for companies to offer discounted gift cards via custom employee portals. 150+ providers.",
    features: [
      "Admin dashboard",
      "Custom branded portals",
      "Employee gift card marketplace",
      "150+ gift card providers",
    ],
    tech: ["React", "TypeScript", "REST APIs"],
    type: "Web App",
    emoji: "🎁",
    coverImage: null,
    screenshots: [],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// ─────────────────────────────────────────────────────────
// OTHER PROJECTS
// ─────────────────────────────────────────────────────────
export const otherProjects = [
  {
    id: 6,
    name: "Bettermint",
    tagline: "Fitness Habit & Tracking App",
    description:
      "A behavioral fitness application integrating Google Fitness APIs to track user health data and promote consistency through data-driven insights.",
    highlights: [
      "Google Fitness integration",
      "Steps, calories & sleep tracking",
      "Data visualization dashboards",
    ],
    tech: ["React Native", "Google Fitness SDK"],
    type: "Mobile App",
    emoji: "💪",
    color: "#22c55e",
  },
  {
    id: 7,
    name: "FootRank",
    tagline: "Football Match Rating Platform",
    description:
      "A community-driven application allowing users to rate football matches and explore top-rated games across leagues.",
    highlights: [
      "Match rating & reviews",
      "Top-rated match discovery",
      "Community engagement",
    ],
    tech: ["React Native"],
    type: "Mobile App",
    emoji: "⚽",
    color: "#0ea5e9",
  },
  {
    id: 8,
    name: "GuisedUp",
    tagline: "Social Community Platform",
    description:
      "A social platform designed to connect users experiencing similar emotional phases through posts, events, and messaging.",
    highlights: [
      "Posts, videos & events",
      "Phase-based communities",
      "Personal & group chat",
    ],
    tech: ["React Native"],
    type: "Mobile App",
    emoji: "💬",
    color: "#ec4899",
  },
];

// ─────────────────────────────────────────────────────────
// RESUME
// ─────────────────────────────────────────────────────────
export const resumeChips = [
  "React Native Developer",
  "1.5+ yrs",
  "15+ projects",
  "Android & iOS",
];
