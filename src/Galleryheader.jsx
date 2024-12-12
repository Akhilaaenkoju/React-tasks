import React,{Component} from "react";
class Header extends Component{
    render(){
        return(
            <div>
                <ul className="list">
                    <li>Home</li>
                    <li>ContactUs</li>
                    <li>Prices</li>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>AboutUs</li>
                </ul>
            </div>
        )
    }
}
export default Header;