import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import ImageSlider from './components/ImageSlider';
import SliderData from './components/SliderData'; 

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <ImageSlider slides={SliderData} />
      <HeroSection />
      {/* <Routes>
        <Route path='/' exact component={Home} />
      </Routes> */}
    </Router>
  </>

  );
}

export default App;
