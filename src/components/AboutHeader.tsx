import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const AboutHeader = () => {
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Program List", href: "/#courses" },
    // { name: "Service List", href: "/#services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/#blog" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Contact Us", href: "/contact" },
    { name: "Testimonial", href: "/#testimonials" },
    // { name: "Groups", href: "/#groups" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-coffee-dark backdrop-blur-sm border-b border-coffee-warm/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-coffee-dark font-bold text-sm">ISM</span>
            </div>
            <span className="text-primary-foreground font-roboto font-bold text-lg hidden sm:block">
              Indian School of Manuscriptology
            </span>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-roboto font-medium hover:text-accent transition-smooth relative group ${
                  item.href === "/about"
                    ? "text-accent"
                    : "text-primary-foreground"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Language Dropdown */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20 transition-smooth"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {currentLanguage}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-coffee-medium border-coffee-warm/20 shadow-coffee"
              >
                <DropdownMenuItem
                  className="text-primary-foreground hover:bg-coffee-warm/20 hover:text-accent focus:bg-coffee-warm/20 focus:text-accent"
                  onClick={() => setCurrentLanguage("English")}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-primary-foreground hover:bg-coffee-warm/20 hover:text-accent focus:bg-coffee-warm/20 focus:text-accent"
                  onClick={() => setCurrentLanguage("हिंदी")}
                >
                  हिंदी (Hindi)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                >
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-coffee-dark border-coffee-warm/20 w-[300px] sm:w-[400px] [&>button]:text-primary-foreground [&>button]:hover:text-accent"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-coffee-dark font-bold text-sm">
                        ISM
                      </span>
                    </div>
                    <span className="text-primary-foreground font-roboto font-bold text-lg">
                      Indian School of Manuscriptology
                    </span>
                  </div>
                  <nav className="flex flex-col space-y-2">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className={`font-roboto font-medium hover:text-accent transition-smooth py-3 px-2 rounded-md hover:bg-coffee-warm/20 ${
                          item.href === "/about"
                            ? "text-accent bg-coffee-warm/20"
                            : "text-primary-foreground"
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                  <div className="pt-4 border-t border-coffee-warm/20">
                    <div className="flex items-center space-x-2 text-primary-foreground">
                      <Globe className="w-4 h-4" />
                      <span className="font-roboto font-medium">
                        Language: {currentLanguage}
                      </span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
