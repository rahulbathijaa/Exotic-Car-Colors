import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import './OnePost.css'
import imageUrlBuilder from "@sanity/image-url";
import HomepageColors from "./HomepageColors.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

function getContrastColor(hexColor) {
  // Convert hex color to RGB
  const red = parseInt(hexColor.substr(1, 2), 16);
  const green = parseInt(hexColor.substr(3, 2), 16);
  const blue = parseInt(hexColor.substr(5, 2), 16);

  // Calculate relative luminance
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  // Return black or white depending on luminance
  return luminance > 0.5 ? '#000' : '#fff';
}

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
      <Navbar hex_text={postData.hex_text}/>
      {/* max-w-[1240px] mt-[-2px] w-full mx-auto text-left flex flex-col justify-left py-16 px-4 */}
      <div className="">
      {/* <div class="overflow-hidden pt-16 px-4 mx-auto">
      <div class="flex flex-wrap -m-8">*/}
        <div className="max-w-[1640px] mx-auto "> 
            {/* <div className="p-8 bg-red-400 "> */}
            <div className="p-8" style={{ backgroundColor: postData.hex_text }}>

                <h1 className="onepost__header-text font-bold font-heading md:ml-20" style={{ color: getContrastColor(postData.hex_text) }}>
                {postData.color_name}
                </h1>
                <h2 className="mb-11 text-2xl text-gray-900 font-medium md:max-w-md md:ml-20" style={{ color: getContrastColor(postData.hex_text) }} >
                {postData.short_description}
                </h2>
                
                <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md md:ml-20" style={{ color: getContrastColor(postData.hex_text) }}>
                {postData.hex_text}
                </p>

                <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md md:ml-20 " style={{ color: getContrastColor(postData.hex_text) }}>
                {postData.rgb_text}
                </p>

                <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md md:ml-20" style={{ color: getContrastColor(postData.hex_text) }}>
                {postData.cmyk_text}
                </p>

                <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md md:ml-20" style={{ color: getContrastColor(postData.hex_text) }}>
                {postData.ral_text}
                </p> 
            </div>




            {/* text-6xl md:text-8xl */}

            <div className="bg-white p-8">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 	">
                    <img
                    className="flex flex-col object-contain w-49 h-64  content-end	justify-self-end pr-5  "
                    src={postData.mainImage.asset.url}
                    alt="/"/>
                    <div className="align-top	pl-5 pr-4 ">
                        <p>{postData.long_description}</p>
                    </div>
                </div>
            </div>








            {/* md:pl-24 */}
            {/* md:pr-28 */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center	py-1	">
                {related.map((post) => (
                <Card post={post} />
                ))}
            </div>
        </div> 
        {/*</div> 
        </div> */}
       
       
        
  
        
        {/* w-[500px] */}
        <HomepageColors />
        <Footer />
      </div>
    </div>

 
  );
}


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