"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const RestaurantInfo = (): JSX.Element => {
  const searchParams = useSearchParams();

  const place = searchParams.get("search");
  const counter = searchParams.get("limit");

  return (
    <section className="mb-10 text-2xl font-semibold text-gray-500">
      <h2>
        Showing {counter} Restaurants in {place}
      </h2>
    </section>
  );
};

export default RestaurantInfo;
