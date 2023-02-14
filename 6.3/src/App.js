import React, { useState } from "react";

function App() {
  const [value, setValue] = React.useState(5);
  const [isPositive, setPositive] = React.useState("positive");

  function positiveIs(value) {
    if (value >= 0) setPositive("positive");
    else setPositive("negative");
  }

  function increment() {
    if (value < 10) setValue(value + 1);
    positiveIs(value + 1);
  }
  function decrement() {
    if (value > -10) setValue(value - 1);
    positiveIs(value - 1);
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <p className={isPositive}>{value}</p>
    </div>
  );
}

export default App;
