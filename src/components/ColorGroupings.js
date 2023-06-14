// import React, { useEffect, useState } from "react";
// import { UNSAFE_enhanceManualRouteObjects, useParams } from "react-router-dom";
// import sanityClient from "../client.js";
// import Card from "./Card.js";
// import Footer from "./Footer.js";
// import Navbar from "./Navbar.js";
// import HeaderPage from "./HeaderPage.js";
// import colorData from "./colorData.js";


// export default function ColorGroupings() {
//   const [colorsData, setColorsData] = useState(null);
//   const { brand_type, color_group, slug } = useParams();
//   var slugName = "/car-color/" + slug + "/";


//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[brand_type == "${brand_type}" && color_group == "${color_group}"  && slug.current == "${slugName}"]{
//           brand_type,
//           slug,
//           color_name,
//           short_description,
//           hex_text,
//           rgb_text,
//           cmyk_text,
//           ral_text,
//           mainImage{
//             asset->{
//               _id,
//               url
//             }
//           }
//         }`
//       )
//       .then((data) => {
//         setColorsData(data);
//       })
//       .catch(console.error);

//   }, [brand_type, color_group, slug]);

//   const colorGroupData = colorData[color_group];
//   const backgroundImageUrl = `url(${colorGroupData.imageSrc})`;

  

//   return (
//     <div className="bg-white-100">
//       <Navbar />
//       <div className={`bg-${colorGroupData.color}-500`}>
//         <div className="flex justify-left items-center h-full">
//           <div className="text-left text-black px-6 md:px-12 pl-7">
//             <h1 className="text-5xl font-bold mt-0 mb-6 lg:pl-16">{colorGroupData.title}</h1>
//             <h3 className="text-3xl font-bold mb-8 lg:pl-16">{colorGroupData.subtitle}</h3>
//             <p className="text-l mb-8 lg:pl-16" style={{ maxWidth: "90%", wordWrap: "break-word" }}>
//               {colorGroupData.paragraphText}</p>
//           </div>
//         </div>
//       </div>
      
//       <div className="container mx-auto pt-12">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      
      
//            {colorGroupData.colors
//   .filter((color) => color.mainImage)
//               .map((color, index) => (
//                     <Card post={color}
//                     key={index}
//                     slug={color.slug}/>
//                   ))}


//         </div>
//       </div>
//       <div className="flex justify-left items-center h-full">
//         <div className="text-left text-black px-6 md:px-12 pl-7">
//           <h2 className="text-5xl font-bold mt-0 mb-6 lg:pl-16">{"Color History"}</h2>
//           <p className="text-l mt-0 mb-6 lg:pl-16" style={{ maxWidth: "60%", wordWrap: "break-word" }}>
//             {colorGroupData.longerDescription}
//           </p>      
//         </div>
//       </div>
//     <Footer />
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../client.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import HeaderPage from "./HeaderPage.js";
import colorData from "./colorData.js";

export default function ColorGroupings() {
  const [colorsData, setColorsData] = useState(null);
  const { brand_type, color_group, slug } = useParams();
  const slugName = slug ? `/car-color/${slug}/` : "";

  useEffect(() => {
    if (slug) {
      sanityClient
        .fetch(
          `*[brand_type == "${brand_type}" && color_group == "${color_group}" && slug.current == "${slugName}"]{
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
          setColorsData(data);
        })
        .catch(console.error);
    }
  }, [brand_type, color_group, slug, slugName]);

  const colorGroupData = colorData[color_group];
  const backgroundImageUrl = `url(${colorGroupData.imageSrc})`;

  return (
    <div className="bg-white-100">
      <Navbar />
      <div className={`bg-${colorGroupData.color}-500`}>
        <div className="flex justify-left items-center h-full">
          <div className="text-left text-black px-6 md:px-12 pl-7">
            <h1 className="text-5xl font-bold mt-0 mb-6 lg:pl-16">{colorGroupData.title}</h1>
            <h3 className="text-3xl font-bold mb-8 lg:pl-16">{colorGroupData.subtitle}</h3>
            <p className="text-l mb-8 lg:pl-16" style={{ maxWidth: "90%", wordWrap: "break-word" }}>
              {colorGroupData.paragraphText}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {colorGroupData.colors
            .filter((color) => color.mainImage)
            .map((color, index) => {
            console.log("bruh", color.slug)
            return (
              // <Link to={`${"post.slug"}`} key={index}>
                <Card post={color} slug={color.slug} />
              // </Link>
            )})}
        </div>
      </div>

      <div className="flex justify-left items-center h-full">
        <div className="text-left text-black px-6 md:px-12 pl-7">
          <h2 className="text-5xl font-bold mt-0 mb-6 lg:pl-16">{"Color History"}</h2>
          <p className="text-l mt-0 mb-6 lg:pl-16" style={{ maxWidth: "60%", wordWrap: "break-word" }}>
            {colorGroupData.longerDescription}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}





// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import sanityClient from "../client.js";
// import Card from "./Card.js";
// import Footer from "./Footer.js";
// import Navbar from "./Navbar.js";
// import HeaderPage from "./HeaderPage.js";
// import colorData from "./colorData.js";

// export default function ColorGroupings() {
//   const [colorsData, setColorsData] = useState(null);
//   const { brand_type, color_group } = useParams();


//   // && slug == "${slug}"
//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[brand_type == "${brand_type}" && color_group == "${color_group}"]{
//           brand_type,
//           slug,
//           color_name,
//           short_description,
//           hex_text,
//           rgb_text,
//           cmyk_text,
//           ral_text,
//           mainImage{
//             asset->{
//               _id,
//               url
//             }
//           }
//         }`
//       )
//       .then((data) => {
//         setColorsData(data);
//       })
//       .catch(console.error);

//   }, [brand_type, color_group]);

//   const colorGroupData = colorData[color_group];
//   const backgroundImageUrl = `url(${colorGroupData.imageSrc})`;

//   console.log(colorGroupData);

 




//   return (
//     <div className="bg-white-100">
  

// <Navbar />
// <div className={`bg-${colorGroupData.color}-300 max-w-[1240px] mx-auto  pt-6`}>
//   <div className="flex justify-left pt-10 pb-16">
//     <div className="text-left text-black px-6 md:px-12 pl-7">
//       <h1 className="text-4xl md:text-5xl font-bold mt-0 mb-6 lg:pl-16">{colorGroupData.title}</h1>
//       <h2 className="text-2xl md:text-3xl font-bold mb-8 lg:pl-16">{colorGroupData.subtitle}</h2>
//       <p className="text-base md:text-lg mb-8 lg:pl-16" style={{ maxWidth: "90%", wordWrap: "break-word" }}>
//         {colorGroupData.paragraphText}
//       </p>
     
//     </div>
//   </div>
// </div>

      
//       <div className="container mx-auto pt-12">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    
//         {/* {colorGroupData.colors
//             .filter((color) => color.mainImage)
//             .map((color, index) => (
//             <Card post={color} key={index} slug={color.slug}/>
//        ))} */}
//    {colorGroupData.colors
//   .filter((color) => color.mainImage)
//   .map((color, index) => (
//     <Card post={color} key={index} slug={color.slug} />
// ))}




    
//       </div>
//       </div>
//       <div className="flex justify-left items-center h-full">
//         <div className="text-left text-black pt-16 px-6 md:px-12 pl-7">
//           <h2 className="text-5xl font-bold mt-0 mb-6 lg:pl-16">{"Color History"}</h2>
//           <p className="text-l mt-0 mb-6 lg:pl-16" style={{ maxWidth: "60%", wordWrap: "break-word" }}>
//             {colorGroupData.longerDescription}
//           </p>      
//         </div>
//       </div>
//     <Footer />
//     </div>
//   );
// }




