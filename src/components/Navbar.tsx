"use client";

import React from "react";
// import NavLinks from "./NavLinks";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

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

export interface NavLinks {
  id: number;
  url: string;
  label: string;
}

const Navbar = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    // <header className="sticky top-0 z-40 w-full lg:h-20 bg-black/50 backdrop-blur-sm p-4">
    //   <nav className="flex items-center justify-between">
    //     <Link
    //       href={"/"}
    //       className="text-xl font-semibold uppercase lg:text-2xl">
    //       MARS RESTAURANT
    //     </Link>
    //     <NavLinks />
    //   </nav>
    // </header>

    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link
            href={"/"}
            className="text-xl font-semibold uppercase lg:text-2xl">
            MARS RESTAURANT
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:gap-x-4">
          {navLinks &&
            navLinks?.map(({ id, url, label }: NavLinks) => (
              <li
                key={id}
                className={`${
                  pathname === url ? "underline underline-offset-4" : ""
                } transition duration-500 ease-out hover:underline hover:underline-offset-4`}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/50 backdrop-blur-sm px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500">
              <div className="space-y-10 py-6">
                <ul className="flex flex-col gap-y-4">
                  {navLinks &&
                    navLinks?.map(({ id, url, label }: NavLinks) => (
                      <li
                        key={id}
                        className={`${
                          pathname === url
                            ? "bg-gray-50 text-black"
                            : "text-white"
                        } transition duration-300 ease-out -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:text-black hover:bg-gray-50 cursor-pointer`}>
                        <Link href={url}>{label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="py-6">
                <Link
                  href={"/login"}
                  className="transition duration-300 ease-out -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:text-black hover:bg-gray-50 cursor-pointer">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
