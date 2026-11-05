export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const VALUE_PROPS = [
  { label: "Right-sized packages", description: "Scaled to your budget and stage, not a one-size template." },
  { label: "Plain-language reporting", description: "Results explained clearly, including the tests that didn't work." },
  { label: "Hypothesis-driven testing", description: "Every change we make starts with a clear, testable reason." },
  { label: "Honest about limits", description: "We'll tell you when ASO isn't what's holding your game back." },
];

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: "Search",
    title: "Keyword Research & Optimization",
    description:
      "Finding the search terms your players actually use, and getting your store listing found for them.",
  },
  {
    icon: "Images",
    title: "Store Page Creative Testing",
    description:
      "Icon, screenshots, and preview video tested with a clear hypothesis, not a guess dressed up as a redesign.",
  },
  {
    icon: "TrendingUp",
    title: "Conversion Rate Optimization",
    description:
      "Turning more of the visitors you already get into installs, without paying for extra traffic.",
  },
  {
    icon: "Globe",
    title: "Localization",
    description:
      "Adapting your store presence for the markets where your genre already finds an audience.",
  },
  {
    icon: "Target",
    title: "Competitive & Market Analysis",
    description:
      "A clear-eyed read on where your store page stands against the games you're actually competing with.",
  },
  {
    icon: "FileBarChart2",
    title: "Diagnostics & Reporting",
    description:
      "A short, honest read on what's achievable for your game, and plain-language results on every test we run.",
  },
];

export const PROCESS_STEPS = [
  { title: "Diagnostic", description: "A short, honest read on your store page, budget, and stage." },
  { title: "Package", description: "A right-sized plan built around what your game actually needs." },
  { title: "Test", description: "We run changes against a clear hypothesis, not a hunch." },
  { title: "Report", description: "Plain-language results, including the tests that didn't work." },
  { title: "Iterate", description: "We keep going, or tell you honestly when the bottleneck is elsewhere." },
];

export const CONTACT_INFO = {
  email: "hello@fortiternova.com",
  phone: "+1 (555) 019-2837",
  location: "Remote-first, global coverage",
};
