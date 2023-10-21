import React, { useState } from "react";

const StatesWithObjects = () => {
  const [coions, setCoins] = useState({gold:0,steel:0});
function incGold(){
    setCoins({...coions,gold:coions.gold+1})
}

  return (<div>
    <h1>Coins Gold : {coions.gold}<hr/>Coins Steel :{coions.steel}</h1>
    <button onClick={incGold}>Gold</button>
    <button onClick={() => setCoins({...coions,steel: coions.steel+1})}>Steel</button>
    
  </div>)
}
export default StatesWithObjects;