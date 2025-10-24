import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { submitContactForm } from "../services/formspree";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);

      if (result.ok) {
        // Success
        toast({
          title: "Message Sent!",
          description: "Thank you for your message! We'll get back to you soon.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Error from Formspree
        const errorMessage =
          result.errors?.[0]?.message || "Something went wrong. Please try again.";
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      // Network or other error
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-coffee-light">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background with coffee texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-dark via-coffee-medium to-coffee-warm" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-coffee-dark opacity-60" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-roboto font-bold text-primary-foreground mb-6 animate-fade-in-up text-shadow">
            Let's Connect
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 animate-fade-in-delayed"></div>
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-primary-foreground mb-6 animate-fade-in-delayed">
            Contact
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-4xl mx-auto animate-fade-in-delayed font-roboto font-light leading-relaxed">
            We'd love to hear from you! Whether you have questions about our
            courses, need more information, or simply wish to share your
            thoughts, feel free to reach out. Your feedback and curiosity are
            always welcome. Use the form below or connect with us directly—we're
            here to assist you and guide you on your journey of learning and
            discovery.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-primary-foreground/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address Card */}
              <Card className="bg-primary-foreground border-coffee-warm/20 shadow-coffee hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-coffee-dark font-roboto">
                    <MapPin className="w-6 h-6 text-coffee-dark mr-3" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-coffee-medium font-roboto leading-relaxed">
                    Raj Nagar Extension, Ghaziabad,
                    <br />
                    Delhi-NCR, 201017 India
                  </p>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="bg-primary-foreground border-coffee-warm/20 shadow-coffee hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-coffee-dark font-roboto">
                    <Mail className="w-6 h-6 text-coffee-dark mr-3" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:indianmanuscripts1@gmail.com"
                    className="text-coffee-medium font-roboto hover:text-coffee-dark transition-colors"
                  >
                    indianmanuscripts1@gmail.com
                  </a>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className="bg-primary-foreground border-coffee-warm/20 shadow-coffee hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-coffee-dark font-roboto">
                    <Phone className="w-6 h-6 text-coffee-dark mr-3" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+919623334690"
                    className="text-coffee-medium font-roboto hover:text-coffee-dark transition-colors"
                  >
                    +91 9623334690
                  </a>
                </CardContent>
              </Card>

              {/* Social Media Card */}
              <Card className="bg-primary-foreground border-coffee-warm/20 shadow-coffee hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-coffee-dark font-roboto">
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-coffee-dark p-3 rounded-full text-accent hover:bg-coffee-medium transition-all duration-300 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-coffee-dark p-3 rounded-full text-accent hover:bg-coffee-medium transition-all duration-300 hover:scale-110"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-coffee-dark p-3 rounded-full text-accent hover:bg-coffee-medium transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-coffee-dark p-3 rounded-full text-accent hover:bg-coffee-medium transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-primary-foreground border-coffee-warm/20 shadow-coffee">
                <CardHeader>
                  <CardTitle className="text-2xl font-roboto font-bold text-coffee-dark">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-coffee-medium font-roboto">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-coffee-dark font-roboto font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="border-coffee-warm/30 focus:border-coffee-dark focus:ring-coffee-dark font-roboto"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-coffee-dark font-roboto font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="border-coffee-warm/30 focus:border-coffee-dark focus:ring-coffee-dark font-roboto"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-coffee-dark font-roboto font-medium mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="border-coffee-warm/30 focus:border-coffee-dark focus:ring-coffee-dark font-roboto"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-coffee-dark font-roboto font-medium mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        rows={5}
                        className="border-coffee-warm/30 focus:border-coffee-dark focus:ring-coffee-dark font-roboto resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-coffee-dark text-primary-foreground hover:bg-coffee-medium font-roboto font-bold text-lg py-6 rounded-full shadow-glow transition-bounce hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-coffee-warm to-coffee-cream">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-coffee-dark mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl font-roboto text-coffee-medium mb-8 max-w-2xl mx-auto">
            Don't wait! Begin your journey into India's ancient scripts today
          </p>
          <Button
            size="lg"
            className="bg-coffee-dark text-primary-foreground hover:bg-coffee-medium font-roboto font-bold text-lg px-8 py-6 rounded-full shadow-glow transition-bounce hover:scale-105"
            onClick={() => (window.location.href = "/")}
          >
            Explore Our Courses
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-dark text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-coffee-dark font-bold text-sm">ISM</span>
              </div>
              <h3 className="text-2xl font-roboto font-bold">
                Indian School of Manuscriptology
              </h3>
            </div>
            <p className="text-primary-foreground/80 font-roboto max-w-2xl mx-auto">
              Preserving ancient wisdom through scripts, empowering learners
              with cultural heritage
            </p>
          </div>
          <div className="border-t border-coffee-warm/20 pt-8">
            <p className="text-primary-foreground/70 font-roboto">
              © 2025 Indian School of Manuscriptology. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;