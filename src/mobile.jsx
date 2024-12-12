import React, { Component } from "react";
import "../gallery/funcomp.css";
import mobile from "../photos/moblie.jpg"
import laptop from "../photos/laptop.jpg"
import smartwatch from "../photos/smartwatch.webp"
const products = [
  {
    productName: "mobile",
    productprice: 55000,
    productAvailability: true,

  },
  { productName: "laptop", productprice: 55000, productAvailability: false },
  { productName: "smartwatch", productprice: 55000, productAvailability: true },
];

class Main extends Component {
  render() {
    return (
      <div className="mainbox">
        <div className={products[0].productAvailability?"available":"unavailable"}>
          <h1>{products[0].productName} </h1>
          <img src={mobile} alt="moblie"/>
          <h1>{products[0].productprice}</h1>
        </div>
        <div className={products[1].productAvailability?"available":"unavailable"}>
          <h1>{products[1].productName} </h1>
          <img src={laptop} alt="laptop"/>
          <h1>{products[1].productprice}</h1>
        </div>

        
        <div className={products[2].productAvailability?"available":"unavailable"}>
        <h1>{products[2].productName} </h1>
          <img src={smartwatch} alt="smartwatch" style={{height:"20vh"}}/>
          <h1>{products[2].productprice}</h1>
        </div>
      </div>
    );
  }
}

export default Main;