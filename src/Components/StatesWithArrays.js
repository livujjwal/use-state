import React, { useState } from "react";

const StatesWithArrays = () => {
  const [fruits, setFruits] = useState([]);
  const [fruit, setFruit] = useState("");

  function addFruit() {
    setFruits([...fruits, fruit]);
    setFruit("");
  }
  return (
    <div>
      <h1>Favourite Fruit</h1>
      <input
        onChange={(e) => setFruit(e.target.value)}
        placeholder="Enter Fruit Name"
        value={fruit}
      />
      <button onClick={addFruit}>Sumbit</button>
      <p>{fruits.join(" ")}</p>
    </div>
  );
};
export default StatesWithArrays;
