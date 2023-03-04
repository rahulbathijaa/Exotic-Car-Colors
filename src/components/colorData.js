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
        color_name: "Rosso Scuderia",
        short_description: "short description",
          slug: "/rosso-scuderia/",
          hex_text: "#c00000",
          rgb_text: "192,0,0",
          cmyk_text: "0,100,100,20",
          ral_text: "3020",
          mainImage: {asset: {url:"https://cdn.sanity.io/images/zlmf9sgs/production/6c06d259c57011e03a7497b44f0607d39cd492fa-750x500.png"}},
        },
        {
          name: "Rosso Corsa",
          slug: "rosso-corsa",
          hex: "#d40000",
          rgb: "212,0,0",
          cmyk: "0,100,100,16",
          ral: "3002",
          mainImage: {asset: {url:"https://cdn.sanity.io/images/zlmf9sgs/production/2d97dc42e78699af41ddcecf74369af5d2d38351-750x500.png" }},
        },
        {
          name: "Rosso Mugello",
          slug: "rosso-mugello",
          hex: "#9e0b0f",
          rgb: "158,11,15",
          cmyk: "0,100,100,38",
          ral: "",
          mainImage: {asset: {url:"https://cdn.sanity.io/images/zlmf9sgs/production/912cb7adb4d4afad6d507c6102a71258488659a1-750x500.png"} },
        },
      ],

    },
    // "color-group-2": {
    //   title: "Color Group 2",
    //   subtitle: "View all Brand Type A colors in the Color Group 2 group",
    //   paragraphText:
    //     "Here you can find all of the available colors in the Color Group 2 group. Click on a color to learn more about it.",
    //   imageSrc: "img/brand_type_a_color_group_2.jpg",
    //   colors: {
    //     "Rosso Corsa": "rosso_corsa",
    //     "Rosso ": "Orange",
    //     "yellow": "Yellow",
    //   }
    // },
    // ...
  };
  
  export default colorData;
  