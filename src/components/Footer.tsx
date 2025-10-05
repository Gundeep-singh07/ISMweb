import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

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
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-coffee-dark font-bold">ISM</span>
              </div>
              <span className="text-primary-foreground font-roboto font-bold text-lg">
                Indian School of Manuscriptology
              </span>
            </div>
            <p className="text-primary-foreground/80 font-roboto leading-relaxed max-w-md mb-6">
              Dedicated to preserving and teaching ancient Indian scripts,
              connecting modern learners with their cultural heritage through
              expert instruction and comprehensive courses.
            </p>
            <div className="flex space-x-4">
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
