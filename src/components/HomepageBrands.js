import React from "react";
import "./HomepageBrands.css";
import { Link } from "react-router-dom";


import AllPosts from "./AllPosts";

import Img1 from "../img/ferrari-brands-photo.webp";
import Img2 from "../img/lamborghini-brands-photo.webp";
import Img3 from "../img/porsche-brands-photo.webp";
import Img4 from "../img/mclaren-resized-photo.webp";
import Img5 from "../img/grey-audi-resized.webp";

const HomepageBrands = () => {
  let data = [
    {
      id: 1,
      title: "Ferrari",
      imgSrc: Img1,
      link: "/colors/Ferrari",
    },
    {
      id: 2,
      title: "Lamborghini",
      imgSrc: Img2,
      link: "/colors/Lamborghini",
    },
    {
      id: 3,
      title: "Porsche",
      imgSrc: Img3,
      link: "/colors/Porsche",
    },
    {
      id: 4,
      title: "McLaren",
      imgSrc: Img4,
      link: "/colors/McLaren",
    },
    {
      id: 5,
      title: "Audi",
      imgSrc: Img5,
      link: "/colors/Audi",
    },
  ];

  return (
    // <h1>Brands</h1>


      <div id="brands">
        <div className="container mx-auto pt-10 pb-50">
          <h2 className="text-5xl flex justify-left pl-5">Brands</h2>
          <h3 className="text-lg text-gray-600 flex justify-left mb-12 pl-5">
            Search through specific brands
          </h3>
        </div>
  
        <div className="homepageBrands">
          {data.map((item, index) => {
            return (
              <Link to={item.link}>
                <div className="pics" key={index} data-title={item.title}> 
                  <img
                    src={item.imgSrc}
                    // style={{ width: "100%", borderRadius: "5px" }}
                    // className="gif"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };
    


export default HomepageBrands;




