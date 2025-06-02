import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  name: string;
  skills: string[];
}

interface SkillsSectionProps {
  skillCategories?: SkillCategory[];
}

const SkillsSection = ({
  skillCategories = defaultSkillCategories,
}: SkillsSectionProps) => {
  return (
    <section className="py-16 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional expertise and technical proficiency
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-[#e8a87c]">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-[#e8a87c] bg-opacity-10 text-gray-800 hover:bg-[#e8a87c] hover:text-white transition-colors py-1.5 px-3 text-sm"
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-[#e8a87c] bg-opacity-5 rounded-lg p-6 border border-[#e8a87c] border-opacity-20"
          >
            <h3 className="text-xl font-bold mb-4 text-center">
              Proficiency Level
            </h3>
            <div className="space-y-4">
              {[
                { name: "Financial Software", level: 95 },
                { name: "GST & Taxation", level: 90 },
                { name: "Financial Analysis", level: 85 },
                { name: "ERP Systems", level: 80 },
                { name: "Data Visualization", level: 75 },
              ].map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-[#e8a87c] rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const defaultSkillCategories: SkillCategory[] = [
  {
    name: "Accounting Software",
    skills: ["Tally", "Busy", "QuickBooks", "Xero", "SAP"],
  },
  {
    name: "Data & Analysis",
    skills: ["Excel", "Google Sheets", "Power BI", "Financial Modeling"],
  },
  {
    name: "Taxation & Compliance",
    skills: ["GST", "TDS", "Income Tax", "Statutory Compliance"],
  },
  {
    name: "Financial Processes",
    skills: ["Book Closing", "Reconciliation", "Audit", "Financial Reporting"],
  },
];

export default SkillsSection;
