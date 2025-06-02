import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  metrics: string[];
  image: string;
  tags: string[];
}

interface ProjectShowcaseProps {
  projects?: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Project Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key financial projects that demonstrate expertise in optimization,
            compliance, and system implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-orange-50 text-orange-700 border-orange-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.metrics.map((metric, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <button className="text-orange-600 hover:text-orange-800 font-medium text-sm flex items-center">
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: 1,
    title: "ERP Implementation Project",
    description:
      "Led the implementation of a comprehensive ERP system to streamline financial operations and improve cross-departmental data flow.",
    metrics: [
      "Reduced process turnaround time by 15%",
      "Trained 50+ employees on new system",
      "Integrated 5 separate financial workflows",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["ERP", "Process Optimization", "Training"],
  },
  {
    id: 2,
    title: "Budget Optimization at Thelagaadi",
    description:
      "Redesigned budgeting processes to improve accuracy and reduce time spent on budget preparation and analysis.",
    metrics: [
      "Achieved 30% faster budget processing",
      "Improved forecast accuracy by 22%",
      "Developed automated variance analysis tools",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    tags: ["Budgeting", "Forecasting", "Automation"],
  },
  {
    id: 3,
    title: "GST Compliance Automation",
    description:
      "Implemented automated GST filing and compliance tracking system to ensure timely submissions and reduce penalty risks.",
    metrics: [
      "100% on-time filing achievement",
      "Reduced compliance workload by 40%",
      "Eliminated manual data entry errors",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    tags: ["GST", "Compliance", "Automation"],
  },
  {
    id: 4,
    title: "Data Reconciliation Dashboard",
    description:
      "Designed and built Power BI dashboards for executive reporting, focusing on key financial metrics and reconciliation data.",
    metrics: [
      "Created monthly reporting tools for CXOs",
      "Reduced reporting preparation time by 65%",
      "Implemented real-time financial monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    tags: ["Power BI", "Data Analysis", "Reporting"],
  },
];

export default ProjectShowcase;
