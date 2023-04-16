"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export interface NavLinks {
  id: number;
  url: string;
  label: string;
}

const navLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/restaurants",
    label: "Search Restaurants",
  },
  {
    id: 3,
    url: "/about",
    label: "About",
  },
  {
    id: 4,
    url: "/contact",
    label: "Contact",
  },
];

const NavLinks = () => {
  const pathName = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <section>
      {/* Menu de navegacion para desktop */}
      <ul className="hidden lg:flex lg:items-center lg:gap-x-4">
        {navLinks &&
          navLinks?.map(({ id, url, label }) => (
            <li
              key={id}
              className={`${
                pathName === url ? "underline underline-offset-4" : ""
              } transition duration-500 ease-out hover:underline hover:underline-offset-4`}>
              <Link href={url}>{label}</Link>
            </li>
          ))}
      </ul>

      {/* Menu de navegacion para mobile */}
      <button
        type="button"
        className="lg:hidden mt-2"
        onClick={handleToggleMenu}>
        {!toggleMenu ? (
          <Bars3Icon className="w-8 h-8" />
        ) : (
          <XMarkIcon className="w-8 h-8" />
        )}
      </button>
    </section>
  );
};

export default NavLinks;
