import React from 'react';
import './HomepageBrands.css'
import Img1 from '../img/ferrari-car.gif'
import Img2 from '../img/lamborghini-car.gif'
import Img3 from '../img/porsche-car.gif'
import Img4 from '../img/mclaren-car.gif'
import Img5 from '../img/audi-car.gif'


const HomepageBrands = () => {
    let data =[
        {
            id: 1,
            title: "Ferrari",
            imgSrc: Img1,
        },
        {
            id: 2,
            title: "Lamborghiniiiiiii",
            imgSrc: Img2,
        }, 
        {
            id: 3,
            title: "Porsche",
            imgSrc: Img3,
        },
        {
            id: 4,
            title: "McLaren",
            imgSrc: Img4,
        }, 
        {
            id: 5,
            title: "Audi",
            imgSrc: Img5,
        },
    ]
    
    
    return(
        // <h1>Brands</h1>

        <div className="homepageBrands">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index}>
                            <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>
    )

}

export default HomepageBrands;