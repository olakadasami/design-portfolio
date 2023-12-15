import SectionHeading from "~/components/SectionHeading";
import ContactForm from "./ContactForm";
import Socials from "./Socials";

const ContactSection = () => {
  return (
    <section id="contact" className="px-20 py-10 relative">
      {/* Section heading */}
      <SectionHeading left title="contact me" />

      <div className="flex gap-8 mt-8">
        {/* Form */}
        <div className="w-1/2">
          <ContactForm />
        </div>

        {/* Text */}
        <div className="w-1/2">
          <h3 className="text-3xl mb-3 font-bold leading-normal tracking-[3.2px]">
            Hire me.
            <br />
            Let's create magic 🔥 for your next projects
          </h3>
          <p className="leading-normal mb-3 tracking-[1.6px]">
            Enjoy affordable design services too!
          </p>
          {/* Socials */}
          <Socials />
        </div>
      </div>
      <div className="greenBg absolute -z-20 inset-40 blur-3xl" />
    </section>
  );
};

export default ContactSection;
