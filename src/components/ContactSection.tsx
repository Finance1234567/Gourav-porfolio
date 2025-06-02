import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";

interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
}

interface ContactSectionProps {
  contactInfo?: ContactInfo;
}

const ContactSection = ({
  contactInfo = defaultContactInfo,
}: ContactSectionProps) => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss how I can help with your financial needs
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <Card className="h-full border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#e8a87c] bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#e8a87c]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          Phone
                        </h4>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-gray-600 hover:text-[#e8a87c] transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#e8a87c] bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#e8a87c]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          Email
                        </h4>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-gray-600 hover:text-[#e8a87c] transition-colors break-all"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#e8a87c] bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#e8a87c]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          Location
                        </h4>
                        <p className="text-gray-600">{contactInfo.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#e8a87c] bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
                        <Linkedin className="w-5 h-5 text-[#e8a87c]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          LinkedIn
                        </h4>
                        <a
                          href={contactInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-[#e8a87c] transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="mt-8 bg-[#e8a87c] hover:bg-[#d69b71] text-white w-full"
                    size="lg"
                  >
                    Let's Connect <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <Card className="h-full border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Send a Message</h3>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e8a87c] focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e8a87c] focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e8a87c] focus:border-transparent"
                        placeholder="How can I help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e8a87c] focus:border-transparent"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="bg-[#e8a87c] hover:bg-[#d69b71] text-white"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultContactInfo: ContactInfo = {
  phone: "+91 97722 93188",
  email: "gouravsharma2040@gmail.com",
  location: "Jaipur, India",
  linkedin: "https://www.linkedin.com/",
};

export default ContactSection;
