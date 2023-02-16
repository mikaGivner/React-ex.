import React, { useState } from "react";

export default function Survey() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [text, setText] = React.useState("nothing to say");
  const [isDisplay, setIsDisplay] = React.useState("noDisplay");
  const [isEmpty, setIsEmpty] = React.useState("noDisplay alert");

  function showDate(event) {
    event.preventDefault();
    if (firstName === "" || lastName === "" || age === "") {
      setIsEmpty("display alert");
    } else {
      if (text === "") setText("nothing to say");
      setIsDisplay("display");
    }
  }
  function changeFirst(event) {
    setFirstName(event.target.value);
  }
  function changeLast(event) {
    setLastName(event.target.value);
  }
  function changeAge(event) {
    setAge(event.target.value);
  }
  function changeText(event) {
    setText(event.target.value);
  }
  function changeDisplay() {
    setIsDisplay("noDisplay");
    setIsEmpty("noDisplay alert");
  }

  return (
    <div>
      <form className="wrapper" onSubmit={showDate}>
        <input
          type="text"
          placeholder="first name"
          onChange={changeFirst}
          onClick={changeDisplay}
        />
        <input
          type="text"
          placeholder="last name"
          onChange={changeLast}
          onClick={changeDisplay}
        />
        <select onChange={changeAge} onClick={changeDisplay}>
          <option>0-18</option>
          <option>18-25</option>
          <option>25-50</option>
          <option>50-100</option>
        </select>
        <textarea
          onChange={changeText}
          onClick={changeDisplay}
          rows="10"
          placeholder="do you wanna say something?"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className={isEmpty}>you have to complete full name</div>
      <div className={isDisplay}>
        your name: {firstName} {lastName} <br></br>
        your age range: {age} <br></br>
        what did you say: {text}
      </div>
    </div>
  );
}
