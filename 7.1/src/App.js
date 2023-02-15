import CustomButton from "./components/CustomButton";
import React, { useState } from "react";

const colors = ["blue", "red", "yellow"];
function App() {
  const [whichColor, setWhichColor] = React.useState("");
  function resetColor(e) {
    if (e.target.innerText === "red") setWhichColor("red");
    else if (e.target.innerText === "blue") setWhichColor("blue");
    else if (e.target.innerText === "yellow") setWhichColor("yellow");
  }
  return (
    <div>
      {colors.map((x) => {
        return (
          <CustomButton
            onClick={resetColor}
            className={x}
            color={x}
          ></CustomButton>
        );
      })}
      <div>The color selected is:{whichColor}</div>
    </div>
  );
}
export default App;
