import {
  AppWindow,
  Blocks,
  Brush,
  CheckCircle2,
  Code2,
  Compass,
  Globe2,
  Handshake,
  Layers3,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

export const services = [
  {
    title: "Web Development",
    slug: "web-development",
    icon: Code2,
    description: "Fast, responsive & scalable websites.",
    detail:
      "Build fast, secure, responsive and scalable websites for businesses, startups and organizations.",
    offerings: [
      "Business websites",
      "Landing pages",
      "E-commerce websites",
      "Web applications",
      "CMS websites",
      "SEO-ready websites",
    ],
    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shopify",
      "WordPress",
      "Analytics",
    ],
  },
  {
    title: "App Development",
    slug: "app-development",
    icon: Smartphone,
    description: "iOS & Android apps built for performance.",
    detail: "Build high-performance mobile applications for Android and iOS.",
    offerings: [
      "Mobile app strategy",
      "UI/UX design",
      "Frontend development",
      "Backend integration",
      "Testing",
      "Launch support",
    ],
    tools: [
      "React Native",
      "Expo",
      "Firebase",
      "Node.js",
      "App Store",
      "Play Console",
    ],
  },
  {
    title: "UI/UX & Graphics Design",
    slug: "ui-ux-graphics",
    icon: Brush,
    description: "Beautiful, intuitive designs that convert.",
    detail:
      "Create beautiful, intuitive and conversion-focused digital designs.",
    offerings: [
      "User interface design",
      "User experience design",
      "Brand graphics",
      "Social media creatives",
      "Product mockups",
      "Design systems",
    ],
    tools: [
      "Figma",
      "Adobe Creative Suite",
      "FigJam",
      "Design Tokens",
      "Prototypes",
      "Brand Systems",
    ],
  },
  {
    title: "Web3 Solutions",
    slug: "web3-solutions",
    icon: Blocks,
    description: "Blockchain, dApps & smart contract development.",
    detail: "Build blockchain-powered products and digital ecosystems.",
    offerings: [
      "Smart contracts",
      "dApps",
      "NFT platforms",
      "Wallet integration",
      "Token systems",
      "Web3 communities",
    ],
    tools: [
      "Solidity",
      "Ethers",
      "Hardhat",
      "WalletConnect",
      "IPFS",
      "Polygon",
    ],
  },
  {
    title: "Management & Consulting",
    slug: "management-consulting",
    icon: Compass,
    description: "Streamline operations and maximize growth.",
    detail:
      "Help businesses improve operations, digital strategy and growth systems.",
    offerings: [
      "Digital transformation consulting",
      "Product strategy",
      "Business process optimization",
      "Tech advisory",
      "Growth systems",
      "Automation planning",
    ],
    tools: ["Notion", "Airtable", "Zapier", "Analytics", "CRM", "Roadmapping"],
  },
];

export const stats = [
  { label: "Happy Clients", value: 50, suffix: "+", icon: Users },
  { label: "Projects Completed", value: 100, suffix: "+", icon: CheckCircle2 },
  { label: "Years Experience", value: 5, suffix: "+", icon: Rocket },
  { label: "Clientele", value: 0, suffix: "Global", icon: Globe2 },
];

export const caseStudies = [
  {
    title: "Pingit",
    slug: "ecommerce-platform",
    category: "Websites",
    description:
      "Online retail system with payments, inventory and conversion funnels.",
    imageUrl: "/work/pingit.png",
    codeUrl: "https://github.com/iamjohncaleb",
    demoUrl: "https://pingitng.com/",
  },
  {
    title: "Edenify",
    slug: "AI-diagnostics-website",
    category: "Websites",
    description:
      "EDENify turns scattered interests, unclear direction, or rough startup ideas into a specific, scored, testable opportunity using the ARIT framework.",
    imageUrl: "/work/edenify.png",
    codeUrl: "https://github.com/iamjohncaleb",
    demoUrl: "https://ede-nify.vercel.app/",
  },
  {
    title: "CallyPay",
    slug: "mobile-finance-app",
    category: "Apps",
    description:
      "A secure mobile product for payments, dashboards and account insights.",
    imageUrl: "/work/callypay.png",
    codeUrl: "https://github.com/iamjohncaleb",
    demoUrl:
      "https://github.com/iamjohncaleb/CallyPay/blob/7fb528fa19a0471901554e7e2bae46a74dbb7f7e/callyPay%20thumbnail.png",
  },
  {
    title: "Crypto Marketplace",
    slug: "Crypto-Marketplace",
    category: "Web3",
    description: "Token-gated community experience with wallet integrations.",
    imageUrl: "/work/crypto-marketplace.png",
    codeUrl: "https://github.com/iamjohncaleb",
    demoUrl: "https://github.com/iamjohncaleb",
  },
  {
    title: "SaaS Dashboard",
    slug: "saas-dashboard",
    category: "UI/UX",
    description:
      "Data-heavy product interface redesigned for clarity and speed.",
    imageUrl: "/work/saas-dashboard.png",
    codeUrl: "https://github.com/iamjohncaleb",
    demoUrl: "https://github.com/iamjohncaleb",
  },
  {
    title: "Brand Identity System",
    slug: "brand-identity-system",
    category: "Branding",
    description:
      "Visual identity, graphics and launch assets for a modern brand.",
    imageUrl: "/work/brand-identity-system.png",
    codeUrl: "https://github.com/iamjohncaleb",
    demoUrl: "https://github.com/iamjohncaleb",
  },
];

export const posts = [
  {
    title: "How Digital Products Help Businesses Scale",
    slug: "how-digital-products-help-businesses-scale",
    category: "Strategy",
  },
  {
    title: "Why Every Brand Needs a Strong Website",
    slug: "why-every-brand-needs-a-strong-website",
    category: "Web",
  },
  {
    title: "The Future of Web3 for African Businesses",
    slug: "the-future-of-web3-for-african-businesses",
    category: "Web3",
  },
  {
    title: "UI/UX Mistakes That Kill Conversions",
    slug: "ui-ux-mistakes-that-kill-conversions",
    category: "Design",
  },
  {
    title: "How to Plan a Successful App Project",
    slug: "how-to-plan-a-successful-app-project",
    category: "Apps",
  },
];

export const process = [
  "Discovery",
  "Strategy",
  "Design",
  "Development",
  "Launch",
  "Growth",
];

export const web3Builds = [
  { title: "Smart Contracts", icon: ShieldCheck },
  { title: "dApps", icon: AppWindow },
  { title: "NFT Platforms", icon: Sparkles },
  { title: "Token-Based Communities", icon: Users },
  { title: "Web3 Landing Pages", icon: Layers3 },
  { title: "Blockchain Integrations", icon: WalletCards },
];

export const values = [
  { title: "Innovation", icon: Lightbulb },
  { title: "Excellence", icon: Sparkles },
  { title: "Speed", icon: Zap },
  { title: "Strategy", icon: Compass },
  { title: "Trust", icon: Handshake },
  { title: "Scalability", icon: Rocket },
];
