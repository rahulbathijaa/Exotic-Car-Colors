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
import Card from "./Card.js";
import Footer from "./Footer.js";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.js";
import HeaderPage from "./HeaderPage.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  const { brand_type } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[brand_type == "${brand_type}"]{
       brand_type,
       slug,
       color_name,
       short_description,
       hex_text,
       rgb_text,
       cmyk_text,
       ral_text,
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
    <div className="bg-white-100 p-12">
      <Navbar />

      <HeaderPage />

      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">Test12</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Test123!
        </h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPostsData &&
          allPostsData.map((post, index) => {
            if (!post.slug || !post.mainImage) return null;
            return <Card post={post} />;
          })}
      </div>
      <Footer />
    </div>
  );
}
