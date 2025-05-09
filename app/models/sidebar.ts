import { IconType } from "react-icons";
import { FaIndustry, FaShoppingBag, FaUsers, FaTable } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";

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
    title: "Shop",
    href: "/shop",
    icon: FaShoppingBag,
  },
  {
    title: "Data Analysis",
    href: "/analysis",
    icon: FaTable,
  },
  {
    title: "Industry",
    href: "/industry",
    icon: FaIndustry,
  },
  {
    title: "Contact Clients",
    href: "/contactclients",
    icon: FaUsers,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: IoMdSettings,
  },
  {
    title: "Admin",
    href: "/admin",
    icon: RiAdminFill,
  },
];
