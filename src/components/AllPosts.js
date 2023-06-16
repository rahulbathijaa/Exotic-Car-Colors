// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
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
//              asset->{
//                _id,
//                url
//              }
//            }
//          }`
//       )
//       .then((data) => {
//         setAllPosts(data);
//         console.log("end");
//       })
//       .catch(console.error);
//   }, []);

//   console.log({ allPostsData });

//   const pageTitle = `${brand_type} color list | Exotic Car Colors`;
//   const pageDescription = `Find any color for ${brand_type} in seconds. Get hex codes, rgb, cmyk and RAL for your favorite brands.`;

//   return (
//     <div className="bg-white-100">
//       <Helmet>
//         <title>{pageTitle}</title>
//         <meta name="description" content={pageDescription} />
//       </Helmet>
//       <Navbar />
//       <HeaderPage brand={brand_type} />
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pt-24">
//         {allPostsData &&
//           allPostsData.map((post, index) => {
//             if (!post.slug || !post.mainImage) return null;
//             return <Card post={post} isAllPostsPage={true} />;
//           })}
//       </div>
//       <Footer />
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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
  }, [brand_type]); // Include brand_type as a dependency

  console.log({ allPostsData });

  const pageTitle = `${brand_type} color list | Exotic Car Colors`;
  const pageDescription = `Find any color for ${brand_type} in seconds. Get hex codes, rgb, cmyk and RAL for your favorite brands.`;

  return (
    <div className="bg-white-100">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <Navbar />
      <HeaderPage brand={brand_type} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center pt-24">
        {allPostsData &&
          allPostsData.map((post, index) => {
            if (!post.slug || !post.mainImage) return null;
            return <Card post={post} isAllPostsPage={true} />;
          })}
      </div>
      <Footer />
    </div>
  );
}
