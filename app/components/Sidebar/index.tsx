import { sideBarSection } from "@/app/models/sidebar";
import Section from "./Section";

export default function Sidebar() {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 h-full flex flex-col items-center py-4 space-y-6 shadow-sm">
      {sideBarSection.map((item, index) => (
        <Section key={index} item={item} />
      ))}
    </aside>
  );
}
