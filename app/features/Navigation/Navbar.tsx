import { Link } from "@remix-run/react";
import logo from "../../assets/logo.png";
import { navData } from "./navData";
import NavItem from "./NavItem";
import { MdLocationPin } from "react-icons/md/index.js";

const Navbar = () => {
  return (
    <nav className="px-20 py-8 flex items-center justify-between">
      {/* Logo */}
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      {/* NavLinks */}
      <ul className="flex items-center gap-8">
        {navData.map((item) => (
          <NavItem key={item.title} title={item.title} href={item.href} />
        ))}
      </ul>

      {/* Address */}
      <div className="flex gap-4 items-center">
        <MdLocationPin className="text-color-yellow`" />
        <p className="di">Nigeria, Africa</p>
      </div>
    </nav>
  );
};

export default Navbar;
