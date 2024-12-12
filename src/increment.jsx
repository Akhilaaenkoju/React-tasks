import React,{useDtate} from 'react'
export default function  FuncLifeCycle(){
    const [text,setText] useState("hii")
    const handleButton=()=>{
        setText("hello")
    }

    return(
        <div>
            <h1>{text}</h1>
            <button onClick={handleButton}>click me</button>
        </div>
    )
}
export default FuncLifeCycle;