import React,{Component} from "react"

import image1 from './assets/images/naruto2.jpeg'
import image2 from './assets/images/sasuke.webp'
import image3 from './assets/images/sakura.jpeg'
import image4 from './assets/images/hinata.jpeg'
import image5 from './assets/images/Jiraiya.jpeg'
import image6 from './assets/images/gara.jpeg'

class GaleryImages extends Component{
    render(){
        return(<div className="images">
            <h1 className="title">NARUTO</h1>
            <img src={image1} alt="g"/>
             <img src={image2} alt="a"/>
             <img src={image3} alt="b"/>
            <img src={image4} alt="c"/>
             <img src={image5} alt="d"/>
             <img src={image6} alt="e"/>
           
        </div>)
    }
}
export default GaleryImages;