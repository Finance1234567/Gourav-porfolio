import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
  grade?: string;
}

interface EducationSectionProps {
  educationList?: Education[];
}

const EducationSection = ({
  educationList = defaultEducation,
}: EducationSectionProps) => {
  return (
    <section className="py-16 bg-[#f8f5f0]" id="education">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic qualifications and professional certifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[#e8a87c] hidden md:block"></div>

            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8 md:pl-16 pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#e8a87c] flex items-center justify-center z-10 shadow-md hidden md:flex">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-5 h-5 text-[#e8a87c] mr-2 md:hidden" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {edu.degree}
                      </h3>
                    </div>
                    <h4 className="text-lg font-medium text-[#e8a87c] mb-1">
                      {edu.institution}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.year}</span>
                    </div>
                    {edu.details && (
                      <p className="text-gray-700 mb-2">{edu.details}</p>
                    )}
                    {edu.grade && (
                      <div className="mt-2 inline-block bg-[#e8a87c] bg-opacity-10 px-3 py-1 rounded-full text-sm font-medium text-[#e8a87c]">
                        Grade: {edu.grade}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultEducation: Education[] = [
  {
    degree: "CA Finalist",
    institution: "Institute of Chartered Accountants of India",
    year: "2016",
    details: "Specialization: Accounting, Auditing, Taxation",
  },
  {
    degree: "M.Com (Commerce)",
    institution: "University of Rajasthan, Jaipur",
    year: "2019",
    grade: "9/10",
  },
  {
    degree: "B.Com (Commerce)",
    institution: "Rajasthan University",
    year: "2017",
  },
  {
    degree: "12th Grade",
    institution: "Rajasthan Board (English Medium)",
    year: "2014",
    grade: "73.80%",
  },
  {
    degree: "10th Grade",
    institution: "Rajasthan Board (English Medium)",
    year: "2012",
    grade: "64.83%",
  },
];

export default EducationSection;
