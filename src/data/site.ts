import web from "@/assets/web.jpg";
import mobile from "@/assets/mobile.jpg";
import design from "@/assets/design.jpg";
import cloud from "@/assets/cloud.jpg";
import flowdesk from "@/assets/flowdesk.jpg";
import pulseboard from "@/assets/pulseboard.jpg";
import cartsuite from "@/assets/cartsuite.jpg";
import platforms from "@/assets/platforms.jpg";

export type CatalogItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  detail: string;
  points: string[];
};

export const services: CatalogItem[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "High-performance websites and applications built on modern, maintainable foundations.",
    image: web,
    detail:
      "We design and build web platforms that stay fast under real traffic and stay easy to change months after launch. Every engagement starts with the architecture decisions that matter most and ends with a codebase your team can own.",
    points: [
      "Modern React and TypeScript foundations",
      "Performance and accessibility budgets from day one",
      "Automated testing and continuous delivery",
      "Documentation and handover built into the work",
    ],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    description:
      "Thoughtful iOS and Android experiences from prototype through store launch.",
    image: mobile,
    detail:
      "From the first clickable prototype to store submission, we build mobile products that feel native, ship on schedule, and keep improving after release.",
    points: [
      "Prototype-first validation",
      "Native-feeling interaction and motion",
      "Offline, sync and notification strategy",
      "Release management and store readiness",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI & UX Design",
    description:
      "Research-led product design that makes complex workflows feel direct and intuitive.",
    image: design,
    detail:
      "We start with the work people are actually trying to finish, then design the shortest credible path to it. The result is an interface that reduces training, support load, and hesitation.",
    points: [
      "Discovery interviews and workflow mapping",
      "Design systems that scale with the product",
      "Prototyping and usability validation",
      "Close pairing with engineering",
    ],
  },
  {
    slug: "cloud-data-ai",
    title: "Cloud, Data & AI",
    description:
      "Infrastructure, automation and applied intelligence designed around measurable value.",
    image: cloud,
    detail:
      "We build the pipelines, platforms and models that turn scattered data into decisions — with cost, reliability and governance treated as first-class requirements.",
    points: [
      "Cloud architecture and cost control",
      "Data pipelines and warehousing",
      "Applied AI with clear evaluation criteria",
      "Observability and incident readiness",
    ],
  },
];

export const products: CatalogItem[] = [
  {
    slug: "flowdesk",
    title: "FlowDesk",
    description:
      "A clear, lightweight project and task workspace for focused engineering teams.",
    image: flowdesk,
    detail:
      "FlowDesk keeps planning close to the work. Boards, threads and releases sit in one calm surface, without the ceremony of heavyweight project suites.",
    points: [
      "Boards, sprints and roadmaps in one place",
      "Keyboard-first navigation",
      "Git and CI integrations",
      "Lightweight reporting that people read",
    ],
  },
  {
    slug: "pulseboard",
    title: "Pulseboard",
    description:
      "Live business dashboards that bring essential signals into one dependable view.",
    image: pulseboard,
    detail:
      "Pulseboard connects your operational sources and renders the handful of numbers that actually drive a decision, refreshed continuously.",
    points: [
      "Real-time metric streaming",
      "Alerting on thresholds and anomalies",
      "Shareable executive views",
      "Warehouse and API connectors",
    ],
  },
  {
    slug: "cartsuite",
    title: "CartSuite",
    description:
      "A fast headless commerce foundation for brands ready to own their customer experience.",
    image: cartsuite,
    detail:
      "CartSuite separates storefront from commerce logic so your team can ship merchandising ideas weekly without waiting on a platform release cycle.",
    points: [
      "Headless storefront APIs",
      "Checkout and payment orchestration",
      "Catalog, pricing and promotions",
      "Edge-rendered performance",
    ],
  },
  {
    slug: "custom-platforms",
    title: "Custom Platforms",
    description:
      "Domain-specific systems built with the same product rigor as our own tools.",
    image: platforms,
    detail:
      "When nothing off the shelf fits, we build the system your operation deserves — designed, engineered and supported like a product, not a project.",
    points: [
      "Discovery and domain modelling",
      "Long-lived architecture",
      "Role-based access and audit trails",
      "Ongoing product partnership",
    ],
  },
];

export const projects = [
  {
    slug: "northwind-logistics",
    title: "Northwind Logistics",
    result: "Cut dispatch planning time by 63% with a rebuilt routing console.",
    image: web,
  },
  {
    slug: "atlas-health",
    title: "Atlas Health",
    result: "Launched a patient companion app to 40k users in eleven weeks.",
    image: mobile,
  },
  {
    slug: "meridian-retail",
    title: "Meridian Retail",
    result: "Headless replatform lifted mobile conversion by 28%.",
    image: cartsuite,
  },
  {
    slug: "corev-analytics",
    title: "Corev Analytics",
    result: "Unified twelve data sources into a single live operating view.",
    image: pulseboard,
  },
  {
    slug: "harbor-labs",
    title: "Harbor Labs",
    result: "Applied AI triage removed 4,000 manual reviews a month.",
    image: cloud,
  },
];

export const posts = [
  {
    slug: "shipping-software-that-survives",
    title: "Shipping software that survives its second year",
    excerpt:
      "Most systems don't fail at launch. They fail when the third team inherits them. Here's how we design for that moment.",
    date: "2026-08-18",
    image: web,
  },
  {
    slug: "design-systems-that-earn-their-keep",
    title: "Design systems that earn their keep",
    excerpt:
      "A component library is not a design system. What actually reduces delivery time across product teams.",
    date: "2026-07-02",
    image: design,
  },
  {
    slug: "applied-ai-without-the-theatre",
    title: "Applied AI without the theatre",
    excerpt:
      "How we scope intelligence features so they ship with measurable value instead of a demo and a shrug.",
    date: "2026-05-27",
    image: cloud,
  },
  {
    slug: "the-cost-of-a-slow-checkout",
    title: "The real cost of a slow checkout",
    excerpt:
      "Latency is a pricing decision. A short field guide to commerce performance work that pays for itself.",
    date: "2026-04-11",
    image: cartsuite,
  },
];

export const stats = [
  { value: "120+", label: "Projects" },
  { value: "40+", label: "Clients" },
  { value: "30+", label: "Products shipped" },
  { value: "6 yrs", label: "Building" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/why-us", label: "Why Us" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blogs" },
] as const;
