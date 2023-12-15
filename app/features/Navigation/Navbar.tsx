import { Link } from "@remix-run/react";
import logo from "../../assets/logo.png";
import { navData } from "./navData";
import NavItem from "./NavItem";
import { MdLocationPin } from "react-icons/md/index.js";
import { FaCircle } from "react-icons/fa/index.js";

const Navbar = () => {
  return (
    <nav className="px-20 py-8 flex items-center justify-between fixed w-full top-0 bg-bg-dark z-20">
      {/* Logo */}
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      {/* NavLinks */}
      <ul className="flex items-center gap-10">
        {navData.map((item, index) =>
          item.title ? (
            <NavItem key={item.title} title={item.title} href={item.href} />
          ) : (
            <FaCircle key={index} />
          )
        )}
      </ul>

      {/* Address */}
      <div className="flex gap-2 items-center">
        <MdLocationPin className="text-color-yellow text-xl" />
        <p className="di">Nigeria, Africa</p>
      </div>
    </nav>
  );
};

export default Navbar;
