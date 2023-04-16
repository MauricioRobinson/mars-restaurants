import React from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="w-full h-16 bg-white/50 backdrop-blur-sm px-4">
      <nav className="flex items-center justify-between h-full">
        <p className="text-xl font-semibold uppercase lg:text-2xl">
          MARS RESTAURANT
        </p>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Navbar;
