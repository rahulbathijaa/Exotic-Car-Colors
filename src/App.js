import React from "react";
import Navbar from "./components/Navbar";
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import Homepage from "./components/Homepage";
import Home from "./components/pages/Home";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import SliderData from "./components/SliderData";
import HomepageBrands from "./components/HomepageBrands";
import HomepageColors from "./components/HomepageColors";
import Footer from "./components/Footer";
import { Card } from "./components/Card";
import ColorGroupings from "./components/ColorGroupings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path="/" exact />
        <Route element={<AllPosts />} path="/colors/:brand_type" exact />
        <Route element={<OnePost />} path="/:slug" />
        <Route element={<ColorGroupings />} path ="/color-groups/:color_group" />
      </Routes>
    </BrowserRouter>
  );
}

// {/*
//     // <>
//     //   <Router>
//     //     <Navbar />
//     //     <ImageSlider slides={SliderData} />
//     //     <HeroSection />
//     //     <HomepageBrands />
//     //     <HomepageColors />
//     //     <Footer />
//     //     /* <Routes>
//     //       <Route path='/' exact component={Home} />
//     //     </Routes> */
//     //   </Router>
//     // </>
//   );
// } */}

export default App;
