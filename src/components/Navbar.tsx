import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-black/50 backdrop-blur-sm px-4">
      <nav className="flex items-center justify-between h-full">
        <Link
          href={"/"}
          className="text-xl font-semibold uppercase lg:text-2xl">
          MARS RESTAURANT
        </Link>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Navbar;
