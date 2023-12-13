import { Link } from "@remix-run/react";
import type { FC } from "react";

type NavItemProps = {
  href: string;
  title: string;
};

const NavItem: FC<NavItemProps> = ({ href, title }) => {
  return (
    <Link to={href}>
      <li>{title}</li>
    </Link>
  );
};

export default NavItem;
