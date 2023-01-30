import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getByTitle } from "@testing-library/react";
// name
// description
// etc. ec

export default function Card({ post }) {
  return (
    <Link to={post.slug.current} key={post.slug.current}>
      {/* <Link to={"/" + post.slug} key={post.slug}> */}

      <div
        className="max-w-sm rounded overflow-hidden shadow-lg"
        // background-image="../img/card-background.png"
      >
        <div className="bg-(../img/card-background.jpg)"></div>
{/* 
        <img
          className="w-full"
          src={post.mainImage.asset.url}
          alt={post.short_description}
        /> */}
        <div className="px-6 py-4 bg-[url('../img/card-background.jpg')]">
          <div className="font-bold text-xl mb-2 text-center">
            {post.color_name}
          </div>

          <div className="font-bold text-l mb-2 text-center">
            {" "}
            {post.short_description}{" "}
          </div>

          <p className="text-gray-700 text-base text-center">
            {" "}
            {post.hex_text}
          </p>
          <p className="text-gray-700 text-base text-center">
            {" "}
            {post.rgb_text}
          </p>
          <p className="text-gray-700 text-base text-center">
            {" "}
            {post.cmyk_text}
          </p>
          <p className="text-gray-700 text-base text-center">
            {" "}
            {post.ral_text}
          </p>
        </div>
      </div>

      {/* <span
            className="block h-64 relative rounded shadow leading-snug bg-white
              border-l-8 border-green-400"
            key={index}
          >
            {post.color_name}
            {post.short_description}
            {post.hex_text}
            {post.rgb_text}
            {post.cmyk_text}
            {post.ral_text}
            
            <img
              className="w-full h-full rounded-r object-cover absolute"
              src={post.mainImage.asset.url}
              alt=""
            />
            <span
              className="block relative h-full flex justify-end items-end pr
              -4 pb-4"
            >
              <h2
                className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700
                text-red-100 bg-opacity-75 rounded"
              >
                {post.title}
              </h2>
            </span>
          </span> */}
    </Link>
  );
}
