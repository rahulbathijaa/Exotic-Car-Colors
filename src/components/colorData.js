const colorData = {
    "color-group-1": {
      title: "Color Group 1",
      subtitle: "View all Brand Type A colors in the Color Group 1 group",
      paragraphText:
        "Here you can find all of the available colors in the Color Group 1 group. Click on a color to learn more about it.",
      imageSrc: "../img/porsche-header.png",
      color: "red",
      longerDescription:"Red  like Pumas or Jordans.",
      colors: [


        {
          name: "Rosso Scuderia",
          slug: "rosso-scuderia",
          hex: "#c00000",
          rgb: "192,0,0",
          cmyk: "0,100,100,20",
          ral: "3020",
          imageSrc: "/images/rosso-scuderia.jpg",
        },
        {
          name: "Rosso Corsa",
          slug: "rosso-corsa",
          hex: "#d40000",
          rgb: "212,0,0",
          cmyk: "0,100,100,16",
          ral: "3002",
          imageSrc: "/images/rosso-corsa.jpg",
        },
        {
          name: "Rosso Mugello",
          slug: "rosso-mugello",
          hex: "#9e0b0f",
          rgb: "158,11,15",
          cmyk: "0,100,100,38",
          ral: "",
          imageSrc: "/images/rosso-mugello.jpg",
        },
      ],

    },
    "color-group-2": {
      title: "Color Group 2",
      subtitle: "View all Brand Type A colors in the Color Group 2 group",
      paragraphText:
        "Here you can find all of the available colors in the Color Group 2 group. Click on a color to learn more about it.",
      imageSrc: "img/brand_type_a_color_group_2.jpg",
      colors: {
        "red": "Red",
        "orange": "Orange",
        "yellow": "Yellow",
      }
    },
    // ...
  };
  
  export default colorData;
  