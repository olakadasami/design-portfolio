import SectionHeading from "~/components/SectionHeading";
import shopifyImg from "../../assets/designs/shopify.png";
import image1 from "../../assets/designs/image1.png";
import image2 from "../../assets/designs/image2.png";
import Button from "~/components/Button";
import { TfiArrowTopRight } from "react-icons/tfi/index.js";

const DesignSection = () => {
  return (
    <section id="designs" className="py-10 px-20">
      <SectionHeading title="designs" />

      {/* Designs */}
      <div className="mt-10 grid gap-8 grid-rows-12 grid-cols-2">
        <div className="row-span-full col-span-1 bg-color-yellow">
          <img
            src={shopifyImg}
            className="h-full object-cover "
            alt="Shopify"
          />
        </div>
        <div className="row-span-5">
          <img src={image1} alt="Shopify" />
        </div>
        <div className="row-span-5">
          <img src={image2} alt="Shopify" />
        </div>
        <div className="row-span-2">
          <Button color="transparent">
            <span>View more designs</span>
            <TfiArrowTopRight className="text-color-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
