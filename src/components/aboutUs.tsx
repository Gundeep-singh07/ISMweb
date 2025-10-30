import React from "react";
import { BookOpen, Users, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutHeader from "@/components/AboutHeader";
import Footer from "@/components/Footer";
import ismLogo from "../assets/ismLogo.jpeg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-warm">
      {/* Header */}
      <AboutHeader />

      {/* Hero Section with Content Box */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with coffee texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark/50 via-coffee-medium/30 to-transparent" />

        {/* Content Box */}
        <div className="relative z-10 px-4 max-w-5xl mx-auto">
          <div className="  p-8 md:p-12  animate-fade-in-up">
            {/* Logo and Title Section */}
            <div className="flex flex-col items-center mb-8">
              {/* Logo */}
              <div className="mb-6">
                <img
                  src={ismLogo}
                  alt="ISM Logo"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>

              {/* Stylized About Us Title */}
              <h1 className="text-4xl md:text-6xl font-roboto font-bold text-primary-foreground flex items-center gap-3 md:gap-4">
                <span className="inline-block transform -skew-y-6 origin-bottom">
                  About
                </span>
                <span className="inline-block transform skew-y-6 origin-bottom">
                  Us
                </span>
              </h1>
            </div>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

            <div className="prose prose-lg max-w-none">
              <p className="text-primary-foreground font-roboto leading-relaxed mb-6 text-lg">
                <strong className="text-accent">
                  Indian School of Manuscriptology
                </strong>{" "}
                is a unique platform dedicated to preserving India's ancient
                script heritage and making it accessible to all. Founded and
                directed by{" "}
                <strong className="text-accent">
                  Manjushree Surykant Ghone
                </strong>
                , the school offers structured courses in scripts like Modi,
                Brahmi, Nandi Nagari, Sharda, Kharoshti, Kaithi, and Grantha,
                combining traditional knowledge with modern pedagogical tools.
              </p>

              <p className="text-primary-foreground/90 font-roboto leading-relaxed mb-6">
                Learners can browse a diverse course list, enroll easily, and
                follow step-by-step lessons with guided materials, practice
                sheets, and interactive support. Through live webinars, mentor
                connections, and a vibrant community, students engage deeply
                with manuscript studies and cultural history.
              </p>

              <p className="text-primary-foreground/90 font-roboto leading-relaxed mb-6">
                Aligned with youth empowerment and leadership, the institution
                also integrates values of public speaking, heritage awareness,
                and social development. Located in the Delhi-NCR region, but
                reaching learners nationally (and virtually), it's more than a
                learning center – it's a movement to reconnect with our roots,
                inspire cultural pride, and build knowledge keepers for
                tomorrow.
              </p>

              <p className="text-primary-foreground font-roboto leading-relaxed font-medium text-center">
                Contact us to explore scripts, join upcoming events, or learn
                how ancient manuscripts shape our shared past and future.
              </p>
            </div>
          </div>
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

      {/* Main Content */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-coffee-dark/40 backdrop-blur-md rounded-2xl p-6 text-center shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-accent/20">
              <div className="bg-coffee-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-roboto font-bold text-primary-foreground text-lg mb-2">
                Ancient Scripts
              </h3>
              <p className="text-primary-foreground/80 font-roboto text-sm">
                Modi, Brahmi, Nandi Nagari, Sharda, Kharoshti, Kaithi, and
                Grantha
              </p>
            </div>

            <div className="bg-coffee-dark/40 backdrop-blur-md rounded-2xl p-6 text-center shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-accent/20">
              <div className="bg-coffee-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-roboto font-bold text-primary-foreground text-lg mb-2">
                Community Learning
              </h3>
              <p className="text-primary-foreground/80 font-roboto text-sm">
                Live webinars, mentor connections, and vibrant student community
              </p>
            </div>

            <div className="bg-coffee-dark/40 backdrop-blur-md rounded-2xl p-6 text-center shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-accent/20">
              <div className="bg-coffee-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-roboto font-bold text-primary-foreground text-lg mb-2">
                National Reach
              </h3>
              <p className="text-primary-foreground/80 font-roboto text-sm">
                Based in Delhi-NCR, serving learners across India virtually
              </p>
            </div>

            <div className="bg-coffee-dark/40 backdrop-blur-md rounded-2xl p-6 text-center shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-accent/20">
              <div className="bg-coffee-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-roboto font-bold text-primary-foreground text-lg mb-2">
                Cultural Pride
              </h3>
              <p className="text-primary-foreground/80 font-roboto text-sm">
                Building knowledge keepers and inspiring heritage awareness
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-coffee-dark/50 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-coffee mb-16 border border-accent/20">
            <h2 className="text-3xl md:text-4xl font-roboto font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl font-roboto font-light leading-relaxed max-w-3xl mx-auto opacity-90">
              To reconnect India with its ancient script heritage through modern
              education, fostering cultural pride and creating a new generation
              of knowledge keepers who will preserve our manuscripts for future
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-primary-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl font-roboto text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore our courses and join thousands of learners rediscovering
            India's ancient scripts
          </p>
          <Button
            size="lg"
            className="bg-coffee-dark text-primary-foreground hover:bg-coffee-medium font-roboto font-bold text-lg px-8 py-6 rounded-full shadow-glow transition-bounce hover:scale-105"
            onClick={() => (window.location.href = "/")}
          >
            Explore Our Courses
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
