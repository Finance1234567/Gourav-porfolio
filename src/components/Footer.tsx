import React from "react";
import { Linkedin, Mail, Home, Briefcase, FileText, Phone } from "lucide-react";

interface FooterProps {
  name?: string;
  role?: string;
}

const Footer = ({
  name = "Gourav Sharma",
  role = "Accounts Manager | Financial Analyst",
}: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <p className="text-gray-400 mb-4">{role}</p>
            <p className="text-gray-400">
              Experienced financial professional with expertise in accounting,
              taxation, and financial analysis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#e8a87c] transition-colors flex items-center"
                >
                  <Home className="w-4 h-4 mr-2" /> Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#e8a87c] transition-colors flex items-center"
                >
                  <Briefcase className="w-4 h-4 mr-2" /> Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-[#e8a87c] transition-colors flex items-center"
                >
                  <FileText className="w-4 h-4 mr-2" /> Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#e8a87c] transition-colors flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e8a87c] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:gouravsharma2040@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e8a87c] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
