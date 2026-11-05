export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const STATS = [
  { value: "250+", label: "Apps tested" },
  { value: "40+", label: "Device & OS profiles" },
  { value: "99.9%", label: "Crash-free sessions" },
  { value: "24–48h", label: "Typical turnaround" },
];

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: "ShieldCheck",
    title: "App Store Compliance",
    description:
      "Pre-submission audits against Apple App Store and Google Play guidelines, so your release doesn't stall in review.",
  },
  {
    icon: "Smartphone",
    title: "Device & OS Compatibility",
    description:
      "Testing across real device matrices and OS versions to confirm your app performs everywhere your users are.",
  },
  {
    icon: "Gauge",
    title: "Performance & Load Testing",
    description:
      "Stress-testing under real-world conditions to catch crashes, memory leaks, and slowdowns before launch day.",
  },
  {
    icon: "Lock",
    title: "Security & Privacy Audits",
    description:
      "Identifying vulnerabilities and privacy gaps to keep user data safe and your app aligned with store policy.",
  },
  {
    icon: "RefreshCw",
    title: "Regression & Release Testing",
    description:
      "Continuous coverage through every release cycle, so new features ship without breaking what already works.",
  },
  {
    icon: "Workflow",
    title: "Automated Test Pipelines",
    description:
      "Custom automation frameworks wired into your CI/CD for faster, repeatable QA on every build.",
  },
];

export const PROCESS_STEPS = [
  { title: "Submit", description: "Share your app, build, and target platforms with our team." },
  { title: "Scope", description: "We map a test plan to your release timeline and risk areas." },
  { title: "Test", description: "Our engineers run manual and automated passes across real devices." },
  { title: "Report", description: "You get a clear, prioritized breakdown of every issue found." },
  { title: "Ship", description: "Fix, retest, and launch with confidence in the store of your choice." },
];

export type Project = {
  name: string;
  platform: string;
  category: string;
  description: string;
};

export const PROJECT_CATEGORIES = [
  "All",
  "App Store Compliance",
  "Compatibility",
  "Performance",
  "Security",
];

export const PROJECTS: Project[] = [
  {
    name: "Nimbus Fitness",
    platform: "iOS / Android",
    category: "Compatibility",
    description:
      "Full device and OS compatibility sweep across 35+ profiles ahead of a global launch.",
  },
  {
    name: "Pulse Banking",
    platform: "iOS",
    category: "Security",
    description:
      "Security and privacy audit plus App Store compliance review ahead of a major relaunch.",
  },
  {
    name: "Driftly Travel",
    platform: "Android",
    category: "App Store Compliance",
    description:
      "Automated regression suite integrated into the CI/CD pipeline to protect every release.",
  },
  {
    name: "Orbit Social",
    platform: "Android",
    category: "Compatibility",
    description:
      "Compatibility testing across 40+ Android devices spanning five OS versions.",
  },
  {
    name: "Lumen Health",
    platform: "iOS / Android",
    category: "Performance",
    description:
      "Load and performance testing for a telehealth app ahead of peak enrollment season.",
  },
  {
    name: "Vantage Retail",
    platform: "iOS",
    category: "App Store Compliance",
    description:
      "Resubmission support and compliance remediation after an App Store guideline rejection.",
  },
];

export const CONTACT_INFO = {
  email: "hello@fortiternova.com",
  phone: "+1 (555) 019-2837",
  location: "Remote-first, global coverage",
};
