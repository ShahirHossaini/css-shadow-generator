import React from "react";

const RangeInput = ({ label, name, min, max, value, onChange }) => {
  return (
    <div className="range-input">
      <label className="label">{label}</label>
      <div className="range">
        <input
          type="range"
          name={name}
          id={name}
          min={min}
          max={max}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="value">
        <p>{value[name]}</p>
      </div>
    </div>
  );
};

export default RangeInput;
