import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building, CheckCircle } from "lucide-react";

interface InternshipProject {
  type: string;
  clients: string[];
}

interface InternshipDetails {
  company: string;
  duration: string;
  projects: InternshipProject[];
}

interface InternshipSectionProps {
  internship?: InternshipDetails;
}

const InternshipSection = ({
  internship = defaultInternship,
}: InternshipSectionProps) => {
  return (
    <section className="py-16 bg-white" id="internship">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Internship Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional training and practical experience
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full bg-[#e8a87c] bg-opacity-20 flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-[#e8a87c]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {internship.company}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span>{internship.duration}</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-[#e8a87c] text-white px-4 py-1.5 text-sm self-start md:self-auto">
                  36 Months
                </Badge>
              </div>

              <div className="space-y-6">
                {internship.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-5"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {project.type}
                    </h4>
                    <div className="space-y-2">
                      {project.clients.map((client, clientIndex) => (
                        <div key={clientIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#e8a87c] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{client}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const defaultInternship: InternshipDetails = {
  company: "Rajvanshi & Associates",
  duration: "36 Months",
  projects: [
    {
      type: "Statutory Audit",
      clients: ["Bank of Patiala (Mumbai)", "Pollution Control Board", "PWD"],
    },
    {
      type: "Concurrent Audit",
      clients: ["UCO Bank"],
    },
    {
      type: "Taxation Audits",
      clients: ["CEG", "NAQ Global", "Shekhawati Art Export"],
    },
  ],
};

export default InternshipSection;
