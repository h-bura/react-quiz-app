import React from "react";
import "./Categories.css";
function Categories({ data, setCategory }) {
  const selectCategory = (e) => {
    const selectedValue = e.target.value;
    const selectedIndex = data.indexOf(selectedValue);

    if (selectedIndex === 0) {
      setCategory(0);
    } else {
      setCategory(selectedIndex + 8);
    }
  };
  return (
    <div className="categories">
      <select onChange={selectCategory}>
        {data.map((dt, i) => (
          <option key={i} value={dt}>
            {dt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
