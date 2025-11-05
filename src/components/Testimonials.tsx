import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import avani from "../assets/avani.jpeg";
import mokshada from "../assets/mokshada.jpeg";
import vedika from "../assets/vedika.jpeg";
import Shivam from "../assets/Shivam.jpeg";
import Aditi from "../assets/aditi.jpeg";

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Calculate max height after render
      setTimeout(() => {
        const cards = document.querySelectorAll(".testimonial-card");
        let max = 0;
        cards.forEach((card) => {
          const height = card.offsetHeight;
          if (height > max) max = height;
        });
        setMaxHeight(max);
      }, 100);
    }
  }, [isMobile]);

  // Real testimonials from students
  const realTestimonials = [
    {
      name: "कु. अवनी ओंकार गायकवाड",
      image: avani,
      title: "विद्यार्थी",
      review:
        "मी अवनी ओंकार गायकवाड मा, मंजुश्री घोणे यांच्याकडून मी प्राचीन भारतीय लिपी ऑनलाईन या पद्धतीने शिकले व काही अडचण असल्यास टिचरांनी आम्हांला समजून सांगितले, व मार्गदर्शन पण केले. मी या क्लास जॉईन केल्यामुळे मला काही नवीन शिकण्याची संधी मिळाली आणि मला प्राचीन भारतीय इतिहास या मध्ये आवड निर्माण झाली.",
      rating: 5,
      isReal: true,
    },
    {
      name: "कु. मोक्षादा रामदास नंन्ने",
      image: mokshada,
      title: "विद्यार्थी",
      review:
        "मा.मजुश्री घोणे यांच्या कडुन मी‌ प्राचीन भारतीय लिपी ही शिकले. त्यांनी आम्हाला समजेल व कळेल असे शिकवले. एखाद्या शब्द समजला नाही तर,तो शब्द परत शिकवत होते. त्यांनी आम्हाला छान पद्धतीने शिकवले. तसेच त्यांनी या लिपी ची माहिती पण सांगितली. या आॅनलान क्लास मुळे मला एक नवीन लिपी शिकायला मिळाली.",
      rating: 5,
      isReal: true,
    },
    {
      name: "कु. वेदिका दत्तात्रय देशमुख",
      image: vedika,
      title: "विद्यार्थी",
      review:
        "सध्या शालेय शिक्षणासोबतच प्राचिन भारतीय लिपींचे शिक्षण घेत आहे. मला मा.मंजुश्री घोणे मॅम या लिपींचे मार्गदर्शन करत आहे. हे क्लास ऑनलाईन पद्धतीने होतात,ज्यामुळे आम्ही सहजपणे घरबसल्या या लिपी शिकु शकतो. क्लासमध्ये आम्हाला समजेल अशा पद्धतीने मार्गदर्शन केले जाते. या लिपींविषयी आमच्या मनातील शंकाही सोडवल्या जातात. या क्लासेसमुळे मला नवीन काहीतरी शिकण्याची संधी तर मिळाली त्याचबरोबर भारतीय वारसा तसेच संस्कृती जपण्याचीही संधी मिळली.",
      rating: 5,
      isReal: true,
    },
    {
      name: "शिवम",
      image: Shivam,
      title: "विद्यार्थी",
      review:
        "मैंने शारदा लिपि का 15 दिवसीय कोर्स मंजूश्री जी से वर्चुअल रूप में प्राप्त किया। इस कोर्स के माध्यम से कम समय में शारदा लिपि से संबंधित हर पक्ष को गहराई से जानने का अवसर मिला। ये न सिर्फ लिपि के प्रति सीखने वाले में रोचकता को बढ़ाते हैं अपितु उनकी जिज्ञासा का भी सफलता से निवारण करते हैं। महोदया के पढ़ाने का सरल और प्रभावी ढंग सराहनीय है।",
      rating: 5,
      isReal: true,
    },
    {
      name: "मी. अदिती ज्ञानेश्वरी शेळके",
      image: Aditi,
      title: "विद्यार्थी",
      review:
        "मा. मजुश्री घोणे यांच्या कडून मी प्राचीन भारतीय लिपी शिकले . हे क्लास ऑनलाईन पद्धतीने होतात. त्यांनी आम्हाला समजेल व कळेल असे शिकवले. त्या प्रत्येक विद्यार्थी कडे लक्ष देत होत्या. एखाद्या शब्द समजला नाही तर , तो शब्द परत शिकवत होत्या. त्यांनी ऑनलाईन छान  पद्धतीने शिकवले .खंरच आपले आभार !🙏",
      rating: 5,
      isReal: true,
    },
  ];

  // Dummy testimonials for animation
  const dummyTestimonials = [
    {
      name: "Gundeep Marwah",
      title: "Passionate Learner",
      review:
        "Learning ancient scripts here has been an eye-opening journey. The courses are clear, engaging, and full of rich cultural insights.",
      rating: 5,
      isReal: false,
    },
    {
      name: "Rohan Mehta",
      title: "Cultural Enthusiast",
      review:
        "I always wanted to explore manuscripts but didn't know where to start. These courses made it simple and inspiring.",
      rating: 5,
      isReal: false,
    },
    {
      name: "Priya Nair",
      title: "Aspiring Researcher",
      review:
        "The step-by-step teaching style helped me connect with our heritage in a meaningful way. Truly a wonderful experience.",
      rating: 5,
      isReal: false,
    },
    {
      name: "Vikram Singh",
      title: "History Teacher",
      review:
        "An incredible platform to dive deep into India's linguistic heritage. My students are now more connected to their roots.",
      rating: 5,
      isReal: false,
    },
    {
      name: "Meera Desai",
      title: "Sanskrit Scholar",
      review:
        "The quality of instruction and materials is outstanding. I've learned so much about manuscript preservation.",
      rating: 5,
      isReal: false,
    },
    {
      name: "Arjun Patel",
      title: "Graduate Student",
      review:
        "This course opened my eyes to the beauty of ancient writing systems. Highly recommended for anyone interested in Indian culture.",
      rating: 5,
      isReal: false,
    },
  ];

  // Combine all testimonials
  const allTestimonials = [...realTestimonials, ...dummyTestimonials];

  // Duplicate testimonials for seamless loop (only for desktop)
  const duplicatedTestimonials = isMobile
    ? allTestimonials
    : [...allTestimonials, ...allTestimonials];

  // Split into two rows
  const firstRow = duplicatedTestimonials.slice(
    0,
    Math.ceil(duplicatedTestimonials.length / 2)
  );
  const secondRow = duplicatedTestimonials.slice(
    Math.ceil(duplicatedTestimonials.length / 2)
  );

  const TestimonialCard = ({ testimonial }) => (
    <div
      className={`flex-shrink-0 ${
        isMobile ? "w-[85vw] max-w-[350px]" : "w-[400px]"
      } px-4`}
    >
      <Card className="group bg-coffee-medium border-coffee-warm/20 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 h-full">
        <CardContent className="p-6 md:p-8 text-center flex flex-col h-full">
          {testimonial.isReal ? (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 md:mb-6 overflow-hidden shadow-lg border-4 border-coffee-light flex-shrink-0">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-16 h-16 md:w-20 md:h-20 bg-coffee-light rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-coffee flex-shrink-0">
              <span className="text-xl md:text-2xl font-roboto font-bold text-coffee-dark">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
          <div className="flex justify-center mb-3 md:mb-4 flex-shrink-0">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <Star
                key={i}
                className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent"
              />
            ))}
          </div>
          <blockquote className="text-primary-foreground/90 font-roboto italic text-base md:text-lg leading-relaxed mb-4 md:mb-6 flex-grow min-h-[200px] flex items-center justify-center">
            "{testimonial.review}"
          </blockquote>
          <div className="flex-shrink-0">
            <h4 className="text-accent font-roboto font-bold text-base md:text-lg">
              {testimonial.name}
            </h4>
            <p className="text-primary-foreground/70 font-roboto text-sm">
              {testimonial.title}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-12 md:py-20 bg-coffee-subtle overflow-hidden"
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
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        
        /* Custom scrollbar for mobile */
        .mobile-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .mobile-scroll::-webkit-scrollbar-track {
          background: #fed7aa;
          border-radius: 10px;
        }
        .mobile-scroll::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 10px;
        }
        .mobile-scroll::-webkit-scrollbar-thumb:hover {
          background: #ea580c;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-roboto font-bold text-coffee-dark mb-3 md:mb-4">
            What Students Say
          </h2>
          <p className="text-base md:text-xl text-coffee-warm max-w-3xl mx-auto font-roboto">
            Real experiences from our learners
          </p>
        </div>

        {isMobile ? (
          // Mobile: Manual horizontal scroll
          <div className="space-y-6">
            <div className="flex gap-0 overflow-x-auto mobile-scroll pb-4 snap-x snap-mandatory items-stretch">
              {allTestimonials.map((testimonial, index) => (
                <div key={`mobile-${index}`} className="snap-center flex">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop: Auto-scrolling rows with uniform heights
          <div className="relative space-y-8">
            {/* First row - scrolling right to left */}
            <div className="flex animate-scroll-left items-stretch">
              {firstRow.map((testimonial, index) => (
                <TestimonialCard
                  key={`row1-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>

            {/* Second row - scrolling left to right */}
            <div className="flex animate-scroll-right items-stretch">
              {secondRow.map((testimonial, index) => (
                <TestimonialCard
                  key={`row2-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
