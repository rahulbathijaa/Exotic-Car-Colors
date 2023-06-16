

import React from "react";
import audiHeader from "../img/audi-header.webp";
import ferrariHeader from "../img/ferrari-header.webp";
import lamborghiniHeader from "../img/lamborghini-header.webp";
import mclarenHeader from "../img/mclaren-header.webp";
import porscheHeader from "../img/porsche-header.webp";

export default function HeaderPage(props) {
  let backgroundImageUrl;
  let headingText;
  let subheadingText;
  let paragraphText;

  switch (props.brand) {
    case "ferrari":
      backgroundImageUrl = `url(${ferrariHeader})`;
      headingText = "Ferrari";
      subheadingText = "Ferrari's color option list";
      paragraphText =
        "Ferrari’s paint colors are synonymous with class. While Ferrari’s are often red paint colors like Rosso Corsa, or Rosso Fuoco, there is a wide array of potential paint colors that Ferrari offers on their current 488, Portofino, Roma, and 812 models. The following color list shows all the current and past colors that Ferrari has offered as options.";
      break;
    case "lamborghini":
      backgroundImageUrl = `url(${lamborghiniHeader})`;
      headingText = "Lamborghini";
      subheadingText = "Lamborghini's color option list";
      paragraphText =
        "Lamborghini paint colors are so important for many car enthusiasts. For Aventador’s, Huracan’s, Urus’, and Sian’s alike, the car's paint color will define the presence on the road. It also matters for classicslike the Countach, Gallardo, and Diablo. These colors define some of the raw emotion that makes Lamborghini special, and the following is a color list of all Lamborghini paint codes.";
      break;
    case "porsche":
      backgroundImageUrl = `url(${porscheHeader})`;
      headingText = "Porsche";
      subheadingText = "Porsche's color option list";
      paragraphText =
        "Paint to Sample is famous because of Porsche. The color chart for Porsche cars is long, with well known paint codes for Chalk, or Royal Blue, and lesser known colors like Lizard Green all creating a unique beauty and road presence for the cars. ";
      break;
    case "mclaren":
      backgroundImageUrl = `url(${mclarenHeader})`;
      headingText = "McLaren";
      subheadingText = "McLaren's color option list";
      paragraphText =
        "While McLaren is still new to the customer car market, their brand colors have been steeped in racing history for decades. From legends like Ayrton Senna who started making Mclaren Orange popular, to cars like the P1 and Senna that brought the colors to the masses, this color list will outline all the options that you can pick as a McLaren customer.";
      break;
    case "audi":
      backgroundImageUrl = `url(${audiHeader})`;
      headingText = "Audi";
      subheadingText = "Audi's color option list.";
      paragraphText =
        "Audi offers a range of exclusive special paint codes, as well as common paints that all offer a unique experience. Nardo Grey defines the brand, but their chart offers different subtle tones like black and grey, as well as loud tones like yellow and red.";
      break;
  }

  return (
    <header>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage: backgroundImageUrl,
          height: 700,
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          // style={{ backgroundCcolor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-left text-black px-6 md:px-12 pl-7">
              <h1 className="text-5xl font-bold mt-0 mb-6 lg:pl-16">{headingText}</h1>
              <h3 className="text-3xl font-bold mb-8 lg:pl-16">{subheadingText}</h3>
              <p className="text-l mb-8 lg:pl-16">{paragraphText}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


