import React, { useState } from "react";
const InputText = ({ handleAddKeywords }) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="text-ocean-4 flex">
      <input className="grow rounded-l-sm p-1 outline-none" type="text" placeholder="Enter your keywords..." value={inputValue} onChange={handleInputChange} />
      <button className="bg-fuchsia-500 hover:bg-fuchsia-400 text-white rounded-r-sm w-32" type="button" onClick={() => {handleAddKeywords(inputValue); setInputValue("")}}>Add</button>
    </div>
  );
}

export default InputText;