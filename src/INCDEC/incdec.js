import React, { useState } from 'react';
import './incdec.css'

function FuncLifeCycle() {
    const [text, setText] = useState(1);

    const increment = () => {
        setText(text + 1);
    };

    const decrement = () => {
        setText(text - 1);
    };

    return (
        <div className="container">
            
            <button onClick={increment}>Increment</button>
            
            <h1>{text}</h1>
            
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default FuncLifeCycle;
