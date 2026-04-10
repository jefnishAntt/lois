import { label } from "framer-motion/client";
import { Award, ClipboardCheck, DraftingCompass, Eye, HardHat, LineChart, ShieldCheck, Timer, Users } from "lucide-react";
import { Reason } from "./app/page";



export const NAV_LINKS = [
    {
        id: 1,
        label: "Home",
        path: "#"
    },
    {
        id: 2,
        label: "About Us",
        path: "#about_us"
    },
    {
        id: 3,
        label: "Services",
        path: "#services"
    },
    {
        id: 4,
        label: "Contact",
        path: "#contact"
    },
]

export const REASONS: Reason[] = [
  {
    title: "Engineering Excellence",
    description: "We apply a rigorous, experienced engineering approach to every structural challenge.",
    icon: HardHat,
  },
  {
    title: "Quality First",
    description: "Uncompromising focus on premium materials and master-level workmanship.",
    icon: Award,
  },
  {
    title: "Full Transparency",
    description: "Clear project planning and honest execution—no hidden costs or surprises.",
    icon: Eye,
  },
  {
    title: "Client-Centric Design",
    description: "Your vision is our blueprint. We specialize in deep customization and adaptive planning.",
    icon: Users,
  },
];


export const APPROACH = [
  {
    title: "Understanding Client Requirements",
    description: "We begin with in-depth consultations to align our technical strategy with your core business objectives.",
    icon: ClipboardCheck,
  },
  {
    title: "Planning and Design Development",
    description: "Utilizing advanced modeling to create robust blueprints that prioritize scalability and structural integrity.",
    icon: DraftingCompass,
  },
  {
    title: "Budget Optimization & Material Selection",
    description: "Strategic sourcing and cost-engineering to ensure premium quality without compromising fiscal efficiency.",
    icon: LineChart,
  },
  {
    title: "Execution & Quality Control",
    description: "Rigorous adherence to international standards with multi-phase inspections at every milestone.",
    icon: ShieldCheck,
  },
  {
    title: "Timely Project Completion",
    description: "Agile project management ensures we deliver high-performance results within the stipulated timeframe.",
    icon: Timer,
  },
];