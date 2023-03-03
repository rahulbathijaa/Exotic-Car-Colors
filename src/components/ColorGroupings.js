import React, { useEffect, useState } from "react";
import { UNSAFE_enhanceManualRouteObjects, useParams } from "react-router-dom";
import sanityClient from "../client.js";
import Card from "./Card.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import HeaderPage from "./HeaderPage.js";
import colorData from "./colorData.js";

export default function ColorGroupings() {
  const [colorsData, setColorsData] = useState(null);
  const { brand_type, color_group } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[brand_type == "${brand_type}" && color_group == "${color_group}"]{
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
  }, []);

  const colorGroupData = colorData[color_group];

  const backgroundImageUrl = `url(${colorGroupData.imageSrc})`;


  console.log(colorGroupData);


  return (
    <div className="bg-white-100">
      <Navbar />
      <div className={`bg-${colorGroupData.color}-500`}>
        <div className="flex justify-left items-center h-full">
          <div className="text-left text-black px-6 md:px-12 pl-7">
            <h1 className="text-5xl font-bold mt-0 mb-6 lg:pl-16">{colorGroupData.title}</h1>
            <h3 className="text-3xl font-bold mb-8 lg:pl-16">{colorGroupData.subtitle}</h3>
            <p className="text-l mb-8 lg:pl-16" style={{ maxWidth: "90%", wordWrap: "break-word" }}>
              {colorGroupData.paragraphText}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {colorGroupData && colorGroupData.colors && colorGroupData.colors.map((color, index) => {
              if (!color.slug || !color.mainImage) return null;
              return <Card post={color} key={index} />;
            })}
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

