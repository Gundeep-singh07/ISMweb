import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import granthaScript from "@/assets/grantha-script.jpg";
import modiScript from "@/assets/modi-script.jpg";
import brahmiScript from "@/assets/brahmi-script.jpg";
import shardaScript from "@/assets/sharda-script.jpg";
import nandinagariScript from "@/assets/nandinagari-script.jpg";
import kharoshthiScript from "@/assets/kharosthi-script.jpg";

const Courses = () => {
  const courses = [
    {
      name: "Grantha Lipi Course",
      image: granthaScript,
      description: "Learn the ancient South Indian script used for Sanskrit manuscripts"
    },
    {
      name: "Modi Lipi Course", 
      image: modiScript,
      description: "Master the traditional Marathi script used in historical documents"
    },
    {
      name: "Brahmi Lipi Course",
      image: brahmiScript,
      description: "Discover the mother of all Indian scripts"
    },
    {
      name: "Sharda Lipi Course",
      image: shardaScript,
      description: "Explore the beautiful script of Kashmir and ancient texts"
    },
    {
      name: "Nandināgarī Lipi Course",
      image: nandinagariScript,
      description: "Study the elegant script used in medieval manuscripts"
    },
    {
      name: "Kharosthi Lipi Course",
      image: kharoshthiScript,
      description: "Uncover the ancient Gandhara script from the northwest"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-coffee-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-coffee-dark mb-4">
            Our Program List
          </h2>
          <p className="text-xl text-coffee-warm max-w-3xl mx-auto font-roboto">
            Explore our comprehensive courses designed to preserve and teach ancient Indian scripts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="group bg-coffee-cream border-coffee-light hover:shadow-warm transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-roboto font-bold text-coffee-dark mb-3">
                  {course.name}
                </h3>
                <p className="text-coffee-warm mb-4 font-roboto">
                  {course.description}
                </p>
                <Button 
                  className="bg-coffee-dark hover:bg-coffee-medium text-primary-foreground font-roboto font-medium rounded-full transition-bounce hover:scale-105"
                >
                  View Course
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;