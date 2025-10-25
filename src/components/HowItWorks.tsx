import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, GraduationCap, Users } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      titleKey: "step1Title",
      descriptionKey: "step1Description",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      titleKey: "step2Title",
      descriptionKey: "step2Description",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      titleKey: "step3Title",
      descriptionKey: "step3Description",
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: "step4Title",
      descriptionKey: "step4Description",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-coffee-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-primary-foreground mb-4">
            {t("howItWorksTitle")}
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-roboto">
            {t("howItWorksSubtitle")}
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
                  {t(step.titleKey)}
                </h3>

                <p className="text-coffee-warm font-roboto leading-relaxed">
                  {t(step.descriptionKey)}
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
