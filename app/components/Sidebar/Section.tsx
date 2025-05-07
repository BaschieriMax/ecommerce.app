import { SectionProps } from "@/app/models/sidebar";
import Link from "next/link";

export default function Section({ item }: SectionProps) {
  const { href, icon: Icon, title } = item;

  return (
    <Link
      href={href}
      className="group relative flex items-center justify-center"
    >
      <div className="text-gray-700 hover:text-black p-3 rounded-md hover:bg-gray-100 transition">
        <Icon className="text-2xl" />
      </div>

      <span
        className="
          absolute left-16 whitespace-nowrap 
          bg-black text-white text-sm px-2 py-1 rounded 
          opacity-0 group-hover:opacity-100 
          scale-95 group-hover:scale-100 
          translate-x-2 group-hover:translate-x-0 
          transition-all duration-200 ease-out
          shadow-lg z-10
        "
      >
        {title}
      </span>
    </Link>
  );
}
