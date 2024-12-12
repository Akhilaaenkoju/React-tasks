import React from 'react'

const Mango=()=>{
    return(
        // <div>mangoes are sweet</div>
        <h2>mangoes are sweet</h2>
    )
}

const Grapes=()=>{
    return(
        <div>grapes are bad</div>
    )
}
function Sample(){
    return(
        <div>sample
            <Mango/> 
            <Grapes/>
        </div>
    )
}
export default Sample