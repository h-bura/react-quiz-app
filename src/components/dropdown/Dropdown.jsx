import React from "react";
import "./Dropdown.css";

function Dropdown({ data, setDifficultyChange }) {
  return (
    <div className="dropDown">
      <select onChange={(e) => setDifficultyChange(e.target.value)}>
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
