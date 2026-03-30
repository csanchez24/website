export type NavigationLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type HeroContent = {
  name: string;
  headline: string;
  supportingCopy: string;
  strengths: string[];
};

export type ProofPoint = {
  value: string;
  label: string;
};

export type SelectedProject = {
  eyebrow: string;
  title: string;
  summary: string;
  outcome: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  tone?: "primary" | "secondary";
};

export type DetailedProject = {
  category: string;
  title: string;
  tech: string[];
  challenge: string;
  approach: string;
  outcome: string;
  links?: ProjectLink[];
};

export type ExperienceHighlight = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export type ContactChannel = {
  label: string;
  title: string;
  href: string;
  body: string;
  secondaryLine?: string;
  external: boolean;
  featured?: boolean;
};

export const navigationLinks: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/carlos-sanchez-resume.pdf", label: "Resume", external: true },
  { href: "/contact", label: "Contact" },
];

export const hero: HeroContent = {
  name: "Carlos J. Sanchez",
  headline:
    "Full-Stack Software Engineer with 15+ years of experience building business software, integrations, and customer-facing products.",
  supportingCopy:
    "Experienced across JavaScript, TypeScript, React, Next.js, Node.js, Laravel, SQL, CI/CD, and API integrations. I build internal platforms, customer portals, e-commerce flows, and operational systems that support real business workflows.",
  strengths: [
    "Internal Platforms",
    "API Integrations",
    "Customer Portals",
    "CI/CD & Delivery",
  ],
};

export const proofPoints: ProofPoint[] = [
  { value: "15+", label: "Years of software engineering experience" },
  { value: "40%", label: "Manual workload reduced through automation" },
  {
    value: "6",
    label: "Platforms integrated across ERP, CRM, e-commerce, and events",
  },
  { value: "4", label: "Applications moved onto CI/CD pipelines" },
  { value: "20+", label: "Landing pages shipped through a reusable system" },
  { value: "8", label: "Developers led across enterprise software projects" },
];

export const selectedProjects: SelectedProject[] = [
  {
    eyebrow: "Platform Integrations • Node.js • APIs • ERP/CRM/E-commerce",
    title: "Operational data flows across six business systems",
    summary:
      "Connected NetSuite, Salesforce, HubSpot, Shopify, Eventbrite, and Bizzabo to eliminate manual re-entry and keep customer, order, and event data in sync.",
    outcome:
      "Reduced manual work by 40% and removed the lag between sales, operations, and event workflows.",
  },
  {
    eyebrow: "Customer Product • Next.js • Nx • Shopify GraphQL",
    title: "Garment customization flow for Garmeo",
    summary:
      "Built the customer-facing experience for uploading artwork, positioning it live, and previewing custom garments before checkout.",
    outcome:
      "Delivered an end-to-end product flow that made customization feel immediate instead of manual.",
  },
  {
    eyebrow: "Portal Experience • Laravel • Vue • SQL",
    title: "Ricoma customer portal",
    summary:
      "Created a self-service portal for training content, referral rewards, and purchase history so customers could resolve common needs without support.",
    outcome:
      "Improved customer autonomy and reduced support dependency for repeat workflows.",
  },
];

export const detailedProjects: DetailedProject[] = [
  {
    category: "Identity & Access Platform",
    title: "IAM for multi-application access control",
    tech: [
      "Next.js",
      "PostgreSQL",
      "Redis",
      "authentication",
      "RBAC",
      "API clients",
      "audit logs",
    ],
    challenge:
      "Businesses operating multiple applications needed a centralized way to manage authentication, roles, permissions, and secure access across connected systems.",
    approach:
      "Designed and built an IAM product that centralizes login, token-based access, users, roles, permissions, application-scoped access control, API clients, and auditability across business applications.",
    outcome:
      "Delivered a real working IAM product that was strong enough to be purchased by a company in Colombia as the foundation for secure multi-application access management.",
    links: [
      {
        label: "Live app",
        href: "https://iam.qodari.com/",
        tone: "primary",
      },
    ],
  },
  {
    category: "Platform Integrations",
    title:
      "Real-time integrations across ERP, CRM, e-commerce, and event platforms",
    tech: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "webhooks",
      "NetSuite",
      "Salesforce",
      "HubSpot",
      "Shopify",
      "Eventbrite",
      "Bizzabo",
    ],
    challenge:
      "Teams were re-entering the same customer, order, and event data into multiple systems, creating delays and inconsistencies.",
    approach:
      "Designed and implemented automation flows that synced data across six platforms in real time, with clear logic around ownership and updates.",
    outcome:
      "Reduced manual workload by 40% and turned fragmented operational steps into a connected system.",
  },
  {
    category: "Customer-Facing Product",
    title: "Garmeo customization experience",
    tech: [
      "Next.js",
      "Nx",
      "Shopify GraphQL",
      "JavaScript",
      "image manipulation workflows",
    ],
    challenge:
      "Customers needed a reliable way to preview personalized garments before purchase without a slow offline review process.",
    approach:
      "Built the full product flow for uploads, positioning, resizing, and previewing designs directly in the web experience.",
    outcome:
      "Delivered a product flow that made customization interactive, immediate, and purchase-ready inside the storefront.",
    links: [
      {
        label: "Visit website",
        href: "https://www.garmeo.com/",
        tone: "primary",
      },
    ],
  },
  {
    category: "Customer Portal",
    title: "Self-service portal for Ricoma customers",
    tech: ["Laravel", "Vue", "PHP", "SQL"],
    challenge:
      "Support teams were handling repeat customer questions around training, referrals, and order history.",
    approach:
      "Developed a centralized portal that gave customers direct access to training resources, referral rewards, and purchase history.",
    outcome:
      "Reduced support dependency by moving recurring customer workflows into a single self-service platform.",
  },
  {
    category: "Product Website & CMS",
    title: "Website with reusable content architecture",
    tech: [
      "Next.js",
      "Sanity CMS",
      "content modeling",
      "reusable sections",
      "SEO",
      "multilingual structure",
    ],
    challenge:
      "Needed a scalable website to present multiple software products clearly, support solution-based selling, and make it easy to expand content over time.",
    approach:
      "Built a Next.js website with Sanity CMS, modular sections, reusable page-building blocks, structured content, and solution pages for IAM and other business software offerings.",
    outcome:
      "Created a flexible product marketing site that supports software positioning, solution expansion, and communication of real offerings built under Qodari.",
    links: [
      {
        label: "Visit website",
        href: "https://qodari.com/",
        tone: "primary",
      },
    ],
  },
  {
    category: "Enterprise Platform",
    title: "Unified operational platform across business domains",
    tech: [
      "REST APIs",
      "enterprise workflows",
      "AngularJS",
      "React Native",
      "payroll systems",
    ],
    challenge:
      "Business processes across subsidies, housing, loans, HR, and affiliate workflows were fragmented across separate systems and teams.",
    approach:
      "Proposed and helped architect a unified platform strategy, contributed to enterprise workflow implementation, and supported delivery across web and mobile surfaces.",
    outcome:
      "Helped centralize operational workflows, improve system coordination, and support multi-domain enterprise software delivery across large organizations.",
  },
  {
    category: "Delivery System",
    title: "Reusable landing page platform",
    tech: [
      "Astro",
      "Tailwind CSS",
      "JSON-driven content",
      "component architecture",
    ],
    challenge:
      "Marketing pages were too slow to produce because each one required too much bespoke implementation work.",
    approach:
      "Built a reusable component system powered by structured content so new pages could be assembled quickly with consistent quality.",
    outcome:
      "Supported 20+ landing pages and reduced turnaround time from days to hours.",
  },
];

export const experienceHighlights: ExperienceHighlight[] = [
  {
    company: "Ricoma",
    role: "Full-Stack Software Engineer",
    period: "2020 to Present",
    summary:
      "Built real-time integrations, CI/CD pipelines, a customer portal, and a modern customization experience tied to e-commerce workflows.",
  },
  {
    company: "Simplistics",
    role: "Full-Stack Web Developer",
    period: "2022 to 2024",
    summary:
      "Delivered client websites and built an internal monitoring platform for reliability, environment visibility, and support operations.",
  },
  {
    company: "Sistemas y Soluciones Integradas",
    role: "Software Engineer to Team Lead",
    period: "2009 to 2020",
    summary:
      "Built enterprise platforms across payroll, mobile, and operational systems, and led a team of 8 developers across 17+ software projects.",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    title: "carlosjosesancheze@gmail.com",
    href: "mailto:carlosjosesancheze@gmail.com",
    body: "Best option for recruiters, hiring managers, or role discussions.",
    external: false,
    featured: true,
  },
  {
    label: "LinkedIn",
    title: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/carlosjsancheze/",
    body: "Use this for a quick profile overview or if you prefer to connect there first.",
    secondaryLine: "linkedin.com/in/carlosjsancheze",
    external: true,
  },
  {
    label: "GitHub",
    title: "View GitHub profile",
    href: "https://github.com/csanchez24",
    body: "Useful for code samples, experiments, and repository activity.",
    secondaryLine: "github.com/csanchez24",
    external: true,
  },
  {
    label: "Resume",
    title: "Download PDF",
    href: "/carlos-sanchez-resume.pdf",
    body: "A concise version of my experience, stack, and outcomes for hiring processes and screening.",
    external: false,
  },
];
