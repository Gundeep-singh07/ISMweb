import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
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
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                >
                  <Linkedin className="w-5 h-5" />
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
                  Master’s degree in Computer Applications from the University
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

              <div className="flex justify-center space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-primary-foreground hover:text-accent hover:bg-coffee-warm/20"
                >
                  <Linkedin className="w-5 h-5" />
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
