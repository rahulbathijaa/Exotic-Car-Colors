

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import colorData from "./colorData";
import ColorGroupings from "./ColorGroupings";

export default function Card({ post }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(cardRef.current);

    // cleanup function for when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  console.log(post)

  return (
    <Link
      to={`/car-color${post.slug.current}`}
      key={post.slug && post.slug.current}
    >

      <div
        ref={cardRef}
        className={`max-w-sm rounded overflow-hidden shadow-lg border-black ${
          isVisible ? "animate-fadeInUp" : ""
        }`}
        style={{ backgroundImage: `url(../img/card-background.png)` }}
      >
        {post.mainImage && post.mainImage.asset && (
          <LazyLoad height={200}>
            <img
              className="w-full content-left rounded-b"
              src={post.mainImage.asset.url}
              alt={post.short_description}
            />
          </LazyLoad>
        )}
        <div className="px-6 py-4 bg-[url('../img/card-background.jpg')]">
          <div className="font-bold text-3xl mb-2 text-left">
            {post.color_name}
          </div>

          <div className="font-bold text-m mb-2 text-left">
            {post.short_description}
          </div>

          <p className="text-gray-700 text-base text-left">{post.hex_text}</p>
          <p className="text-gray-700 text-base text-left">{post.rgb_text}</p>
          <p className="text-gray-700 text-base text-left">{post.cmyk_text}</p>
          <p className="text-gray-700 text-base text-left">{post.ral_text}</p>
        </div>
      </div>
    </Link>
  );
}


