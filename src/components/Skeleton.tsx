import React from "react";

const Skeleton = (): JSX.Element => {
  return (
    <div className="w-full max-w-xs rounded-lg cursor-pointer overflow-hidden bg-gray-500">
      <article>
        <figure className="relative w-full h-[400px] overflow-hidden animate-pulse">
          <div className="absolute flex items-start justify-between w-full max-h-28 top-0 bg-black/50 backdrop-blur-sm py-2 px-4">
            <article className="flex flex-col gap-2">
              <h3 className="font-semibold w-44 h-6 bg-gray-400 rounded-full animate-pulse"></h3>
              <small className="w-20 h-3 bg-gray-400 rounded-full animate-pulse"></small>
            </article>
            <article className="bg-gray-400 rounded-xl w-10 h-6 animate-pulse"></article>
          </div>

          <div className="absolute flex items-center justify-between w-full h-16 bottom-0 bg-black/50 backdrop-blur-sm py-2 px-4">
            <article className="bg-gray-400 rounded-full w-12 h-3 animate-pulse"></article>
            <article className="bg-gray-400 rounded-full w-12 h-3 animate-pulse"></article>
          </div>
        </figure>
      </article>
    </div>
  );
};

export default Skeleton;
