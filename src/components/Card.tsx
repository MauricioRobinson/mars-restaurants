import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  review_count: number;
  rating: number;
  price: string;
  location: { city: string };
  image_url: string;
  index: number;
};

const Card = ({
  name,
  review_count,
  rating,
  price,
  location,
  image_url,
  index,
}: Props): JSX.Element => {
  return (
    <div className="w-full max-w-xs rounded-lg cursor-pointer overflow-hidden">
      <article>
        <figure className="relative w-full h-[350px] overflow-hidden">
          <Image
            src={image_url}
            alt={`${name} restaurant`}
            fill={true}
            placeholder="blur"
            priority={index <= 5 ? true : false}
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            sizes="(max-width: 1200px) 320px"
            className="lg:rounded-lg brightness-90 rounded-lg object-cover transition duration-500 ease-in-out hover:brightness-50"
          />

          <div className="absolute flex items-start justify-between w-full max-h-28 top-0 bg-black/50 backdrop-blur-sm py-2 px-4">
            <article>
              <h3 className="font-semibold">{name}</h3>
              <small className="text-gray-300">{location.city}</small>
            </article>
            <article className="bg-white rounded-xl px-2 py-1">
              <span className="text-black">{rating}</span>
            </article>
          </div>

          <div className="absolute flex items-center justify-between w-full h-16 bottom-0 bg-black/50 backdrop-blur-sm py-2 px-4">
            <article className="flex items-center gap-x-1">
              <span>
                <ChatBubbleBottomCenterIcon className="w-5 h-5" />
              </span>
              <span>{review_count}</span>
            </article>
            <article>
              <span>{price}</span>
            </article>
          </div>
        </figure>
      </article>
    </div>
  );
};

export default Card;
