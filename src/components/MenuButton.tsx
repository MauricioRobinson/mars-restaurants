"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { MouseEventHandler, useState } from "react";

const MenuButton = (): JSX.Element => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggleMenu: MouseEventHandler<HTMLButtonElement> = () => {
    setToggleMenu((prevState) => !prevState);
  };
  return (
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
  );
};

export default MenuButton;
