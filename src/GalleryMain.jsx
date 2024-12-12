import React,{Component} from "react";
import Header from "./Galleryheader";
import GaleryImages from "./Galleryimages";
import Galleryfooter from "./Galleryfooter";
import "./Gallerystyling.css";
class Gallerytask extends Component{
    render(){
        return(
            <div>
                <Header/>
                <GaleryImages/>
                <Galleryfooter/>
                
            </div>
        )
    }
}
export default Gallerytask;










// import GaleryImages from './Galleryimages';
// import Galleryheader from './Galleryheader'
// <GaleryImages/>
// <Galleryheader/>