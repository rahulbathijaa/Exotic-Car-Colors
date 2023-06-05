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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path="/" exact />
        <Route element={<AllPosts />} path="/colors/:brand_type" exact />
        <Route element={<ColorGroupings />} path ="/color-groups/:color_group" />
        <Route element={<OnePost />} path="car-color/:slug" exact/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
