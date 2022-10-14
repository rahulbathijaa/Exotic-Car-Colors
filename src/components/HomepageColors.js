import React from 'react';
import './HomepageColors.css';


const HomepageColors =() => {
    const colors = [
        {
            link: "/", 
            color: "red"
        },
        {
            link: "/", 
            color: "orange"
        }, 
        {
            link: "/",
            color: "#000"
        },
        {
            link: "/", 
            color: "red"
        },
        {
            link: "/", 
            color: "red"
        },
        {
            link: "/", 
            color: "red"
        },
        {
            link: "/", 
            color: "red"
        },
        {
            link: "/", 
            color: "red"
        }
    ]


    return (
        <div
          style={{
            display: "flex",
            // gridTemplateColumns: "1fr 1fr 1fr 1fr",
            width: "100%",
            height: "auto",
            flexWrap: "wrap",
          }}
        >
          {colors.map(item => (
           <div style={{
            background: item.color,
            height: 250,
            width: 250,  
            margin: 5,
          }}>
           <a
              key={item.color}
              style={{
                background: item.color,
                display: "flex",
                alignItems: "center",
                height: 100,
                width: 100,
                justifyContent: "center",
                margin: "auto",
              }}
              href={item.link}
            >
              {item.color}
            </a>
            </div>
          ))}
        </div>
      )
    }

    export default HomepageColors;