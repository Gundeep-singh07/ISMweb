import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ismLogo from "../assets/ismLogo.jpeg";

const AboutHeader = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Program List", href: "/#courses" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Contact Us", href: "/contact" },
    { name: "Testimonial", href: "/#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-coffee-dark backdrop-blur-sm border-b border-coffee-warm/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img
              src={ismLogo}
              alt="ISM Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-primary-foreground font-roboto font-bold text-lg hidden sm:block">
              {"Indian School of Manuscriptology"}
            </span>
          </a>

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

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <a href="/#courses" className="hidden lg:inline-block">
              <Button className="bg-accent hover:bg-accent/90 text-coffee-dark font-roboto font-semibold">
                Explore Courses
              </Button>
            </a>

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
