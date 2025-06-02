import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
}

interface ExperienceTimelineProps {
  experiences?: ExperienceItem[];
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: ExperienceTimelineProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Professional Experience
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-orange-300"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto" : "md:pl-8 md:ml-auto md:mr-0"} md:w-1/2 w-full pl-10`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center z-10 shadow-md">
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              {/* Content card */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.company}
                  </h3>
                  <h4 className="text-lg font-medium text-orange-600 mb-1">
                    {exp.position}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center text-sm font-medium text-orange-500 hover:text-orange-700 transition-colors"
                  >
                    {expandedIndex === index ? (
                      <>
                        Hide Details <ChevronUp className="ml-1 w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View Achievements{" "}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </>
                    )}
                  </button>

                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3"
                    >
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultExperiences: ExperienceItem[] = [
  {
    company: "Uniclan Hygiene Pvt Ltd",
    position: "Accounts Manager",
    duration: "Nov 2024 - Present",
    achievements: [
      "Strategic financial oversight, compliance, and reporting",
      "Team leadership and interdepartmental coordination",
      "Perform monthly and weekly book closing",
      "Collaborate with directors on strategic planning and decision-making",
    ],
  },
  {
    company: "Saadaa Sustainable Design Pvt Ltd",
    position: "Team Lead (AR)",
    duration: "Jul 2022 - Nov 2024",
    achievements: [
      "Budgeting, variance analysis",
      "Managed AP/AR functions and generated financial reports",
      "Analyzed data to identify cost-saving measures",
    ],
  },
  {
    company: "Thelagaadi Pvt Ltd",
    position: "Sr. Accountant",
    duration: "Jun 2021 - Jul 2022",
    achievements: [
      "Software implementation, improved forecasting (20% efficiency boost)",
      "Streamlined budgeting processes (30% faster turnaround)",
    ],
  },
  {
    company: "Mrjoss & Taxzeal",
    position: "Accounting Technician",
    duration: "May 2019 - Mar 2021",
    achievements: [
      "Solved accounting problems and reconciled accounts monthly",
      "Maintained general ledger accuracy with bank reconciliation",
    ],
  },
  {
    company: "Mindspace Outsourcing",
    position: "Financial Accounting Executive",
    duration: "Oct 2017 - Mar 2019",
    achievements: [
      "Handled international accounting tools (QuickBooks, Xero)",
      "Reviewed and reconciled expense data and financial statements",
    ],
  },
];

export default ExperienceTimeline;
