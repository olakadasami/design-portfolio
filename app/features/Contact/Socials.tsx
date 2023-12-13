import type { IconType } from "react-icons";
import { socialsData } from "./socialsData";

const Socials = () => {
  return (
    <ul className="flex items-center text-3xl gap-4">
      {socialsData.map((item) => (
        <SocialItem icon={item.icon} key={item.title} />
      ))}
    </ul>
  );
};

export default Socials;

function SocialItem({ icon: Icon }: { icon: IconType }) {
  return (
    <li>
      <Icon />
    </li>
  );
}
