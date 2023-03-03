import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getByTitle } from "@testing-library/react";

export default function Card({ post }) {
  return (
    <Link to={`${post.slug && post.slug.current}`} key={post.slug && post.slug.current}>

  
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg border-black "
        style={{ backgroundImage: `url(../img/card-background.png)` }}

      >
        <div className="bg-(../img/card-background.jpg)"></div>
     

{post.mainImage && post.mainImage.asset && (
          <img
            className="w-full content-left rounded-b"
            src={post.mainImage.asset.url}
            alt={post.short_description}
          />
        )}
        <div className="px-6 py-4 bg-[url('../img/card-background.jpg')]">
          <div className="font-bold text-3xl mb-2 text-left">
            {post.color_name}
          </div>

          <div className="font-bold text-m mb-2 text-left">
            {" "}
            {post.short_description}{" "}
          </div>

          <p className="text-gray-700 text-base text-left"> {post.hex_text}</p>
          <p className="text-gray-700 text-base text-left"> {post.rgb_text}</p>
          <p className="text-gray-700 text-base text-left"> {post.cmyk_text}</p>
          <p className="text-gray-700 text-base text-left"> {post.ral_text}</p>
        </div>
      </div>

    </Link>
  );
}
