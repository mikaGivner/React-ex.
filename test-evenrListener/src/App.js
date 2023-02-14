import React, { useState } from "react";

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App(props) {
  const [cost, setCost] = React.useState("100");

  function sale() {
    setCost("75");
  }
  return (
    <div>
      <p>${cost}</p>
      <button onClick={sale}>Apply Discount</button>
    </div>
  );
}
