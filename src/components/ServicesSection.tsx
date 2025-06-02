import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  FileText,
  Calculator,
  Search,
  PieChart,
  Database,
  Calendar,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServicesSectionProps {
  services?: Service[];
}

const ServicesSection = ({
  services = defaultServices,
}: ServicesSectionProps) => {
  return (
    <section className="py-16 bg-[#f8f5f0]" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial services tailored to meet your business
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#e8a87c] bg-opacity-20 flex items-center justify-center mb-4">
                    <div className="text-[#e8a87c]">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultServices: Service[] = [
  {
    title: "Financial Reporting & Analysis",
    description:
      "Comprehensive financial statements and in-depth analysis to drive informed business decisions.",
    icon: <FileText size={28} />,
  },
  {
    title: "Taxation & GST Filing",
    description:
      "Timely and accurate tax preparation, planning, and GST filing to ensure compliance and minimize liabilities.",
    icon: <Calculator size={28} />,
  },
  {
    title: "Budgeting & Forecasting",
    description:
      "Strategic financial planning with detailed budgets and forecasts to guide business growth.",
    icon: <BarChart3 size={28} />,
  },
  {
    title: "Internal & Statutory Audit",
    description:
      "Thorough examination of financial records and processes to ensure accuracy and regulatory compliance.",
    icon: <Search size={28} />,
  },
  {
    title: "MIS Reporting & Reconciliation",
    description:
      "Detailed management information system reports and account reconciliation for improved financial oversight.",
    icon: <PieChart size={28} />,
  },
  {
    title: "ERP Implementation",
    description:
      "Expert guidance in selecting and implementing ERP systems tailored to your business needs.",
    icon: <Database size={28} />,
  },
  {
    title: "TDS and Monthly Books Closing",
    description:
      "Efficient TDS management and timely monthly book closing to maintain financial accuracy.",
    icon: <Calendar size={28} />,
  },
];

export default ServicesSection;
