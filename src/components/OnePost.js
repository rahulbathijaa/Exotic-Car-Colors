import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    console.log("useEffect");
    sanityClient
      .fetch(
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
           mainImage{
           asset->{
              _id,
              url
            }
          }
       }`
      )
      .then((data) => {
        console.log('ayo', data)
        setPostData(data[0])
      })
      .catch(console.error);
  }, [slug]);



  if (!postData) return <div>Loading...</div>;

  return (

    <div className='text-green'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
        {postData.color_name}
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        {postData.short_description}
        </h1>
        <div className='flex justify-center items-center'> </div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          {postData.hex_text}
          </p>

          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          {postData.rgb_text}

          </p>

          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          {postData.cmyk_text}

          </p>

          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          {postData.ral_text}
          </p>
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
