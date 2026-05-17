export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  theme: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "spiritx",
    title: "SpiritX Delivery Ecosystem",
    subtitle: "Real-time multi-platform delivery infrastructure",
    description:
      "A scalable multi-platform delivery infrastructure with realtime tracking, authentication systems, and workflow-driven architecture. Engineered for high-throughput operations across web and mobile interfaces.",
    features: [
      "OTP Authentication",
      "Realtime Tracking",
      "Order Lifecycle Management",
      "Rider Workflow Systems",
      "Payment Integration",
      "Refund Handling",
    ],
    stack: [
      "React",
      "Next.js",
      "FastAPI",
      "Firebase",
      "TypeScript",
      "REST APIs",
    ],
    theme: "delivery",
    year: "2024",
  },
  {
    id: "ortiz",
    title: "Ortiz Bros Shipping Platform",
    subtitle: "Enterprise logistics management system",
    description:
      "Designed and developed a responsive logistics platform focused on performance, scalability, and modern user experience. Built to handle complex route management and shipment lifecycle workflows at enterprise scale.",
    features: [
      "Route Optimization",
      "Shipment Tracking",
      "Multi-carrier Integration",
      "Analytics Dashboard",
      "Customer Portal",
      "Document Management",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "TailwindCSS",
    ],
    theme: "logistics",
    year: "2024",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
