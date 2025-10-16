import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import ismLogo from "../assets/ismLogo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="bg-coffee-dark py-12 border-t border-coffee-warm/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex gap-6 mb-6 items-start">
              {/* Logo - Increased Size */}
              <div className="flex-shrink-0">
                <img
                  src={ismLogo}
                  alt="ISM Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-start pt-2">
                <h2 className="text-primary-foreground font-roboto font-bold text-lg mb-3 leading-tight max-w-xs">
                  Indian School of Manuscriptology
                </h2>
                <p className="text-primary-foreground/80 font-roboto text-sm leading-relaxed max-w-sm">
                  Dedicated to preserving and teaching ancient Indian scripts,
                  connecting modern learners with their cultural heritage
                  through expert instruction and comprehensive courses.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20 transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20 transition-smooth"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20 transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-roboto font-bold text-lg mb-6">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent font-roboto transition-smooth"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary-foreground font-roboto font-bold text-lg mb-6">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-roboto text-sm">
                  indianmanuscripts1@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="font-roboto text-sm">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-coffee-warm/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 font-roboto text-sm">
            © 2025 Indian School of Manuscriptology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
