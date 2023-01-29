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
    

    <div className="bg-white-100 min-h-screen p-12">
      



      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">Test12</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Test123!
        </h3>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => {
              if (!post.slug || !post.mainImage) return null;
              return (
                <Link to={post.slug.current} key={post.slug.current}>
                  {/* <Link to={"/" + post.slug} key={post.slug}> */}



                  <div className="max-w-sm rounded overflow-hidden shadow-lg"
                    // background-image="../img/card-background.png"
                  
                  >

                  <div className="bg-(../img/card-background.jpg)"></div>



  <img className="w-full" src={post.mainImage.asset.url} alt={post.short_description} />
  <div className="px-6 py-4 bg-[url('../img/card-background.jpg')]"
    
  > 
       
   
   
   <div className="font-bold text-xl mb-2 text-center">{post.color_name}</div>

    <div className="font-bold text-l mb-2 text-center"> {post.short_description} </div>
    
    <p className="text-gray-700 text-base text-center"> {post.hex_text}</p>
    <p className="text-gray-700 text-base text-center">  {post.rgb_text}</p>
    <p className="text-gray-700 text-base text-center"> {post.cmyk_text}</p>
    <p className="text-gray-700 text-base text-center"> {post.ral_text}</p>


      
  </div>
</div>               
          


                  {/* <span
                    className="block h-64 relative rounded shadow leading-snug bg-white
                      border-l-8 border-green-400"
                    key={index}
                  >
                    {post.color_name}
                    {post.short_description}
                    {post.hex_text}
                    {post.rgb_text}
                    {post.cmyk_text}
                    {post.ral_text}
                    
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
                  </span> */}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
