import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Testimonials = () => {
  const { t, language } = useTranslation();

  // Testimonials with language-specific content
  const testimonials = [
    {
      name: "Gundeep Marwah",
      title: {
        en: "Passionate Learner",
        hi: "उत्साही शिक्षार्थी",
      },
      review: {
        en: "Learning ancient scripts here has been an eye-opening journey. The courses are clear, engaging, and full of rich cultural insights.",
        hi: "यहां प्राचीन लिपियों को सीखना एक आंखें खोलने वाली यात्रा रही है। पाठ्यक्रम स्पष्ट, आकर्षक और समृद्ध सांस्कृतिक अंतर्दृष्टि से भरे हुए हैं।",
      },
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      title: {
        en: "Cultural Enthusiast",
        hi: "सांस्कृतिक उत्साही",
      },
      review: {
        en: "I always wanted to explore manuscripts but didn't know where to start. These courses made it simple and inspiring.",
        hi: "मैं हमेशा पांडुलिपियों का पता लगाना चाहता था लेकिन नहीं जानता था कि कहां से शुरू करूं। इन पाठ्यक्रमों ने इसे सरल और प्रेरणादायक बना दिया।",
      },
      rating: 5,
    },
    {
      name: "Priya Nair",
      title: {
        en: "Aspiring Researcher",
        hi: "इच्छुक शोधकर्ता",
      },
      review: {
        en: "The step-by-step teaching style helped me connect with our heritage in a meaningful way. Truly a wonderful experience.",
        hi: "चरण-दर-चरण शिक्षण शैली ने मुझे हमारी विरासत से सार्थक तरीके से जुड़ने में मदद की। सचमुच एक अद्भुत अनुभव।",
      },
      rating: 5,
    },
    {
      name: "Vikram Singh",
      title: {
        en: "History Teacher",
        hi: "इतिहास शिक्षक",
      },
      review: {
        en: "An incredible platform to dive deep into India's linguistic heritage. My students are now more connected to their roots.",
        hi: "भारत की भाषाई विरासत में गहराई से जाने के लिए एक अविश्वसनीय मंच। मेरे छात्र अब अपनी जड़ों से अधिक जुड़े हुए हैं।",
      },
      rating: 5,
    },
    {
      name: "Meera Desai",
      title: {
        en: "Sanskrit Scholar",
        hi: "संस्कृत विद्वान",
      },
      review: {
        en: "The quality of instruction and materials is outstanding. I've learned so much about manuscript preservation.",
        hi: "निर्देश और सामग्री की गुणवत्ता उत्कृष्ट है। मैंने पांडुलिपि संरक्षण के बारे में बहुत कुछ सीखा है।",
      },
      rating: 5,
    },
    {
      name: "Arjun Patel",
      title: {
        en: "Graduate Student",
        hi: "स्नातक छात्र",
      },
      review: {
        en: "This course opened my eyes to the beauty of ancient writing systems. Highly recommended for anyone interested in Indian culture.",
        hi: "इस पाठ्यक्रम ने प्राचीन लेखन प्रणालियों की सुंदरता के लिए मेरी आंखें खोल दीं। भारतीय संस्कृति में रुचि रखने वाले किसी भी व्यक्ति के लिए अत्यधिक अनुशंसित।",
      },
      rating: 5,
    },
  ];

  // Get testimonials in current language
  const localizedTestimonials = testimonials.map((t) => ({
    name: t.name,
    title: t.title[language],
    review: t.review[language],
    rating: t.rating,
  }));

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [
    ...localizedTestimonials,
    ...localizedTestimonials,
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-coffee-subtle overflow-hidden"
    >
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-coffee-dark mb-4">
            {t("whatStudentsSay")}
          </h2>
          <p className="text-xl text-coffee-warm max-w-3xl mx-auto font-roboto">
            {t("testimonialsSubtitle")}
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[400px] px-4">
                <Card className="group bg-coffee-medium border-coffee-warm/20 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-coffee-light rounded-full mx-auto mb-6 flex items-center justify-center shadow-coffee">
                      <span className="text-2xl font-roboto font-bold text-coffee-dark">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <blockquote className="text-primary-foreground/90 font-roboto italic text-lg leading-relaxed mb-6 min-h-[120px]">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
