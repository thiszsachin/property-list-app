import React, { useState } from "react";
import "./AddProperty.css";

const AddProperty = ({ detail, setDetails }) => {
  const [inputVal, setInputVal] = useState({
    name: "",
    desc: "",
    size: "",
  });

  const handleInput = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const id = Math.random() * 10000;
    const data = {
      name: inputVal.name,
      desc: inputVal.desc,
      size: inputVal.size,
      id: id,
    };
    if (!inputVal.name || !inputVal.desc || !inputVal.size) {
      alert("Name, Description and Property Size is Required");
    } else {
      setDetails([data, ...detail]);
      setInputVal({
        name: "",
        desc: "",
        size: "",
      });
    }
  };

  return (
    <div className="add-container">
      <h1>Add a Property</h1>
      <div className="inputs">
        <label> Name :</label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          value={inputVal.name}
        />
        <label>Description :</label>
        <input
          type="text"
          name="desc"
          onChange={handleInput}
          value={inputVal.desc}
        />
        <label>Property Size :</label>
        <input
          type="number"
          name="size"
          onChange={handleInput}
          value={inputVal.size}
        />
        <button onClick={handleSubmit}>ADD</button>
      </div>
    </div>
  );
};

export default AddProperty;
