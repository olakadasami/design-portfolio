import React from "react";

const Footer = () => {
  return (
    <footer className="absolute -z-10 bottom-0 w-full bg-color-blue px-20 py-10">
      <div className="grid grid-cols-2">
        <ul className="col-start-2 text-sm leading-normal space-y-2">
          <li>FAQs</li>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>
            &copy; Copyright 2023. All Rights Reserved - DesignBro, the
            Portfolio.
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
