import Card from "@/components/Card";
import React from "react";
import { useSearchParams } from "next/navigation";

export interface Restaurant {
  id: string;
  name: string;
  reviewCount: number;
  rating: number;
  price: string;
  location: object;
}

const getRestaurants = async () => {
  const res = await fetch(
    `${process.env.PUBLIC_API}/search?location=Miami&sort_by=best_match&limit=5`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const restaurants = await res.json();

  return restaurants;
};

const Restaurants = async () => {
  const { businesses } = await getRestaurants();

  return (
    <section>
      <main className="lg:max-w-screen-xl mx-auto p-8">
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
                  id={id}
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
