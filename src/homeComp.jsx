import React,{ Component } from "react";
import Footer from "./footer";
import HeaderComp from "./header";
import Main from "./mainComp";
class Home extends Component{
    render(){
        return(
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <HeaderComp/>
            <Main/>
            <Footer/>
            </div>
        )
    }
}
export default Home;