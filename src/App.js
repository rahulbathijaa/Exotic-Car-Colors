import React from "react";
import Navbar from "./components/Navbar";
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import Home from "./components/pages/Home";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import SliderData from "./components/SliderData";
import HomepageBrands from "./components/HomepageBrands";
import HomepageColors from "./components/HomepageColors";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div>  */}
        {/* <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" /> */}

        <Route element={<AllPosts />} path="/" exact />
        <Route element={<OnePost />} path="/:slug" />
        </Routes>
    </BrowserRouter>
  )
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
