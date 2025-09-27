import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya Sharma",
      title: "Passionate Learner",
      review: "Learning ancient scripts here has been an eye-opening journey. The courses are clear, engaging, and full of rich cultural insights.",
      rating: 5
    },
    {
      name: "Rohan Mehta", 
      title: "Cultural Enthusiast",
      review: "I always wanted to explore manuscripts but didn't know where to start. These courses made it simple and inspiring.",
      rating: 5
    },
    {
      name: "Priya Nair",
      title: "Aspiring Researcher", 
      review: "The step-by-step teaching style helped me connect with our heritage in a meaningful way. Truly a wonderful experience.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-coffee-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-coffee-dark mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-coffee-warm max-w-3xl mx-auto font-roboto">
            Hear from our community of learners who are discovering the beauty of ancient Indian scripts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group bg-coffee-medium border-coffee-warm/20 hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-coffee-light rounded-full mx-auto mb-6 flex items-center justify-center shadow-coffee">
                  <span className="text-2xl font-roboto font-bold text-coffee-dark">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-primary-foreground/90 font-roboto italic text-lg leading-relaxed mb-6">
                  "{testimonial.review}"
                </blockquote>

                <div>
                  <h4 className="text-accent font-roboto font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-foreground/70 font-roboto text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;