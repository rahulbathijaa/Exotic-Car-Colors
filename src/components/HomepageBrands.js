import React from "react";
import "./HomepageBrands.css";
import { Link } from "react-router-dom";

import AllPosts from "./AllPosts";
// import Img1 from '../img/ferrari-car.gif'
// import Img2 from '../img/lamborghini-car.gif'
// import Img3 from '../img/porsche-car.gif'
// import Img4 from '../img/mclaren-car.gif'
// import Img5 from '../img/audi-car.gif'

import Img1 from "../img/Ferrari-resized.gif";
import Img2 from "../img/Lamborghini-resized.gif";
import Img3 from "../img/porsche-car.gif";
import Img4 from "../img/Mclaren-resized.gif";
import Img5 from "../img/Audi-resized.gif";

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
      title: "Lamborghiniiiiiii",
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
    <div className="homepageBrands">
      {data.map((item, index) => {
        return (
          <Link to={item.link}>
            <div className="pics" key={index}>
              <img src={item.imgSrc} style={{ width: "100%" , borderRadius: "5px"}} className="gif" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomepageBrands;




