import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <div className="bg-white-100">
      <Navbar />
      <HeaderPage
        title={colorGroupData.title}
        subtitle={colorGroupData.subtitle}
        paragraphText={colorGroupData.paragraphText}
        imageSrc={colorGroupData.imageSrc}
      />
      <div className="container mx-auto pt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {colorsData &&
            colorsData.map((color, index) => {
              if (!color.slug || !color.mainImage) return null;
              return <Card post={color} key={index} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

