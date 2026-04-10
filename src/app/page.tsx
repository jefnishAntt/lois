"use client";

import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Play,
  ArrowUpRight,
  Ruler,
  Building2,
  ShieldCheck,
  TreePine,
  CheckCircle2,
  Search,
  Zap,
  Building,
  Layout,
  Hammer,
  HardHat,
  ClipboardList,
  Landmark,
  PenTool,
  RefreshCcw,
  Compass,
  Award,
  Shield,
  HeartHandshake,
  Briefcase,
  LayoutGrid,
  TrainFront,
  Users,
  Eye,
  Leaf,
  LucideIcon,
} from "lucide-react";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { APPROACH, REASONS } from "@/config";

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const highlights = [
  {
    title: "Engineering-First Approach",
    desc: "Our structural background ensures every aesthetic choice is backed by rigorous technical integrity.",
    icon: <Award className="text-blue-600" />,
  },
  {
    title: "Premium Workmanship",
    desc: "We source only high-grade materials and partner with master craftsmen for a flawless finish.",
    icon: <Shield className="text-blue-600" />,
  },
  {
    title: "Total Transparency",
    desc: "Detailed project planning and real-time execution updates. No hidden costs, no surprises.",
    icon: <Zap className="text-blue-600" />,
  },
  {
    title: "Client-Centric Customization",
    desc: "Your vision is our blueprint. We adapt our designs to fit your lifestyle and functional needs.",
    icon: <HeartHandshake className="text-blue-600" />,
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Requirements",
    desc: "Deep-dive sessions to understand your functional needs and aesthetic goals.",
  },
  {
    number: "02",
    title: "Strategic Design",
    desc: "Engineering-led planning where design meets structural feasibility.",
  },
  {
    number: "03",
    title: "Budget Optimization",
    desc: "Precise material selection and cost-efficiency analysis without compromising quality.",
  },
  {
    number: "04",
    title: "Controlled Execution",
    desc: "Rigorous quality control and on-site management through every build phase.",
  },
  {
    number: "05",
    title: "Delivery & Handover",
    desc: "Final inspections and timely project completion to get you in your space faster.",
  },
];
type ServiceCardProps = {
  title: string;
  description: string;
  Icon: React.ElementType;
  imageUrl: string;
  linkText?: string;
};
const servicesData: ServiceCardProps[] = [
  {
    title: "Residential Construction",
    description:
      "From conceptual design to turnkey delivery, we build modern, energy-efficient homes tailored to your lifestyle.",
    Icon: Briefcase,
    imageUrl: "/images/services/residential.jpg",
  },
  {
    title: "Commercial Construction",
    description:
      "We deliver cutting-edge commercial spaces, retail centers, and multi-use developments that meet modern business demands.",
    Icon: Building2,
    imageUrl: "/images/services/commercial.jpg",
  },
  {
    title: "Interior Design & Space Planning",
    description:
      "Our certified designers transform spaces to maximize functionality, aesthetics, and user experience.",
    Icon: LayoutGrid,
    imageUrl: "/images/services/interior.jpg",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Modernizing existing structures, from historic renovations to complete property transformations.",
    Icon: Hammer,
    imageUrl: "/images/services/renovation.jpg",
  },
  {
    title: "Infrastructure & Civil Works",
    description:
      "We manage large-scale civil engineering projects, including roads, bridges, and essential utility networks.",
    Icon: TrainFront,
    imageUrl: "/images/services/infrastructure.jpg",
  },
  {
    title: "Project Planning & Consultation",
    description:
      "Strategic advice, feasibility studies, and robust project management to ensure successful project execution.",
    Icon: HardHat,
    imageUrl: "/images/services/planning.jpg",
  },
];
const ServiceCard = ({
  title,
  description,
  Icon,
  imageUrl,
  className,
}: ServiceCardProps & { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-white border border-[var(--color-primary-50)] flex flex-col p-8 md:p-12 min-h-[420px] transition-all duration-700 hover:shadow-3xl hover:-translate-y-2 ${className}`}
    >
      {/* Background Image Reveal with Professional Scrim */}
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `linear-gradient(to top, var(--color-primary-950) 0%, rgba(19, 23, 41, 0.4) 60%, transparent 100%), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 h-full flex flex-col">
        {/* Icon Container */}
        <div className="mb-auto">
          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary-700)] group-hover:bg-white/10 group-hover:text-white group-hover:backdrop-blur-md border border-transparent group-hover:border-white/20 transition-all duration-500">
            <Icon size={28} strokeWidth={1.2} />
          </div>
        </div>

        <div className="mt-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-900)] mb-4 group-hover:text-white transition-colors duration-300 tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-[var(--color-slate-500)] group-hover:text-slate-300 transition-colors duration-300 text-sm md:text-base leading-relaxed mb-8 max-w-[280px]">
            {description}
          </p>

          <div className="flex items-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[var(--color-primary-900)] shadow-xl">
              <ArrowRight size={18} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              View Project Case
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const properties = [
  {
    title: "Luxury Villa Retreat",
    location: "Serene Heights, Silicon Valley",
    img: "/images/prop-1.jpg",
  },
  {
    title: "Cityscape Penthouse",
    location: "Skyline Towers, Metro City",
    img: "/images/prop-2.jpg",
  },
  {
    title: "Seaside Dream Home",
    location: "Coastal Haven, Ocean Blue",
    img: "/images/prop-3.jpg",
  },
];
export default function Home() {
  const containerRef = useRef(null);
  const leftReasons = REASONS.slice(0, 2);
  const rightReasons = REASONS.slice(2, 4);
  return (
    <main className="relative min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
     <section className="relative min-h-screen bg-white overflow-hidden selection:bg-[var(--color-primary-100)] selection:text-[var(--color-primary-900)]">
      {/* --- Main Content --- */}
      <div className="container mx-auto grid min-h-screen grid-cols-12 items-center px-6 pt-20">
        
        {/* Text Column */}
        <div className="col-span-12 lg:col-span-5 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="mb-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-primary-500)]">
              <span className="h-px w-6 bg-[var(--color-primary-500)]" />
              Architecture & Engineering
            </span>
            
            <h1 className="mb-8 font-bebas text-7xl md:text-9xl leading-[0.85] text-[var(--color-primary-950)] uppercase">
              Designing <br />
              <span className="font-serif italic text-[var(--color-primary-300)] normal-case tracking-tight lowercase">
                Future
              </span>{" "}
              Space.
            </h1>
            
            <p className="mb-10 max-w-md text-base md:text-lg leading-relaxed text-slate-500">
              Lois Infrastructure orchestrates environments where structural integrity meets 
              uncompromising luxury. Precision-built for the next generation.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <button className="group flex items-center gap-4 rounded-full bg-[var(--color-primary-900)] px-10 py-5 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-[var(--color-primary-700)] active:scale-95">
                Explore Projects
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-[var(--color-primary-900)] transition-colors">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-primary-100)] bg-white transition-all group-hover:bg-[var(--color-primary-50)] group-hover:border-[var(--color-primary-300)]">
                  <Play fill="currentColor" size={14} className="ml-1" />
                </div>
                Watch Film
              </button>
            </div>
          </motion.div>
        </div>

        {/* Visual Column (No Shadows) */}
        <div className="absolute right-0 top-0 hidden h-full w-[60%] lg:block">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full overflow-hidden"
          >
            <img
              src="/images/hero-5.png" 
              alt="Luxury Architecture"
              className="h-full w-full object-contain object-center scale-110"
              draggable={false}
            />

            {/* Subtle Gradient Scrim - Refined */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[var(--color-primary-50)] via-white to-white" />

            {/* Floating Metric Card (Flat Design - No Shadows) */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-24 right-20 rounded-2xl border border-[var(--color-primary-100)] bg-white/80 p-8 backdrop-blur-md"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-bebas text-5xl tracking-tighter text-[var(--color-primary-950)]">
                  2026
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary-500)]">
                  Excellence Award
                </span>
              </div>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-tight text-slate-400">
                Safety Standards & Innovation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
            Scroll
          </span>
          <div className="h-12 w-px bg-slate-200" />
        </motion.div>
      </div>
    </section>
      {/* --- Projects Section --- */}
      <section className="relative bg-[var(--color-primary-50)] py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bebas text-6xl md:text-8xl text-[var(--color-primary-950)] leading-[0.9] uppercase"
          >
            Featured <br />
            <span className="font-serif italic text-[var(--color-primary-300)] normal-case tracking-tight">
              Developments
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-[var(--color-slate-500)] text-lg leading-relaxed mx-auto lg:mx-0"
          >
            A curated selection of Lois Infrastructure’s most iconic achievements, 
            bridging the gap between structural integrity and modern aesthetics.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Property Cards */}
          {properties.map((prop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative col-span-12 md:col-span-6 lg:col-span-3 aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-white border border-[var(--color-primary-100)]"
            >
              {/* Image with high-end grayscale hover effect */}
              <div
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${prop.img})` }}
              />

              {/* Flat Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-950)]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Content Layer */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:translate-x-1 transition-transform">
                  {prop.title}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-primary-200)]">
                  {prop.location}
                </p>
                
                {/* Visual Accent: Flat line that grows on hover */}
                <div className="mt-4 h-[2px] w-0 bg-[var(--color-primary-400)] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}

          {/* Info Box (Flat Design) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-3 flex flex-col justify-center p-8 lg:p-10 bg-white rounded-[1.5rem] border border-[var(--color-primary-100)]"
          >
            <h4 className="font-bebas text-4xl text-[var(--color-primary-950)] mb-6 leading-none uppercase">
              Spaces Built for <br />
              <span className="text-[var(--color-primary-400)]">Life</span>
            </h4>
            <p className="text-[var(--color-slate-500)] text-sm leading-relaxed mb-6">
              Our specialists guide you through every structural detail to 
              ensure your investment is built with the precision of a master architect.
            </p>
            <div className="h-px w-12 bg-[var(--color-primary-200)]" />
          </motion.div>

        </div>
      </div>
    </section>
      {/* --- Services Section --- */}
      <section className="py-20 md:py-32 bg-background overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Professional Header Stack */}
          <header className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-full"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-400)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary-600)]"></span>
                </span>
                Expertise
              </motion.div>

              <h2 className="text-5xl md:text-8xl font-bebas text-[var(--color-primary-900)] mb-6 leading-[0.9] uppercase">
                Our{" "}
                <span className="font-serif italic font-light text-[var(--color-primary-300)] normal-case tracking-normal">
                  Capabilities
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-slate-500)] leading-relaxed max-w-xl">
                Engineering the future through precision construction and
                strategic infrastructure development.
              </p>
            </div>

            <motion.a
              whileHover={{ x: 5 }}
              href="#all-services"
              className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary-900)] self-start lg:self-end border-b border-transparent hover:border-[var(--color-primary-700)] pb-2 transition-all"
            >
              Explore all services
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-primary-100)] group-hover:bg-[var(--color-primary-700)] group-hover:text-white transition-all duration-500">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.a>
          </header>

          {/* Bento-Style Senior Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {servicesData.map((service, index) => {
              const getSpanClass = (i: number) => {
                if (i === 0) return "lg:col-span-3 md:col-span-2";
                if (i === 1 || i === 2) return "lg:col-span-3 md:col-span-1";
                if (i === 3) return "lg:col-span-2 md:col-span-1";
                if (i === 4) return "lg:col-span-4 md:col-span-2";
                return "lg:col-span-2 md:col-span-1";
              };

              return (
                <ServiceCard
                  key={index}
                  {...service}
                  className={getSpanClass(index)}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* Our Approach Section */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        {/* Background Accent - Refined with brand primary */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-[var(--color-primary-50)]/30 md:-skew-x-12 md:translate-x-1/3 -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <header className="relative z-10 mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[var(--color-primary-500)]">
                Execution Strategy
              </h2>
              <h3 className="font-bebas text-5xl sm:text-7xl md:text-8xl text-[var(--color-primary-700)] leading-none uppercase">
                How we <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-primary-300)]">
                  materialize
                </span>{" "}
                visions.
              </h3>
            </motion.div>
          </header>

          <div className="relative">
            {/* Vertical Timeline Rail */}
            <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-primary-100)] md:-translate-x-1/2 z-0" />

            <div className="flex flex-col gap-10 md:gap-0">
              {APPROACH.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`relative z-10 flex flex-col md:flex-row items-start md:items-center justify-center w-full md:mb-20 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                        isEven
                          ? "md:text-right md:pr-12"
                          : "md:text-left md:pl-12"
                      }`}
                    >
                      <div className="relative group">
                        {/* Brand-consistent Background Numbers */}
                        <span
                          className={`absolute -top-6 md:-top-10 left-0 md:left-auto ${isEven ? "md:right-0" : "md:left-0"} text-6xl md:text-8xl font-black text-[var(--color-primary-50)] select-none -z-10 transition-colors pointer-events-none`}
                        >
                          0{index + 1}
                        </span>

                        <div className="inline-flex p-3 rounded-xl bg-white shadow-sm border border-[var(--color-primary-100)] mb-4 text-[var(--color-primary-700)] group-hover:bg-[var(--color-primary-700)] group-hover:text-white transition-all duration-300">
                          <step.icon
                            size={20}
                            className="md:w-6 md:h-6"
                            strokeWidth={1.5}
                          />
                        </div>

                        <h4 className="text-lg md:text-xl font-bold text-[var(--color-primary-900)] mb-2">
                          {step.title}
                        </h4>
                        <p className="text-[var(--color-slate-500)] text-sm md:text-base leading-relaxed max-w-sm md:ml-auto md:mr-0">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Central Node Dot */}
                    <div className="absolute left-2 md:left-1/2 w-3 h-3 rounded-full bg-white border-2 border-[var(--color-primary-500)] -translate-x-1/2 z-20 shadow-[0_0_0_4px_white]" />

                    {/* Spacer for desktop */}
                    <div className="hidden md:block md:w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Closing CTA Box - Refined with brand slate and gradients */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 rounded-3xl bg-[var(--color-slate-900)] text-white overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-500)]/10 blur-[100px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-lg">
                <h5 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                  Ready to break ground?
                </h5>
                <p className="text-slate-400 text-xs md:text-sm">
                  Our systematic framework ensures your project is delivered on
                  time, within budget, and beyond expectations.
                </p>
              </div>
              <button className="w-full md:w-auto px-6 py-3 bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-black/20">
                Start Consultation <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-[var(--background)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Editorial Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--color-primary-500)] mb-4 block"
            >
              The Distinction
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bebas text-[var(--color-primary-900)] mb-6 leading-none uppercase">
              Why partner with{" "}
              <span className="text-[var(--color-primary-300)] font-serif lowercase italic tracking-normal">
                Lois
              </span>
            </h2>
            <div className="h-1 w-12 bg-[var(--color-primary-500)] mx-auto rounded-full" />
          </div>

          <div className="grid items-center grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-12 md:gap-20">
              {leftReasons.map((reason, idx) => (
                <ReasonCard key={idx} {...reason} isRight={true} />
              ))}
            </div>

            {/* Center Column: The Visual Anchor */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[320px] md:max-w-[550px]">
                {/* Image Container with Brand Frame */}
                <div className="relative z-10 w-full overflow-hidden">
                  {/* Floating Sustainability Badge */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-white/20 rounded-full shadow-xl whitespace-nowrap transition-transform hover:scale-105 duration-300">
                    <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full">
                      <Leaf size={12} className="text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[var(--color-primary-950)]">
                      Eco-Certified Materials
                    </span>
                  </div>

                  <Image
                    src="/images/why_choose_us.png"
                    alt="Construction Excellence"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute -inset-4 border border-[var(--color-primary-100)] rounded-[3.5rem] -z-10" />
                <div className="absolute -inset-8 border border-[var(--color-primary-50)] rounded-[4rem] -z-20 opacity-50" />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3 order-3 lg:order-3 flex flex-col gap-12 md:gap-20">
              {rightReasons.map((reason, idx) => (
                <ReasonCard key={idx} {...reason} isRight={false} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- About Us Section --- */}
      <section className="relative bg-[var(--color-primary-50)] py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left side: Visual Composition (No Shadows) */}
          <div className="relative col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              {/* Primary Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-[90%] h-[85%] rounded-[1.5rem] overflow-hidden border border-[var(--color-primary-200)] z-10"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
                  style={{ backgroundImage: `url('/images/modern-house-exterior.jpg')` }}
                />
              </motion.div>

              {/* Secondary Accent Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 right-0 w-[45%] h-[45%] rounded-[1rem] overflow-hidden border-[6px] border-[var(--color-primary-50)] z-20"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: `url('/images/modern-garage-car.jpg')` }}
                />
              </motion.div>

              {/* Decorative Flat Slab */}
              <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] border border-[var(--color-primary-100)] -z-10" />
            </div>
          </div>

          {/* Right side: Content */}
          <div className="col-span-12 lg:col-span-6">
            <header className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-3 text-[var(--color-primary-600)]"
              >
                <div className="h-px w-8 bg-[var(--color-primary-600)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Lois Infrastructure
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-bebas text-6xl md:text-8xl text-[var(--color-primary-900)] mb-8 leading-[0.9] uppercase"
              >
                Building with <br />
                <span className="font-serif italic text-[var(--color-primary-300)] normal-case tracking-tight">
                  integrity.
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-6 text-[var(--color-slate-500)] text-base md:text-lg leading-relaxed"
              >
                <p>
                  We are a dynamic infrastructure firm bridging the gap between 
                  <strong className="text-[var(--color-primary-700)] font-bold"> technical excellence</strong> and 
                  practical design. We don’t just build; we partner with clients to create 
                  functional, durable, and cost-effective environments.
                </p>
                <p className="text-sm font-medium border-l-2 border-[var(--color-primary-200)] pl-6">
                  Our mission is simple: To provide reliable construction services 
                  integrated with modern techniques and sustainable practices.
                </p>
              </motion.div>
            </header>

            {/* Core Values Mini-Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-[var(--color-primary-100)]">
              {[
                { title: "Superior Quality", desc: "Uncompromising workmanship in every structure." },
                { title: "Trust & Transparency", desc: "Long-term relationships built on honesty." }
              ].map((value, i) => (
                <div key={i} className="group flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-100)] text-[var(--color-primary-700)] group-hover:bg-[var(--color-primary-700)] group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary-900)] text-sm uppercase tracking-tight">
                      {value.title}
                    </h4>
                    <p className="text-xs text-[var(--color-slate-500)] mt-1 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-wrap items-center gap-10"
            >
              <button className="group flex items-center gap-3 rounded-full bg-[var(--color-primary-700)] px-8 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-[var(--color-primary-800)] transition-all">
                Meet the Team
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-col">
                <span className="font-serif italic text-3xl text-[var(--color-primary-300)] leading-none">
                  Lois Infrastructure
                </span>
                <span className="mt-2 text-[9px] font-black uppercase tracking-[0.2em] text-[var(--color-primary-400)]">
                  Infrastructure Development Firm
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

// ----- Sub Components -----

export interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ReasonCard = ({
  title,
  description,
  icon: Icon,
  isRight,
}: Reason & { isRight: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: isRight ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`group flex flex-col ${isRight ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"}`}
  >
    {/* Icon with Senior Styling */}
    <div className="relative mb-6">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-[var(--color-primary-100)] shadow-sm text-[var(--color-primary-700)] transition-all duration-500 group-hover:bg-[var(--color-primary-700)] group-hover:text-white group-hover:scale-110 group-hover:shadow-xl">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div
        className={`absolute -inset-2 bg-[var(--color-primary-500)]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
      />
    </div>

    <div className="space-y-3">
      <h3 className="text-xl font-bold text-[var(--color-primary-950)] tracking-tight flex items-center gap-2 justify-start lg:justify-normal">
        {isRight && (
          <ArrowUpRight
            size={16}
            className="text-[var(--color-primary-400)] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 hidden lg:block"
          />
        )}
        {title}
        {!isRight && (
          <ArrowUpRight
            size={16}
            className="text-[var(--color-primary-400)] opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"
          />
        )}
      </h3>
      <p className="text-[var(--color-slate-500)] leading-relaxed text-sm md:text-base max-w-sm">
        {description}
      </p>
    </div>

    {/* Progressive Underline */}
    <div
      className={`mt-6 h-[2px] w-6 bg-[var(--color-primary-100)] transition-all duration-500 group-hover:w-16 group-hover:bg-[var(--color-primary-500)] ${isRight ? "lg:ml-auto" : "lg:mr-auto"}`}
    />
  </motion.div>
);
