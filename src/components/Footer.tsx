"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Hammer,
  MessageCircle,
} from "lucide-react";
import { Instagram, Twitter } from "./icons/BrandIcons";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    title: "Expertise",
    links: [
      { name: "Structural Design", href: "#" },
      { name: "Civil Engineering", href: "#" },
      { name: "Sustainable Systems", href: "#" },
      { name: "Project Management", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Our Legacy", href: "#" },
      { name: "Projects", href: "#" },
      { name: "Quality Control", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Client Portal", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Safety Protocols", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-primary-100)] bg-white pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Element: Architectural Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-y-16 lg:gap-x-16">
          {/* Brand Column */}
          <div className="col-span-12 lg:col-span-4">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group mb-4">
              <div
                className={cn(
                  "relative flex h-11 w-40 items-center justify-center rounded-xl transition-all duration-500 overflow-hidden",
                )}
              >
                <Image
                  src="/images/logo.webp"
                  alt="Lois Logo"
                  width={500}
                  height={500}
                  priority
                  className={cn("transition-all duration-500 brightness-0")}
                />
              </div>
            </Link>
            <p className="max-w-xs text-[var(--color-slate-500)] text-sm leading-relaxed mb-8">
              Delivering high-quality engineering solutions with integrity,
              innovation, and efficiency. Built for generations.
            </p>

            {/* Social Links - Professional & Valid Icons */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                {
                  Icon: MessageCircle,
                  href: "https://wa.me/919445576933",
                  label: "WhatsApp",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-primary-100)] transition-all hover:bg-[var(--color-primary-900)] hover:border-[var(--color-primary-900)]"
                >
                  <social.Icon
                    size={18}
                    className="text-[var(--color-primary-400)] transition-colors group-hover:text-white"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary-900)] mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-[13px] text-[var(--color-slate-500)] transition-colors hover:text-[var(--color-primary-900)] flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight
                          size={12}
                          className="ml-1 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 text-[var(--color-primary-400)]"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Official Contact Column */}
          <div className="col-span-12 lg:col-span-3">
            <div className="rounded-[2rem] bg-[var(--color-primary-50)] p-8 border border-[var(--color-primary-100)]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary-900)] mb-8">
                Official Inquiry
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[var(--color-primary-600)]">
                    <MapPin size={18} />
                  </div>
                  <a
                    href="https://maps.google.com/?q=MS+Road+Krishnancoil+Nagercoil"
                    target="_blank"
                    className="text-xs text-[var(--color-slate-600)] leading-relaxed hover:text-[var(--color-primary-900)] transition-colors"
                  >
                    MS Road, Krishnancoil,
                    <br />
                    Nagercoil, Tamil Nadu
                    <br />
                    629 001, India
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-[var(--color-primary-600)]">
                    <Phone size={18} />
                  </div>
                  <p className="text-xs text-[var(--color-slate-600)] font-bold tracking-tight">
                    +91 94455 76933
                  </p>
                </div>
                <a
                  href="mailto:loisinfrastructure@gmail.com"
                  className="group flex items-center gap-4 py-4 px-1 border-t border-[var(--color-primary-200)]/30"
                >
                  <div className="text-[var(--color-primary-600)]">
                    <Mail size={18} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--color-primary-900)] group-hover:text-[var(--color-primary-600)] transition-colors">
                    Email Request
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-(--color-primary-100) flex flex-col items-center justify-center">
          <p className="text-[8px] font-black text-(--color-primary-400) tracking-[0.3em] uppercase text-center">
            © {currentYear} Lois Infrastructure Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
