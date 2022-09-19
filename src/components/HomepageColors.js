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
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "4",
            width: 400,
            height: "auto",
          }}
        >
          {colors.map(item => (
            <a
              key={item.color}
              css={{
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
          ))}
        </div>
      )
    }

    export default HomepageColors;