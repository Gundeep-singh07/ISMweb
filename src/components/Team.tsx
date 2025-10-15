import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  GraduationCap,
  BookOpen,
  User,
} from "lucide-react";
import manjushreePortrait from "@/assets/manjushree-portrait.jpg";
import techHeadPortrait from "@/assets/tech-head-portrait.jpg";

const Team = () => {
  return (
    <section id="about" className="py-20 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-roboto font-bold text-primary-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-roboto">
            Learn about the passionate individuals dedicated to preserving
            India's manuscript heritage
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Founder & Director */}
          <Card className="bg-coffee-medium border-coffee-warm/20 shadow-warm overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-coffee">
                  <img
                    src={manjushreePortrait}
                    alt="Mrs. Manjushree Ghone-Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-roboto font-bold text-primary-foreground mb-2">
                  Mrs. Manjushree Ghone-Singh
                </h3>
                <p className="text-accent font-roboto font-medium text-lg mb-4">
                  Founder & Director
                </p>
              </div>
              <div className="text-primary-foreground/90 font-roboto text-justify leading-relaxed mb-6">
                <p>
                  Manjushree Surykant Ghone is the Founder & Director of the
                  Indian School of Manuscriptology and an accomplished youth
                  leader, orator, and chess champion. With expertise in ancient
                  Indian scripts such as Modi, Brahmi, Nandi Nagari, Sharda, and
                  Grantha, she is dedicated to preserving India's cultural
                  heritage.
                </p>
                <p className="mt-4">
                  She has been recognized as the One Day Chief Minister of
                  Rajasthan (2019) under the Wake Up Maharashtra's Main Bhi
                  Nayak initiative and has contributed to the Youth Manifesto of
                  Maharashtra 4.0, influencing youth-centric policies. An
                  award-winning speaker and West Zone Women Chess Champion
                  (2019), she continues to inspire youth through leadership,
                  education, and rural development initiatives.
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/share/1BgPDUnTKN/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a
                    href="https://x.com/manjushreeghone?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Tech Head */}
          <Card className="bg-coffee-medium border-coffee-warm/20 shadow-warm overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-coffee">
                  <img
                    src={techHeadPortrait}
                    alt="Dr. Kuljeet Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-roboto font-bold text-primary-foreground mb-2">
                  Dr. Kuljeet Singh
                </h3>
                <p className="text-accent font-roboto font-medium text-lg mb-4">
                  Tech Head
                </p>
              </div>
              <div className="text-primary-foreground/90 font-roboto text-center leading-relaxed mb-6">
                <p className="mt-4 text-sm opacity-75">
                  Dr. Kuljeet Singh is an Assistant Professor in the Department
                  of Computer Science, CHRIST (Deemed to be University),
                  Delhi-NCR. He earned his Ph.D. in Computer Science from the
                  Central University of Jammu and his M.Tech. in Computer
                  Science and Engineering from IIT Patna. He also holds a
                  Master's degree in Computer Applications from the University
                  of Jammu. Before joining CHRIST University, Dr. Singh served
                  as a Lecturer and Head (In-Charge) of the Department of
                  Computer Science & IT at the University of Jammu, Kishtwar
                  Campus, for more than two years. He has qualified the National
                  Eligibility Test (NET) four times consecutively (2019–2021)
                  and the Himachal Pradesh State Eligibility Test (HP-SET) in
                  2019. Dr. Singh has an extensive research profile with over 35
                  SCI and Scopus-indexed journal publications, 10 Scopus-indexed
                  conference papers, 3 book chapters, 8 patents, and 1 authored
                  book. He actively contributes to the academic community as an
                  editorial board member for several journals, including Journal
                  of Research in Diabetes & Metabolism, Journal of Biomed
                  Research, Machine Learning in Engineering and Technology, and
                  Acta Scientific Computer Sciences. In addition, he serves as a
                  reviewer for reputed journals such as IEEE Communications
                  Magazine, Computers in Biology and Medicine, Scientific
                  Reports, BMC Medical Informatics and Decision Making, and
                  several IEEE, Elsevier, and Springer international
                  conferences.
                </p>
              </div>
              <div className="flex justify-center flex-wrap gap-3">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/kuljeet-singh7/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a
                    href="https://x.com/kuljeet_singh7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a
                    href="https://scholar.google.com/citations?user=SUeFXRIAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GraduationCap className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a
                    href="https://www.scopus.com/authid/detail.uri?authorId=57221031051"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a
                    href="https://orcid.org/0000-0003-2592-8625"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <User className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                  asChild
                >
                  <a
                    href="https://www.researchgate.net/profile/Kuljeet-Singh-11"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.48-.182 2.048-.547.57-.366.982-.916 1.235-1.65.263-.764.394-1.644.394-2.64 0-1.01-.135-1.895-.405-2.656-.253-.736-.665-1.287-1.235-1.653-.57-.366-1.249-.548-2.048-.548zm-6.868 5.703c-.441.228-.97.425-1.587.59-.618.165-1.279.31-1.981.433a23.85 23.85 0 0 1-2.127.225c-.766.059-1.543.09-2.33.09H2.278v.004H0v18.005h2.278v-8.336h2.415c.788 0 1.565.031 2.33.09.767.06 1.497.149 2.128.225.702.124 1.363.268 1.98.433.618.166 1.147.363 1.588.59.804.415 1.456.975 1.954 1.68.497.704.746 1.618.746 2.742 0 1.158-.249 2.1-.746 2.825-.498.726-1.15 1.302-1.954 1.73-.441.228-.97.425-1.587.59-.618.165-1.279.31-1.981.433a23.85 23.85 0 0 1-2.127.225c-.766.059-1.543.09-2.33.09H2.278v2.278h2.415c.787 0 1.564-.03 2.33-.09.766-.06 1.496-.149 2.127-.225.702-.123 1.363-.268 1.98-.433.618-.165 1.147-.362 1.588-.59 1.187-.606 2.142-1.474 2.866-2.604.724-1.13 1.086-2.465 1.086-4.005 0-1.54-.362-2.875-1.086-4.005-.724-1.13-1.679-1.998-2.866-2.604z" />
                    </svg>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
