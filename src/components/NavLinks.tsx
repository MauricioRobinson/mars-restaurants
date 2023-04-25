// "use client";

// import React, { MouseEventHandler, useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuButton from "./MenuButton";

// export interface NavLinks {
//   id: number;
//   url: string;
//   label: string;
// }

// const navLinks = [
//   {
//     id: 1,
//     url: "/",
//     label: "Home",
//   },
//   {
//     id: 2,
//     url: "/restaurants",
//     label: "Search Restaurants",
//   },
//   {
//     id: 3,
//     url: "/about",
//     label: "About",
//   },
//   {
//     id: 4,
//     url: "/contact",
//     label: "Contact",
//   },
// ];

// const NavLinks = (): JSX.Element => {
//   const pathName = usePathname();

//   return (
//     <section>
//       {/* Menu de navegacion para desktop */}
//       <ul className="hidden lg:flex lg:items-center lg:gap-x-4">
//         {navLinks &&
//           navLinks?.map(({ id, url, label }: NavLinks) => (
//             <li
//               key={id}
//               className={`${
//                 pathName === url ? "underline underline-offset-4" : ""
//               } transition duration-500 ease-out hover:underline hover:underline-offset-4`}>
//               <Link href={url}>{label}</Link>
//             </li>
//           ))}
//       </ul>

//       {/* ${toggleMenu ? "opacity-0" : "self-start"} */}

//       <MenuButton />

//       <div className="hidden">
//         <ul className={``}>
//           {navLinks &&
//             navLinks?.map(({ id, url, label }: NavLinks) => (
//               <li
//                 key={id}
//                 className={`${
//                   pathName === url ? "underline underline-offset-4" : ""
//                 } transition duration-500 ease-out hover:underline hover:underline-offset-4`}>
//                 <Link href={url}>{label}</Link>
//               </li>
//             ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default NavLinks;
