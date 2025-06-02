import HeroSection from "./HeroSection";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectShowcase from "./ProjectShowcase";
import ServicesSection from "./ServicesSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import InternshipSection from "./InternshipSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceTimeline />
      <EducationSection />
      <InternshipSection />
      <ProjectShowcase />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
