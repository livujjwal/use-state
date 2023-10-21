import React, { useState } from "react";

//Usestates load whole component again if value of count change
const States = () => {

const [count ,setCount] = useState(0)
const increaseCount = () => (
    setCount(count+1)
)
    let a = 10;
    const increaseA = () => {
        a++;
        return console.log(a);
    }
    return (
        <div>
            <h2> a = {a}</h2>
            <button onClick={increaseA}>Increase</button>
            <h2> count = {count}</h2>
            <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default States;