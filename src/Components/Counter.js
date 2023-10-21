import React, { useState } from "react";

const Counter = () => {

    const [count , setCount] = useState(0)
    const increaseCount = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h2> count : {count}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={ () => (setCount(count-1))}>Decrease</button>
            <button onClick={ () => (setCount(0))}>Reset</button>
        </div>
    )
}

export default Counter;