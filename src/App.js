import React from "react";
import Navbar from "./components/Navbar";
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost.js";
import Homepage from "./components/Homepage.js";
import ColorGroupings from "./components/ColorGroupings.js";
// import { Helmet } from "react-helmet";


function App() {
  return (
    <BrowserRouter>
    {/* <Helmet> 
      <title> Exotic Car Colors </title>

    </Helmet> */}
      <Routes>
        <Route element={<Homepage />} path="/" exact />
        <Route element={<AllPosts />} path="/car-companies/:brand_type" exact />
        <Route element={<ColorGroupings />} path ="/colour-groups/:color_group" />
        <Route element={<OnePost />} path="car-color/:slug" exact/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
