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
import ismLogo from "../assets/ismLogo.jpeg";
import { useTranslation } from "../contexts/TranslationContext";

const Header = () => {
  const { language, changeLanguage, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    language === "en" ? "English" : "हिंदी"
  );

  // Menu items with translated labels
  const menuItems = [
    { name: t("home"), href: "/" },
    { name: t("programList"), href: "/#courses" },
    { name: t("aboutUs"), href: "/about" },
    { name: t("blog"), href: "/blog" },
    { name: t("howItWorks"), href: "/#how-it-works" },
    { name: t("contactUs"), href: "/contact" },
    { name: t("testimonial"), href: "/#testimonials" },
  ];

  const handleLanguageChange = (lang: string, label: string) => {
    setCurrentLanguage(label);
    changeLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-coffee-dark backdrop-blur-sm border-b border-coffee-warm/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src={ismLogo}
              alt="ISM Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-primary-foreground font-roboto font-bold text-lg hidden sm:block">
              {t("schoolName")}
            </span>
          </a>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-primary-foreground font-roboto font-medium hover:text-accent transition-smooth relative group"
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
                  onClick={() => handleLanguageChange("en", "English")}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-primary-foreground hover:bg-coffee-warm/20 hover:text-accent focus:bg-coffee-warm/20 focus:text-accent"
                  onClick={() => handleLanguageChange("hi", "हिंदी")}
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
                    <img
                      src={ismLogo}
                      alt="ISM Logo"
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-primary-foreground font-roboto font-bold text-lg">
                      {t("schoolName")}
                    </span>
                  </div>
                  <nav className="flex flex-col space-y-2">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="text-primary-foreground font-roboto font-medium hover:text-accent transition-smooth py-3 px-2 rounded-md hover:bg-coffee-warm/20"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                  <div className="pt-4 border-t border-coffee-warm/20">
                    <div className="flex items-center space-x-2 text-primary-foreground">
                      <Globe className="w-4 h-4" />
                      <span className="font-roboto font-medium">
                        {language === "en" ? "Language" : "भाषा"}:{" "}
                        {currentLanguage}
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

export default Header;
