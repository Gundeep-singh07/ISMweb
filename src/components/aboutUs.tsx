import React from "react";
import { BookOpen, Users, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutHeader from "@/components/AboutHeader";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-coffee-light">
      {/* Header */}
      <AboutHeader />

      {/* Hero Section with Content Box */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with coffee texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-warm" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-coffee-dark opacity-60" />

        {/* Content Box */}
        <div className="relative z-10 px-4 max-w-5xl mx-auto">
          <div className="bg-primary-foreground/95 backdrop-blur-sm rounded-3xl shadow-coffee p-8 md:p-12 border border-coffee-warm/20 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-roboto font-bold text-coffee-dark mb-8 text-center">
              About Us
            </h1>
            <div className="w-24 h-1 bg-coffee-dark mx-auto mb-8"></div>

            <div className="prose prose-lg max-w-none">
              <p className="text-coffee-dark font-roboto leading-relaxed mb-6 text-lg">
                <strong className="text-coffee-dark">
                  Indian School of Manuscriptology
                </strong>{" "}
                is a unique platform dedicated to preserving India's ancient
                script heritage and making it accessible to all. Founded and
                directed by{" "}
                <strong className="text-coffee-dark">
                  Manjushree Surykant Ghone
                </strong>
                , the school offers structured courses in scripts like Modi,
                Brahmi, Nandi Nagari, Sharda, Kharoshti, Kaithi, and Grantha,
                combining traditional knowledge with modern pedagogical tools.
              </p>

              <p className="text-coffee-medium font-roboto leading-relaxed mb-6">
                Learners can browse a diverse course list, enroll easily, and
                follow step-by-step lessons with guided materials, practice
                sheets, and interactive support. Through live webinars, mentor
                connections, and a vibrant community, students engage deeply
                with manuscript studies and cultural history.
              </p>

              <p className="text-coffee-medium font-roboto leading-relaxed mb-6">
                Aligned with youth empowerment and leadership, the institution
                also integrates values of public speaking, heritage awareness,
                and social development. Located in the Delhi-NCR region, but
                reaching learners nationally (and virtually), it's more than a
                learning center – it's a movement to reconnect with our roots,
                inspire cultural pride, and build knowledge keepers for
                tomorrow.
              </p>

              <p className="text-coffee-dark font-roboto leading-relaxed font-medium text-center">
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
      <section className=" bg-gradient-to-br from-coffee-warm via-coffee-medium to-coffee-dark py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-coffee-cream rounded-2xl p-6 text-center shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-coffee-warm/20">
              <div className="bg-coffee-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-roboto font-bold text-coffee-dark text-lg mb-2">
                Ancient Scripts
              </h3>
              <p className="text-coffee-medium font-roboto text-sm">
                Modi, Brahmi, Nandi Nagari, Sharda, Kharoshti, Kaithi, and
                Grantha
              </p>
            </div>

            <div className="bg-coffee-cream rounded-2xl p-6 text-center shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-coffee-warm/20">
              <div className="bg-coffee-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-roboto font-bold text-coffee-dark text-lg mb-2">
                Community Learning
              </h3>
              <p className="text-coffee-medium font-roboto text-sm">
                Live webinars, mentor connections, and vibrant student community
              </p>
            </div>

            <div className="bg-coffee-cream rounded-2xl p-6 text-center shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-coffee-warm/20">
              <div className="bg-coffee-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-roboto font-bold text-coffee-dark text-lg mb-2">
                National Reach
              </h3>
              <p className="text-coffee-medium font-roboto text-sm">
                Based in Delhi-NCR, serving learners across India virtually
              </p>
            </div>

            <div className="bg-coffee-cream rounded-2xl p-6 text-center shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-coffee-warm/20">
              <div className="bg-coffee-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-roboto font-bold text-coffee-dark text-lg mb-2">
                Cultural Pride
              </h3>
              <p className="text-coffee-medium font-roboto text-sm">
                Building knowledge keepers and inspiring heritage awareness
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-coffee-dark to-coffee-medium rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-coffee mb-16">
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
      <section className="py-16 px-4 bg-white from-coffee-warm to-coffee-cream">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-coffee-dark mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl font-roboto text-coffee-medium mb-8 max-w-2xl mx-auto">
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
      <footer className="bg-coffee-dark text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-coffee-dark font-bold text-sm">ISM</span>
              </div>
              <h3 className="text-2xl font-roboto font-bold">
                Indian School of Manuscriptology
              </h3>
            </div>
            <p className="text-primary-foreground/80 font-roboto max-w-2xl mx-auto">
              Preserving ancient wisdom through scripts, empowering learners
              with cultural heritage
            </p>
          </div>

          <div className="border-t border-coffee-warm/20 pt-8">
            <p className="text-primary-foreground/70 font-roboto">
              © 2025 Indian School of Manuscriptology. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
