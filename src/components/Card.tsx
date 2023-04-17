import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const Card = ({
  id,
  name,
  review_count,
  rating,
  price,
  location,
  image_url,
}) => {
  return (
    <div className="w-full max-w-xs rounded-lg cursor-pointer overflow-hidden">
      <article>
        <figure className="relative w-full h-[400px] overflow-hidden">
          <Image
            src={image_url}
            alt={`${name} restaurant`}
            fill={true}
            sizes="(max-width: 1200px) 320px"
            className="lg:rounded-lg brightness-90 rounded-lg transition duration-500 ease-in-out hover:brightness-50"
          />

          <div className="absolute flex items-start justify-between w-full h-16 top-0 bg-black/50 backdrop-blur-sm py-2 px-4">
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
