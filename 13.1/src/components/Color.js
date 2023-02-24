import { useState, useEffect } from "react";

export default function Color() {
  const [favoriteColor, setFavoriteColor] = useState("purple");
  //   const [message, setMessage] = useState("click to change color");

  useEffect(() => {
    // const storedColor = localStorage.getItem("favorite");

    // if (storedColor === "clicked") {
    //   setFavoriteColor("red");
    //   //   setMessage("back");
    // }
    setTimeout(() => {
      setFavoriteColor("red");
      //   localStorage.setItem("favorite", "clicked");
    }, "1000");
  }, []);
  //   function changeColor(e) {
  //     if (e.target.innerText === "click to change color") {
  //       setFavoriteColor("red");
  //       setMessage("back");
  //       localStorage.setItem("favorite", "clicked");
  //     } else {
  //       setFavoriteColor("purple");
  //       setMessage("click to change color");
  //       localStorage.setItem("favorite", "");
  //     }
  //   }

  return (
    <div>
      <h1>my favorite color is {favoriteColor}</h1>
      {/* <button onClick={changeColor}>{message}</button> */}
    </div>
  );
}
