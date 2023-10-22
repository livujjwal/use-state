import React,{useEffect, useState} from "react";

const UseEffect = () => {
    const [coions, setCoins] = useState({gold:0,steel:0});

    //upadete once at start if array is empty
    //useState variable or props only can be uesd in array
    //for define variable upadete useEffect will run
    useEffect(()=>{
        document.title =`gold :${coions.gold} steel :${coions.steel}`;
    },[coions.gold])
function incGold(){
    setCoins({...coions,gold:coions.gold+1})
}

  return (<div>
    <h1>Coins Gold : {coions.gold}<hr/>Coins Steel :{coions.steel}</h1>
    <button onClick={incGold}>Gold</button>
    <button onClick={() => setCoins({...coions,steel: coions.steel+1})}>Steel</button>
    
  </div>)
}
export default UseEffect;