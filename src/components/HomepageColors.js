import React from "react";
import "./HomepageColors.css";

const HomepageColors = () => {
  const colors = [
    {
      link: "/",
      name: "McLaren Orange",
      color: "#FFC43D",
    },
    {
      link: "/",
      name: "Giallo Orion",
      color: "#FED136",
    },
    {
      link: "/",
      name: "Lamborghini Green",
      color: "#AEFF7E",
    },
    {
      link: "/",
      name: "Rosso Corsa",
      color: "#D40000",
    },
    {
      link: "/",
      name: "Rosso Fuoco",
      color: "#D13442",
    },
    {
      link: "/",
      name: "Ferrari Red",
      color: "#7A212A",
    },
    {
      link: "/",
      name: "Pastel Blue",
      color: "#A0D8FB",
    },
    {
      link: "/",
      name: "Blu Abu Dhabi",
      color: "#2885B5",
    },
    {
      link: "/",
      name: "Azure Blue",
      color: "#3C566F",
    },
    {
      link: "/",
      name: "Lamborghini Blue",
      color: "#00024C",
    },
    {
      link: "/",
      name: "Ferrari Blue",
      color: "#163166",
    },
    {
      link: "/",
      name: "Nardo Grey",
      color: "#C0C6C8",
    },
    {
      link: "/",
      name: "Chalk",
      color: "#A5A4AC",
    },
    {
      link: "/",
      name: "Lamborghini Grey",
      color: "#C7D7E7",
    },
    {
      link: "/",
      name: "Grigio Telesto",
      color: "#7692A5",
    },
    {
      link: "/",
      name: "Lamborghini Black",
      color: "#080D10",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        // gridTemplateColumns: "1fr 1fr 1fr 1fr",
        width: "100%",
        height: "auto",
        flexWrap: "wrap",
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "15%",
        paddingRight: "15%",
        paddingBottom: "5%",
      }}
    >
      <div className="container mx-auto pt-10 pb-50">
        <h2 className="text-5xl flex justify-center">Colors</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Search through specific colors
        </h3>
      </div>
      {colors.map((item) => (
        <div
          style={{
            background: item.color,
            height: 200,
            width: 200,
            margin: 2,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            key={item.color}
            style={{
              background: item.color,
              
              height: 150,
              width: 150,
              justifyContent: "center",
              margin: "auto",
            }}
            href={item.link}
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomepageColors;
