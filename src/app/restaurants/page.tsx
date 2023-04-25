import Card from "@/components/Card";
import React from "react";
import RestaurantInfo from "@/components/RestaurantInfo";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";

export interface RestaurantsIntf {
  id: string;
  name: string;
  review_count: number;
  rating: number;
  price: string;
  location: { city: string };
  image_url: string;
}

const Restaurants = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // Get all restaurants from API
  const res = await fetch(
    `${process.env.PUBLIC_API}/search?location=${searchParams.search}&sort_by=${
      searchParams.sort_by || "best_match"
    }&limit=${searchParams.limit || 20}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      cache: "no-store",
    }
  );
  const { businesses }: { businesses: Array<RestaurantsIntf> } =
    await res.json();

  return (
    <section>
      <main className="lg:max-w-screen-xl mx-auto p-8">
        <div className="mb-5 grid grid-cols-12">
          <SearchBar />
        </div>
        {/* <article className="flex items-center gap-x-4 mb-4">
          <h3 className="font-semibold text-xl text-gray-400">Sort by: </h3>
          <Filter />
        </article> */}
        <RestaurantInfo />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center mt-20">
          {businesses &&
            businesses?.map(
              (
                { id, name, review_count, rating, price, location, image_url },
                index
              ) => (
                <Card
                  key={id}
                  name={name}
                  review_count={review_count}
                  rating={rating}
                  price={price}
                  location={location}
                  image_url={image_url}
                  index={index}
                />
              )
            )}
        </section>
      </main>
    </section>
  );
};

export default Restaurants;
