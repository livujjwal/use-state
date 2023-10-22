import React,{useCallback, useState} from "react";

const AsyncUseState = ()=>{

const[count, setCount] = useState(0)
function increase(){
   setCount(count+1)  // it send count =0 at start it will run at last like async fn
   setCount(count+1)  // it also send count =0 at start it will run at last like async fn it will excute after above line (c=0 is already pass to fn)
   //both stored as c=0 at start so both give final c=1
}
function increase1(){
   setCount(count+2)  // it send count =0 at start it will run at last like async fn
   setCount(count+3)  // it also send count =0 at start it will run at last like async fn it will excute after above line (c=0 is already pass to fn)
   //both stored as c=0 at start so  give final c=2 at then c=3 ;
}
function increase2(){
   setCount((count) => count+1) //it sent Callback and for calc send at last c=0
   setCount((count) => count+1) //it sent Callback and for calc send at last c=1 it will excute after above line (c=1 is at time of excutuion pass to fn)
   
}
    return (<div>
      <h1>Count : {count}</h1>
      <button onClick={increase1}>Increase</button>
    </div>)
}

export default AsyncUseState;