import React, { useState } from "react";
import { Calendar, User, Clock, Search, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample blog data - In production, this would come from an API/database
  const blogPosts = [
    {
      id: 1,
      title: "The Ancient Art of Modi Script",
      excerpt:
        "Discover the fascinating history and unique characteristics of Modi script, a cursive script used to write Marathi that dates back to the 17th century.",
      fullContent: `Modi script, also known as Moḍī or Baḷabodh, is a cursive script that was used to write the Marathi language from the 17th century until the mid-20th century. This beautiful and flowing script was developed during the Maratha Empire and became the primary administrative and literary script of Maharashtra.

The word "Modi" comes from the Marathi word "moḍaṇe," which means "to bend" or "to break," referring to the curved and flowing nature of the script's characters. Unlike the angular Devanagari script, Modi features rounded, connected letterforms that made it faster to write, which is why it became popular for official documentation and correspondence.

Historical Significance:
Modi script played a crucial role in preserving Marathi literature, administrative records, and cultural heritage. The Peshwa administration extensively used Modi for their official documents, making it an essential tool for governance. Many historical manuscripts, including literary works, religious texts, and official records from the Maratha Empire, are written in Modi script.

Characteristics:
- Cursive and flowing letterforms
- Right-to-left reading direction (though written left to right)
- Ligatures and conjunct consonants
- Distinct from Devanagari while sharing some similarities
- Efficient for rapid writing

Modern Revival:
Today, there is a growing interest in reviving Modi script. Organizations and educational institutions are working to digitize Modi manuscripts and teach the script to new generations. This effort is crucial for accessing historical documents and preserving Maharashtra's rich cultural heritage.

Learning Modi script opens doors to understanding historical documents, appreciating Marathi literature in its original form, and connecting with the administrative and cultural legacy of the Maratha Empire.`,
      author: "Manjushree Surykant Ghone",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Script History",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80",
      tags: ["Modi", "Marathi", "History"],
    },
    {
      id: 2,
      title: "Preserving Brahmi: The Mother of Indian Scripts",
      excerpt:
        "Explore how Brahmi script became the foundation for most Indian writing systems and why its preservation is crucial for understanding our heritage.",
      fullContent: `Brahmi script is one of the oldest writing systems of the Indian subcontinent, dating back to at least the 3rd century BCE. It is considered the ancestral script for most of the writing systems used in South Asia, Southeast Asia, Tibet, and East Asia. The preservation and study of Brahmi is essential for understanding the evolution of Indian languages and scripts.

Historical Context:
Brahmi first appeared during the reign of Emperor Ashoka, who used it extensively for his edicts inscribed on pillars and rocks throughout his empire. These inscriptions, which promoted Buddhist teachings and ethical governance, are among the earliest evidence of Brahmi script and provide invaluable insights into ancient Indian history.

Evolution and Influence:
From Brahmi evolved numerous scripts including:
- Devanagari (used for Hindi, Sanskrit, Marathi)
- Bengali and Assamese scripts
- Gujarati script
- Kannada and Telugu scripts
- Tamil and Malayalam scripts
- Tibetan script
- Southeast Asian scripts like Thai and Khmer

This makes Brahmi truly the "mother script" of a vast linguistic and cultural region.

Characteristics:
- Written from left to right
- Consonant-centric with inherent vowel sounds
- Developed sophisticated ways to represent conjunct consonants
- Regional variations that led to different descendant scripts

Preservation Efforts:
Modern scholars and institutions are working tirelessly to:
- Digitize ancient Brahmi inscriptions and manuscripts
- Develop fonts and input methods for digital use
- Create educational resources for learning Brahmi
- Decode previously untranslated inscriptions
- Preserve physical artifacts containing Brahmi writing

The study of Brahmi is not just an academic exercise—it's a journey into understanding how writing systems evolve, how ideas spread across cultures, and how our ancestors communicated complex philosophical and administrative concepts.`,
      author: "Dr. Rajesh Kumar",
      date: "2025-01-10",
      readTime: "7 min read",
      category: "Preservation",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      tags: ["Brahmi", "Preservation", "Heritage"],
    },
    {
      id: 3,
      title: "Decoding Kharoshti: Right-to-Left Writing in Ancient India",
      excerpt:
        "Learn about the unique Kharoshti script that was written from right to left and its significance in ancient Indian Buddhism and trade routes.",
      fullContent: `Kharoshti script is one of the most fascinating writing systems of ancient India, notable for being written from right to left—a unique characteristic among Indian scripts. It was primarily used in the northwestern regions of the Indian subcontinent from around the 3rd century BCE to the 3rd century CE.

Origins and Geography:
Kharoshti emerged in the region that corresponds to modern-day Pakistan, Afghanistan, and parts of northern India. The script's name possibly derives from the phrase "kharoṣṭha lipi," meaning "script of scribes" or potentially from the ancient city of Kharoṣṭhī.

The right-to-left writing direction of Kharoshti is believed to have been influenced by Aramaic script, reflecting the cultural and commercial connections between the Indian subcontinent and the Persian Empire during that period.

Connection to Buddhism:
Kharoshti played a crucial role in the spread of Buddhism along the ancient Silk Road. Many Buddhist texts, inscriptions, and manuscripts were written in Kharoshti, helping to disseminate Buddhist teachings across Central Asia. The Gandharan Buddhist texts, discovered in Afghanistan and Pakistan, are among the oldest surviving Buddhist manuscripts and are written in Kharoshti.

Characteristics:
- Right-to-left writing direction (unlike most Indian scripts)
- Used primarily for administrative and religious purposes
- Written on various materials including stone, pottery, wood, and birch bark
- Consonant-based with inherent vowel sounds
- Simpler character forms compared to Brahmi

Trade and Administration:
Kharoshti was extensively used in trade documents and administrative records. Archaeological evidence shows its use in:
- Coins and seals
- Tax receipts and official documents
- Trade agreements and contracts
- Religious inscriptions and dedications

Decline and Legacy:
By the 3rd century CE, Kharoshti gradually declined and was replaced by Brahmi-derived scripts. However, its legacy remains important for understanding:
- Ancient trade routes and cultural exchanges
- The spread of Buddhism in Central Asia
- Linguistic evolution in the northwestern Indian subcontinent
- Cross-cultural influences between Indian and Middle Eastern civilizations

Today, scholars continue to study Kharoshti inscriptions to unlock information about ancient commerce, religious practices, and daily life in the regions where it was used.`,
      author: "Dr. Anita Sharma",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Script History",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      tags: ["Kharoshti", "Buddhism", "Ancient India"],
    },
    {
      id: 4,
      title: "The Revival of Nandi Nagari Script",
      excerpt:
        "How modern scholars are working to revive and preserve the beautiful Nandi Nagari script used in ancient Kannada manuscripts.",
      fullContent: `Nandi Nagari, also known as Nandināgarī, is an ancient script that was used primarily in southern India, particularly for writing Sanskrit and Kannada. This elegant script flourished between the 12th and 18th centuries and is characterized by its distinctive rounded letterforms and graceful appearance.

Historical Background:
Nandi Nagari developed as a variant of the Nagari family of scripts and was extensively used in the Karnataka region during the medieval period. The script gets its name from the Nandi symbol (the bull, vehicle of Lord Shiva) that often adorned manuscripts written in this script.

The script was primarily used for:
- Religious texts and Hindu scriptures
- Literary compositions in Sanskrit and Kannada
- Official documents of the Vijayanagara Empire
- Palm leaf manuscripts
- Temple inscriptions

Unique Features:
Nandi Nagari is distinguished by several characteristics:
- Rounded, flowing letterforms with minimal angular strokes
- Elaborate decorative elements
- Clear separation between words
- Distinctive vowel markers
- Beautiful calligraphic possibilities

Cultural Significance:
Many important works of Indian philosophy, literature, and science were preserved in Nandi Nagari manuscripts. These include:
- Vedic texts and commentaries
- Ayurvedic medical treatises
- Astronomical works
- Literary compositions by medieval poets
- Temple administrative records

The Revival Movement:
In recent decades, there has been a concerted effort to revive interest in Nandi Nagari:

1. Digitization Projects: Organizations are scanning and digitizing thousands of Nandi Nagari manuscripts to prevent their loss and make them accessible to researchers worldwide.

2. Educational Initiatives: Universities and cultural institutions are offering courses in reading and writing Nandi Nagari, training a new generation of scholars.

3. Font Development: Digital fonts have been created, making it possible to type and publish in Nandi Nagari for the first time in centuries.

4. Research and Translation: Scholars are working to translate important texts from Nandi Nagari into modern languages, unlocking knowledge that has been inaccessible for generations.

5. Cultural Programs: Workshops, exhibitions, and cultural events are raising public awareness about the script's importance.

Challenges and Opportunities:
While the revival faces challenges—including the scarcity of teachers, the complexity of learning the script, and limited modern applications—there are also exciting opportunities. The digital age provides tools for preservation, learning, and dissemination that were unimaginable to previous generations.

The revival of Nandi Nagari is not just about preserving a writing system; it's about reconnecting with a rich intellectual and cultural heritage that shaped South Indian civilization for centuries.`,
      author: "Manjushree Surykant Ghone",
      date: "2024-12-28",
      readTime: "5 min read",
      category: "Revival Projects",
      image:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
      tags: ["Nandi Nagari", "Kannada", "Revival"],
    },
    {
      id: 5,
      title: "Sharda Script: Kashmir's Literary Treasure",
      excerpt:
        "Delve into the rich history of Sharda script, the ancient writing system of Kashmir that holds centuries of knowledge and culture.",
      fullContent: `Sharda script, also known as Śāradā or Sharada, is the ancient writing system of Kashmir and surrounding regions. For over a millennium, this beautiful script served as the primary means of recording Sanskrit, Kashmiri, and other languages in the northwestern Indian subcontinent.

Historical Origins:
Sharda script evolved from Brahmi in the 8th century CE and reached its classical form during the Kashmir Śaivism philosophical movement. The script's name comes from Sharada Devi, the goddess of learning and wisdom, who has a major temple in the Kashmir region.

Geographic Spread:
While primarily associated with Kashmir, Sharda was also used in:
- Himachal Pradesh
- Punjab hills
- Parts of Afghanistan
- Western Tibet
- Areas along ancient trade routes

Golden Age:
From the 9th to 14th centuries, Kashmir was a major center of Sanskrit learning, and Sharda script was the medium for an extraordinary flowering of:
- Philosophy (especially Kashmir Śaivism)
- Poetry and drama
- Grammar and linguistics
- Mathematical and astronomical texts
- Buddhist and Hindu religious literature

Many foundational texts of Indian philosophy were composed or preserved in Sharda manuscripts during this period.

Script Characteristics:
Sharda is distinguished by:
- Angular, geometric letterforms
- Clear, readable character shapes
- Sophisticated system for representing Sanskrit phonetics
- Distinctive conjunct consonants
- Beautiful when written in calligraphic styles

Cultural Importance:
Sharda manuscripts are treasure troves containing:
- Lost philosophical texts rediscovered in modern times
- Unique commentaries on classical works
- Original compositions by Kashmiri scholars
- Historical chronicles and royal records
- Scientific and medical treatises

Decline and Preservation:
The use of Sharda script declined from the 14th century onwards, gradually replaced by Persian and later Devanagari. However, many ancient manuscripts survived in:
- Libraries and monasteries in Kashmir
- Personal collections of Pandit families
- Institutions in other parts of India
- Museums and libraries worldwide

Modern Efforts:
Today, several initiatives are working to preserve and revive Sharda:

1. Manuscript Conservation: Organizations are preserving fragile palm leaf and paper manuscripts through digitization and proper storage.

2. Academic Study: Universities offer programs in reading Sharda, training scholars to access this vast literary heritage.

3. Digital Tools: Sharda Unicode fonts and OCR technology are being developed to facilitate digital scholarship.

4. Cultural Revival: In Kashmir and among the Kashmiri diaspora, there's growing interest in learning Sharda as a connection to cultural roots.

5. Translation Projects: Scholars are translating important Sharda texts into modern languages, making this knowledge accessible to wider audiences.

The Sharda script is more than just an ancient writing system—it's a key to unlocking centuries of philosophical thought, scientific knowledge, and cultural expression from one of India's most intellectually vibrant regions.`,
      author: "Prof. Vikram Singh",
      date: "2024-12-20",
      readTime: "8 min read",
      category: "Script History",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      tags: ["Sharda", "Kashmir", "Literature"],
    },
    {
      id: 6,
      title: "Digital Tools for Manuscript Study",
      excerpt:
        "Explore the latest digital tools and technologies that are revolutionizing the study and preservation of ancient manuscripts.",
      fullContent: `The digital revolution has transformed the field of manuscript studies, providing scholars and enthusiasts with powerful tools to preserve, analyze, and share ancient texts. From high-resolution imaging to artificial intelligence, technology is opening new possibilities for understanding our written heritage.

Digital Imaging Technologies:

1. High-Resolution Photography:
Modern cameras can capture manuscripts in stunning detail, revealing features invisible to the naked eye. Multi-spectral imaging can even recover faded or erased text by capturing images at different wavelengths of light.

2. 3D Scanning:
Three-dimensional scanning creates detailed models of manuscripts, capturing their physical characteristics including binding, texture, and any damage. This is crucial for preservation and study without handling fragile originals.

3. Infrared and Ultraviolet Imaging:
These techniques can reveal text that has faded over time or been deliberately erased (palimpsests), uncovering lost works and hidden layers of manuscript history.

OCR and Text Recognition:

Optical Character Recognition (OCR) technology, traditionally used for printed text, is being adapted for handwritten manuscripts:
- Machine learning algorithms are being trained to recognize different scripts
- Pattern recognition helps identify scribal hands and dating
- Automated transcription speeds up the process of making manuscripts searchable

Database and Digital Libraries:

Manuscript repositories worldwide are creating digital libraries:
- High-quality scans accessible to researchers globally
- Searchable databases of manuscript contents
- Virtual reading rooms eliminating need for physical travel
- Collaborative platforms for shared research

Artificial Intelligence Applications:

AI is revolutionizing manuscript studies:

1. Handwriting Recognition: Neural networks can learn to read ancient scripts with increasing accuracy.

2. Script Classification: AI can identify and classify different writing styles and scripts.

3. Dating and Attribution: Machine learning helps determine when and where manuscripts were created.

4. Damage Assessment: AI can analyze deterioration and predict preservation needs.

Text Analysis Tools:

Digital humanities tools enable new research approaches:
- Computational linguistics for language analysis
- Statistical analysis of vocabulary and style
- Network analysis of text relationships
- Concordances and word frequency studies

Collaborative Platforms:

Online platforms enable global collaboration:
- Crowdsourced transcription projects
- Shared annotation tools
- Discussion forums for manuscript studies
- Virtual conferences and workshops

Digital Preservation:

Technology ensures long-term preservation:
- Multiple digital copies in different locations
- Format migration as technology evolves
- Blockchain for authentication and provenance tracking
- Cloud storage for accessibility and redundancy

Educational Applications:

Digital tools make manuscripts accessible for learning:
- Virtual exhibitions for public engagement
- Interactive learning modules
- Comparison tools for studying script evolution
- 3D visualizations for understanding manuscript construction

Challenges and Considerations:

Despite benefits, digital approaches face challenges:
- Need for standardization across projects
- Long-term sustainability of digital archives
- Balance between access and copyright protection
- Ensuring quality control in digitization
- Training scholars in new technologies

The Future:

Emerging technologies promise even more exciting possibilities:
- Virtual reality for immersive manuscript exploration
- Augmented reality for overlaying translations and annotations
- Advanced AI for automatic translation
- Quantum computing for complex pattern recognition
- Holographic displays for studying 3D aspects of manuscripts

The digital revolution in manuscript studies is democratizing access to our written heritage. What once required travel to distant libraries and specialized training is now available to anyone with internet access. As technology continues to evolve, we can expect even more innovative ways to preserve, study, and appreciate the manuscripts that connect us to our past.`,
      author: "Dr. Priya Nair",
      date: "2024-12-15",
      readTime: "6 min read",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
      tags: ["Technology", "Digital", "Innovation"],
    },
  ];

  const categories = [
    "All",
    "Script History",
    "Preservation",
    "Revival Projects",
    "Technology",
  ];

  // Filter blogs based on search and category
  const filteredBlogs = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-coffee-light">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-warm" />
        <div className="absolute inset-0 bg-coffee-dark opacity-60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-roboto font-bold text-primary-foreground mb-6 animate-fade-in-up text-shadow">
            Our Blog
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 animate-fade-in-delayed"></div>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-delayed font-roboto font-light leading-relaxed">
            Insights, stories, and knowledge about India's ancient scripts and
            manuscript preservation
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-coffee-cream border-b border-coffee-warm/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coffee-medium w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-coffee-warm/30 focus:border-coffee-dark font-roboto"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`font-roboto ${
                    selectedCategory === category
                      ? "bg-coffee-dark text-primary-foreground hover:bg-coffee-medium"
                      : "border-coffee-warm/30 text-coffee-dark hover:bg-coffee-warm/20"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-coffee-medium font-roboto">
                No blog posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <Card
                  key={post.id}
                  className="group bg-primary-foreground border-coffee-warm/20 shadow-coffee hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-coffee-dark text-accent font-roboto">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl font-roboto font-bold text-coffee-dark group-hover:text-coffee-medium transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-coffee-medium font-roboto line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-3 text-xs text-coffee-medium font-roboto mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span className="line-clamp-1">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-coffee-warm/30 text-coffee-medium font-roboto text-xs"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button
                      className="w-full bg-coffee-dark text-primary-foreground hover:bg-coffee-medium font-roboto transition-all"
                      onClick={() => handleReadMore(post)}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Blog Post Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-primary-foreground">
          {selectedPost && (
            <>
              {/* Blog Image */}
              <div className="relative h-64 -mt-6 -mx-6 mb-6 overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-coffee-dark text-accent font-roboto">
                    {selectedPost.category}
                  </Badge>
                </div>
              </div>

              <DialogHeader>
                <DialogTitle className="text-3xl font-roboto font-bold text-coffee-dark mb-4">
                  {selectedPost.title}
                </DialogTitle>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 text-sm text-coffee-medium font-roboto mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(selectedPost.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-coffee-warm/30 text-coffee-medium font-roboto"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              {/* Full Content */}
              <DialogDescription asChild>
                <div className="prose prose-lg max-w-none">
                  {selectedPost.fullContent
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-coffee-dark font-roboto leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-gradient-to-r from-coffee-warm to-coffee-cream">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-coffee-dark mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-coffee-medium font-roboto mb-8">
            Subscribe to our newsletter for the latest insights on Indian
            scripts and manuscript preservation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-coffee-warm/30 focus:border-coffee-dark font-roboto"
            />
            <Button className="bg-coffee-dark text-primary-foreground hover:bg-coffee-medium font-roboto font-bold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
