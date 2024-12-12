import React from "react";
import './practice1.css';
// import pic1 from '../assets/images/pic1'
import Flower from "./assets/images/pic1.jpg"

function Gallery(){
    return(
        <div className="container">
            <p className="para">hyderabad is a great place </p>
            {/* <img src="https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg" alt="hii"/> */}
            <img src={Flower} alt="hii"/>
        </div>
    )
}
export default Gallery
