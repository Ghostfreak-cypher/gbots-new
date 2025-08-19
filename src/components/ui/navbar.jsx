"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/Grobotslogo.png";
import {
  Home,
  Users,
  Calendar,
  Trophy,
  User,
  Info,
  Folder,
  Menu,
  X,
} from "lucide-react";
import PropTypes from "prop-types";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Team", href: "/team", icon: Users },
  { name: "Gantavya", href: "/event", icon: Calendar },
  { name: "Achievements", href: "/achievements", icon: Trophy },
];

/**
 * Simple Navbar Component
 *
 * Clean, responsive navbar with essential features:
 * - Logo and navigation links
 * - Mobile menu
 * - Profile link
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
export default function Navbar({ className }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`bg-transparent w-full border-b border-themed absolute z-50 ${
        className || ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
          >
            <Image
              src={logo}
              alt="GROBOTS Logo"
              width={40}
              height={40}
              className="w-12"
              priority
            />
            <span className="text-xl font-bold text-foreground font-['Erode']">
              GROBOTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium font-['Satoshi'] transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-themed-muted hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Profile Link */}
            <Link
              href="/userprofile"
              className="btn-primary flex items-center justify-center gap-2 rounded-2xl btn-md font-['Satoshi']"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-themed-muted hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-themed">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium font-['Satoshi'] transition-colors ${
                      isActive
                        ? "bg-accent text-primary"
                        : "text-themed-muted hover:bg-accent hover:text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};
