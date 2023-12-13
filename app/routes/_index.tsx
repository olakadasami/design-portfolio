import type { MetaFunction } from "@remix-run/node";
import AboutSection from "~/features/About/AboutSection";
import ContactSection from "~/features/Contact/ContactSection";
import DesignSection from "~/features/Designs/DesignSection";
import Footer from "~/features/Footer/Footer";
import Header from "~/features/Header/Header";
import Navbar from "~/features/Navigation/Navbar";
import SpecializationSection from "~/features/Specialization/SpecializationSection";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <DesignSection />
      <AboutSection />
      <SpecializationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
