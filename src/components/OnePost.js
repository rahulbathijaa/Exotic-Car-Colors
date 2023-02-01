import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import HomepageColors from "./HomepageColors.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const [related, setRelated] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      console.log("asfdsadf");
      const data = await sanityClient.fetch(
        `*[slug.current == "/${slug}/"]{
           brand_type,
           slug,
           color_name,
           short_description,
           hex_text,
           rgb_text,
           cmyk_text,
           ral_text,
           long_description,
           related_color_1,
           related_color_2,
           related_color_3,
           mainImage{
           asset->{
              _id,
              url
            }
          }
       }`
      );

      console.log("ayo", data[0]);
      setPostData(data[0]);
      // queries B1. b2. b3
      const relatedPosts =
        await sanityClient.fetch(`*[color_name == "${data[0].related_color_1}"
    || color_name == "${data[0].related_color_2}"
           || color_name == "${data[0].related_color_3}"]{
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

      console.log("bruh", relatedPosts);
      setRelated(relatedPosts);

      // For bigbodyrb: 2 and 3
    }

    fetchData();
    // sanityClient
    //   .fetch(
    //     `*[slug.current == "/${slug}/"]{
    //        brand_type,
    //        slug,
    //        color_name,
    //        short_description,
    //        hex_text,
    //        rgb_text,
    //        cmyk_text,
    //        ral_text,
    //        long_description,
    //        related_color_1,
    //        related_color_2,
    //        related_color_3,
    //        mainImage{
    //        asset->{
    //           _id,
    //           url
    //         }
    //       }
    //    }`
    //   )
    //   .then((data) => {
    //     console.log("ayo", data);
    //     setPostData(data[0]);
    //     // queries B1. b2. b3

    //   })
    //   .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="text-green">
      <Navbar />
      <div className=" max-w-[800px] mt-[-2px] w-full mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold p-2">
          {postData.color_name}
        </p>
        <h1 className="md:text-6l sm:text-5l text-3l font-bold md:py-4">
          {postData.short_description}
        </h1>
        <div className="flex justify-center items-center"> </div>
        <p className="md:text-5m sm:text-4m text-m font-bold ">
          {postData.hex_text}
        </p>

        <p className="md:text-5m sm:text-4m text-m font-bold ">
          {postData.rgb_text}
        </p>

        <p className="md:text-5m sm:text-4m text-m font-bold ">
          {postData.cmyk_text}
        </p>

        <p className="md:text-5m sm:text-4m text-m font-bold ">
          {postData.ral_text}
        </p>

        <div className="w-full bg-white py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img
              className=" mx-auto my-4 object-contain w-49 h-64 "
              src={postData.mainImage.asset.url}
              alt="/"
            />
            <div className="flex flex-col justify-center px-2">
              <p>{postData.long_description}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((post) => (
            <Card post={post} />
          ))}
        </div>
        {/* w-[500px] */}
        <HomepageColors />
        <Footer />
      </div>
    </div>

    // <div className="bg-gray-200 min-h-screen p-12">
    //   <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
    //     <div className="relative">
    //       <div className="absolute h-full w-full flex items-center justify-center p-8">
    //         <div className="bg-white bg-opacity-75 rounded p-12">
    //           <h2 className="cursive text-3xl lg:text-6xl mb-4">
    //             {postData.brand_type}
    //           </h2>
    //           <div className="flex justify-center text-gray-800">

    //             <h4 className="cursive flex items-center pl-2 text-2xl">
    //               {postData.short_description}
    //             </h4>
    //           </div>
    //         </div>
    //       </div>
    //       <img
    //         className="w-full object-cover rounded-t"
    //         src={urlFor(postData.mainImage).url()}
    //         alt=""
    //         style={{ height: "400px" }}
    //       />
    //     </div>
    //     <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
    //       <BlockContent
    //         blocks={postData.long_description}
    //         projectId={sanityClient.clientConfig.projectId}
    //         dataset={sanityClient.clientConfig.dataset}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
