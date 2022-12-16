import React from "react";

export default function Checkbox ({ label, isSelected, onCheckboxChange }) {
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name="status"
        aria-valuemax={x.value}
        onChange={handleChange}
        className="form-check-input"
      />
      {x.label}
    </label>
    <div></div>
  </div>
};

