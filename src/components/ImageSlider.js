// import React, { useState } from "react";
// import { SliderData } from "./SliderData";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// import HeroSection from "./HeroSection";
// import ferrariCoverPhoto from "../img/ferrari-cover-photo.png";
// import mclarenCoverPhoto from "../img/mclaren-cover-photo.png";

// const ImageSlider = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     // <section className="slider" style={{background: `no-repeat url(${SliderData[current].image})`, backgroundSize: '100%'}}>

//     <section className="slider" style={{background: `{SliderData[current].image}`, backgroundSize: '100%'}}>

//       <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
//       <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
//       {/* {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? "slide active" : "slide"}
//             key={index}
//           >
//             {index === current && (
//               <img
//                 src={slide.image}
//                 alt="ferrari cover photo"
//                 className="image"
//               />
//             )}
//           </div>
//         );
//       })} */}
//     </section>
//   );
// };

// export default ImageSlider;


import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import HeroSection from "./HeroSection";
import image1 from "../img/ferrari-cover-photo.png";
import image2 from '../img/mclaren-cover-photo.png';
import image3 from "../img/porsche-cover-photo.png";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const currentImage = SliderData[current].src;


  return (
    // <section className="slider" style={{backgroundImage: `url(${require(`${SliderData[current].image}`).default})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <section className="slider" style={{backgroundImage: `url(${currentImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;