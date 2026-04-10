"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ArrowRight, Hammer } from "lucide-react"; // Swapped Search for Hammer for construction theme
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/config";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-700 ease-in-out",
        isScrolled
          ? "bg-white/90 py-3 backdrop-blur-md shadow"
          : "bg-transparent py-8",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "relative flex h-11 w-30 lg:w-40 items-center justify-center rounded-xl transition-all duration-500 overflow-hidden",
            )}
          >
            <Image
              src="/images/logo.webp"
              alt="Lois Logo"
              width={500}
              height={500}
              priority
              className={cn(
                "transition-all duration-500 brightness-0",
              )}
            />
          </div>
        </Link>

        {/* Floating Menu Logic (No Border) */}
        <ul
          className={cn(
            "hidden items-center gap-10 transition-all duration-500 md:flex px-8 py-2 rounded-full",
            isScrolled
              ? "bg-transparent"
              : "bg-primary-100/50 backdrop-blur-sm",
          )}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <NavItem
                key={link.id}
                label={link.label}
                href={link.path}
                isActive={isActive}
                isScrolled={isScrolled}
              />
            );
          })}
        </ul>

        {/* CTA Button */}
        <button
          className={cn(
            "group flex items-center gap-3 rounded-full px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-500",
            isScrolled
              ? "bg-[var(--color-primary-900)] text-white hover:bg-[var(--color-primary-700)]"
              : "bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-primary-50)]",
          )}
        >
          Work with us
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </nav>
  );
};

// --- Sub-components ---

interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
  isScrolled?: boolean;
  className?: string;
}

const NavItem = ({
  label,
  href,
  isActive = false,
  isScrolled = false,
  className,
}: NavItemProps) => {
  return (
    <li className="list-none">
      <Link
        href={href}
        className={cn(
          "relative inline-flex items-center py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 outline-none",
          isActive
            ? "text-[var(--color-primary-900)]"
            : isScrolled
              ? "text-[var(--color-slate-500)] hover:text-[var(--color-primary-900)]"
              : "text-[var(--color-primary-900)]/70 hover:text-[var(--color-primary-900)]",
          className,
        )}
      >
        {label}

        {isActive && (
          <motion.span
            layoutId="navUnderline"
            className="absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--color-primary-500)]"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </li>
  );
};

export default Navbar;
