import type { FC } from "react";

type Props = {
  image: string;
  title: string;
  blue?: boolean;
};
const SpecializationTool: FC<Props> = ({ image, title, blue }) => {
  return (
    <li
      className={`${
        blue ? "bg-color-blue" : "bg-color-white"
      } h-[360px] w-96 flex items-center justify-center`}
    >
      <img src={image} alt={title} />
    </li>
  );
};

export default SpecializationTool;
