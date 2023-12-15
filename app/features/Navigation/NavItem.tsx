import type { FC } from "react";

type NavItemProps = {
  href: string;
  title: string;
};

const NavItem: FC<NavItemProps> = ({ href, title }) => {
  return (
    <a className="text-lg cursor-pointer" href={href}>
      <li>{title}</li>
    </a>
  );
};

export default NavItem;
