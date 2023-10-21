import React, { useState } from "react";

const BasicForm = () => {
  const [nam, setNam] = useState("");
  function handleInput(event) {
    setNam(event.target.value);
  }
  const [rendering, setRendering] = useState(false);
  function handleRendering() {
    setRendering(true);
  }
  return (
    <div>
      <h1>Form</h1>
      <input type="text" onChange={handleInput} placeholder="Enter Your Name" value={rendering == false ? nam : ""}/>
      <button type="sumbit" onClick={handleRendering}>
        Sumbit
      </button>
      {rendering == true ? <p>{nam}</p> : ""}
    </div>
  );
};
export default BasicForm;
