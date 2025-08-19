"use client";

import logo from "../../../public/Grobotslogo.png";
import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Mail,
  ArrowUpRight,
  Code,
  Users,
  Globe,
  Bot,
  MapPin,
  Phone,
} from "lucide-react";

// Simple Button Component
const PrimaryButton = ({
  children,
  size = "md",
  rightIcon,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    xl: "btn-xl",
  };

  return (
    <button
      className={`btn-base btn-primary ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

function Footer() {
  return (
    <footer className="bg-background py-20 ml-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Card */}
        <div className="bg-themed-card rounded-3xl overflow-hidden shadow-lg p-8">
          {/* Header Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-xs text-themed-muted uppercase tracking-wider font-semibold">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-6xl font-light mb-6 text-foreground leading-tight">
              Ready to build the
              <br />
              future with us?
            </h2>
            <p className="text-lg text-themed-muted max-w-4xl leading-relaxed">
              Join GROBOTS and become part of a community that's shaping
              tomorrow's technology today.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="bg-themed-accent rounded-2xl p-6">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    Email
                  </h4>
                  <p className="text-sm text-themed-muted mb-3">
                    Get in touch with us
                  </p>
                  <a
                    href="mailto:grobots@college.edu"
                    className="text-primary font-medium hover:underline"
                  >
                    grobots@college.edu
                  </a>
                </div>

                {/* Location */}
                <div className="bg-themed-accent rounded-2xl p-6">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    Location
                  </h4>
                  <p className="text-sm text-themed-muted mb-3">
                    Find us on campus
                  </p>
                  <p className="text-foreground font-medium">
                    Engineering Building
                    <br />
                    Room 204, Lab Complex
                  </p>
                </div>

                {/* Meetups */}
                <div className="bg-themed-accent rounded-2xl p-6">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <Users className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    Meetups
                  </h4>
                  <p className="text-sm text-themed-muted mb-3">
                    Join our weekly sessions
                  </p>
                  <p className="text-foreground font-medium">
                    Every Friday
                    <br />
                    6:00 PM - 8:00 PM
                  </p>
                </div>

                {/* Open Source */}
                <div className="bg-themed-accent rounded-2xl p-6">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <Code className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    Open Source
                  </h4>
                  <p className="text-sm text-themed-muted mb-3">
                    Contribute to our projects
                  </p>
                  <a
                    href="https://github.com/grobots"
                    className="text-primary font-medium hover:underline"
                  >
                    github.com/grobots
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              {/* Join Community CTA */}
              <div className="bg-themed-accent rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                <img src={logo.src} className="max-h-28 mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  Join GROBOTS
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-6">
                  Start your robotics journey with us today
                </p>
                <PrimaryButton
                  size="lg"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                  className="w-full"
                >
                  Get Started
                </PrimaryButton>
              </div>

              {/* Social Links */}
              <div className="bg-themed-accent rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  Follow Us
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-themed-card transition-colors"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                    <span className="text-sm font-medium text-foreground">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-themed-card transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-themed-card transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      Instagram
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-themed-card transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      Twitter
                    </span>
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-themed-accent rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  Community Stats
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-themed-muted">
                      Active Members
                    </span>
                    <span className="font-semibold text-foreground">150+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-themed-muted">Projects</span>
                    <span className="font-semibold text-foreground">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-themed-muted">Awards</span>
                    <span className="font-semibold text-foreground">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Section */}
          <div className="border-t border-themed pt-16 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-8xl font-light leading-none text-foreground mb-4">
                GROBOTS
              </h1>
              <p className="text-xs text-themed-muted uppercase tracking-wider">
                BUILDING TOMORROW'S INNOVATORS
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-themed pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-xs text-themed-muted uppercase tracking-wider">
                  © 2025 GROBOTS - ALL RIGHTS RESERVED
                </span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 text-xs text-themed-muted uppercase tracking-wider">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Code of Conduct
                </a>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-themed-muted uppercase tracking-wider">
                  ALL SYSTEMS OPERATIONAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
