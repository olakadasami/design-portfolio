import { IoDownload } from "react-icons/io5/index.js";
import Button from "~/components/Button";
import SectionHeading from "~/components/SectionHeading";

const AboutSection = () => {
  return (
    <section className="py-10 px-20 relative">
      {/* Section title */}
      <SectionHeading title="about me" />

      <div className="flex gap-16 mt-8">
        {/* Paragraphs */}
        <div className="w-3/4">
          {/* First Paragraph */}
          <p className="text-lg mb-10 font-medium tracking-widest leading-normal">
            I excel at using design as a medium to create and deliver excellent
            and innovative solutions that will provide ease of use to customers
            or users. I am passionate about Building ideas and concepts of
            human-centered design through progressive research and pixels.
          </p>
          {/* Second Paragraph */}
          <p className="text-lg font-medium tracking-widest leading-normal">
            I am a graduate of Computer Science and i have a 2+ years experience
            with designing awesome solutions for businesses, brands and
            individuals alike with Product Design.
          </p>
        </div>
        <div className="w-1/4">
          <h3 className="text-right mb-10 text-[40px] font-bold tracking-[3.2px] leading-normal">
            My
            <br />
            Biography
          </h3>
          <div className="flex justify-end">
            <Button>
              <IoDownload size={20} />
              <span>Download CV</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="greenBg absolute -z-20 inset-40 blur-3xl" />
    </section>
  );
};

export default AboutSection;
