import Card from "@/components/Card";
import React from "react";
import RestaurantInfo from "@/components/RestaurantInfo";

export interface RestaurantsIntf {
  id: string;
  name: string;
  review_count: number;
  rating: number;
  price: string;
  location: { city: string };
  image_url: string;
}

// Get all restaurants from API
const getRestaurants = async () => {
  const res = await fetch(
    `${process.env.PUBLIC_API}/search?location=Miami&sort_by=best_match&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      cache: "no-store",
    }
  );

  const restaurants = await res.json();

  return restaurants;
};

const Restaurants = async () => {
  const { businesses }: { businesses: Array<RestaurantsIntf> } =
    await getRestaurants();

  return (
    <section>
      <main className="lg:max-w-screen-xl mx-auto p-8">
        <RestaurantInfo />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
          {businesses &&
            businesses?.map(
              ({
                id,
                name,
                review_count,
                rating,
                price,
                location,
                image_url,
              }) => (
                <Card
                  key={id}
                  name={name}
                  review_count={review_count}
                  rating={rating}
                  price={price}
                  location={location}
                  image_url={image_url}
                />
              )
            )}
        </section>
      </main>
    </section>
  );
};

export default Restaurants;
