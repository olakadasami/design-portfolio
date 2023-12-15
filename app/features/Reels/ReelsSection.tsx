import { reelData } from "./reelData";
import ReelItem from "./ReelItem";

const ReelsSection = () => {
  return (
    <section className="py-10">
      {/* Heading */}
      <h2
        className="before:absolute before:-z-10 before:block before:h-[1px] before:bg-cyan-200 before:w-2/5 before:top-1/2 before:translate-x-16
      after:absolute after:-z-10 after:block after:right-0 after:h-[1px] after:bg-cyan-200 after:w-2/5 after:-translate-x-16 after:top-1/2
      relative text-center z-10 bg-color-dark text-xl mb-8"
      >
        Showreel
      </h2>

      <ul className="flex justify-between gap-6">
        {reelData.map((item) => (
          <ReelItem key={item.title} image={item.image} title={item.title} />
        ))}
      </ul>
    </section>
  );
};

export default ReelsSection;
