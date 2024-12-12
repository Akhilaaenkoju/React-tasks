import { Component } from "react";
import "./task2.css";
import mobile from './assets/images/Pic2.jpg'
const products = [
  {
    productName: "mobile",
    productPrice: 55000,
    productAvailability: true,
    Image:mobile
  },
  {
    productName: "laptop",
    productPrice: 55000,
    productAvailability: false,
  },
];
class Main extends Component {
  render() {
    return (
      <>
        {/* <div style={obj.productAvailability? styles.greenbox : styles.redbox}>
           <h1 style={obj.productAvailability? styles.available : styles.unavailable}>{obj.productName}{obj.productPrice}</h1>
           </div> */}
        <div className="mainbox">
          <div className={products.productAvailability?"available":"unavailable"}>
            <h1>{products[0].productName}</h1>
            <h1>{products[0].productPrice}</h1>
            <img src={products[0].Image} alt={products[0].productName} className="product-image"/>
          </div>
          <div className={products[1].productAvailability?"available":"unavailable"}>
            <h1>{products[1].productName}</h1>
            <h1>{products[1].productPrice}</h1>
          </div>
        </div>
      </>
    );
  }
}
// const styles = {
//   mainbox: {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "30px",
//     backgroundColor: "yellow",
//     padding: "20px",
//   },
//   available: { color: "black", padding: "25px" },
//   unavailable: { color: "white", padding: "25px" },
//   redbox: { backgroundColor: "red" },
//   greenbox: { backgroundColor: "green" },
// };
export default Main;
