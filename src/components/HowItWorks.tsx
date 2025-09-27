import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, GraduationCap, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Browse Our Courses",
      description: "Explore a wide range of ancient script courses designed for learners of all levels."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Enroll & Get Access", 
      description: "Sign up easily and gain instant access to study materials, guided lessons, and resources."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learn Step by Step",
      description: "Follow structured lessons with clear explanations, practice sheets, and interactive exercises."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Engage & Ask",
      description: "Connect with mentors and fellow learners through discussions, Q&A, and community support."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-coffee-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-roboto">
            Start your journey into ancient Indian manuscripts with our simple four-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="group bg-primary-foreground border-coffee-light hover:shadow-warm transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <div className="text-primary-foreground group-hover:text-coffee-dark transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="w-8 h-8 bg-accent text-coffee-dark rounded-full flex items-center justify-center mx-auto mb-4 font-roboto font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-roboto font-bold text-coffee-dark mb-4">
                  {step.title}
                </h3>
                
                <p className="text-coffee-warm font-roboto leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;