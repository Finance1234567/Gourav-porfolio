import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  title?: string;
  summary?: string;
  stats?: {
    experience?: string;
    accuracy?: string;
    projects?: string;
  };
  profileImage?: string;
}

const HeroSection = ({
  name = "Gourav Sharma",
  title = "Accounts Manager | Financial Analyst",
  summary = "Experienced Accounting Technician and GST Practitioner with 8+ years of expertise in finance management, taxation, internal audits, MIS reporting, and ERP systems. Proven leader with a sharp eye for detail and process improvement, focusing on accuracy and compliance.",
  stats = {
    experience: "8+ Years Experience",
    accuracy: "98% Accuracy Rate",
    projects: "40+ Projects Handled",
  },
  profileImage = "/assets/gourav-profile.jpeg",
}: HeroSectionProps) => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f5f0] text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 md:w-64 md:h-64 relative"
          >
            <Avatar className="w-full h-full border-4 border-[#e8a87c]">
              <AvatarImage
                src={profileImage}
                alt={name}
                className="object-cover"
              />
              <AvatarFallback className="text-4xl bg-[#e8a87c] text-white">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{name}</h1>
            <h2 className="text-xl md:text-2xl text-[#e8a87c] font-medium mb-4">
              {title}
            </h2>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-6">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold">
                  {stats.experience?.split(" ")[0]}
                </span>
                <span className="text-sm">Years Experience</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold">
                  {stats.accuracy?.split(" ")[0]}
                </span>
                <span className="text-sm">Accuracy Rate</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold">
                  {stats.projects?.split(" ")[0]}
                </span>
                <span className="text-sm">Projects Handled</span>
              </div>
            </div>

            <p className="text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0">
              {summary}
            </p>

            <Button
              className="bg-[#e8a87c] hover:bg-[#d69b71] text-white"
              size="lg"
              asChild
            >
              <a href="/GOURAV_SHARMA resume (1).pdf" download>
  <button className="btn-primary">Download Resume</button>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
