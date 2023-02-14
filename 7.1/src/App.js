import CustomButton from "./components/CustomButton";
import React, { useState } from "react";

function App() {
  const colors = ["blue", "red", "yellow"];
  const [whichColor, setWhichColor] = React.useState("");
  function resetColor(e) {
    if (e.target.innerText === "red") setWhichColor("red");
    else if (e.target.innerText === "blue") setWhichColor("blue");
    else if (e.target.innerText === "yellow") setWhichColor("yellow");
  }
  // return (
  //   <div>
  //     {colors.forEach((x) => {
  //       <CustomButton
  //         onClick={resetColor}
  //         className={x}
  //         color={x}
  //       ></CustomButton>;
  //     })}
  //   </div>
  // );
  return (
    <div>
      <CustomButton
        onClick={resetColor}
        className={colors[0]}
        color={colors[0]}
      ></CustomButton>
      <CustomButton
        onClick={resetColor}
        className={colors[1]}
        color={colors[1]}
      ></CustomButton>
      <CustomButton
        onClick={resetColor}
        className={colors[2]}
        color={colors[2]}
      ></CustomButton>
      <div>The color selected is:{whichColor}</div>
    </div>
  );
}

export default App;
