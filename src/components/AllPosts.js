// import React, { useEffect, useState } from "react";
// import sanityClient from "../client.js";
// // import { Link } from "react-router-dom";
// // import { getByTitle } from "@testing-library/react";

// export default function AllColors() {
//     const [allColorsData, setAllColors] = useState(null);

//     useEffect(() => {
//             sanityClient.fetch(
//                 '*[_type == "colorsdata"]{

//                 }'
//             )

//     })

//     return <h2>All Posts Page </h2>;
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "Colors"]{
       brand_type,
       slug,
       color_name,
       short_description,
       mainImage{
        asset->{
          _id,
          url
        }
       }
      
        }`
      )
      .then((data) => {
        setAllPosts(data);
        console.log("end");
      })
      .catch(console.error);
  }, []);

  console.log({ allPostsData });

  return (
    <div className="bg-green-100 min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">Blog Posts</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my blog posts page!
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => {
              if (!post.slug || !post.mainImage) return null;
              return (
                <Link to={post.slug.current} key={post.slug.current}>
                  {/* <Link to={"/" + post.slug} key={post.slug}> */}
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white
                      border-l-8 border-green-400"
                    key={index}
                  >
                    {post.brand_type}
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
                  </span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
