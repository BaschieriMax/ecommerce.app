import LogoutBtn from "@/app/ui/LogoutBtn";
import Sections from "./Sections";

export default async function Sidebar() {
  return (
    <aside className="w-16 bg-white border-r border-gray-200 h-full flex flex-col items-center py-4 space-y-6 shadow-sm">
      <Sections />
      <LogoutBtn />
    </aside>
  );
}
