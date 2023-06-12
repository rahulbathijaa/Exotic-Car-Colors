// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import sanityClient from "../client.js";
// import Card from "./Card.js";
// import Footer from "./Footer.js";
// import { useParams } from "react-router-dom";
// import Navbar from "./Navbar.js";
// import HeaderPage from "./HeaderPage.js";


// export default function AllPosts() {
//   const [allPostsData, setAllPosts] = useState(null);
//   const { brand_type } = useParams();

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[brand_type == "${brand_type}"]{
//        brand_type,
//        slug,
//        color_name,
//        short_description,
//        hex_text,
//        rgb_text,
//        cmyk_text,
//        ral_text,
//        mainImage{
//         asset->{
//           _id,
//           url
//         }
//        }
      
//         }`
//       )
//       .then((data) => {
//         setAllPosts(data);
//         console.log("end");
//       })
//       .catch(console.error);
//   }, []);

//   console.log({ allPostsData });

//   return (
//     <div className="bg-white-100">
//       <Navbar />
//       <HeaderPage brand={brand_type} />
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pt-24">
//         {allPostsData &&
//           allPostsData.map((post, index) => {
            
//             if (!post.slug || !post.mainImage) return null;
//             return <Card post={post} />;
//           })}
//       </div>
//       <Footer />
//     </div>
//   );
// }

import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.js";
import HeaderPage from "./HeaderPage.js";

function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  const { brand_type } = useParams();

  const fetchData = useCallback(async () => {
    try {
      const data = await sanityClient.fetch(`*[brand_type == "${brand_type}"]{
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
    }`);
      setAllPosts(data);
      console.log("end");
    } catch (error) {
      console.error(error);
    }
  }, [brand_type]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log({ allPostsData });

  return (
    <div className="bg-white-100">
      <Navbar />
      <HeaderPage brand={brand_type} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pt-24">
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

const MemoizedAllPosts = React.memo(AllPosts);
export default MemoizedAllPosts;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import sanityClient from "../client.js";
// import Card from "./Card.js";
// import Footer from "./Footer.js";
// import { useParams } from "react-router-dom";
// import Navbar from "./Navbar.js";
// import HeaderPage from "./HeaderPage.js";

// export default function AllPosts() {
//   const [allPostsData, setAllPosts] = useState(null);
//   const { brand_type } = useParams();

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[brand_type == "${brand_type}"]{
//            brand_type,
//            slug,
//            color_name,
//            short_description,
//            hex_text,
//            rgb_text,
//            cmyk_text,
//            ral_text,
//            mainImage{
//             asset->{
//               _id,
//               url
//             }
//            }
//         }`
//       )
//       .then((data) => {
//         setAllPosts(data);
//         console.log("end");
//       })
//       .catch(console.error);
//   }, []);


//   return (
//     <div className="bg-white-100">
//       <Navbar />
//       <HeaderPage brand={brand_type} />
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pt-24">
        
//           {allPostsData &&
//   allPostsData.map((post, index) => {
// 	  console.log(`/car-color${post.slug.current}`)
//     if (!post.slug || !post.mainImage) return null;
//     return (
//       <Link>
//         <Card post={post} />
//       </Link>
//     );
//   })}

//       </div>
//       <Footer />
//     </div>
//   );
// }
