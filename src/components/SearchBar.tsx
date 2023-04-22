"use client";

import React, { MouseEventHandler, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler } from "react";

export interface SearchTargetedValues {
  target: {
    name: string;
    type: string;
    value: string | boolean;
    checked: boolean;
  };
}

const SearchBar = (): JSX.Element => {
  const search = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  // const createQueryString = useCallback(() => {
  //   const params = new URLSearchParams(search);
  // }, [search]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSearch: MouseEventHandler<HTMLButtonElement> = () => {
    const encodeQuery = encodeURI(searchQuery);
    router.push(
      `/restaurants?search=${encodeQuery}&sort_by=best_match&limit=20`
    );
  };

  return (
    <div className="mt-5 grid grid-cols-12">
      <input
        type="search"
        name="search"
        onChange={handleChange}
        className="w-full rounded-l-full bg-gray-300 h-10 outline-none col-span-10 sm:col-span-8 md:col-span-6 lg:col-span-6 lg:h-12 text-black px-3 font-semibold placeholder:text-gray-600 "
        placeholder="Search for restaurant name or location"
      />
      <div className="w-12 bg-gray-300 border-l border-l-gray-500 flex items-center justify-center rounded-r-full cursor-pointer transition duration-500 ease-in-out hover:bg-gray-400">
        <button
          type="button"
          onClick={handleSearch}
          className="h-full">
          <MagnifyingGlassIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
