import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  return (
    <section className="py-16 bg-[#f8f5f0]" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What Employer and colleagues say about my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-[#e8a87c] opacity-20" />

                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-[#e8a87c] bg-opacity-20 flex items-center justify-center">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-[#e8a87c] font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Gourav helped us automate financial workflows with great precision.",
    author: "Renu Bilala",
    position: "Director",
    company: "Uniclan",
  },
  {
    quote: "His audit and compliance insights saved us lakhs.",
    author: "Mahesh Tekwani",
    position: "Director",
    company: "Saadaa",
  },
  {
    quote:
      "Exceptional attention to detail and deep knowledge of taxation matters.",
    author: "Kapil Jain",
    position: "Director",
    company: "Thelagaadi Pvt Ltd",
  },
  {
    quote:
      "Transformed our financial reporting system with innovative solutions.",
    author: "Manish Jindal",
    position: "CEO",
    company: "Mindspace Outsourcing",
  },
];

export default TestimonialsSection;
