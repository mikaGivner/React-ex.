import React, { useState } from "react";
let isShow = true;
function App() {
  const [display, setCost] = React.useState("show");

  function changeDisplay() {
    if (isShow) {
      setCost("hide");
      isShow = false;
    } else {
      setCost("show");
      isShow = true;
    }
  }

  return (
    <div className="main">
      <button onClick={changeDisplay}>show/hide</button>
      <div className={display}></div>
    </div>
  );
}

export default App;
