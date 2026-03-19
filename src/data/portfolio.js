// ─────────────────────────────────────────────────────────
// PERSONAL INFO

import { Images } from "../assets";

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
  github: "https://github.com/satyam-narayan",
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
    name: "Guised Up",
    tagline: "Emotion-Based Social Community Platform",
    description:
      "A unique social networking platform designed to connect users based on emotional phases of life. The app enables users to share experiences, interact with like-minded individuals, and build meaningful connections beyond traditional social media.",
    features: [
      "Emotion-based user categorization system",
      "Post creation with images, short videos (moments), and events",
      "Phase-based content feed and community interaction",
      "Personal and group chat functionality",
      "Journey tracking (My Voyage) and storytelling (My Tale)",
    ],
    tech: ["React Native", "Firebase", "REST APIs"],
    type: "Mobile App",
    emoji: "🎭",
    coverImage: Images.guisedup.cover,
    screenshots: [
      Images.guisedup.gu1,
      Images.guisedup.gu2,
      Images.guisedup.gu3,
      Images.guisedup.gu4,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/guised-up/id6618147177",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hue",
  },

  {
    id: 2,
    name: "FamilyFeed",
    tagline: "Smart Family Organizer",
    description:
      "A collaborative family management application that helps families organize daily life through shared tasks, grocery lists, appointments, and smart automation tools, all within a private and secure environment.",
    features: [
      "Shared family lists, todos, and event planning",
      "Calendar and appointment management system",
      "Smart bots (GroceryBot, HealthBot, TravelBot, EventsBot)",
      "Receipt and image scanning for quick list creation",
      "Real-time synchronization across family members",
    ],
    tech: ["React Native", "Firebase", "REST APIs"],
    type: "Mobile App",
    emoji: "👨‍👩‍👧‍👦",
    coverImage: Images.familyfeed.cover,
    screenshots: [
      Images.familyfeed.ff1,
      Images.familyfeed.ff2,
      Images.familyfeed.ff3,
      Images.familyfeed.ff4,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/familyfeed-family-assistant/id6741578071",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.familyfeed",
  },

  {
    id: 3,
    name: "Footrank",
    tagline: "Football Match Rating Platform",
    description:
      "A community-driven platform where users can rate, review, and discover football matches across major leagues, helping fans identify the most exciting games.",
    features: [
      "Match rating and review system",
      "Top-rated matches by matchday, month, and season",
      "User-generated reviews and feedback",
      "Guest and registered user support",
      "League coverage including EPL, La Liga, and more",
    ],
    tech: ["React Native"],
    type: "Mobile App",
    emoji: "⚽",
    coverImage: Images.footrank.cover,
    screenshots: [
      Images.footrank.fr1,
      Images.footrank.fr2,
      Images.footrank.fr3,
      Images.footrank.fr4,
    ],
    appStoreUrl: "https://apps.apple.com/in/app/foot-rank/id6749535330",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.footrank",
  },

  {
    id: 4,
    name: "Eazi Quote",
    tagline: "Quote & Invoice Management Platform",
    description:
      "A mobile and web-based quoting and invoicing platform built for tradespeople to create professional documents quickly, manage jobs efficiently, and get paid faster with subscription-based premium features.",
    features: [
      "Professional quote and invoice generation",
      "Job and client management system",
      "Subscription-based premium features",
      "RevenueCat integration for App Store & Play Store billing",
      "Mobile-first design optimized for on-site usage",
    ],
    tech: ["React Native", "React", "RevenueCat", "TypeScript"],
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
      "A scalable B2B platform that enables companies to offer discounted gift cards to employees through fully branded portals, with dynamic theming and commission-based pricing models.",
    features: [
      "Admin dashboard for managing clients and commissions",
      "Dynamic white-label client portals",
      "Employee marketplace for purchasing gift cards",
      "Support for 150+ gift card providers",
      "Custom pricing and discount management system",
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
