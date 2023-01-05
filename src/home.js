import React from "react";
import "./style.css"
import img from './mesImages/img.jpg'
import img1 from './mesImages/img1.jpg'
import img2 from './mesImages/img2.jpg'
import img3 from './mesImages/img3.jpg'
import img4 from './mesImages/img4.jpg'



function Home(){
    return(
        <div className="slider">
            
           <div className="sliders">
            <div className="slide"><img src={img3} alt=""/></div> 
              <div className="slide"><img src={img1} alt=""/></div>  
              <div className="slide"><img src={img2} alt=""/></div>  
              <div className="slide"><img src={img4} alt=""/></div>  
 
              
            
            <div className="present">
            <h1>EventHub</h1>
            <p>une startup innovatrice dans le milieu evenementiel, disponible pour vous permettre de mieux faire la promotion de vos evenements aupres du public </p>
            </div>
          </div>
        </div>
    )
}
export default Home