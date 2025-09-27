import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from 'lucide-react';

const Events = () => {
  return (
    <section id="events" className="py-20 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-primary-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-roboto">
            Join our community events and deepen your understanding of ancient manuscripts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-coffee-medium border-coffee-warm/20 shadow-warm overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-accent text-coffee-dark px-3 py-1 rounded-full text-sm font-roboto font-medium">
                      Virtual Webinar
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-roboto font-bold text-primary-foreground mb-4">
                    Ancient Scripts Interactive Webinar
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-6 text-primary-foreground/80">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-roboto">Date & Time: TBD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-roboto">Duration: 2 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-accent" />
                      <span className="font-roboto">Online Event</span>
                    </div>
                  </div>

                  <p className="text-primary-foreground/90 font-roboto leading-relaxed mb-6">
                    Join us for an interactive exploration of ancient Indian scripts. Learn about the history, 
                    cultural significance, and practical applications of manuscriptology in modern times. 
                    This webinar will feature live demonstrations and Q&A sessions with our expert instructors.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-coffee-dark font-roboto font-bold transition-bounce hover:scale-105"
                    >
                      Register Now
                    </Button>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-accent text-accent hover:bg-accent hover:text-coffee-dark font-roboto font-medium transition-smooth"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="lg:w-80 w-full">
                  <div className="bg-coffee-warm rounded-lg p-6 text-center">
                    <div className="text-6xl mb-4">📜</div>
                    <h4 className="text-primary-foreground font-roboto font-bold text-lg mb-2">
                      Free Registration
                    </h4>
                    <p className="text-primary-foreground/80 font-roboto text-sm">
                      Open to all manuscript enthusiasts and heritage preservation advocates
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;