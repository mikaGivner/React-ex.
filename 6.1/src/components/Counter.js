import React, { useState } from "react";
import "./style.css";
export default function Counter() {
  const [value, setValue] = React.useState(3);

  function increment() {
    setValue(value + 1);
  }
  return (
    <div className="wrapper">
      <button onClick={increment}>increment</button>
      <p>{value}</p>
    </div>
  );
}
