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
  
  console.log(slug);

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
	  console.log("slug param "+ slug)
	  var slugName = "/" + slug + "/";
	  console.log(slugName);

      const data = await sanityClient.fetch(
          `*[slug.current == "${slugName}"]{
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

      console.log("Data:", data);
      setPostData(data[0]);
      // queries B1. b2. b3

      const relatedPosts =
        await sanityClient.fetch(
          `*[color_name == "${data[0].related_color_1}"
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
   
  }, [slug]);

  
  

  if (!postData) return <div>Loading...</div>;
  const textColor = getContrastColor(postData.hex_text);


  

  return (
    <div className="text-green">
      <Navbar hex_text={postData.hex_text} textColor={textColor}/>
      {/* max-w-[1240px] mt-[-2px] w-full mx-auto text-left flex flex-col justify-left py-16 px-4 */}
      <div className="">
      {/* <div class="overflow-hidden pt-16 px-4 mx-auto">
      <div class="flex flex-wrap -m-8">*/}
        <div className="max-w-[1640px] mx-auto "> 
            {/* <div className="p-8 bg-red-400 "> */}
            <div className="p-8 pb-16" style={{ backgroundColor: postData.hex_text }}>

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

            <div className="bg-white p-8 py-16">
  <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
    <div className="flex justify-center md:justify-start">
      <img
        className="flex flex-col object-contain w-49 h-64 content-end justify-self-end pr-5 md:content-start mx-auto"
        src={postData.mainImage.asset.url}
        alt="/"
      />
    </div>
    <div className=" pl-5 pr-4">
    <h4 className="text-3xl font-bold mb-4">{postData.color_name}</h4>
    <p className="max-w-md break-word">{postData.long_description}</p>
    </div>
  </div>
</div>


            <h2 className="text-5xl flex justify-left py-6 pb-10 md:ml-20">Related Colors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center	py-1	">
              
                {related.map((post) => (
                // <Card post={post} />
                <Card post={post} slug={post.slug} key={post.slug} />
                ))}
            </div>
        </div> 
        <HomepageColors />
        <Footer hex_text={postData.hex_text}/>
      </div>
    </div>
  );
}


