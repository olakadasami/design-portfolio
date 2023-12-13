import SectionHeading from "~/components/SectionHeading";
import { specializationData } from "./specializationData";
import SpecializationTool from "./SpecializationTool";

const SpecializationSection = () => {
  return (
    <section className="py-10 px-20">
      <SectionHeading left title="specialization" />

      <ul className="flex items-center gap-4 mt-8 justify-center">
        {specializationData.map((item, index) => (
          <SpecializationTool
            blue={item.blue}
            key={index}
            title={item.title}
            image={item.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default SpecializationSection;
