import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getByTitle } from "@testing-library/react";
// import Home from "./components/pages/Home";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ImageSlider from "./ImageSlider";
import SliderData from "./SliderData";
import HomepageBrands from "./HomepageBrands";
import HomepageColors from "./HomepageColors";
import Footer from "./Footer";

// name
// description
// etc. ec

export default function Card({ post }) {
  return (
    <div>
        <Navbar />
        <ImageSlider slides={SliderData} />
        <HeroSection />
        <HomepageBrands />
        <HomepageColors />
        <Footer />
    </div>
    );
}