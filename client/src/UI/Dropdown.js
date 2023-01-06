import React from "react";

export const Dropdown = ({ options = [], ...props }) => (
  <select {...props}>
    {options.map((opt,index) => (
      <option key={index} value={opt.value}>
        {opt}
      </option>
    ))}
  </select>
);
