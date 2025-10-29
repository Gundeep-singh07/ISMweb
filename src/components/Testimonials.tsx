import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import avani from "../assets/avani.jpeg";
import mokshada from "../assets/mokshada.jpeg";
import vedika from "../assets/vedika.jpeg";

const Testimonials = () => {
  const { t, language } = useTranslation();

  // Real testimonials from students
  const realTestimonials = [
    {
      name: "कु. अवनी ओंकार गायकवाड",
      image: avani,
      title: {
        en: "Student",
        hi: "विद्यार्थी",
      },
      review: {
        en: "I learned ancient Indian scripts online from Ma. Manjushri Ghone. The teacher explained everything clearly and provided guidance whenever we faced difficulties. Joining this class gave me the opportunity to learn something new and developed my interest in ancient Indian history.",
        hi: "मी अवनी ओंकार गायकवाड मा, मंजुश्री घोणे यांच्याकडून मी प्राचीन भारतीय लिपी ऑनलाईन या पद्धतीने शिकले व काही अडचण असल्यास टिचरांनी आम्हांला समजून सांगितले, व मार्गदर्शन पण केले. मी या क्लास जॉईन केल्यामुळे मला काही नवीन शिकण्याची संधी मिळाली आणि मला प्राचीन भारतीय इतिहास या मध्ये आवड निर्माण झाली.",
      },
      rating: 5,
      isReal: true,
    },
    {
      name: "कु. मोक्षादा रामदास नंन्ने",
      image: mokshada,
      title: {
        en: "Student",
        hi: "विद्यार्थी",
      },
      review: {
        en: "I learned ancient Indian scripts from Ma. Manjushri Ghone. They taught us in a way that was easy to understand. If we didn't understand a word, they would teach it again. They taught us in an excellent manner and also shared information about these scripts. Through this online class, I got to learn a new script.",
        hi: "मा.मजुश्री घोणे यांच्या कडुन मी‌ प्राचीन भारतीय लिपी ही शिकले. त्यांनी आम्हाला समजेल व कळेल असे शिकवले. एखाद्या शब्द समजला नाही तर,तो शब्द परत शिकवत होते. त्यांनी आम्हाला छान पद्धतीने शिकवले. तसेच त्यांनी या लिपी ची माहिती पण सांगितली. या आॅनलान क्लास मुळे मला एक नवीन लिपी शिकायला मिळाली.",
      },
      rating: 5,
      isReal: true,
    },
    {
      name: "कु. वेदिका दत्तात्रय देशमुख",
      image: vedika,
      title: {
        en: "Student",
        hi: "विद्यार्थी",
      },
      review: {
        en: "Along with school education, I am learning ancient Indian scripts. Ma. Manjushri Ghone ma'am is guiding me in these scripts. These classes are held online, so we can easily learn these scripts from home. We are guided in a way that we can understand. Our doubts about these scripts are also resolved. Through these classes, I got the opportunity to learn something new as well as preserve Indian heritage and culture.",
        hi: "सध्या शालेय शिक्षणासोबतच प्राचिन भारतीय लिपींचे शिक्षण घेत आहे. मला मा.मंजुश्री घोणे मॅम या लिपींचे मार्गदर्शन करत आहे. हे क्लास ऑनलाईन पद्धतीने होतात,ज्यामुळे आम्ही सहजपणे घरबसल्या या लिपी शिकु शकतो. क्लासमध्ये आम्हाला समजेल अशा पद्धतीने मार्गदर्शन केले जाते. या लिपींविषयी आमच्या मनातील शंकाही सोडवल्या जातात. या क्लासेसमुळे मला नवीन काहीतरी शिकण्याची संधी तर मिळाली त्याचबरोबर भारतीय वारसा तसेच संस्कृती जपण्याचीही संधी मिळली.",
      },
      rating: 5,
      isReal: true,
    },
  ];

  // Dummy testimonials for animation
  const dummyTestimonials = [
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
      isReal: false,
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
      isReal: false,
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
      isReal: false,
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
      isReal: false,
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
      isReal: false,
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
      isReal: false,
    },
  ];

  // Combine all testimonials
  const allTestimonials = [...realTestimonials, ...dummyTestimonials];

  // Get testimonials in current language
  const localizedTestimonials = allTestimonials.map((t) => ({
    name: t.name,
    image: t.image,
    title: t.title[language],
    review: t.review[language],
    rating: t.rating,
    isReal: t.isReal,
  }));

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [
    ...localizedTestimonials,
    ...localizedTestimonials,
  ];

  // Split into two rows
  const firstRow = duplicatedTestimonials.slice(0, 9);
  const secondRow = duplicatedTestimonials.slice(9, 18);

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[400px] px-4">
      <Card className="group bg-coffee-medium border-coffee-warm/20 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 h-full">
        <CardContent className="p-8 text-center">
          {testimonial.isReal ? (
            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden shadow-lg border-4 border-coffee-light">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-20 h-20 bg-coffee-light rounded-full mx-auto mb-6 flex items-center justify-center shadow-coffee">
              <span className="text-2xl font-roboto font-bold text-coffee-dark">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          )}
          <div className="flex justify-center mb-4">
            {Array.from({ length: testimonial.rating }, (_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
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
  );

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

        <div className="relative space-y-8">
          {/* First row - scrolling right to left */}
          <div className="flex animate-scroll-left">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          {/* Second row - scrolling left to right */}
          <div className="flex animate-scroll-right">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
