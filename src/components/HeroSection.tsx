import React from "react";
import Image from "next/image";

const HeroSection = (): JSX.Element => {
  return (
    <section className="relative lg:grid lg:grid-cols-5 lg:gap-4">
      <figure className="relative h-[320px] sm:h-[450px] md:h-[550px] overflow-hidden lg:col-span-3 lg:h-[600px]">
        <Image
          src={
            "https://res.cloudinary.com/marsdev/image/upload/v1682388050/Projects/mars-restaurants/olenka-kotyk-eqsEZNCm4-c-unsplash_ahvpuz.jpg"
          }
          alt="Food on the restaurant table"
          fill={true}
          priority={true}
          className="lg:rounded-lg brightness-50 lg:brightness-90 object-cover"
        />
      </figure>
      <div className="w-full absolute bottom-6 md:bottom-10 lg:relative lg:col-span-2 lg:h-full lg:flex lg:items-center lg:justify-center p-4">
        <h1 className="text-3xl text-center mx-auto lg:text-left lg:text-7xl font-semibold tracking-wide">
          The magic of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600 font-bold">
            food
          </span>
          . The magic of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 font-bold">
            culture
          </span>
          .
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
