import React, { createContext, useContext, useState, useEffect } from "react";

// Translation Context
const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
};

// All translations
const translations = {
  en: {
    // Header
    home: "Home",
    programList: "Program List",
    aboutUs: "About Us",
    blog: "Blog",
    howItWorks: "How It Works",
    contactUs: "Contact Us",
    testimonial: "Testimonial",
    english: "English",
    hindi: "हिंदी (Hindi)",
    // Hero Section
    heroTitle: "Preserving Ancient Wisdom Through Scripts",
    heroSubtitle:
      "The Indian School of Manuscriptology is dedicated to educating enthusiasts about ancient Indian scripts and their cultural significance.",
    exploreOurCourses: "Explore Our Courses",
    // Courses Section
    ourProgramList: "Our Program List",
    coursesSubtitle:
      "Explore our comprehensive courses designed to preserve and teach ancient Indian scripts",
    viewCourse: "View Course",
    granthaDescription:
      "Learn the ancient South Indian script used for Sanskrit manuscripts",
    modiDescription:
      "Master the traditional Marathi script used in historical documents",
    brahmiDescription: "Discover the mother of all Indian scripts",
    shardaDescription:
      "Explore the beautiful script of Kashmir and ancient texts",
    nandinagariDescription:
      "Study the elegant script used in medieval manuscripts",
    kharoshthiDescription:
      "Uncover the ancient Gandhara script from the northwest",
    // How It Works
    howItWorksTitle: "How It Works",
    howItWorksSubtitle:
      "Start your journey into ancient Indian manuscripts with our simple four-step process",
    step1Title: "Browse Our Courses",
    step1Description:
      "Explore a wide range of ancient script courses designed for learners of all levels.",
    step2Title: "Enroll & Get Access",
    step2Description:
      "Sign up easily and gain instant access to study materials, guided lessons, and resources.",
    step3Title: "Learn Step by Step",
    step3Description:
      "Follow structured lessons with clear explanations, practice sheets, and interactive exercises.",
    step4Title: "Engage & Ask",
    step4Description:
      "Connect with mentors and fellow learners through discussions, Q&A, and community support.",
    // Events
    upcomingEvents: "Upcoming Events",
    eventsSubtitle:
      "Join our community events and deepen your understanding of ancient manuscripts",
    virtualWebinar: "Virtual Webinar",
    webinarTitle: "Ancient Scripts Interactive Webinar",
    dateTBD: "Date & Time: TBD",
    duration: "Duration: 2 hours",
    onlineEvent: "Online Event",
    webinarDescription:
      "Join us for an interactive exploration of ancient Indian scripts. Learn about the history, cultural significance, and practical applications of manuscriptology in modern times. This webinar will feature live demonstrations and Q&A sessions with our expert instructors.",
    registerNow: "Register Now",
    learnMore: "Learn More",
    freeRegistration: "Free Registration",
    openToAll:
      "Open to all manuscript enthusiasts and heritage preservation advocates",
    // Testimonials
    whatStudentsSay: "What Our Students Say",
    testimonialsSubtitle:
      "Hear from our community of learners who are discovering the beauty of ancient Indian scripts",
    // Team
    meetOurTeam: "Meet Our Team",
    teamSubtitle:
      "Learn about the passionate individuals dedicated to preserving India's manuscript heritage",
    founderDirector: "Founder & Director",
    techHead: "Tech Head",
    // About Us
    aboutUsTitle: "About Us",
    aboutUsContent1:
      "Indian School of Manuscriptology is a unique platform dedicated to preserving India's ancient script heritage and making it accessible to all. Founded and directed by Manjushree Surykant Ghone, the school offers structured courses in scripts like Modi, Brahmi, Nandi Nagari, Sharda, Kharoshti, Kaithi, and Grantha, combining traditional knowledge with modern pedagogical tools.",
    aboutUsContent2:
      "Learners can browse a diverse course list, enroll easily, and follow step-by-step lessons with guided materials, practice sheets, and interactive support. Through live webinars, mentor connections, and a vibrant community, students engage deeply with manuscript studies and cultural history.",
    aboutUsContent3:
      "Aligned with youth empowerment and leadership, the institution also integrates values of public speaking, heritage awareness, and social development. Located in the Delhi-NCR region, but reaching learners nationally (and virtually), it's more than a learning center – it's a movement to reconnect with our roots, inspire cultural pride, and build knowledge keepers for tomorrow.",
    aboutUsContent4:
      "Contact us to explore scripts, join upcoming events, or learn how ancient manuscripts shape our shared past and future.",
    ancientScripts: "Ancient Scripts",
    communityLearning: "Community Learning",
    nationalReach: "National Reach",
    culturalPride: "Cultural Pride",
    ourMission: "Our Mission",
    missionStatement:
      "To reconnect India with its ancient script heritage through modern education, fostering cultural pride and creating a new generation of knowledge keepers who will preserve our manuscripts for future generations.",
    readyToBegin: "Ready to Begin Your Journey?",
    exploreCoursesSubtitle:
      "Explore our courses and join thousands of learners rediscovering India's ancient scripts",
    // Blog
    ourBlog: "Our Blog",
    blogSubtitle:
      "Insights, stories, and knowledge about India's ancient scripts and manuscript preservation",
    searchArticles: "Search articles...",
    all: "All",
    scriptHistory: "Script History",
    preservation: "Preservation",
    revivalProjects: "Revival Projects",
    technology: "Technology",
    noBlogPosts: "No blog posts found matching your criteria.",
    readMore: "Read More",
    stayUpdated: "Stay Updated",
    newsletterSubtitle:
      "Subscribe to our newsletter for the latest insights on Indian scripts and manuscript preservation",
    enterEmail: "Enter your email",
    subscribe: "Subscribe",
    // Contact
    letsConnect: "Let's Connect",
    contact: "Contact",
    contactSubtitle:
      "We'd love to hear from you! Whether you have questions about our courses, need more information, or simply wish to share your thoughts, feel free to reach out. Your feedback and curiosity are always welcome. Use the form below or connect with us directly—we're here to assist you and guide you on your journey of learning and discovery.",
    address: "Address",
    email: "Email",
    phone: "Phone",
    socialMedia: "Social Media",
    sendMessage: "Send us a Message",
    formSubtitle:
      "Fill out the form below and we'll get back to you as soon as possible.",
    fullName: "Full Name",
    emailAddress: "Email Address",
    subject: "Subject",
    message: "Message",
    sendMessageBtn: "Send Message",
    sending: "Sending...",
    readyToStartLearning: "Ready to Start Learning?",
    dontWait:
      "Don't wait! Begin your journey into India's ancient scripts today",
    // Footer
    schoolName: "Indian School of Manuscriptology",
    footerDescription:
      "Dedicated to preserving and teaching ancient Indian scripts, connecting modern learners with their cultural heritage through expert instruction and comprehensive courses.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    allRightsReserved:
      "© 2025 Indian School of Manuscriptology. All Rights Reserved.",
    preservingWisdom:
      "Preserving ancient wisdom through scripts, empowering learners with cultural heritage",
  },
  hi: {
    // Header
    home: "होम",
    programList: "कार्यक्रम सूची",
    aboutUs: "हमारे बारे में",
    blog: "ब्लॉग",
    howItWorks: "यह कैसे काम करता है",
    contactUs: "संपर्क करें",
    testimonial: "प्रशंसापत्र",
    english: "English",
    hindi: "हिंदी (Hindi)",
    // Hero Section
    heroTitle: "लिपियों के माध्यम से प्राचीन ज्ञान का संरक्षण",
    heroSubtitle:
      "भारतीय पाण्डुलिपि विज्ञान संस्थान प्राचीन भारतीय लिपियों और उनके सांस्कृतिक महत्व के बारे में उत्साही लोगों को शिक्षित करने के लिए समर्पित है।",
    exploreOurCourses: "हमारे पाठ्यक्रम देखें",
    // Courses Section
    ourProgramList: "हमारी कार्यक्रम सूची",
    coursesSubtitle:
      "प्राचीन भारतीय लिपियों को संरक्षित और सिखाने के लिए डिज़ाइन किए गए हमारे व्यापक पाठ्यक्रमों का अन्वेषण करें",
    viewCourse: "पाठ्यक्रम देखें",
    granthaDescription:
      "संस्कृत पांडुलिपियों के लिए उपयोग की जाने वाली प्राचीन दक्षिण भारतीय लिपि सीखें",
    modiDescription:
      "ऐतिहासिक दस्तावेजों में उपयोग की जाने वाली पारंपरिक मराठी लिपि में महारत हासिल करें",
    brahmiDescription: "सभी भारतीय लिपियों की जननी की खोज करें",
    shardaDescription:
      "कश्मीर और प्राचीन ग्रंथों की सुंदर लिपि का अन्वेषण करें",
    nandinagariDescription:
      "मध्यकालीन पांडुलिपियों में उपयोग की जाने वाली सुरुचिपूर्ण लिपि का अध्ययन करें",
    kharoshthiDescription: "उत्तर-पश्चिम से प्राचीन गांधार लिपि को उजागर करें",
    // How It Works
    howItWorksTitle: "यह कैसे काम करता है",
    howItWorksSubtitle:
      "हमारी सरल चार-चरण प्रक्रिया के साथ प्राचीन भारतीय पांडुलिपियों में अपनी यात्रा शुरू करें",
    step1Title: "हमारे पाठ्यक्रम ब्राउज़ करें",
    step1Description:
      "सभी स्तरों के शिक्षार्थियों के लिए डिज़ाइन किए गए प्राचीन लिपि पाठ्यक्रमों की एक विस्तृत श्रृंखला का अन्वेषण करें।",
    step2Title: "नामांकन करें और पहुंच प्राप्त करें",
    step2Description:
      "आसानी से साइन अप करें और अध्ययन सामग्री, निर्देशित पाठ और संसाधनों तक तुरंत पहुंच प्राप्त करें।",
    step3Title: "चरण-दर-चरण सीखें",
    step3Description:
      "स्पष्ट स्पष्टीकरण, अभ्यास पत्रक और इंटरैक्टिव अभ्यासों के साथ संरचित पाठों का पालन करें।",
    step4Title: "संलग्न हों और पूछें",
    step4Description:
      "चर्चा, प्रश्नोत्तर और समुदाय समर्थन के माध्यम से सलाहकारों और साथी शिक्षार्थियों से जुड़ें।",
    // Events
    upcomingEvents: "आगामी कार्यक्रम",
    eventsSubtitle:
      "हमारे सामुदायिक कार्यक्रमों में शामिल हों और प्राचीन पांडुलिपियों की अपनी समझ को गहरा करें",
    virtualWebinar: "वर्चुअल वेबिनार",
    webinarTitle: "प्राचीन लिपियाँ इंटरैक्टिव वेबिनार",
    dateTBD: "तारीख और समय: टीबीडी",
    duration: "अवधि: 2 घंटे",
    onlineEvent: "ऑनलाइन कार्यक्रम",
    webinarDescription:
      "प्राचीन भारतीय लिपियों के इंटरैक्टिव अन्वेषण के लिए हमसे जुड़ें। इतिहास, सांस्कृतिक महत्व और आधुनिक समय में पांडुलिपि विज्ञान के व्यावहारिक अनुप्रयोगों के बारे में जानें। इस वेबिनार में हमारे विशेषज्ञ प्रशिक्षकों के साथ लाइव प्रदर्शन और प्रश्नोत्तर सत्र होंगे।",
    registerNow: "अभी पंजीकरण करें",
    learnMore: "और जानें",
    freeRegistration: "निःशुल्क पंजीकरण",
    openToAll: "सभी पांडुलिपि उत्साही और विरासत संरक्षण अधिवक्ताओं के लिए खुला",
    // Testimonials
    whatStudentsSay: "हमारे छात्र क्या कहते हैं",
    testimonialsSubtitle:
      "प्राचीन भारतीय लिपियों की सुंदरता की खोज कर रहे शिक्षार्थियों के हमारे समुदाय से सुनें",
    // Team
    meetOurTeam: "हमारी टीम से मिलें",
    teamSubtitle:
      "भारत की पांडुलिपि विरासत के संरक्षण के लिए समर्पित उत्साही व्यक्तियों के बारे में जानें",
    founderDirector: "संस्थापक और निदेशक",
    techHead: "तकनीकी प्रमुख",
    // About Us
    aboutUsTitle: "हमारे बारे में",
    aboutUsContent1:
      "भारतीय पाण्डुलिपि विज्ञान संस्थान भारत की प्राचीन लिपि विरासत को संरक्षित करने और इसे सभी के लिए सुलभ बनाने के लिए समर्पित एक अनूठा मंच है। मंजुश्री सूर्यकांत घोने द्वारा स्थापित और निर्देशित, स्कूल मोदी, ब्राह्मी, नंदी नागरी, शारदा, खरोष्ठी, कैथी और ग्रंथ जैसी लिपियों में संरचित पाठ्यक्रम प्रदान करता है, जो पारंपरिक ज्ञान को आधुनिक शैक्षणिक उपकरणों के साथ जोड़ता है।",
    aboutUsContent2:
      "शिक्षार्थी एक विविध पाठ्यक्रम सूची ब्राउज़ कर सकते हैं, आसानी से नामांकन कर सकते हैं, और निर्देशित सामग्री, अभ्यास पत्रक और इंटरैक्टिव समर्थन के साथ चरण-दर-चरण पाठों का पालन कर सकते हैं। लाइव वेबिनार, सलाहकार कनेक्शन और एक जीवंत समुदाय के माध्यम से, छात्र पांडुलिपि अध्ययन और सांस्कृतिक इतिहास के साथ गहराई से जुड़ते हैं।",
    aboutUsContent3:
      "युवा सशक्तिकरण और नेतृत्व के साथ संरेखित, संस्था सार्वजनिक बोलने, विरासत जागरूकता और सामाजिक विकास के मूल्यों को भी एकीकृत करती है। दिल्ली-एनसीआर क्षेत्र में स्थित, लेकिन राष्ट्रीय स्तर पर (और वस्तुतः) शिक्षार्थियों तक पहुंच रही है, यह केवल एक शिक्षण केंद्र से अधिक है - यह हमारी जड़ों से फिर से जुड़ने, सांस्कृतिक गौरव को प्रेरित करने और कल के लिए ज्ञान रक्षक बनाने का एक आंदोलन है।",
    aboutUsContent4:
      "लिपियों का पता लगाने, आगामी कार्यक्रमों में शामिल होने, या यह जानने के लिए कि प्राचीन पांडुलिपियां हमारे साझा अतीत और भविष्य को कैसे आकार देती हैं, हमसे संपर्क करें।",
    ancientScripts: "प्राचीन लिपियाँ",
    communityLearning: "सामुदायिक शिक्षा",
    nationalReach: "राष्ट्रीय पहुंच",
    culturalPride: "सांस्कृतिक गौरव",
    ourMission: "हमारा मिशन",
    missionStatement:
      "आधुनिक शिक्षा के माध्यम से भारत को इसकी प्राचीन लिपि विरासत से फिर से जोड़ना, सांस्कृतिक गौरव को बढ़ावा देना और ज्ञान रक्षकों की एक नई पीढ़ी बनाना जो आने वाली पीढ़ियों के लिए हमारी पांडुलिपियों को संरक्षित करेगी।",
    readyToBegin: "अपनी यात्रा शुरू करने के लिए तैयार हैं?",
    exploreCoursesSubtitle:
      "हमारे पाठ्यक्रमों का अन्वेषण करें और भारत की प्राचीन लिपियों को फिर से खोजने वाले हजारों शिक्षार्थियों में शामिल हों",
    // Blog
    ourBlog: "हमारा ब्लॉग",
    blogSubtitle:
      "भारत की प्राचीन लिपियों और पांडुलिपि संरक्षण के बारे में अंतर्दृष्टि, कहानियां और ज्ञान",
    searchArticles: "लेख खोजें...",
    all: "सभी",
    scriptHistory: "लिपि इतिहास",
    preservation: "संरक्षण",
    revivalProjects: "पुनरुद्धार परियोजनाएं",
    technology: "प्रौद्योगिकी",
    noBlogPosts: "आपके मानदंडों से मेल खाने वाले कोई ब्लॉग पोस्ट नहीं मिले।",
    readMore: "और पढ़ें",
    stayUpdated: "अपडेट रहें",
    newsletterSubtitle:
      "भारतीय लिपियों और पांडुलिपि संरक्षण पर नवीनतम अंतर्दृष्टि के लिए हमारे न्यूज़लेटर की सदस्यता लें",
    enterEmail: "अपना ईमेल दर्ज करें",
    subscribe: "सदस्यता लें",
    // Contact
    letsConnect: "आइए जुड़ें",
    contact: "संपर्क",
    contactSubtitle:
      "हम आपसे सुनना पसंद करेंगे! चाहे आपके पास हमारे पाठ्यक्रमों के बारे में प्रश्न हों, अधिक जानकारी की आवश्यकता हो, या केवल अपने विचार साझा करना चाहते हों, बेझिझक संपर्क करें। आपकी प्रतिक्रिया और जिज्ञासा हमेशा स्वागत योग्य है। नीचे दिए गए फॉर्म का उपयोग करें या सीधे हमसे जुड़ें—हम आपकी सहायता करने और सीखने और खोज की आपकी यात्रा में आपका मार्गदर्शन करने के लिए यहां हैं।",
    address: "पता",
    email: "ईमेल",
    phone: "फोन",
    socialMedia: "सोशल मीडिया",
    sendMessage: "हमें एक संदेश भेजें",
    formSubtitle:
      "नीचे दिया गया फॉर्म भरें और हम जल्द से जल्द आपसे संपर्क करेंगे।",
    fullName: "पूरा नाम",
    emailAddress: "ईमेल पता",
    subject: "विषय",
    message: "संदेश",
    sendMessageBtn: "संदेश भेजें",
    sending: "भेज रहे हैं...",
    readyToStartLearning: "सीखना शुरू करने के लिए तैयार हैं?",
    dontWait:
      "प्रतीक्षा न करें! आज ही भारत की प्राचीन लिपियों में अपनी यात्रा शुरू करें",
    // Footer
    schoolName: "भारतीय पाण्डुलिपि विज्ञान संस्थान",
    footerDescription:
      "प्राचीन भारतीय लिपियों को संरक्षित करने और सिखाने के लिए समर्पित, विशेषज्ञ निर्देश और व्यापक पाठ्यक्रमों के माध्यम से आधुनिक शिक्षार्थियों को उनकी सांस्कृतिक विरासत से जोड़ना।",
    quickLinks: "त्वरित लिंक",
    contactInfo: "संपर्क जानकारी",
    allRightsReserved:
      "© 2025 भारतीय पाण्डुलिपि विज्ञान संस्थान। सर्वाधिकार सुरक्षित।",
    preservingWisdom:
      "लिपियों के माध्यम से प्राचीन ज्ञान का संरक्षण, सांस्कृतिक विरासत के साथ शिक्षार्थियों को सशक्त बनाना",
  },
};

// Translation Provider Component
export const TranslationProvider = ({ children }) => {
  // Initialize state from localStorage - this runs ONCE on mount
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = localStorage.getItem("preferredLanguage");
      console.log("Loading language from localStorage:", savedLanguage);
      return savedLanguage || "en";
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return "en";
    }
  });

  // Save to localStorage whenever language changes
  useEffect(() => {
    try {
      console.log("Saving language to localStorage:", language);
      localStorage.setItem("preferredLanguage", language);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (newLanguage) => {
    console.log("Changing language to:", newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
