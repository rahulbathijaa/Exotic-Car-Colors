
import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import HeroSection from "./HeroSection";
import image1 from "../img/ferrari-cover-photo-1.webp";

const ImageSlider = () => {
  const currentImage = image1;

  return (
    <section
      className="slider"
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
  );
};

export default ImageSlider;




