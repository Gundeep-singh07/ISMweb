import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Events = () => {
  const { t } = useTranslation();

  return (
    <section id="events" className="py-20 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-primary-foreground mb-4">
            {t("upcomingEvents")}
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-roboto">
            {t("eventsSubtitle")}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-coffee-medium border-coffee-warm/20 shadow-warm overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-accent text-coffee-dark px-3 py-1 rounded-full text-sm font-roboto font-medium">
                      {t("virtualWebinar")}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-roboto font-bold text-primary-foreground mb-4">
                    {t("webinarTitle")}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-6 text-primary-foreground/80">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-roboto">{t("dateTBD")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-roboto">{t("duration")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-accent" />
                      <span className="font-roboto">{t("onlineEvent")}</span>
                    </div>
                  </div>
                  <p className="text-primary-foreground/90 font-roboto leading-relaxed mb-6">
                    {t("webinarDescription")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-coffee-dark font-roboto font-bold transition-bounce hover:scale-105"
                    >
                      {t("registerNow")}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-accent text-accent hover:bg-accent hover:text-coffee-dark font-roboto font-medium transition-smooth"
                    >
                      {t("learnMore")}
                    </Button>
                  </div>
                </div>
                <div className="lg:w-80 w-full">
                  <div className="bg-coffee-warm rounded-lg p-6 text-center">
                    <div className="text-6xl mb-4">📜</div>
                    <h4 className="text-primary-foreground font-roboto font-bold text-lg mb-2">
                      {t("freeRegistration")}
                    </h4>
                    <p className="text-primary-foreground/80 font-roboto text-sm">
                      {t("openToAll")}
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
