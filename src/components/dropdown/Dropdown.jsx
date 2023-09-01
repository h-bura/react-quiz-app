import React from "react";
import "./Dropdown.css";

function Dropdown({ data, setDifficulty }) {
  return (
    <div className="dropDown">
      <select onChange={(e) => setDifficulty(e.target.value)}>
        {data.map((dt, i) => (
          <option key={i} value={dt}>
            {dt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
