import { IconType } from "react-icons";
import { FaProductHunt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

export type SingleSection = {
  title: string;
  href: string;
  icon: IconType;
};

export type SectionProps = {
  item: SingleSection;
};

export const sideBarSection: SingleSection[] = [
  {
    title: "Homepage",
    href: "/",
    icon: IoHome,
  },
  {
    title: "page 2",
    href: "/products",
    icon: FaProductHunt,
  },
  {
    title: "page 3",
    href: "",
    icon: FaProductHunt,
  },
  {
    title: "page 4",
    href: "",
    icon: FaProductHunt,
  },
];
