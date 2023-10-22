import React, { useState } from "react";
function hell(){
    console.log("hello");
    return 0;
}
const LazyInitiator = () => {
    // const [test, setTest] = useState(hell())  // hell() will excuted each time when useState updated
    const [test, setTest] = useState(() => {console.log("yoyo"); return 0}) //with callback fn it will run only one time
    return (<div> 
        <h1>Count {test}</h1>
        <button onClick={() => setTest(test+1)}> Increment </button>
    </div>)
}
export default LazyInitiator;