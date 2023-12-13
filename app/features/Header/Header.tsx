import React from "react";
import Button from "~/components/Button";

const Header = () => {
  return (
    <header className="px-20 max-w-4xl mx-auto scroll-py-10 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl mb-4 leading-normal text-center font-bold">
        Hi! 👋 I&apos;m <span className="bg-color-blue px-1">DesignBro.</span>
        <br />
        Product Designer.
      </h1>

      {/* Small text */}
      <p className="text-center font-semibold mb-12 leading-9">
        Working in product design and print media, I enjoy turning complex
        problems into simple, beautiful and intuitive designs.
      </p>

      {/* Call to Action */}
      <Button color="yellow">Hire me</Button>
    </header>
  );
};

export default Header;
