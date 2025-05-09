// "use client";

// import React from "react";

// type ButtonProps = {
//   type?: "login" | "default" | "logout";
//   onClick?: () => void;
//   children?: React.ReactNode;
//   disabled?: boolean;
//   loading?: boolean;
//   icon?: React.ReactNode;
//   title?: string; // usato come tooltip per logout
// };

// export default function Button({
//   type = "default",
//   onClick,
//   children,
//   disabled = false,
//   loading = false,
//   icon,
//   title,
// }: ButtonProps) {
//   const baseStyle =
//     "inline-flex items-center justify-center relative font-semibold transition rounded-md";
//   const isDisabled = disabled || loading;

//   const variantClass =
//     type === "login"
//       ? "bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 text-sm gap-2"
//       : type === "logout"
//       ? "p-3 text-gray-700 hover:text-black hover:bg-gray-100"
//       : "bg-gray-300 text-black px-4 py-2 hover:bg-gray-400 text-sm gap-2";

//   const spinner = (
//     <div className="w-4 h-4 border-2 border-white border-t-transparent border-r-transparent rounded-full animate-spin" />
//   );

//   if (type === "logout") {
//     return (
//       <div className="group relative flex items-center justify-center">
//         <button
//           onClick={onClick}
//           disabled={isDisabled}
//           className={`${baseStyle} ${variantClass} ${
//             isDisabled ? "opacity-50 pointer-events-none" : ""
//           }`}
//         >
//           {loading ? spinner : icon}
//         </button>
//         {title && (
//           <span
//             className="absolute left-16 whitespace-nowrap
//               bg-black text-white text-sm px-2 py-1 rounded
//               opacity-0 group-hover:opacity-100
//               scale-95 group-hover:scale-100
//               translate-x-2 group-hover:translate-x-0
//               transition-all duration-200 ease-out
//               shadow-lg z-10"
//           >
//             {title}
//           </span>
//         )}
//       </div>
//     );
//   }

//   return (
//     <button
//       onClick={onClick}
//       disabled={isDisabled}
//       className={`${baseStyle} ${variantClass} ${
//         isDisabled ? "opacity-50 pointer-events-none" : ""
//       }`}
//     >
//       {loading && spinner}
//       {!loading && icon}
//       {children && <span className={icon ? "ml-2" : ""}>{children}</span>}
//     </button>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";

type ButtonProps = {
  type?: "login" | "default" | "logout";
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  title?: string; // tooltip, solo se href non esiste
  href?: string;
};

export default function Button({
  type = "default",
  onClick,
  children,
  disabled = false,
  loading = false,
  icon,
  title,
  href,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center relative font-semibold transition rounded-md";
  const isDisabled = disabled || loading;

  const variantClass =
    type === "login"
      ? "bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 text-sm gap-2"
      : type === "logout"
      ? "p-3 text-gray-700 hover:text-black hover:bg-gray-100"
      : "bg-gray-300 text-black px-4 py-2 hover:bg-gray-400 text-sm gap-2";

  const spinner = (
    <div className="w-4 h-4 border-2 border-white border-t-transparent border-r-transparent rounded-full animate-spin" />
  );

  const content = (
    <>
      {loading && spinner}
      {!loading && icon}
      {children && <span className={icon ? "ml-2" : ""}>{children}</span>}
    </>
  );

  const wrapperClass = "relative flex items-center justify-center group";

  // Se c'è href, usa Link (per tutti i tipi)
  if (href) {
    return (
      <Link
        href={href}
        prefetch={false}
        className={`${baseStyle} ${variantClass} ${
          isDisabled ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        {content}
      </Link>
    );
  }

  // Altrimenti è un vero bottone (e può avere tooltip)
  return (
    <div className={wrapperClass}>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`${baseStyle} ${variantClass} ${
          isDisabled ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        {content}
      </button>

      {title && (
        <span
          className="absolute left-16 whitespace-nowrap 
            bg-black text-white text-sm px-2 py-1 rounded 
            opacity-0 group-hover:opacity-100 
            scale-95 group-hover:scale-100 
            translate-x-2 group-hover:translate-x-0 
            transition-all duration-200 ease-out
            shadow-lg z-10"
        >
          {title}
        </span>
      )}
    </div>
  );
}
