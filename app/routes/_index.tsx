import type { MetaFunction } from "@remix-run/node";
import AboutSection from "~/features/About/AboutSection";
import ContactSection from "~/features/Contact/ContactSection";
import DesignSection from "~/features/Designs/DesignSection";
import Footer from "~/features/Footer/Footer";
import Header from "~/features/Header/Header";
import Navbar from "~/features/Navigation/Navbar";
import ReelsSection from "~/features/Reels/ReelsSection";
import SpecializationSection from "~/features/Specialization/SpecializationSection";

export const meta: MetaFunction = () => {
  return [
    { title: "DesignBro" },
    {
      name: "description",
      content: "Welcome to my portfolio website, I am DesignBro",
    },
  ];
};

export default function Index() {
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <ReelsSection />
      <DesignSection />
      <AboutSection />
      <SpecializationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
