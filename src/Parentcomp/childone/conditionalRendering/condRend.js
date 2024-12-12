// import { isValidElement } from "react";

function ConditionRend(props) {

    // const isLoggedin=false;

//   if (isLoggedin) {
//     return(
//         <>
//     <h1>login successfull</h1>;
//     </>
//     );
//   } else {
//     return(
//         <>
//      <h1>login unsuccessfull</h1>;
//      </>
//     );
//   }

return props.isLoggedin?<h1>login successful</h1>:<h1>login unsuccessful</h1>
}


export default ConditionRend;
 