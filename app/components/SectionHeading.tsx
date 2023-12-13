import React from "react";

const SectionHeading = ({ title, left }: { title: string; left?: boolean }) => {
  const beforePseudoElement = ` before:block before:absolute before:top-[50%] before:-translate-x-4 before:-z-10 before:bg-color-blue before:py-1 before:w-full `;
  return (
    <div className={`box-border ${left ? "text-left" : "text-right"}`}>
      <h2
        className={`lowercase px-4 relative inline-block text-[40px] font-bold leading-normal tracking-[4.8px]${beforePseudoElement}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
