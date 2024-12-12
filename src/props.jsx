import React from "react";

function ProfileCard(props){

    return(
        <div>
            <h1>hello {props.name} from {props.city}-{props.role}</h1>
        </div>
    )  
}
export default ProfileCard;



{/* <ProfileCard name="akhila" city="hyd" role="dev"/>
<ProfileCard name="shivani" city="hyd" role="dev"/>
<ProfileCard name="divya" city="hyd" role="dev"/>
<Notifications type="liked" name="swathi"/>
<Notifications type="liked" name="jai"/>
<Notifications type="liked" name="bunny"/> */}