import { Link } from "@remix-run/react";
import type { FC, ReactNode } from "react";

type ButtonProps = {
  color?: "yellow" | "blue" | "transparent";
  disabled?: boolean;
  children: ReactNode;
  href?: string;
};
const Button: FC<ButtonProps> = ({
  color = "blue",
  href,
  disabled,
  children,
}) => {
  const base =
    "flex items-center px-6 py-2 gap-3 font-semibold focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    blue: base + " bg-color-blue",
    yellow: base + " bg-color-yellow text-color-dark",
    transparent: base + " bg-transparent border border-color-white",
  };

  if (href)
    return (
      <Link to={href} className={styles[color]}>
        {children}
        <div className=" "></div>
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[color]}>
      {children}
    </button>
  );
};

export default Button;
