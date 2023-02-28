const colorData = {
    "color-group-1": {
      title: "Color Group 1",
      subtitle: "View all Brand Type A colors in the Color Group 1 group",
      paragraphText:
        "Here you can find all of the available colors in the Color Group 1 group. Click on a color to learn more about it.",
      imageSrc: "img/brand_type_a_color_group_1.jpg",
    },
    "color-group-2": {
      title: "Color Group 2",
      subtitle: "View all Brand Type A colors in the Color Group 2 group",
      paragraphText:
        "Here you can find all of the available colors in the Color Group 2 group. Click on a color to learn more about it.",
      imageSrc: "img/brand_type_a_color_group_2.jpg",
    },
    // ...
  };
  
  export default colorData;
  



// path="/color-groups/:color_group"
// exact
// render={(props) => (
//   <ColorGroupings {...props} colorData={colorData} />
// )}