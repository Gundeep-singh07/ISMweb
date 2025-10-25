import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-coffee-dark opacity-70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-roboto font-bold text-primary-foreground mb-6 animate-fade-in-up text-shadow">
          {t("heroTitle")}
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-delayed font-roboto font-light">
          {t("heroSubtitle")}
        </p>

        <Button
          size="lg"
          className="animate-slide-up bg-primary-foreground text-coffee-dark hover:bg-coffee-cream font-roboto font-bold text-lg px-8 py-6 rounded-full shadow-glow transition-bounce hover:scale-105"
        >
          {t("exploreOurCourses")}
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-primary-foreground/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
