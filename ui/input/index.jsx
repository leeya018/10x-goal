import React from "react";

export default function index({
  onChange = () => {},
  onKeyDown = () => {},
  value = "",
  placeholder = "",
  name = "",
  className = "",
  type = "text",
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={className}
    />
  );
}
